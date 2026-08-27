import { Me } from "@/components/Me";
import { Projects } from "@/components/Projects";
import { WritingList } from "@/components/writings/WritingList";
import { More } from "@/components/More";

export default function Home() {
  return (
    <>
      <Me />
      <Projects />
      <WritingList />
      <More />
    </>
  );
}
