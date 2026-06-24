import { projects } from "@/lib/registry/registry";
import { LinkList } from "@/components/molecules/LinkList";
import { Section } from "@/components/molecules/Section";

export function Projects() {
  return (
    <Section label="Projects">
      <div>
        <LinkList items={projects} />
      </div>
    </Section>
  );
}
