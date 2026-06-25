import { LinkList } from "@/components/molecules/LinkList";
import { Section } from "@/components/molecules/Section";
import { writing } from "@/lib/registry/registry";

export function WritingList() {
  return (
    <Section label="Writing">
      <div>
        <LinkList items={writing} />
      </div>
    </Section>
  );
}
