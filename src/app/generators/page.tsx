import ToolLayout from "@/components/tool-layout";
import { metadata } from "./metadata";
import GeneratorsClientComponent from "./GeneratorsClientComponent";

export { metadata };

export default function GeneratorsPage() {
  return (
    <ToolLayout>
      <GeneratorsClientComponent />
    </ToolLayout>
  );
}