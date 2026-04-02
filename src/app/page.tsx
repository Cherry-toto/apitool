import { Metadata } from "next";
import HomePage from "./page.client";

export const metadata: Metadata = {
  title: "APITool - 免费开发者实用工具集 | JSON工具、API测试器、编码解码器",
  description: "现代开发者在线工具集合，包含JSON格式化、API测试、编码解码、二维码生成、网络信息查询等多种实用工具，无需安装，即开即用。",
  keywords: "开发者工具, JSON工具, API测试器, 编码解码, 二维码生成, 网络信息, 在线工具, 免费工具",
  openGraph: {
    title: "APITool - 免费开发者实用工具集",
    description: "现代开发者在线工具集合，包含JSON格式化、API测试、编码解码、二维码生成等多种实用工具",
    type: "website",
    url: "https://your-domain.com",
  },
  twitter: {
    card: "summary_large_image",
    title: "APITool - 免费开发者实用工具集",
    description: "现代开发者在线工具集合，包含JSON格式化、API测试、编码解码、二维码生成等多种实用工具",
  },
};

export default function Home() {
  return <HomePage />;
}