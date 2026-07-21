"use client";

import { useState, useEffect, useRef } from "react";
import { trackEvent, elementLocation } from "./Analytics";

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
  const [isDesktop, setIsDesktop] = useState(
    () => typeof window !== "undefined" && window.matchMedia("(hover: hover) and (pointer: fine)").matches
  );
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // hover: hover + pointer: fine = mouse device; touch devices get the tel: link
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const onChange = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

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
