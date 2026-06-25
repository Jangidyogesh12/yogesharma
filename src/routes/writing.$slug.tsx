import { createFileRoute } from "@tanstack/react-router";
import { WritingSpace } from "../components/writings/WritingSpace";

export const Route = createFileRoute("/writing/$slug")({
  component: WritingSpace,
});
