import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import { ThemeToggle } from "@/components/molecules/ThemeToggle";
import "../index.css";

export const metadata: Metadata = {
  title: "Yogesh Sharma",
  description:
    "Yogesh Sharma portfolio built with Next.js, React, and TypeScript.",
  icons: { icon: "/favicon.svg" },
};

const themeInitScript = `(function() {
  try {
    var theme = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (theme === 'dark' || (!theme && prefersDark)) {
      document.documentElement.classList.add('dark');
      document.documentElement.style.colorScheme = 'dark';
    }
  } catch (e) {}
})();`;

const themeBaseStyles = `html:not(.dark){color-scheme:light;background-color:#f6f3ee;color:#1f1c18}html.dark{color-scheme:dark;background-color:#1a1a1a;color:#ebebeb}`;

const styles = {
  main: "mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-14",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-scroll-behavior="smooth" suppressHydrationWarning>
      <body className={`${GeistSans.variable} ${GeistMono.variable}`}>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <style dangerouslySetInnerHTML={{ __html: themeBaseStyles }} />
        <ThemeToggle />
        <main className={styles.main}>{children}</main>
      </body>
    </html>
  );
}
