"use client";

import { useState, useEffect } from "react";

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
  const [isDesktop, setIsDesktop] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    // hover: hover + pointer: fine = mouse device; touch devices get the tel: link
    const mq = window.matchMedia("(hover: hover) and (pointer: fine)");
    setIsDesktop(mq.matches);
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
    await navigator.clipboard.writeText(phone);
    setCopied(true);
    onClick?.();
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <span className="relative group inline-block">
      <button onClick={handleClick} className={className} style={style}>
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
