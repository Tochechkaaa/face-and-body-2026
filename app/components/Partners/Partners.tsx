import Image from "next/image";
import styles from "./Partners.module.scss";

// Плейсхолдери з макета (лого FACE&BODY) — замінити логотипами партнерів.
const PARTNERS = [
  { name: "FACE&BODY", logo: "/images/partners/logo.png" },
  { name: "FACE&BODY", logo: "/images/partners/logo.png" },
  { name: "FACE&BODY", logo: "/images/partners/logo.png" },
];

export function Partners() {
  return (
    <section className={styles.partners} id="partners">
      <div className={styles.inner}>
        <div className={styles.head}>
          <h2 className={styles.title}>Наші партнери</h2>
          <p className={styles.text}>
            FACE&amp;BODY 2026 об’єднує професійні бренди, які розвивають індустрію естетичної медицини.
          </p>
        </div>

        <ul className={styles.list}>
          {PARTNERS.map((p, i) => (
            <li key={i} className={styles.item}>
              <Image src={p.logo} alt={p.name} width={152} height={56} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
