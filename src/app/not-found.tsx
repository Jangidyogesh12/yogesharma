import Link from "next/link";

const styles = {
  container: "flex flex-1 flex-col items-start justify-center gap-4 py-16",
  title:
    "text-[1.9rem] font-medium tracking-[-0.04em] text-foreground sm:text-[2.4rem]",
  description: "text-[0.95rem] leading-7 text-muted-foreground",
  backLink:
    "text-[0.92rem] font-medium text-foreground underline decoration-1 decoration-foreground underline-offset-4 transition-colors hover:text-muted-foreground",
};

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.description}>This page could not be found.</p>
      <Link href="/" className={styles.backLink}>
        ← Back to home
      </Link>
    </div>
  );
}
