import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { getWriting, getWritingSlugs } from "@/lib/writings";

const styles = {
  container: "max-w-3xl py-10 md:py-12",
  title:
    "pb-6 text-[1.9rem] font-medium leading-[1.05] tracking-[-0.04em] text-foreground sm:text-[2.4rem] md:pb-8 md:text-[3rem]",
  meta: "mb-8 text-[0.92rem] leading-6 text-muted-foreground",
  content:
    "prose prose-foreground prose-headings:font-medium prose-headings:tracking-[-0.02em] max-w-none text-base leading-7 text-muted-foreground text-justify",
  backLink:
    "mt-8 inline-block text-[0.92rem] font-medium text-foreground underline decoration-1 decoration-foreground underline-offset-4 transition-colors hover:text-muted-foreground",
};

type WritingPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getWritingSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: WritingPageProps): Promise<Metadata> {
  const { slug } = await params;
  const writing = await getWriting(slug);
  if (!writing) return {};

  return {
    title: writing.meta.title,
    description: writing.meta.description,
  };
}

export default async function WritingPage({ params }: WritingPageProps) {
  const { slug } = await params;
  const writing = await getWriting(slug);
  if (!writing) notFound();

  const { meta, Content } = writing;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{meta.title}</h1>
      <div className={styles.meta}>{meta.date}</div>
      <div className={styles.content}>
        <Content />
      </div>
      <Link href="/" className={styles.backLink}>
        ← Back to home
      </Link>
    </div>
  );
}
