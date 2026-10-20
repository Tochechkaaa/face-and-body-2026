import Image from "next/image";
import { Button } from "../Button/Button";
import styles from "./Venue.module.scss";

const MAP_URL = "https://www.google.com/maps/search/?api=1&query=Emily+Resort+Lviv";

export function Venue() {
  return (
    <section className={styles.venue} id="location">
      <div className={styles.inner}>
        <div className={styles.media}>
          <div className={styles.back} />
          <div className={styles.photo}>
            <Image
              src="/images/venue/resort.webp"
              alt="Emily Resort, Львів"
              fill
              sizes="(max-width: 767px) 330px, 572px"
            />
          </div>
        </div>

        <div className={styles.content}>
          <h2 className={styles.title}>EMILY RESORT</h2>
          <p className={styles.subtitle}>Місце зустрічі FACE&amp;BODY 2026</p>
          <p className={styles.meta}>
            8–9 листопада 2026 <span>•</span> Львів <span>•</span> Emily Resort
          </p>
          <p className={styles.text}>
            Простір для двох днів професійного занурення, зустрічей, нових знайомств та відпочинку між сесіями.
          </p>
          <Button href={MAP_URL} target="_blank" rel="noopener noreferrer" variant="dark" className={styles.map}>
            Показати на карті
          </Button>
        </div>
      </div>
    </section>
  );
}
