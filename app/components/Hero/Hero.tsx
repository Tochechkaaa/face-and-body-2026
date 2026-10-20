"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { prefersReducedMotion } from "../../lib/useInView";
import { TICKETS_HREF } from "../../lib/nav";
import { Button } from "../Button/Button";
import { EventMeta } from "../EventMeta/EventMeta";
import styles from "./Hero.module.scss";

// Максимальний зсув фону за курсором, px.
const PARALLAX = 14;

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  // Фон ледь рухається за курсором (тільки пристрої з мишею).
  useEffect(() => {
    const section = sectionRef.current;
    if (!section || prefersReducedMotion() || !window.matchMedia("(hover: hover) and (pointer: fine)").matches) return;

    let frame = 0;
    const onMove = (e: MouseEvent) => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const x = (e.clientX / window.innerWidth - 0.5) * -2 * PARALLAX;
        const y = (e.clientY / window.innerHeight - 0.5) * -2 * PARALLAX;
        section.style.setProperty("--px", `${x.toFixed(1)}px`);
        section.style.setProperty("--py", `${y.toFixed(1)}px`);
      });
    };
    section.addEventListener("mousemove", onMove);
    return () => {
      cancelAnimationFrame(frame);
      section.removeEventListener("mousemove", onMove);
    };
  }, []);

  return (
    <section className={styles.hero} id="top" ref={sectionRef}>
      <picture className={styles.bg}>
        <source media="(max-width: 767px)" srcSet="/images/mobile/hero-bg.webp" />
        <img src="/images/hero/bg.webp" alt="" fetchPriority="high" />
      </picture>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.glow} src="/images/hero/glow.svg" alt="" width={1683} height={1683} />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`${styles.glowMobile} ${styles.glowMobile1}`} src="/images/mobile/glow.svg" alt="" />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={`${styles.glowMobile} ${styles.glowMobile2}`} src="/images/mobile/glow.svg" alt="" />

      <div className={styles.inner}>
        <EventMeta className={styles.meta} />

        {/* Рядки заголовка відкриваються через маску */}
        <h1 className={styles.title}>
          <span className={`${styles.titleMain} ${styles.mask}`}>
            <span>FACE&amp;BODY</span>
          </span>
          <span className={`${styles.titleYear} ${styles.mask} ${styles.mask2}`}>
            <span>2026</span>
          </span>
        </h1>

        <div className={styles.text}>
          <p className={styles.lead}>
            Найочікуваніший конгрес року <br className={styles.brDesktop} />в естетичній медицині
          </p>
          <p className={styles.desc}>
            Два дні наукової програми, сучасних технологій, практичних кейсів та зустрічей із провідними експертами
            галузі.
          </p>
        </div>

        <div className={styles.actions}>
          <Button href={TICKETS_HREF} variant="light" className={styles.cta}>
            Придбати квиток
          </Button>
          <Image className={styles.badge} src="/images/hero/bpr.png" alt="8 балів БПР" width={162} height={100} />
        </div>
      </div>
    </section>
  );
}
