"use client";

import { useEffect } from "react";

/**
 * CalEmbed — Loads the Cal.com embed script once and initialises the
 * "estate-consultation" namespace.  Any element on the page with the
 * data-attributes below will open the booking modal on click:
 *
 *   data-cal-link="reevesestates-biwok7/secret"
 *   data-cal-namespace="estate-consultation"
 *   data-cal-config='{"layout":"month_view"}'
 */
export default function CalEmbed() {
  useEffect(() => {
    // Avoid loading the script twice
    if (typeof window !== "undefined" && (window as any).Cal) return;

    // Cal.com embed bootstrap (from their official snippet)
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) {
        a.q.push(ar);
      };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            const s = d.head.appendChild(d.createElement("script"));
            s.src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () {
              p(api, arguments);
            };
            const namespace = ar[1];
            (api as any).q = (api as any).q || [];
            if (typeof namespace === "string") {
              cal.ns[namespace] = cal.ns[namespace] || api;
              p(cal.ns[namespace], ar);
              p(cal, ["initNamespace", namespace]);
            } else p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "estate-consultation", { origin: "https://app.cal.com" });

    Cal.ns["estate-consultation"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return null; // This component only loads the script, no visible UI
}
