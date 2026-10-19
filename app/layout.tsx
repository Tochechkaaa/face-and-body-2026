import type { Metadata } from "next";
import { Jost } from "next/font/google";
import localFont from "next/font/local";
import "./globals.scss";

// ── Шрифти ──
// Cera Pro (основний шрифт макета) — комерційний, файлів у проєкті немає.
// Поки що фолбек — Jost (геометричний гротеск з кирилицею).
// Щоб підключити Cera Pro: покласти woff2 в app/fonts/ і замінити `body` на localFont.
// Georgia (цифри, ціни, «2026») — системний шрифт, підключення не потребує.
// Fixel Text Medium — кнопки.

const body = Jost({
  variable: "--font-body",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "500"],
  display: "swap",
});

const button = localFont({
  variable: "--font-button",
  display: "swap",
  src: [{ path: "./fonts/FixelText-Medium.woff2", weight: "500", style: "normal" }],
});

export const metadata: Metadata = {
  title: "FACE&BODY 2026 — конгрес естетичної медицини",
  description:
    "FACE&BODY 2026 — найочікуваніший конгрес року в естетичній медицині. 8–9 листопада 2026, Львів, Emily Resort.",
  openGraph: {
    type: "website",
    siteName: "FACE&BODY 2026",
    title: "FACE&BODY 2026",
    description: "Два дні наукової програми, сучасних технологій, практичних кейсів та зустрічей із провідними експертами галузі.",
    locale: "uk_UA",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${body.variable} ${button.variable}`}>
      <body>{children}</body>
    </html>
  );
}
