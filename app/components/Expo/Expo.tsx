import Image from "next/image";
import styles from "./Expo.module.scss";

export function Expo() {
  return (
    <section className={styles.expo} id="expo">
      <div className={styles.inner}>
        <div className={styles.card}>
          <picture className={styles.bg}>
            <source media="(max-width: 767px)" srcSet="/images/mobile/expo-bg.webp" />
            <img src="/images/expo/bg.webp" alt="" loading="lazy" />
          </picture>
          <div className={styles.shade} />
          <div className={styles.frame} />

          <div className={styles.content}>
            <p className={styles.label}>EXPO ZONE</p>
            <h2 className={styles.title}>
              Технології, які можна побачити <em>наживо</em>
            </h2>
            <p className={styles.text}>
              Провідні професійні бренди представлять продукти, апарати та технології для сучасної естетичної медицини.
            </p>
          </div>

          <div className={styles.photo}>
            <Image src="/images/expo/photo.webp" alt="Шоу-програма FACE&BODY" fill sizes="342px" />
          </div>
        </div>
      </div>
    </section>
  );
}
