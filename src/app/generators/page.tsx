import ToolLayout from "@/components/tool-layout";
import { metadata } from "./metadata";
import GeneratorsClientComponent from "./GeneratorsClientComponent";

export { metadata };

export default function GeneratorsPage() {
  return (
    <ToolLayout 
      title="密码与随机数生成器" 
      description="在线密码生成器，可自定义密码长度、大小写字母、数字和特殊字符，生成高强度安全密码。同时提供随机数生成功能，支持自定义范围，适用于抽奖、决策等场景。"
    >
      <GeneratorsClientComponent />
    </ToolLayout>
  );
}