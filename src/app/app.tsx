import { Projects } from "@/components/Projects";
import { Writings } from "@/components/Writings";
import { More } from "@/components/More";
import { Me } from "@/components/Me";

const styles = {
  main: "mx-auto flex min-h-screen w-full max-w-3xl flex-col px-5 py-8 sm:px-8 sm:py-10 md:px-10 md:py-14",
  hero: "flex flex-col gap-4 md:gap-6",
  heroGrid: "grid gap-8",
  heroTitle:
    "pb-6 text-[1.9rem] font-medium leading-[0.95] tracking-[-0.06em] text-foreground sm:text-[2.4rem] md:pb-8 md:text-[3rem]",
  heroDescription:
    "max-w-xl text-[0.95rem] leading-7 text-muted-foreground sm:text-base",
  moreContent:
    "max-w-4xl text-base leading-7 text-muted-foreground md:text-[0.98rem]",
};

function App() {
  return (
    <main className={styles.main}>
      <Me />

      <Projects />

      <Writings />

      <More />
    </main>
  );
}

export default App;
