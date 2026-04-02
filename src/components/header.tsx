import Link from "next/link";
import { Moon, Sun, Github, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/theme-context";

interface HeaderProps {
  sidebarCollapsed?: boolean;
  toggleSidebar?: () => void;
}

export const Header = ({ sidebarCollapsed, toggleSidebar }: HeaderProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="sticky top-0 z-10 bg-background/80 backdrop-blur-sm border-b dark:border-gray-700">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          {/* 在小屏幕上显示汉堡菜单按钮 */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleSidebar}
            className="mr-2 lg:hidden"
            aria-label="Toggle sidebar"
          >
            <Menu className="h-5 w-5" />
          </Button>
          
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
              APITool
            </span>
            <span className="hidden sm:inline-block text-sm text-muted-foreground">
              免费开发者实用工具
            </span>
          </Link>
        </div>
        
        <div className="flex items-center space-x-3">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-5 w-5 text-yellow-400" />
            ) : (
              <Moon className="h-5 w-5 text-gray-700" />
            )}
          </Button>
          
          <Button
            variant="ghost"
            size="icon"
            asChild
            aria-label="GitHub"
          >
            <a
              href="https://github.com/Cherry-toto/apitool"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
            </a>
          </Button>
        </div>
      </div>
    </header>
  );
};