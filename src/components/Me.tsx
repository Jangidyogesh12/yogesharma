import { InlineLink } from "./molecules/InlineLink";

const styles = {
  hero: "mb-10",
  heroTitle:
    "pb-6 text-[1.9rem] font-medium leading-[0.95] tracking-[-0.06em] text-foreground sm:text-[2.4rem] md:pb-8 md:text-[3rem]",
  heroDescription:
    "max-w-xl text-[0.95rem] leading-7 text-muted-foreground sm:text-base",
};

function HeroDescription() {
  return (
    <p className={styles.heroDescription}>
      I like building low level softwares and write about them. Currently
      working on <InlineLink to="Hive" />.
    </p>
  );
}

function HeroTitle() {
  return <h1 className={styles.heroTitle}>Yogesh Sharma</h1>;
}
export function Me() {
  return (
    <div className={styles.hero}>
      <HeroTitle />
      <HeroDescription />
    </div>
  );
}
