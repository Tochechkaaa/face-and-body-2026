"use client";

import { useInView } from "../../lib/useInView";
import { Button } from "../Button/Button";
import styles from "./Tickets.module.scss";

// Посилання на оплату (WayForPay).
const TICKETS = [
  {
    name: "Simple",
    price: "₴ 10000",
    icon: { src: "/images/tickets/spade.svg", w: 21, h: 26 },
    features: [
      "Участь у конгресі",
      "Пакет учасника",
      "Сертифікат проходження конгресу з балами БПР",
      "Доступ до вечірньої програми After party",
    ],
    href: "#",
    soldOut: true,
  },
  {
    name: "VIP",
    price: "₴ 19000",
    icon: { src: "/images/tickets/club.svg", w: 26, h: 26 },
    features: [
      "Окрема стійка реєстрації",
      "Розміщення у перших рядах залу",
      "Участь у конгресі",
      "Пакет учасника VIP з подарунками від партнерів",
      "Сертифікат проходження конгресу з балами БПР",
      "Обід 8–9.11 та вечеря 8.11",
      "Доступ до вечірньої програми After party",
    ],
    href: "#",
    soldOut: true,
  },
  {
    name: "Online",
    price: "₴ 3500",
    icon: { src: "/images/tickets/online.svg", w: 31, h: 31 },
    note: { title: "Не маєте змогу приєднатися?", text: "Не втрачайте можливості бути дотичними до заходу" },
    features: [
      "Онлайн доступ до прямої трансляція конгресу 2 дні",
      "Сертифікат учасника",
      "Доступ до запису заходу (6 місяців)",
    ],
    href: "https://secure.wayforpay.com/button/b797488510b8f",
  },
];

export function Tickets() {
  const [ref, inView] = useInView<HTMLUListElement>({ threshold: 0.2 });

  return (
    <section className={styles.tickets} id="tickets">
      <div className={styles.inner}>
        <h2 className={styles.title}>Квитки</h2>
        <p className={styles.subtitle}>Оберіть свій формат участі</p>

        <ul className={`${styles.list} ${inView ? "is-revealed" : ""}`} ref={ref}>
          {/* Поява зліва направо: зсув 24px, 600 мс, затримка 100 мс між картками */}
          {TICKETS.map((t, i) => (
            <li
              key={t.name}
              className={styles.item}
              data-reveal=""
              style={{ "--reveal-delay": `${i * 0.1}s` } as React.CSSProperties}
            >
              <div className={`${styles.ticket} ${t.note ? styles.online : ""}`}>
                <div className={styles.card}>
                  <div className={styles.head}>
                    <h3 className={styles.name}>{t.name}</h3>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img className={styles.icon} src={t.icon.src} alt="" width={t.icon.w} height={t.icon.h} />
                  </div>

                  {t.note && (
                    <div className={styles.note}>
                      <p className={styles.noteTitle}>{t.note.title}</p>
                      <p className={styles.noteText}>{t.note.text}</p>
                    </div>
                  )}

                  {t.soldOut && (
                    <span className={styles.stamp}>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src="/images/tickets/sold-out.png" alt="Sold out" width={820} height={360} />
                    </span>
                  )}

                  <p className={styles.price}>{t.price}</p>

                  <ul className={styles.features}>
                    {t.features.map((f) => (
                      <li key={f}>{f}</li>
                    ))}
                  </ul>

                  {t.soldOut ? (
                    <Button variant="dark" block className={`${styles.buy} ${styles.soldOut}`} disabled>
                      Sold out
                    </Button>
                  ) : (
                    <Button
                      href={t.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="dark"
                      block
                      className={styles.buy}
                    >
                      Придбати квиток
                    </Button>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
