import type { ReactNode } from "react";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type LinkItem = {
  title: string;
  description: string;
  href: string;
  featured?: boolean;
};

const projects: LinkItem[] = [
  {
    title: "Portfolio System",
    description:
      "A reusable design and frontend system for landing pages and product surfaces.",
    href: "#",
  },
  {
    title: "Motion Library",
    description:
      "A small collection of refined UI interactions built for smooth web experiences.",
    href: "#",
  },
  {
    title: "Creator Dashboard",
    description:
      "Analytics, publishing, and workflow tools designed for clarity and speed.",
    href: "#",
  },
];

const writing: LinkItem[] = [
  {
    title: "Designing for Calm Interfaces",
    description:
      "How spacing, typography, and interaction rhythm shape a better product feel.",
    href: "#",
  },
  {
    title: "Building with Intent",
    description:
      "A practical take on making products that feel polished without over-designing.",
    href: "#",
    featured: true,
  },
  {
    title: "Frontend Details That Matter",
    description:
      "The small implementation choices that make a portfolio site feel premium.",
    href: "#",
  },
  {
    title: "Shipping Personal Projects Faster",
    description:
      "A lightweight workflow for going from idea to release without losing momentum.",
    href: "#",
  },
];

function LinkList({ items }: { items: LinkItem[] }) {
  return (
    <div className="grid gap-3">
      {items.map((item) => (
        <a key={item.title} href={item.href}>
          <Card className="-mx-3 rounded-md border-transparent bg-transparent shadow-none transition-colors duration-150 hover:bg-[rgba(36,30,22,0.045)]">
            <CardContent className="p-0 sm:p-0">
              <div className="grid gap-1 px-3 py-3 sm:px-3 sm:py-3.5">
                <span className="text-[0.95rem] font-medium tracking-[-0.02em] text-foreground">
                  {item.title}
                </span>
                <span className="text-[0.92rem] leading-6 text-muted-foreground">
                  {item.description}
                </span>
              </div>
            </CardContent>
          </Card>
        </a>
      ))}
    </div>
  );
}

function Section({ label, children }: { label: string; children: ReactNode }) {
  return (
    <section className="max-w-4xl py-10 md:py-12">
      <h2 className="mb-2 text-[1.05rem] font-medium tracking-[-0.02em] text-foreground md:mb-5">
        {label}
      </h2>
      <div className="min-w-0">{children}</div>
    </section>
  );
}

function App() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-4xl flex-col px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-14">
      <section className="rounded-2xl border border-border/70 bg-card/75 px-6 py-5 shadow-[0_1px_0_rgba(255,255,255,0.9)_inset,0_30px_80px_rgba(18,18,23,0.08)] backdrop-blur sm:px-8 sm:py-7 md:px-10 md:py-8">
        <div className="flex flex-col gap-4 md:gap-6">
          <Badge>Software Developer</Badge>
          <div className="grid gap-8">
            <div>
              <h1 className="pb-6 text-[1.9rem] font-medium leading-[0.95] tracking-[-0.06em] text-foreground sm:text-[2.4rem] md:pb-8 md:text-[3rem]">
                Yogesh Sharma
              </h1>
              <p className="max-w-xl text-[0.95rem] leading-7 text-muted-foreground sm:text-base">
                I like building things....
                <br />
                building for the sentient century.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Section label="Today">
        <div className="grid max-w-4xl gap-8 text-base leading-7 text-muted-foreground md:text-[0.98rem]">
          <p>
            I work across application development, turning ideas into
            maintainable, production-ready software with modern tools and
            practical engineering decisions.
          </p>
          <p>
            My focus is building web apps, internal tools, APIs, and personal
            projects that are fast, clear, and easy to maintain.
          </p>
        </div>
      </Section>

      <Section label="Projects">
        <div>
          <LinkList items={projects} />
        </div>
      </Section>

      <Section label="Writing">
        <div>
          <LinkList items={writing} />
        </div>
      </Section>

      <Section label="More">
        <div className="max-w-4xl text-base leading-7 text-muted-foreground md:text-[0.98rem]">
          You can see more of my work on{" "}
          <a
            href="#"
            className="font-semibold text-foreground underline decoration-1 decoration-foreground underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            Twitter
          </a>{" "}
          and more of my code on{" "}
          <a
            href="#"
            className="font-semibold text-foreground underline decoration-1 decoration-foreground underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            GitHub
          </a>
          . You can also connect with me on{" "}
          <a
            href="#"
            className="font-semibold text-foreground underline decoration-1 decoration-foreground underline-offset-4 transition-colors hover:text-muted-foreground"
          >
            LinkedIn
          </a>
          .
        </div>
      </Section>
    </main>
  );
}

export default App;
