import { Section } from "./molecules/Section";
import { InlineLink } from "./molecules/InlineLink";

const styles = {
  moreContent:
    "max-w-4xl text-base leading-7 text-muted-foreground md:text-[0.98rem]",
};
export function More() {
  return (
    <Section label="More">
      <div className={styles.moreContent}>
        You can see more of my work on &nbsp;
        <InlineLink to="Twitter" />
        &nbsp; and more of my code on <InlineLink to="GitHub" />. You can also
        connect with me on &nbsp;
        <InlineLink to="LinkedIn" />
      </div>
    </Section>
  );
}
