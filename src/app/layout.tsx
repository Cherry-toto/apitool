import "@/styles/globals.css";
import type { Metadata } from "next";
import Script from "next/script";
import { ThemeProvider } from "@/contexts/theme-context";
import { SidebarProvider } from "@/contexts/sidebar-context";
import { CookieConsent } from "@/components/cookie-consent";

export const metadata: Metadata = {
  title: {
    default: "APITool - 免费开发者实用工具集 | JSON工具、API测试器、编码解码器",
    template: "%s | APITool - 开发者工具集"
  },
  description: "现代开发者在线工具集合，包含JSON格式化、API测试、编码解码、二维码生成、网络信息查询等多种实用工具，无需安装，即开即用。",
  keywords: "开发者工具, JSON工具, API测试器, 编码解码, 二维码生成, 网络信息, 在线工具, 免费工具, 开发实用工具",
  authors: [{ name: "APITool Team", url: "https://github.com/Cherry-toto/apitool" }],
  creator: "APITool Team",
  publisher: "APITool Team",
  openGraph: {
    type: "website",
    locale: "zh_CN",
    url: "https://apitool.top",
    title: "APITool - 免费开发者实用工具集",
    description: "现代开发者在线工具集合，包含JSON格式化、API测试、编码解码、二维码生成等多种实用工具",
    siteName: "APITool",
    images: [
      {
        url: "/og-image.jpg", // 如果有OG图片的话
        width: 1200,
        height: 630,
        alt: "APITool - 开发者工具集",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "APITool - 免费开发者实用工具集",
    description: "现代开发者在线工具集合，包含JSON格式化、API测试、编码解码、二维码生成等多种实用工具",
    creator: "@apitool_dev",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code', // 替换为实际的验证代码
    yandex: 'yandex-verification-code',     // 替换为实际的验证代码
  },
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/site.webmanifest',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">
        <ThemeProvider>
          <SidebarProvider>
            {children}
            <CookieConsent />
          </SidebarProvider>
        </ThemeProvider>
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1475305512915596"
          crossOrigin="anonymous"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}