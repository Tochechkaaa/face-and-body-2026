import { TICKETS_HREF } from "../../lib/nav";
import { Button } from "../Button/Button";
import { EventMeta } from "../EventMeta/EventMeta";
import styles from "./Cta.module.scss";

export function Cta() {
  return (
    <section className={styles.cta}>
      <picture className={styles.bg}>
        <source media="(max-width: 767px)" srcSet="/images/mobile/cta-bg.png" />
        <img src="/images/cta/bg.png" alt="" loading="lazy" />
      </picture>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.glow} src="/images/cta/glow.svg" alt="" loading="lazy" />
      {/* Праві карти «виходять» за нижній край секції на футер */}
      <div className={styles.cardsRight} aria-hidden="true">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/images/cta/cards-right.png" alt="" loading="lazy" />
      </div>

      <div className={styles.inner}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className={styles.ornament} src="/images/cta/ornament.svg" alt="" width={141} height={24} />
        <h2 className={styles.title}>Розкрийте карти</h2>
        <p className={styles.subtitle}>FACE&amp;BODY 2026</p>
        <EventMeta className={styles.meta} />
        <p className={styles.text}>
          Два дні науки, практики, технологій <br />
          та зустрічей із професійною спільнотою.
        </p>
        <p className={styles.big}>
          Побачимось на <em>FACE&amp;BODY 2026</em>
        </p>
        <Button href={TICKETS_HREF} variant="light" className={styles.button}>
          Придбати квиток
        </Button>
      </div>
    </section>
  );
}
