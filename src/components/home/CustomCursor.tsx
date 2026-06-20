import { useEffect, useRef, useState } from "react";

function isTouchDevice() {
  if (typeof window === "undefined") return true;
  if (window.matchMedia("(pointer: coarse)").matches) return true;
  if (window.matchMedia("(hover: none)").matches) return true;
  if (window.innerWidth <= 768) return true;
  return false;
}

export function CustomCursor() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [mount, setMount] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (isTouchDevice()) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setMount(true);
  }, []);

  useEffect(() => {
    if (!mount) return;
    const el = ref.current;
    if (!el) return;

    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let cx = mx;
    let cy = my;
    const LERP = 0.18;
    let raf = 0;
    let running = true;

    const onMove = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
    };

    function loop() {
      if (!running) return;
      cx += (mx - cx) * LERP;
      cy += (my - cy) * LERP;
      el!.style.transform = `translate3d(${cx - 3.5}px, ${cy - 3.5}px, 0)`;
      raf = requestAnimationFrame(loop);
    }

    const onVis = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(loop);
      }
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("visibilitychange", onVis);
    raf = requestAnimationFrame(loop);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("visibilitychange", onVis);
    };
  }, [mount]);

  if (!mount) return null;
  return <div ref={ref} className="idl-cursor" aria-hidden />;
}
