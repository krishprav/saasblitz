"use client";

import { useEffect, useRef } from "react";

/**
 * A lightweight, pointer-following ambient spotlight layer.
 * - Non-interactive and sits behind content
 * - Uses CSS variables to position a radial gradient smoothly
 */
export function AmbientSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;

    const setVars = (x: number, y: number) => {
      el.style.setProperty("--spotlight-x", `${x}px`);
      el.style.setProperty("--spotlight-y", `${y}px`);
    };

    setVars(targetX, targetY);

    const onMove = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
      if (!raf) {
        raf = requestAnimationFrame(() => {
          setVars(targetX, targetY);
          raf = 0;
        });
      }
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    return () => {
      window.removeEventListener("pointermove", onMove);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        // Soft navy spotlight with subtle halo
        background:
          "radial-gradient(480px circle at var(--spotlight-x) var(--spotlight-y), color-mix(in oklab, var(--primary), transparent 78%) 0%, transparent 60%)",
        mixBlendMode: "screen",
        opacity: 0.55,
        transition: "background-position 120ms ease",
      }}
    />
  );
}


