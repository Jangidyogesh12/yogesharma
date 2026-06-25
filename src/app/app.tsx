import { Projects } from "@/components/Projects";
import { WritingList } from "@/components/writings/WritingList";
import { More } from "@/components/More";
import { Me } from "@/components/Me";

function App() {
  return (
    <rect>
      <Me />
      <Projects />
      <WritingList />
      <More />
    </rect>
  );
}

export default App;
