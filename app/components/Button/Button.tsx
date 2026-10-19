import type { ComponentPropsWithoutRef } from "react";
import styles from "./Button.module.scss";

// Кнопка з макета (Figma «Component 3»).
//   light — кремова, при наведенні стає бордовою (hero, CTA)
//   dark  — бордовий градієнт, при наведенні стає золотою (програма, квитки, локація)

type Variant = "light" | "dark";

type CommonProps = {
  variant?: Variant;
  block?: boolean; // на всю ширину батька
  className?: string;
};

type AnchorProps = CommonProps & ComponentPropsWithoutRef<"a"> & { href: string };
type NativeButtonProps = CommonProps & ComponentPropsWithoutRef<"button"> & { href?: undefined };

export function Button({ variant = "dark", block, className, ...rest }: AnchorProps | NativeButtonProps) {
  const cls = [styles.button, styles[variant], block ? styles.block : "", className ?? ""].join(" ");

  if (rest.href !== undefined) {
    return <a className={cls} {...(rest as ComponentPropsWithoutRef<"a">)} />;
  }
  return <button type="button" className={cls} {...(rest as ComponentPropsWithoutRef<"button">)} />;
}
