import { ReactNode } from "react";

const styles = {
  section: "max-w-3xl py-10 md:py-12",
  heading: "mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-foreground md:mb-5",
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
