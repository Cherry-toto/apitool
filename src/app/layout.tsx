import "@/styles/globals.css";
import type { Metadata } from "next";
import { ThemeProvider } from "@/contexts/theme-context";

export const metadata: Metadata = {
  title: "APITool - 免费开发者实用工具",
  description: "现代开发者在线工具集合，包含JSON工具、API测试器、编码解码器等",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}