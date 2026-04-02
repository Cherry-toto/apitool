"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import ToolLayout from "@/components/tool-layout";

export default function ApiTesterPage() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState("{}");
  const [body, setBody] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSendRequest = async () => {
    setLoading(true);
    try {
      const headersObj = JSON.parse(headers);
      const options: RequestInit = {
        method,
        headers: {
          "Content-Type": "application/json",
          ...headersObj,
        },
      };

      if (method !== "GET" && body.trim()) {
        options.body = body;
      }

      const res = await fetch(url, options);
      const data = await res.text();
      setResponse(`Status: ${res.status}\n\n${data}`);
    } catch (error: any) {
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(response);
  };

  return (
    <ToolLayout title="API 测试器" description="发送 HTTP 请求并测试 API 接口">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>请求配置</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-4 gap-2">
              <div className="col-span-1">
                <Select value={method} onValueChange={setMethod}>
                  <SelectTrigger>
                    <SelectValue placeholder="方法" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="GET">GET</SelectItem>
                    <SelectItem value="POST">POST</SelectItem>
                    <SelectItem value="PUT">PUT</SelectItem>
                    <SelectItem value="DELETE">DELETE</SelectItem>
                    <SelectItem value="PATCH">PATCH</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="col-span-3">
                <Input
                  placeholder="https://api.example.com/data"
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">请求头 (JSON格式)</label>
              <Textarea
                placeholder='{"Authorization": "Bearer token"}'
                value={headers}
                onChange={(e) => setHeaders(e.target.value)}
                rows={3}
              />
            </div>

            {method !== "GET" && (
              <div>
                <label className="text-sm font-medium">请求体</label>
                <Textarea
                  placeholder="请求数据..."
                  value={body}
                  onChange={(e) => setBody(e.target.value)}
                  rows={5}
                />
              </div>
            )}

            <Button onClick={handleSendRequest} disabled={loading || !url}>
              {loading ? "发送中..." : "发送请求"}
            </Button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>响应结果</CardTitle>
          </CardHeader>
          <CardContent>
            <Textarea
              value={response}
              readOnly
              rows={12}
              className="font-mono text-sm"
            />
            <div className="flex justify-end mt-4">
              <Button onClick={copyToClipboard} disabled={!response}>
                复制响应
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
            <li>选择HTTP方法并输入目标URL</li>
            <li>可选：添加请求头（JSON格式）</li>
            <li>对于非GET请求，可以添加请求体</li>
            <li>点击"发送请求"按钮执行API调用</li>
            <li>响应结果将显示在右侧区域</li>
          </ul>
        </CardContent>
      </Card>
    </ToolLayout>
  );
}