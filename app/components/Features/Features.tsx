import styles from "./Features.module.scss";

// «Що чекає на FACE&BODY 2026?»
// tone — колір картки на десктопі (на мобілці картки чергуються світла/темна).
// icon / iconM — карта-масть у куті (десктоп / мобілка, у макетах різні).
const FEATURES = [
  {
    title: "Наука",
    text: "Актуальні знання, сучасні підходи та нові дані, які можна інтегрувати у власну практику.",
    tone: "light",
    icon: "/images/features/card-spade.svg",
    iconM: "/images/mobile/card-spade.svg",
  },
  {
    title: "Практика",
    text: "Клінічні кейси, протоколи та розбір реальних ситуацій.",
    tone: "dark",
    icon: "/images/features/card-diamond.svg",
    iconM: "/images/mobile/card-diamond.svg",
  },
  {
    title: "Апаратні технології",
    text: "Сучасні рішення для роботи з обличчям і тілом.",
    tone: "dark",
    icon: "/images/features/card-club.svg",
    iconM: "/images/mobile/card-spade2.svg",
  },
  {
    title: "Ін’єкційна естетика",
    text: "Методики, комбінації та алгоритми роботи.",
    tone: "light",
    icon: "/images/features/card-heart.svg",
    iconM: "/images/mobile/card-diamond2.svg",
  },
  {
    title: "Expo",
    text: "Професійні бренди, технології та продукти, які можна побачити наживо.",
    tone: "light",
    icon: "/images/features/card-spade.svg",
    iconM: "/images/mobile/card-spade.svg",
  },
  {
    title: "Networking",
    text: "Два дні зустрічей із колегами, експертами та партнерами галузі.",
    tone: "dark",
    icon: "/images/features/card-diamond.svg",
    iconM: "/images/mobile/card-diamond.svg",
  },
] as const;

export function Features() {
  return (
    <section className={styles.features} id="features">
      <div className={styles.inner}>
        <h2 className={styles.title}>Що чекає на FACE&amp;BODY 2026?</h2>

        <ul className={styles.grid}>
          {FEATURES.map((f) => (
            <li key={f.title} className={`${styles.card} ${f.tone === "dark" ? styles.dark : styles.light}`}>
              <div className={styles.frame}>
                <h3 className={styles.cardTitle}>{f.title}</h3>
                <p className={styles.cardText}>{f.text}</p>
              </div>
              <picture className={styles.icon}>
                <source media="(max-width: 767px)" srcSet={f.iconM} />
                <img src={f.icon} alt="" width={74} height={106} />
              </picture>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
