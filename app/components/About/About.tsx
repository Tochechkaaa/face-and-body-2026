"use client";

import { useInView } from "../../lib/useInView";
import { Counter } from "./Counter";
import styles from "./About.module.scss";

const STATS = [
  { value: "2 дні", label: "наукової програми" },
  { value: "[30]+", label: "спікерів" },
  { value: "[60]+", label: "професійних брендів" },
  { value: "1000+", label: "учасників" },
];

const delay = (s: number) => ({ "--reveal-delay": `${s}s` }) as React.CSSProperties;

export function About() {
  const [ref, inView] = useInView<HTMLElement>({ threshold: 0.3 });

  return (
    <section className={`${styles.about} ${inView ? "is-revealed" : ""}`} id="about" ref={ref}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <h2 className={styles.title} data-reveal="">
            FACE&amp;BODY — це більше, ніж конгрес
          </h2>
          <div className={styles.text} data-reveal="" style={delay(0.15)}>
            <p>Щороку ми збираємо професійну спільноту, щоб говорити про головне в сучасній естетичній медицині.</p>
            <p>
              Естетична медицина, апаратні технології, ін’єкційні методики, практичні кейси та нові підходи — в одному
              просторі.
            </p>
          </div>
        </div>

        <ul className={styles.stats}>
          {STATS.map((s, i) => (
            <li key={s.label} className={styles.stat} data-reveal="" style={delay(0.3 + i * 0.1)}>
              <span className={styles.value}>
                <Counter value={s.value} start={inView} />
              </span>
              <span className={styles.label}>{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
