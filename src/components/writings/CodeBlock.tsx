import { useEffect, useState } from "react";

const styles = {
  wrapper: "relative group my-6 rounded-xl border border-border bg-card overflow-hidden",
  header: "flex items-center justify-between px-4 py-2 border-b border-border bg-muted/50",
  label: "text-xs font-medium text-muted-foreground uppercase tracking-wider",
  copyButton:
    "flex items-center gap-1.5 text-xs text-muted-foreground hover:text-foreground transition-colors cursor-pointer bg-transparent border-none p-0",
  code: "text-sm leading-relaxed m-0",
  fallback:
    "p-4 overflow-x-auto text-sm leading-relaxed m-0 bg-transparent font-['Geist_Mono',ui-monospace,monospace]",
  codeText: "text-foreground",
};

type CodeBlockProps = {
  children: string;
  language?: string;
};

export function CodeBlock({ children, language }: CodeBlockProps) {
  const [html, setHtml] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    let mounted = true;

    import("@/lib/highlighter")
      .then(({ getHighlighter }) => getHighlighter())
      .then((highlighter) => {
        const loaded = highlighter.getLoadedLanguages();
        const lang =
          language && loaded.includes(language) ? language : "text";

        const out = highlighter.codeToHtml(children, {
          lang,
          themes: { light: "github-light", dark: "github-dark" },
        });

        if (mounted) setHtml(out);
      })
      .catch(() => {
        if (mounted) setHtml(null);
      });

    return () => {
      mounted = false;
    };
  }, [children, language]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <span className={styles.label}>{language || "code"}</span>
        <button className={styles.copyButton} onClick={handleCopy}>
          {copied ? (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <polyline points="20 6 9 17 4 12" />
            </svg>
          ) : (
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
              <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
            </svg>
          )}
          <span>{copied ? "Copied!" : "Copy"}</span>
        </button>
      </div>
      {html ? (
        <div
          className={styles.code}
          dangerouslySetInnerHTML={{ __html: html }}
        />
      ) : (
        <pre className={styles.fallback}>
          <code className={styles.codeText}>{children}</code>
        </pre>
      )}
    </div>
  );
}
