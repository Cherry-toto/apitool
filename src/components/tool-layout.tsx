"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { useTheme } from "@/contexts/theme-context";

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function ToolLayout({ children, title, description }: ToolLayoutProps) {
  const { theme } = useTheme();

  return (
    <div className={`flex min-h-screen ${theme === "dark" ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <Sidebar />
      
      <div className="flex-1 flex flex-col">
        <Header />
        
        <main className="flex-1 p-6 overflow-y-auto">
          <div className="max-w-7xl mx-auto">
            <div className="mb-6">
              <h1 className="text-3xl font-bold text-foreground">{title}</h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            
            {children}
          </div>
        </main>
        
        <footer className="py-4 px-6 border-t text-center text-sm text-muted-foreground">
          <p>免费开源工具 | Made with ❤️ for developers</p>
        </footer>
      </div>
    </div>
  );
}