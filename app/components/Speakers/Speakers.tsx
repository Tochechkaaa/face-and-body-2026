"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../Button/Button";
import styles from "./Speakers.module.scss";

// Відсортовано за прізвищем. photo — файл у /images/speakers/<photo>.webp
const SPEAKERS = [
  { name: "Владлєна Авєріна", photo: "vladliena-avierina" },
  { name: "Юлія Бакаєва", photo: "iuliia-bakaieva" },
  { name: "Олена Березіна", photo: "olena-berezina" },
  { name: "Олександр Бєляєв", photo: "oleksandr-bieliaiev" },
  { name: "Вікторія Білобров", photo: "viktoriia-bilobrov" },
  { name: "Галина Бойко", photo: "halyna-boiko" },
  { name: "Вікторія Бушинська", photo: "viktoriia-bushynska" },
  { name: "Владислав Васянович", photo: "vladyslav-vasianovych" },
  { name: "Клавдія Винниченко", photo: "klavdiia-vynnychenko" },
  { name: "Марина Гараніна", photo: "maryna-haranina" },
  { name: "Анна Головко", photo: "anna-holovko" },
  { name: "Ірина Дасюк", photo: "iryna-dasiuk" },
  { name: "Наталія Дашевська", photo: "nataliia-dashevska" },
  { name: "Катерина Дзень", photo: "kateryna-dzen" },
  { name: "Сергій Дрига", photo: "serhii-dryha" },
  { name: "Тетяна Єпіфанцева", photo: "tetiana-iepifantseva" },
  { name: "Назар Заник", photo: "nazar-zanyk" },
  { name: "Андрій Зіменковський", photo: "andrii-zimenkovskyi" },
  { name: "Ольга Карвацька", photo: "olha-karvatska" },
  { name: "Юлія Качук", photo: "iuliia-kachuk" },
  { name: "Ніна Колот", photo: "nina-kolot" },
  { name: "Маргарита Кононенко", photo: "marharyta-kononenko" },
  { name: "Артем Корчак", photo: "artem-korchak" },
  { name: "Юлія Кучеревська", photo: "iuliia-kucherevska" },
  { name: "Ірина Літус", photo: "iryna-litus" },
  { name: "Олена Лозова", photo: "olena-lozova" },
  { name: "Анна Масько", photo: "anna-masko" },
  { name: "Ганна Махмудова", photo: "hanna-makhmudova" },
  { name: "Ірина Михайлова", photo: "iryna-mykhailova" },
  { name: "Ольга Ольшанська", photo: "olha-olshanska" },
  { name: "Ксенія Паламаренко", photo: "kseniia-palamarenko" },
  { name: "Денис Піддубний", photo: "denys-piddubnyi" },
  { name: "Ірина Попова", photo: "iryna-popova" },
  { name: "Денис Прокопович", photo: "denys-prokopovych" },
  { name: "Євгенія Рогальська", photo: "ievheniia-rohalska" },
  { name: "Ірина Романенко", photo: "iryna-romanenko" },
  { name: "Анастасія Серкутан", photo: "anastasiia-serkutan" },
  { name: "Орися Сизон", photo: "orysia-syzon" },
  { name: "Дмитро Січненко", photo: "dmytro-sichnenko" },
  { name: "Тетяна Соклакова", photo: "tetiana-soklakova" },
  { name: "Марина Стаднік", photo: "maryna-stadnik" },
  { name: "Яна Токар", photo: "iana-tokar" },
  { name: "Наталка Чехар", photo: "natalka-chekhar" },
  { name: "Євгенія Шелемба", photo: "ievheniia-shelemba" },
  { name: "Роман Школьний", photo: "roman-shkolnyi" },
  { name: "Тетяна Шкробот", photo: "tetiana-shkrobot" },
  { name: "Христина Юревич", photo: "khrystyna-iurevych" },
  { name: "Тетяна Юрченко", photo: "tetiana-iurchenko" },
];

// Спочатку видно 8 карток (на мобілці — 4), решта — по кнопці «Більше спікерів».
const DESKTOP_VISIBLE = 8;
const MOBILE_VISIBLE = 4;

export function Speakers() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section className={styles.speakers} id="speakers">
      <div className={styles.inner}>
        <h2 className={styles.title}>Спікери</h2>

        <ul className={`${styles.grid} ${showAll ? styles.gridAll : ""}`}>
          {SPEAKERS.map((s, i) => (
            <li
              key={s.photo}
              className={`${styles.card} ${i >= DESKTOP_VISIBLE ? styles.extra : i >= MOBILE_VISIBLE ? styles.extraMobile : ""}`}
            >
              <div className={styles.photo}>
                <Image src={`/images/speakers/${s.photo}.webp`} alt={s.name} fill sizes="(max-width: 767px) 295px, 295px" />
              </div>
              <div className={styles.info}>
                <p className={styles.name}>{s.name}</p>
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
