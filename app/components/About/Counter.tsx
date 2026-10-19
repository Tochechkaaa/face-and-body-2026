"use client";

import { useEffect, useState } from "react";
import { prefersReducedMotion } from "../../lib/useInView";

// Рахує число у рядку («[30]+», «1000+», «2 дні») від нуля, коли start = true.
export function Counter({ value, start, duration = 1600 }: { value: string; start: boolean; duration?: number }) {
  const match = value.match(/^(\D*)(\d+)(.*)$/);
  const target = match ? Number(match[2]) : 0;
  const [current, setCurrent] = useState(target);

  useEffect(() => {
    if (!start || !match || prefersReducedMotion()) return;
    let raf = 0;
    const t0 = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - t0) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3); // easeOutCubic
      setCurrent(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [start]);

  if (!match) return <>{value}</>;
  return (
    <>
      {match[1]}
      {current}
      {match[3]}
    </>
  );
}
