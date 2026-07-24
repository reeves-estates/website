"use client";

import { useState } from "react";
import { trackEvent } from "./Analytics";

// Google Form backend. Responses land in a Sheet owned by the Reeves account —
// no API keys, no server code, and the Sheet is something you can actually mail
// from later. These IDs are public by design (anyone opening the form sees
// them), so they live in source rather than env vars: fewer moving parts, and
// no way for the form to silently break because a variable went missing.
// To fill them in, see docs/sale-signup-setup.md.
const GOOGLE_FORM_ID = "1FAIpQLSdFT8BsbUrfYpcUj3lZG9aLu9NUhrGsPDQR6dfLMjNmgCSi9g";
const EMAIL_FIELD = "entry.1517748847";
const NAME_FIELD = "entry.1841896937";

type Status = "idle" | "sending" | "done" | "error";

export default function SaleSignupForm() {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  const configured = Boolean(GOOGLE_FORM_ID && EMAIL_FIELD);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || status === "sending") return;

    setStatus("sending");

    const body = new FormData();
    body.append(EMAIL_FIELD, email);
    if (NAME_FIELD && name) body.append(NAME_FIELD, name);

    try {
      // Google Forms does not send CORS headers, so the response is opaque and
      // cannot be read. The POST still lands. Treat a completed request as
      // success and give people the email address as a fallback either way.
      await fetch(
        `https://docs.google.com/forms/d/e/${GOOGLE_FORM_ID}/formResponse`,
        { method: "POST", mode: "no-cors", body }
      );
      trackEvent("sale_signup", { method: "google_form", page_path: "/signup" });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  };

  if (status === "done") {
    return (
      <div className="border border-bronze/25 bg-cream p-6 text-center">
        <p
          className="text-2xl text-charcoal mb-4"
          style={{ fontFamily: "var(--font-hatton)", fontWeight: 500 }}
        >
          You&rsquo;re on the list.
        </p>
        <p className="font-body text-base text-charcoal/70 leading-relaxed">
          We&rsquo;ll write when the next sale is set — with the address and the
          opening time, a few days ahead. Nothing else.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-2 text-left">
        <label
          htmlFor="signup-email"
          className="font-compact text-xs tracking-widest uppercase text-bronze/70"
        >
          Email
        </label>
        <input
          id="signup-email"
          type="email"
          required
          inputMode="email"
          autoComplete="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@example.com"
          className="font-body text-base text-charcoal bg-cream border border-bronze/30 px-4 py-3 focus:outline-none focus:border-bronze"
        />
      </div>

      {NAME_FIELD ? (
        <div className="flex flex-col gap-2 text-left">
          <label
            htmlFor="signup-name"
            className="font-compact text-xs tracking-widest uppercase text-bronze/70"
          >
            Name <span className="normal-case tracking-normal opacity-60">(optional)</span>
          </label>
          <input
            id="signup-name"
            type="text"
            autoComplete="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="font-body text-base text-charcoal bg-cream border border-bronze/30 px-4 py-3 focus:outline-none focus:border-bronze"
          />
        </div>
      ) : null}

      <button
        type="submit"
        disabled={status === "sending" || !configured}
        className="font-compact text-sm tracking-widest uppercase bg-charcoal text-cream px-6 py-4 hover:bg-bronze transition-colors disabled:opacity-50"
      >
        {status === "sending" ? "Sending" : "Tell me about the next sale"}
      </button>

      {!configured && (
        <p className="font-body text-sm text-charcoal/60 text-left">
          Sign-up is not connected yet. Please email{" "}
          <a
            href="mailto:midtownmodern@gmail.com?subject=Upcoming%20sale%20notifications"
            className="text-bronze underline"
          >
            midtownmodern@gmail.com
          </a>{" "}
          and we&rsquo;ll add you to the list.
        </p>
      )}

      {status === "error" && (
        <p className="font-body text-sm text-charcoal/70 text-left">
          That didn&rsquo;t go through. Please email{" "}
          <a
            href="mailto:midtownmodern@gmail.com?subject=Upcoming%20sale%20notifications"
            className="text-bronze underline"
          >
            midtownmodern@gmail.com
          </a>{" "}
          and we&rsquo;ll add you by hand.
        </p>
      )}

      <p className="font-body text-sm text-charcoal/50 leading-relaxed text-left">
        We&rsquo;ll only write about upcoming sales — a few times a month at most.
        Your address stays with us, and you can ask us to remove it at any time.
      </p>
    </form>
  );
}
