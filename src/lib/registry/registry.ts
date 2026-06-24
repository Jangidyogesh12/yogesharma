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
