"use client";

import { useEffect } from "react";

const styles = {
  button:
    "fixed top-5 right-5 z-50 flex h-10 w-10 items-center justify-center rounded-full border border-border bg-card/80 shadow-sm backdrop-blur transition-colors hover:bg-accent",
  sun: "hidden h-5 w-5 text-foreground dark:block",
  moon: "h-5 w-5 text-foreground dark:hidden",
};

function getStoredTheme(): "light" | "dark" | null {
  if (typeof window === "undefined") return null;
  const stored = localStorage.getItem("theme");
  if (stored === "light" || stored === "dark") return stored;
  return null;
}

export function ThemeToggle() {
  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const handler = () => {
      if (!getStoredTheme()) {
        document.documentElement.classList.toggle("dark", media.matches);
      }
    };
    media.addEventListener("change", handler);
    return () => media.removeEventListener("change", handler);
  }, []);

  const toggle = () => {
    const root = document.documentElement;
    const next = root.classList.contains("dark") ? "light" : "dark";
    root.classList.toggle("dark", next === "dark");
    localStorage.setItem("theme", next);
  };

  return (
    <button
      onClick={toggle}
      className={styles.button}
      aria-label="Toggle theme"
    >
      <svg
        className={styles.sun}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <circle cx="12" cy="12" r="5" />
        <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
      </svg>
      <svg
        className={styles.moon}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    </button>
  );
}
