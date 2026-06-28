import { LinkItem } from "@/lib/registry/types";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";

const styles = {
  list: "grid gap-3",
  card: "-mx-3 rounded-md border-transparent bg-transparent shadow-none transition-colors duration-150 hover:bg-[rgba(36,30,22,0.04)] dark:hover:bg-[rgba(255,255,255,0.04)]",
  cardContent: "p-0 sm:p-0",
  item: "grid gap-1 px-3 py-3 sm:px-3 sm:py-3.5",
  title: "text-[0.95rem] font-medium tracking-[-0.02em] text-foreground",
  description: "text-[0.92rem] leading-6 text-muted-foreground",
};

function isExternal(href: string) {
  return href.startsWith("http://") || href.startsWith("https://");
}

function LinkCard({ item }: { item: LinkItem }) {
  return (
    <Card className={styles.card}>
      <CardContent className={styles.cardContent}>
        <div className={styles.item}>
          <span className={styles.title}>{item.title}</span>
          <span className={styles.description}>{item.description}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function LinkList({ items }: { items: LinkItem[] }) {
  return (
    <div className={styles.list}>
      {items.map((item) =>
        isExternal(item.href) ? (
          <a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkCard item={item} />
          </a>
        ) : (
          <Link key={item.title} to={item.href}>
            <LinkCard item={item} />
          </Link>
        ),
      )}
    </div>
  );
}
