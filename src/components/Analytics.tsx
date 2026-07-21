"use client";

import Script from "next/script";
import { useEffect } from "react";

// Set NEXT_PUBLIC_GA_ID in Vercel to switch analytics on. Unset = no script,
// no listener, no cookies — the site behaves exactly as it did before.
const GA_ID = process.env.NEXT_PUBLIC_GA_ID;

type GtagFn = (
  command: string,
  eventName: string,
  params?: Record<string, string>
) => void;

/** Fire a GA4 event. No-ops silently if gtag hasn't loaded or GA is off. */
export function trackEvent(name: string, params: Record<string, string> = {}) {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
}

/**
 * Where on the page an element sits. Falls back through increasingly generic
 * signals so nothing is ever unlabelled.
 */
export function elementLocation(el: Element | null): string {
  if (!el) return "unknown";
  const explicit = el.closest("[data-track-location]");
  if (explicit) return explicit.getAttribute("data-track-location") || "unknown";
  if (el.closest("nav")) return "nav";
  if (el.closest("footer")) return "footer";
  if (el.closest("header")) return "header";
  const section = el.closest("section[id]");
  if (section?.id) return section.id;
  return "body";
}

/** "River Oaks estate inquiry" out of ?subject=River%20Oaks%20estate%20inquiry */
function mailtoSubject(href: string): string {
  const q = href.indexOf("?");
  if (q === -1) return "none";
  try {
    return new URLSearchParams(href.slice(q + 1)).get("subject") || "none";
  } catch {
    return "none";
  }
}

export default function Analytics() {
  useEffect(() => {
    if (!GA_ID) return;

    // Capture phase, and we never call preventDefault — this listener observes
    // clicks, it can never intercept navigation. tel:/mailto: still hand off
    // to the dialer/mail client exactly as before.
    const onClick = (event: MouseEvent) => {
      const target = event.target;
      if (!(target instanceof Element)) return;

      const link = target.closest("a");
      if (!link) return;

      const href = link.getAttribute("href") || "";

      if (href.startsWith("tel:")) {
        trackEvent("phone_click", {
          method: "tel",
          link_location: elementLocation(link),
          page_path: window.location.pathname,
        });
      } else if (href.startsWith("mailto:")) {
        trackEvent("email_click", {
          method: "mailto",
          link_location: elementLocation(link),
          inquiry_subject: mailtoSubject(href),
          page_path: window.location.pathname,
        });
      }
    };

    document.addEventListener("click", onClick, true);
    return () => document.removeEventListener("click", onClick, true);
  }, []);

  if (!GA_ID) return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${GA_ID}');`}
      </Script>
    </>
  );
}
