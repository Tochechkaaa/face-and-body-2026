"use client";

import Image from "next/image";
import { useInView } from "../../lib/useInView";
import styles from "./Audience.module.scss";

const AUDIENCE = [
  "Дерматологи",
  "Лікарі-косметологи",
  "Пластичні хірурги",
  "Спеціалісти естетичної медицини",
  "Власники та керівники клінік",
  "Представники професійних брендів",
];

export function Audience() {
  const [ref, inView] = useInView<HTMLOListElement>({ threshold: 0.3 });

  return (
    <section className={styles.audience} id="audience">
      <div className={styles.inner}>
        <div className={styles.intro}>
          <h2 className={styles.title}>Для кого FACE&amp;BODY?</h2>
          <p className={styles.text}>Для тих, хто щодня працює з естетикою, технологіями та пацієнтами.</p>
        </div>

        <div className={styles.card}>
          <Image
            src="/images/audience/heart-card.png"
            alt="Туз чирва з портретом"
            width={280}
            height={420}
            sizes="(max-width: 767px) 192px, 280px"
          />
        </div>

        <ol className={`${styles.list} ${inView ? "is-revealed" : ""}`} ref={ref}>
          {AUDIENCE.map((item, i) => (
            // рядки з'являються послідовно
            <li
              key={item}
              className={styles.item}
              data-reveal=""
              style={{ "--reveal-delay": `${i * 0.12}s` } as React.CSSProperties}
            >
              <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
              <span className={styles.label}>{item}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
