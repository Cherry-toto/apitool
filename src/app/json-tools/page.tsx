"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import ToolLayout from "@/components/tool-layout";

export default function JsonToolsPage() {
  const [inputJson, setInputJson] = useState("");
  const [formattedJson, setFormattedJson] = useState("");
  const [isValidJson, setIsValidJson] = useState(true);

  const formatJson = () => {
    try {
      const parsed = JSON.parse(inputJson);
      setFormattedJson(JSON.stringify(parsed, null, 2));
      setIsValidJson(true);
    } catch (error) {
      setIsValidJson(false);
      setFormattedJson("Invalid JSON");
    }
  };

  const minifyJson = () => {
    try {
      const parsed = JSON.parse(inputJson);
      setFormattedJson(JSON.stringify(parsed));
      setIsValidJson(true);
    } catch (error) {
      setIsValidJson(false);
      setFormattedJson("Invalid JSON");
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(formattedJson);
  };

  return (
    <ToolLayout title="JSON 工具" description="格式化、验证和压缩 JSON 数据">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>输入 JSON</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="输入您的 JSON 数据..."
              value={inputJson}
              onChange={(e) => setInputJson(e.target.value)}
              rows={10}
              className="font-mono text-sm"
            />
            <div className="flex space-x-2 mt-4">
              <Button onClick={formatJson}>格式化 JSON</Button>
              <Button onClick={minifyJson} variant="secondary">压缩 JSON</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>输出结果</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={formattedJson}
              readOnly
              rows={10}
              className={`font-mono text-sm ${!isValidJson ? 'text-red-500' : ''}`}
            />
            <div className="flex justify-end mt-4">
              <Button onClick={copyToClipboard} disabled={!formattedJson}>
                复制结果
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>使用说明</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>在左侧输入框中粘贴您的 JSON 数据</li>
            <li>点击"格式化 JSON"按钮来美化输出格式</li>
            <li>点击"压缩 JSON"按钮来移除不必要的空白字符</li>
            <li>如果 JSON 无效，将在右侧显示错误信息</li>
          </ul>
        </CardContent>
      </Card>
    </ToolLayout>
  );
}