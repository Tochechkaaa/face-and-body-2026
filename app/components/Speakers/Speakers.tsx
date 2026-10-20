"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Speakers.module.scss";

// Плейсхолдери з макета — замінити реальними спікерами.
const SPEAKERS = Array.from({ length: 8 }, (_, i) => ({
  id: i,
  name: "Даша Квіткова",
  role: "Спікер",
  topic: "Тема",
  photo: "/images/speakers/speaker.webp",
}));

// На мобілці спочатку видно 4 картки, решта — по кнопці «Більше спікерів».
const MOBILE_VISIBLE = 4;

export function Speakers() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className={styles.speakers} id="speakers">
      <div className={styles.inner}>
        <h2 className={styles.title}>Спікери</h2>

        <ul className={`${styles.grid} ${showAll ? styles.gridAll : ""}`}>
          {SPEAKERS.map((s, i) => (
            <li key={s.id} className={`${styles.card} ${i >= MOBILE_VISIBLE ? styles.extra : ""}`}>
              <div className={styles.photo}>
                <Image src={s.photo} alt={s.name} fill sizes="(max-width: 767px) 295px, 295px" />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{s.name}</p>
                <p className={styles.role}>{s.role}</p>
                <p className={styles.topic}>{s.topic}</p>
              </div>
            </li>
          ))}
        </ul>

        {!showAll && (
          <div className={styles.more}>
            <Button variant="dark" block onClick={() => setShowAll(true)}>
              Більше спікерів
            </Button>
          </div>
        )}
      </div>
    </section>
  );
}
