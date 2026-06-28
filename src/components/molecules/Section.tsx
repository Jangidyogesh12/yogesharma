import { ReactNode } from "react";

const styles = {
  section: "max-w-3xl py-6",
  heading:
    "mb-3 text-[1.05rem] font-medium tracking-[-0.02em] text-foreground ",
  content: "min-w-0",
};

export function Section({
  label,
  children,
}: {
  label: string;
  children: ReactNode;
}) {
  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{label}</h2>
      <div className={styles.content}>{children}</div>
    </section>
  );
}
