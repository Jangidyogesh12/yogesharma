import { registry } from "@/lib/registry/registry";
import { Registry } from "@/lib/registry/types";

const styles = {
  linkStyles:
    "font-semibold text-foreground underline decoration-1 decoration-foreground underline-offset-4 transition-colors hover:text-muted-foreground",
};

export function InlineLink({ to }: { to: keyof Registry }) {
  return (
    <a href={registry[to]} className={styles.linkStyles}>
      {to}
    </a>
  );
}
