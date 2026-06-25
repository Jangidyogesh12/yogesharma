import { Route } from "@/routes/writing.$slug";
import { Link, notFound } from "@tanstack/react-router";
import { ComponentType } from "react";

const styles = {
  container:
    "max-w-3xl py-10 md:py-12 font-['Geist_Pixel',ui-monospace,monospace]",
  title:
    "pb-6 text-[1.9rem] font-medium leading-[0.95] tracking-[-0.06em] text-foreground sm:text-[2.4rem] md:pb-8 md:text-[3rem]",
  meta: "mb-8 text-[0.92rem] leading-6 text-muted-foreground",
  content:
    "prose prose-foreground prose-headings:font-medium prose-headings:tracking-[-0.02em] max-w-none text-base leading-7 text-muted-foreground",
  backLink:
    "mt-8 inline-block text-[0.92rem] font-medium text-foreground underline decoration-1 decoration-foreground underline-offset-4 transition-colors hover:text-muted-foreground",
};

type WritingsModule = {
  default: ComponentType;
  meta: Record<string, string>;
};

const mdxModules = import.meta.glob<{
  default: ComponentType;
  meta: Record<string, string>;
}>("/src/content/writings/*.mdx", { eager: true });

export function WritingSpace() {
  const { slug } = Route.useParams();
  const path = `/src/content/writings/${slug}.mdx`;

  if (!(path in mdxModules)) {
    notFound();
    return null;
  }

  const mod = mdxModules[path] as WritingsModule;
  const Content = mod.default;
  const meta = mod.meta;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{meta.title}</h1>
      <div className={styles.meta}>{meta.date}</div>
      <div className={styles.content}>
        <Content />
      </div>
      <Link to="/" className={styles.backLink}>
        ← Back to home
      </Link>
    </div>
  );
}
