"use client";

import { useEffect, useState } from "react";
import { NAV_ITEMS } from "../../lib/nav";
import styles from "./Header.module.scss";

export function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Після першого екрана хедер стає суцільним (смуга з макета прозора знизу
  // і нечитабельна над світлими секціями).
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Блокуємо скрол сторінки під відкритим меню + закриття по Escape.
  useEffect(() => {
    document.body.classList.toggle("menu-open", open);
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  // Закриваємо мобільне меню, якщо вікно розширили до десктопа.
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const onChange = () => mq.matches && setOpen(false);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.headerScrolled : ""} ${open ? styles.headerOpen : ""}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} aria-label="FACE&BODY — на початок" onClick={() => setOpen(false)}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.logoDesktop} src="/images/header/logo.svg" alt="FACE&BODY" width={136} height={50} />
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className={styles.logoMobile} src="/images/mobile/logo.svg" alt="FACE&BODY" width={107} height={40} />
        </a>

        <nav className={styles.nav} aria-label="Головна навігація">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={styles.navLink}>
              {item.label}
            </a>
          ))}
        </nav>

        <button
          type="button"
          className={styles.burger}
          aria-label={open ? "Закрити меню" : "Відкрити меню"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((v) => !v)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/images/mobile/menu.svg" alt="" width={24} height={24} />
        </button>
      </div>

      <div id="mobile-menu" className={`${styles.menu} ${open ? styles.menuOpen : ""}`} aria-hidden={!open}>
        <nav className={styles.menuNav} aria-label="Мобільна навігація">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={styles.menuLink}
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}
