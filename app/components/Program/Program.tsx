"use client";

import { useRef, useState } from "react";
import { Button } from "../Button/Button";
import { PREVIEW_COUNT, PROGRAM, type Talk } from "./data";
import styles from "./Program.module.scss";

function TalkRow({ talk }: { talk: Talk }) {
  return (
    <li className={styles.row}>
      <div className={styles.time}>
        <span>{talk.time}</span>
      </div>
      <div className={styles.topic}>
        <p className={styles.topicTitle}>{talk.title}</p>
        {talk.subtitle && <p className={styles.topicSub}>{talk.subtitle}</p>}
      </div>
      <div className={styles.speakers}>
        {talk.speakers.map((s) => (
          <div key={s.name} className={styles.speaker}>
            <p className={styles.speakerName}>{s.name}</p>
            <p className={styles.speakerBio}>{s.bio}</p>
          </div>
        ))}
      </div>
    </li>
  );
}

function DayBar({ date }: { date: string }) {
  return <div className={styles.dayBar}>{date}</div>;
}

export function Program() {
  const [expanded, setExpanded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const [firstDay, ...otherDays] = PROGRAM;
  const preview = firstDay.items.slice(0, PREVIEW_COUNT);
  const restOfFirstDay = firstDay.items.slice(PREVIEW_COUNT);

  const toggle = () => {
    if (expanded) {
      // при згортанні повертаємо користувача до початку програми
      sectionRef.current?.scrollIntoView({ behavior: "smooth" });
    }
    setExpanded((v) => !v);
  };

  return (
    <section className={styles.program} id="program" ref={sectionRef}>
      <div className={styles.head}>
        <h2 className={styles.title}>Програма</h2>
      </div>

      <DayBar date={firstDay.date} />
      <ul className={styles.list}>
        {preview.map((t) => (
          <TalkRow key={t.time} talk={t} />
        ))}
      </ul>

      {/* Решта програми — розгортається плавно (grid-rows 0fr → 1fr) */}
      <div className={`${styles.more} ${expanded ? styles.moreOpen : ""}`} aria-hidden={!expanded}>
        <div className={styles.moreInner} id="program-more">
          <ul className={`${styles.list} ${styles.listContinue}`}>
            {restOfFirstDay.map((t) => (
              <TalkRow key={t.time} talk={t} />
            ))}
          </ul>
          {otherDays.map((day) => (
            <div key={day.date}>
              <DayBar date={day.date} />
              <ul className={styles.list}>
                {day.items.map((t) => (
                  <TalkRow key={t.time} talk={t} />
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.actions}>
        <Button variant="dark" className={styles.toggle} aria-expanded={expanded} aria-controls="program-more" onClick={toggle}>
          {expanded ? "Згорнути програму" : "Переглянути повну програму"}
        </Button>
      </div>
    </section>
  );
}
