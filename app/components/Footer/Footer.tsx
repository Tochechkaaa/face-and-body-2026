import Image from "next/image";
import { NAV_ITEMS } from "../../lib/nav";
import styles from "./Footer.module.scss";

const SOCIALS = [
  { name: "Instagram", href: "https://www.instagram.com/faceandbody.congress/", icon: "/images/footer/instagram.svg" },
  { name: "Facebook", href: "https://www.facebook.com/estyderm/", icon: "/images/footer/facebook.svg" },
];

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.contacts}>
          <div className={styles.questions}>
            <h2 className={styles.heading}>Залишились питання?</h2>
            <div className={styles.block}>
              <p>Зв’яжіть з нами за телефоном:</p>
              <p>
                <a href="tel:+380997039656" className={styles.phone}>
                  +380 99 703 96 56
                </a>
                <br />
                Рената
              </p>
            </div>
            <div className={styles.block}>
              <p>Або напишіть нам у соцмережах:</p>
              <ul className={styles.socials}>
                {SOCIALS.map((s) => (
                  <li key={s.name}>
                    <a href={s.href} className={styles.social} aria-label={s.name} target="_blank" rel="noopener noreferrer">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={s.icon} alt="" width={32} height={32} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className={styles.partner}>
            <h2 className={styles.heading}>Бажаєте стати партнером заходу?</h2>
            <div className={styles.partnerBody}>
              <p className={styles.partnerPhone}>
                Звертайтеся за телефоном{" "}
                <a href="tel:+380951584830" className={styles.phone}>
                  +380 95 158 48 30
                </a>
              </p>
              <p>Вікторія</p>
            </div>
          </div>
        </div>

        <div className={styles.bottom}>
          <a href="#top" className={styles.logo} aria-label="FACE&BODY — на початок">
            <Image src="/images/partners/logo.png" alt="FACE&BODY" width={152} height={56} />
          </a>
          <nav className={styles.nav} aria-label="Навігація у футері">
            {NAV_ITEMS.map((item) => (
              <a key={item.href} href={item.href} className={styles.navLink}>
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div className={styles.copy}>
          <p>FACE&amp;BODY 2026. All rights reserved.</p>
          <p>
            Made &amp; Developed by{" "}
            <a href="https://vau.agency/" className={styles.vau} target="_blank" rel="noopener noreferrer">
              Vau.agency
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
