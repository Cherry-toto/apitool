import Link from "next/link";
import { Home, FileJson, Network, QrCode, Palette, Calendar, Hash, Wrench, Settings, Globe, Clock, Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";

interface SidebarProps {
  isCollapsed?: boolean;
  onCollapseToggle?: () => void;
}

export const Sidebar = ({ isCollapsed = false, onCollapseToggle }: SidebarProps) => {
  const menuItems = [
    { icon: Home, label: "Home", href: "/" },
    { icon: FileJson, label: "JSON Tools", href: "/json-tools" },
    { icon: Settings, label: "API Tester", href: "/api-tester" },
    { icon: Hash, label: "Encode/Decode", href: "/encode-decode" },
    { icon: QrCode, label: "QR Code Generator", href: "/qr-generator" },
    { icon: Globe, label: "Network Info", href: "/network-info" },
    { icon: Palette, label: "Color Tools", href: "/color-tools" },
    { icon: Wrench, label: "Generators", href: "/generators" },
    { icon: Clock, label: "Time Tools", href: "/time-tools" },
  ];

  return (
    <aside className={`fixed inset-y-0 left-0 z-10 bg-background border-r transform transition-transform duration-300 ease-in-out ${
      isCollapsed ? '-translate-x-full lg:translate-x-0 lg:w-16' : 'translate-x-0 w-64'
    } lg:static lg:translate-x-0 lg:flex lg:flex-col h-full md:-translate-x-full lg:left-0`}>
      <div className="flex h-full max-h-screen flex-col gap-2">
        <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
          {!isCollapsed ? (
            <Link href="/" className="flex items-center gap-2 font-semibold">
              <span className="text-lg">APITool</span>
            </Link>
          ) : (
            <div className="flex items-center justify-center w-full">
              <Link href="/" className="flex items-center gap-2 font-semibold">
                <span className="text-lg">AT</span>
              </Link>
            </div>
          )}
          
          {onCollapseToggle && (
            <Button
              variant="ghost"
              size="icon"
              onClick={onCollapseToggle}
              className="ml-auto mr-0 lg:mr-0"
            >
              <Menu className="h-5 w-5" />
            </Button>
          )}
        </div>
        
        <div className="flex-1 overflow-y-auto">
          <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
            {menuItems.map((item, index) => (
              <Button
                key={index}
                variant="ghost"
                className={`w-full justify-start mb-1 dark:hover:bg-gray-800 dark:hover:text-white dark:text-gray-300 ${
                  isCollapsed ? 'justify-center' : ''
                }`}
                asChild
              >
                <Link href={item.href}>
                  <item.icon className={`${isCollapsed ? 'mr-0' : 'mr-2'} h-4 w-4`} />
                  {!isCollapsed && <span>{item.label}</span>}
                </Link>
              </Button>
            ))}
          </nav>
        </div>
        
        {!isCollapsed && (
          <div className="mt-auto p-4 text-xs text-gray-500 dark:text-gray-400">
            <p>v1.0.0</p>
          </div>
        )}
      </div>
    </aside>
  );
};