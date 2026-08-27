import { getHighlighter } from "@/lib/highlighter";
import { CopyButton } from "./CopyButton";

const styles = {
  wrapper: "relative group my-6 rounded-xl border border-border bg-card overflow-hidden",
  header: "flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50",
  label: "text-xs font-medium text-muted-foreground uppercase tracking-wider",
  code: "text-sm leading-relaxed m-0",
};

type CodeBlockProps = {
  children: string;
  language?: string;
};

export async function CodeBlock({ children, language }: CodeBlockProps) {
  const highlighter = await getHighlighter();
  const loaded = highlighter.getLoadedLanguages();
  const lang = language && loaded.includes(language) ? language : "text";

  const html = highlighter.codeToHtml(children, {
    lang,
    themes: { light: "github-light", dark: "github-dark" },
  });

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>{language || "code"}</span>
        <CopyButton code={children} />
      </div>
      <div
        className={styles.code}
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </div>
  );
}
