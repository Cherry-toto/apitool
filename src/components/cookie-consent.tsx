"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Link from "next/link";

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const hasConsented = localStorage.getItem("cookie-consent");
    
    if (!hasConsented) {
      setTimeout(() => {
        setIsVisible(true);
        setTimeout(() => setIsAnimating(true), 100);
      }, 1000);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleDecline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  const handleClose = () => {
    setIsAnimating(false);
    setTimeout(() => setIsVisible(false), 300);
  };

  if (!isVisible) return null;

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 bg-background border-t shadow-lg transform transition-transform duration-300 ease-in-out ${
        isAnimating ? "translate-y-0" : "translate-y-full"
      }`}
      role="dialog"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-description"
    >
      <div className="container mx-auto px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="flex-1 space-y-2">
            <h3 
              id="cookie-consent-title"
              className="font-semibold text-lg"
            >
              🍪 Cookie 使用声明
            </h3>
            <p 
              id="cookie-consent-description"
              className="text-sm text-muted-foreground"
            >
              我们使用 Cookie 来提升您的浏览体验、分析网站流量，并提供个性化服务。
              继续访问本网站即表示您同意我们的{" "}
              <Link 
                href="/privacy" 
                className="text-primary hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                隐私政策
              </Link>
              {" "}和 Cookie 政策。
            </p>
          </div>
          
          <div className="flex items-center gap-2 flex-shrink-0">
            <Button
              onClick={handleAccept}
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
              size="sm"
            >
              接受所有 Cookie
            </Button>
            <Button
              onClick={handleDecline}
              variant="outline"
              size="sm"
            >
              拒绝非必要 Cookie
            </Button>
            <Button
              onClick={handleClose}
              variant="ghost"
              size="icon"
              className="h-8 w-8"
              aria-label="关闭 Cookie 提示"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
