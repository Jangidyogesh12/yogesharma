import { Registry } from "./types";
import { LinkItem } from "./types";

export const registry: Registry = {
  GitHub: "https://github.com/Jangidyogesh12",
  Twitter: "https://x.com/yogssh_sh",
  LinkedIn: "https://www.linkedin.com/in/yogesh-sharma-45201b231/",
  Arkitec: "",
  Hive: "https://github.com/Jangidyogesh12/Hive",
};

export const projects: LinkItem[] = [
  {
    title: "Hive",
    description:
      "Hive is a local-first graph database designed to store and query interconnected data efficiently.",
    href: "https://github.com/Jangidyogesh12/Hive",
  },
];

export const writing: LinkItem[] = [
  {
    title: "Behind Your X Feed {Phoenix and Thunder}",
    description: "How your personalized real-time Twitter feed comes to life.",
    href: "https://x.com/yogssh_sh/status/2020998993648681195",
  },
  {
    title: "Building with Intent",
    description:
      "A practical take on making products that feel polished without over-designing.",
    href: "/writing/building-with-intent",
    featured: true,
  },
];
