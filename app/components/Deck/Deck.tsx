"use client";

import Image from "next/image";
import { useEffect, useLayoutEffect, useState } from "react";
import { prefersReducedMotion, useInView } from "../../lib/useInView";
import styles from "./Deck.module.scss";

// «Ми готові розкрити карти» — колода з 5 карт.
// rot / rotM — нахил на десктопі / мобілці (у макетах різні).
// stack / stackM — зсув карти в колоді відносно центральної (Figma: 5166:585 / 5135:2021), px.
// order — черга роздачі: спершу крайні карти, потім ближчі до центру (Technology не рухається).
const CARDS = [
  { src: "/images/cards/face.webp", alt: "Face", rot: 8, rotM: 8, stack: [-25, 12], stackM: [9, -6], order: 0 },
  { src: "/images/cards/body.png", alt: "Body", rot: 4, rotM: -8, stack: [-22, 13], stackM: [11, 8], order: 2 },
  { src: "/images/cards/technology.png", alt: "Technology", rot: 0, rotM: 0, stack: [0, 0], stackM: [0, 0], order: -1 },
  { src: "/images/cards/science.png", alt: "Science", rot: -4, rotM: 8, stack: [49, 27], stackM: [13, 31], order: 3 },
  { src: "/images/cards/practice.png", alt: "Practice", rot: -8, rotM: -8, stack: [56, 40], stackM: [5, 46], order: 1 },
];

const CENTER = 2; // індекс Technology
const DEAL_STEP = 280; // мс між картами
const DEAL_DURATION = 1500; // тривалість польоту однієї карти, мс

type Phase = "init" | "stack" | "dealt" | "idle";

// useLayoutEffect на клієнті, без попереджень на сервері
const useIsoLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;

export function Deck() {
  // Тригер — самі карти: роздача стартує, коли колода піднялась на ~третину екрана від низу
  const [listRef, inView] = useInView<HTMLUListElement>({ threshold: 0, rootMargin: "0px 0px -35% 0px" });
  const [phase, setPhase] = useState<Phase>("init");

  // Міряємо фінальні позиції карт і задаємо кожній зсув до центру колоди.
  useIsoLayoutEffect(() => {
    const list = listRef.current;
    if (!list) return;

    const measure = () => {
      const items = [...list.children] as HTMLElement[];
      const mobile = window.matchMedia("(max-width: 767px)").matches;
      const center = items[CENTER];
      const cx = center.offsetLeft + center.offsetWidth / 2;
      const cy = center.offsetTop + center.offsetHeight / 2;
      items.forEach((el, i) => {
        const [ox, oy] = mobile ? CARDS[i].stackM : CARDS[i].stack;
        // на планшеті карти вужчі за макетні 196px — зсуви масштабуємо пропорційно
        // (мобільні значення вже взяті з мобільного макета)
        const k = mobile ? 1 : el.offsetWidth / 196;
        const dx = cx - (el.offsetLeft + el.offsetWidth / 2) + ox * k;
        const dy = cy - (el.offsetTop + el.offsetHeight / 2) + oy * k;
        el.style.setProperty("--dx", `${dx}px`);
        el.style.setProperty("--dy", `${dy}px`);
      });
    };

    measure();
    setPhase((p) => (p === "init" ? (prefersReducedMotion() ? "idle" : "stack") : p));
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  // Роздача, коли блок з'явився на екрані; потім карти «дихають» кожна у своєму ритмі.
  useEffect(() => {
    if (!inView || phase !== "stack") return;
    const raf = requestAnimationFrame(() => setPhase("dealt"));
    return () => cancelAnimationFrame(raf);
  }, [inView, phase]);

  useEffect(() => {
    if (phase !== "dealt") return;
    const t = window.setTimeout(() => setPhase("idle"), DEAL_DURATION + DEAL_STEP * 3);
    return () => window.clearTimeout(t);
  }, [phase]);

  return (
    <section className={styles.deck}>
      <div className={styles.inner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.ornament} src="/images/cards/ornament.svg" alt="" width={141} height={24} />
        <h2 className={styles.title}>Ми готові розкрити карти</h2>
        <p className={styles.subtitle}>FACE&amp;BODY 2026</p>
        <div className={styles.text}>
          <p>Все, що формує сучасну естетичну медицину, — на одній сцені.</p>
          <p>Цього року ми знову збираємо повну колоду - колоду FACE&amp;BODY.</p>
        </div>

        <ul className={styles.cards} ref={listRef} data-phase={phase}>
          {CARDS.map((c, i) => (
            <li
              key={c.alt}
              className={`${styles.card} ${i === CENTER ? styles.cardTop : ""}`}
              style={
                {
                  "--rot": `${c.rot}deg`,
                  "--rot-m": `${c.rotM}deg`,
                  "--deal-delay": `${Math.max(c.order, 0) * DEAL_STEP}ms`,
                  "--deal-dur": `${DEAL_DURATION}ms`,
                  "--float-dur": `${5.2 + i * 0.7}s`,
                  "--float-delay": `${-i * 1.3}s`,
                } as React.CSSProperties
              }
            >
              <div className={styles.float}>
                <div className={styles.lift}>
                  <Image src={c.src} alt={c.alt} width={196} height={232} sizes="(max-width: 767px) 104px, 196px" />
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
