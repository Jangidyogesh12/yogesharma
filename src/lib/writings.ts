import fs from "node:fs";
import path from "node:path";
import type { ComponentType } from "react";

export type WritingMeta = {
  title: string;
  description: string;
  date: string;
};

export type Writing = {
  slug: string;
  meta: WritingMeta;
  Content: ComponentType;
};

const WRITINGS_DIR = path.join(process.cwd(), "src/content/writings");

export function getWritingSlugs(): string[] {
  if (!fs.existsSync(WRITINGS_DIR)) return [];
  return fs
    .readdirSync(WRITINGS_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

export async function getWriting(slug: string): Promise<Writing | null> {
  if (!getWritingSlugs().includes(slug)) return null;

  const mod = await import(`../content/writings/${slug}.mdx`);

  return {
    slug,
    meta: mod.meta,
    Content: mod.default,
  };
}
