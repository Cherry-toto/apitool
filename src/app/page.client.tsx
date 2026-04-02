"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { useTheme } from "@/contexts/theme-context";

export default function Home() {
  const { theme } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const router = useRouter();

  const toggleSidebar = () => {
    setSidebarCollapsed(!sidebarCollapsed);
  };

  const navigateToTool = (toolName: string) => {
    // Convert Chinese tool name to English route path
    const toolRoutes: Record<string, string> = {
      "JSON 工具": "/json-tools",
      "API 测试器": "/api-tester",
      "编码/解码": "/encode-decode",
      "二维码生成": "/qr-generator",
      "网络信息": "/network-info",
      "颜色工具": "/color-tools",
      "密码与随机数生成": "/generators",
      "时间转化工具": "/time-tools",
    };
    
    const route = toolRoutes[toolName] || "/";
    router.push(route);
  };

  return (
    <div className="flex min-h-screen">
      <Sidebar isCollapsed={sidebarCollapsed} onCollapseToggle={toggleSidebar} />
      
      <div className={`flex-1 flex flex-col `}>
        <Header sidebarCollapsed={sidebarCollapsed} toggleSidebar={toggleSidebar} />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle>APITool 仪表盘</CardTitle>
                <CardDescription>欢迎使用开发者实用工具集合</CardDescription>
              </CardHeader>
              <CardContent>
                <p>这里提供各种开发者常用的在线工具，无需安装，即开即用。</p>
              </CardContent>
            </Card>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "JSON 工具", desc: "格式化、验证、转换 JSON 数据", icon: "📋" },
                { title: "API 测试器", desc: "发送请求、测试 API 接口", icon: "🧪" },
                { title: "编码/解码", desc: "Base64、URL 编码解码工具", icon: "🔒" },
                { title: "二维码生成", desc: "生成和解析二维码", icon: "📱" },
                { title: "网络信息", desc: "IP 查询、网络诊断工具", icon: "🌐" },
                { title: "颜色工具", desc: "颜色选择器、调色板生成", icon: "🎨" },
                { title: "密码与随机数生成", desc: "生成安全的密码和随机数", icon: "🔑" },
                { title: "时间转化工具", desc: "时间戳转换、全球时间查询", icon: "⏰" },
              ].map((item, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{item.icon} {item.title}</CardTitle>
                    <CardDescription>{item.desc}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Button variant="outline" className="w-full" onClick={() => navigateToTool(item.title)}>开始使用</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
        
        <footer className="py-4 px-6 border-t dark:border-gray-700 text-center text-sm text-gray-500 dark:text-gray-400">
          <p>免费开源工具 | Made with ❤️ for developers</p>
        </footer>
      </div>
    </div>
  );
}