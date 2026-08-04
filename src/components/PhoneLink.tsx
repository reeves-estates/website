"use client";

import { useState, useRef, useSyncExternalStore } from "react";
import { trackEvent, elementLocation } from "./Analytics";

// hover: hover + pointer: fine = a mouse device. Touch devices get the tel: link;
// mouse devices get click-to-copy (dialing a number on a laptop is pointless).
const DESKTOP_QUERY = "(hover: hover) and (pointer: fine)";

function subscribe(callback: () => void) {
  const mq = window.matchMedia(DESKTOP_QUERY);
  mq.addEventListener("change", callback);
  return () => mq.removeEventListener("change", callback);
}
// Client value once running in the browser.
const getSnapshot = () => window.matchMedia(DESKTOP_QUERY).matches;
// Value used during SSR and the first hydration render. Returning false here means
// the server and the first client render agree (both emit the tel: link), so there
// is no hydration mismatch; React then updates to the real value after mount.
const getServerSnapshot = () => false;

export default function PhoneLink({
  className,
  style,
  onClick,
  children,
}: {
  className?: string;
  style?: React.CSSProperties;
  onClick?: () => void;
  children?: React.ReactNode;
}) {
  const isDesktop = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const phone = "832-474-9547";

  if (!isDesktop) {
    return (
      <a href="tel:8324749547" className={className} style={style} onClick={onClick}>
        {children ?? phone}
      </a>
    );
  }

  const handleClick = async () => {
    try {
      await navigator.clipboard.writeText(phone);
    } catch {
      // Clipboard can reject (insecure context, denied permission). The number
      // is on screen regardless, so confirm and record intent either way rather
      // than leaving the button looking dead.
    }
    trackEvent("phone_click", {
      method: "copy",
      link_location: elementLocation(buttonRef.current),
      page_path: window.location.pathname,
    });
    setCopied(true);
    onClick?.();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="relative group inline-block">
      <button ref={buttonRef} onClick={handleClick} className={className} style={style}>
        {copied ? "Copied" : (children ?? phone)}
      </button>
      {!copied && (
        <span
          aria-hidden
          className="pointer-events-none absolute top-full mt-1 left-1/2 -translate-x-1/2 whitespace-nowrap rounded bg-charcoal px-2 py-1 text-xs text-cream opacity-0 group-hover:opacity-100 transition-opacity duration-150 z-50"
        >
          Click to copy
        </span>
      )}
    </span>
  );
}
