"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ToolLayout from "@/components/tool-layout";

export default function EncodeDecodePage() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");
  const [operation, setOperation] = useState("base64-encode");

  const performOperation = () => {
    try {
      switch(operation) {
        case "base64-encode":
          setOutputText(btoa(encodeURIComponent(inputText)));
          break;
        case "base64-decode":
          setOutputText(decodeURIComponent(atob(inputText)));
          break;
        case "url-encode":
          setOutputText(encodeURIComponent(inputText));
          break;
        case "url-decode":
          setOutputText(decodeURIComponent(inputText));
          break;
        case "html-encode":
          setOutputText(inputText
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#x27;")
            .replace(/\//g, "&#x2F;")
          );
          break;
        case "html-decode":
          setOutputText(inputText
            .replace(/&amp;/g, "&")
            .replace(/&lt;/g, "<")
            .replace(/&gt;/g, ">")
            .replace(/&quot;/g, '"')
            .replace(/&#x27;/g, "'")
            .replace(/&#x2F;/g, "/")
          );
          break;
        default:
          setOutputText("");
      }
    } catch (error) {
      setOutputText("Error: " + (error as Error).message);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(outputText);
  };

  const clearAll = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <ToolLayout title="编码/解码工具" description="Base64、URL、HTML 编码解码工具">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>输入文本</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              placeholder="输入要编码或解码的文本..."
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              rows={8}
            />
            <div className="flex space-x-2 mt-4">
              <Select value={operation} onValueChange={setOperation}>
                <SelectTrigger>
                  <SelectValue placeholder="选择操作" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="base64-encode">Base64 编码</SelectItem>
                  <SelectItem value="base64-decode">Base64 解码</SelectItem>
                  <SelectItem value="url-encode">URL 编码</SelectItem>
                  <SelectItem value="url-decode">URL 解码</SelectItem>
                  <SelectItem value="html-encode">HTML 编码</SelectItem>
                  <SelectItem value="html-decode">HTML 解码</SelectItem>
                </SelectContent>
              </Select>
              <Button onClick={performOperation}>执行</Button>
              <Button onClick={clearAll} variant="outline">清空</Button>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>输出结果</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={outputText}
              readOnly
              rows={8}
              className="font-mono text-sm"
            />
            <div className="flex justify-end mt-4">
              <Button onClick={copyToClipboard} disabled={!outputText}>
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
            <li>在左侧输入框中输入要处理的文本</li>
            <li>从下拉菜单中选择要执行的操作类型</li>
            <li>点击"执行"按钮进行编码或解码</li>
            <li>结果将显示在右侧输出框中</li>
            <li>支持 Base64、URL 和 HTML 编码/解码</li>
          </ul>
        </CardContent>
      </Card>
    </ToolLayout>
  );
}