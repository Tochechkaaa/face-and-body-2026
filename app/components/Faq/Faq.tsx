"use client";

import { useId, useState } from "react";
import { FAQ } from "./data";
import styles from "./Faq.module.scss";

export function Faq() {
  // Одночасно відкрите лише одне питання (як у макеті).
  const [open, setOpen] = useState<number | null>(null);
  const baseId = useId();

  return (
    <section className={styles.faq} id="faq">
      <div className={styles.inner}>
        <h2 className={styles.title}>FAQ</h2>

        <ul className={styles.list}>
          {FAQ.map((item, i) => {
            const isOpen = open === i;
            const panelId = `${baseId}-panel-${i}`;
            return (
              <li key={item.q} className={`${styles.item} ${isOpen ? styles.itemOpen : ""}`}>
                <button
                  type="button"
                  className={styles.question}
                  aria-expanded={isOpen}
                  aria-controls={panelId}
                  onClick={() => setOpen(isOpen ? null : i)}
                >
                  <span className={styles.num}>{String(i + 1).padStart(2, "0")}</span>
                  <span className={styles.qText}>{item.q}</span>
                  <span className={styles.icon} aria-hidden="true" />
                </button>
                <div className={styles.answer} id={panelId} role="region" aria-hidden={!isOpen}>
                  <div className={styles.answerInner}>
                    <p>{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
