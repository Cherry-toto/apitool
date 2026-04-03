"use client";

import { Sidebar } from "@/components/sidebar";
import { Header } from "@/components/header";
import { useTheme } from "@/contexts/theme-context";
import { useSidebar } from "@/contexts/sidebar-context";

interface ToolLayoutProps {
  children: React.ReactNode;
  title: string;
  description: string;
}

export default function ToolLayout({ children, title, description }: ToolLayoutProps) {
  const { theme } = useTheme();
  const { isCollapsed, toggleSidebar } = useSidebar();

  return (
    <div className={`flex min-h-screen ${theme === "dark" ? "dark bg-gray-900" : "bg-gray-50"}`}>
      <Sidebar isCollapsed={isCollapsed} onCollapseToggle={toggleSidebar} />
      
      <div className={`flex-1 flex flex-col ${isCollapsed ? 'ml-16' : 'ml-64 lg:ml-56 xl:ml-60'}`}>
        <Header sidebarCollapsed={isCollapsed} toggleSidebar={toggleSidebar} />
        
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