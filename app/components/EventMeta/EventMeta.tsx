import styles from "./EventMeta.module.scss";

// Рядок «📅 8–9 листопада 2026 | Львів | EMILY» — використовується в Hero та CTA.
export function EventMeta({ className = "" }: { className?: string }) {
  return (
    <div className={`${styles.meta} ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.calendar} src="/images/hero/calendar.svg" alt="" width={17} height={18} />
      <span>8–9 листопада 2026 |</span>
      <span>Львів |</span>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img className={styles.emily} src="/images/hero/emily.svg" alt="Emily Resort" width={76} height={27} />
    </div>
  );
}
