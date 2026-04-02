'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, Info, Globe, Monitor, Smartphone } from 'lucide-react';
import ToolLayout from '@/components/tool-layout';
import ClientOnly from '@/components/client-only-info';

interface NetworkInfo {
  ip: string;
  userAgent: string;
  browser: string;
  os: string;
  device: string;
  timezone: string;
  language: string;
  screenResolution: string;
  windowSize: string;
}

export default function NetworkInfoPage() {
  const [networkInfo, setNetworkInfo] = useState<NetworkInfo>({
    ip: '',
    userAgent: '',
    browser: '',
    os: '',
    device: '',
    timezone: '',
    language: '',
    screenResolution: '',
    windowSize: ''
  });

  const [loading, setLoading] = useState<boolean>(true);
  const [copied, setCopied] = useState<boolean>(false);

  // Parse User Agent to extract browser, OS, and device info
  const parseUserAgent = (ua: string): { browser: string; os: string; device: string } => {
    let browser = 'Unknown';
    let os = 'Unknown';
    let device = 'Unknown';

    // Detect OS
    if (ua.includes('Windows NT 10.0')) os = 'Windows 10/11';
    else if (ua.includes('Windows NT 6.3')) os = 'Windows 8.1';
    else if (ua.includes('Windows NT 6.2')) os = 'Windows 8';
    else if (ua.includes('Windows NT 6.1')) os = 'Windows 7';
    else if (ua.includes('Mac OS X')) os = 'macOS';
    else if (ua.includes('Android')) os = 'Android';
    else if (ua.includes('iPhone') || ua.includes('iPad')) os = 'iOS';
    else if (ua.includes('Linux')) os = 'Linux';

    // Detect Browser
    if (ua.includes('Chrome') && !ua.includes('Edg')) browser = 'Chrome';
    else if (ua.includes('Firefox')) browser = 'Firefox';
    else if (ua.includes('Safari') && !ua.includes('Chrome')) browser = 'Safari';
    else if (ua.includes('Edg')) browser = 'Edge';
    else if (ua.includes('Opera') || ua.includes('OPR')) browser = 'Opera';

    // Detect Device
    if (/mobile|android|iphone|ipod|ipad|iemobile|wpdesktop/i.test(ua)) {
      device = /tablet|ipad/i.test(ua) ? 'Tablet' : 'Mobile';
    } else {
      device = 'Desktop';
    }

    return { browser, os, device };
  };

  // Fetch network information
  const fetchNetworkInfo = async () => {
    try {
      // Get IP address
      const ipResponse = await fetch('https://api.ipify.org?format=json');
      const ipData = await ipResponse.json();
      const ip = ipData.ip;

      // Get user agent
      const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
      const { browser, os, device } = parseUserAgent(userAgent);

      // Get timezone
      const timezone = typeof window !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone : '';

      // Get language
      const language = typeof window !== 'undefined' ? navigator.language : '';

      // Get screen resolution
      const screenResolution = typeof window !== 'undefined' ? `${screen.width} x ${screen.height}` : '';

      // Get window size
      const windowSize = typeof window !== 'undefined' ? `${window.innerWidth} x ${window.innerHeight}` : '';

      setNetworkInfo({
        ip,
        userAgent,
        browser,
        os,
        device,
        timezone,
        language,
        screenResolution,
        windowSize
      });
    } catch (error) {
      console.error('Error fetching network info:', error);
      // Fallback values
      const userAgent = typeof window !== 'undefined' ? navigator.userAgent : '';
      const { browser, os, device } = parseUserAgent(userAgent);
      
      setNetworkInfo({
        ip: 'Unable to fetch',
        userAgent,
        browser,
        os,
        device,
        timezone: typeof window !== 'undefined' ? Intl.DateTimeFormat().resolvedOptions().timeZone : '',
        language: typeof window !== 'undefined' ? navigator.language : '',
        screenResolution: typeof window !== 'undefined' ? `${screen.width} x ${screen.height}` : '',
        windowSize: typeof window !== 'undefined' ? `${window.innerWidth} x ${window.innerHeight}` : ''
      });
    } finally {
      setLoading(false);
    }
  };

  // Copy all information to clipboard
  const copyAllInfo = () => {
    if (typeof window !== 'undefined') {
      // Type assertion for navigator.connection
      const connection = (navigator as any).connection;
      const infoText = `
Current IP: ${networkInfo.ip}
User Agent: ${networkInfo.userAgent}
Browser: ${networkInfo.browser}
Operating System: ${networkInfo.os}
Device Type: ${networkInfo.device}
Timezone: ${networkInfo.timezone}
Language: ${networkInfo.language}
Screen Resolution: ${networkInfo.screenResolution}
Window Size: ${networkInfo.windowSize}
Connection Type: ${connection ? connection.effectiveType : 'Not available'}
Online Status: ${navigator.onLine ? 'Online' : 'Offline'}
Cookies Enabled: ${navigator.cookieEnabled ? 'Yes' : 'No'}
Platform: ${navigator.platform}
      `.trim();

      navigator.clipboard.writeText(infoText);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  useEffect(() => {
    fetchNetworkInfo();
  }, []);

  return (
    <ToolLayout title="Network Information" description="View your network details, browser information, and system specifications">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left panel - Network Information */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Info className="w-5 h-5" />
              Network Details
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {loading ? (
              <div className="text-center py-8">Loading network information...</div>
            ) : (
              <>
                <div className="space-y-3">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">IP Address</h3>
                    <p className="text-lg font-semibold">{networkInfo.ip}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">User Agent</h3>
                    <p className="break-all text-sm">{networkInfo.userAgent}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Browser</h3>
                      <p>{networkInfo.browser}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Operating System</h3>
                      <p>{networkInfo.os}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Device Type</h3>
                      <p className="flex items-center gap-1">
                        {networkInfo.device === 'Mobile' && <Smartphone className="w-4 h-4" />}
                        {networkInfo.device === 'Tablet' && <Monitor className="w-4 h-4" />}
                        {networkInfo.device === 'Desktop' && <Monitor className="w-4 h-4" />}
                        {networkInfo.device}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Timezone</h3>
                      <p>{networkInfo.timezone}</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Language</h3>
                      <p>{networkInfo.language}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Screen Resolution</h3>
                      <p>{networkInfo.screenResolution}</p>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Window Size</h3>
                    <p>{networkInfo.windowSize}</p>
                  </div>
                </div>
              </>
            )}
          </CardContent>
        </Card>
        
        {/* Right panel - Additional info and actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Globe className="w-5 h-5" />
                Additional Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Connection Type</h3>
                    <p>Loading...</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Online Status</h3>
                    <p>Loading...</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Cookies Enabled</h3>
                    <p>Loading...</p>
                  </div>
                  
                  <div>
                    <h3 className="text-sm font-medium text-muted-foreground">Platform</h3>
                    <p>Loading...</p>
                  </div>
                </div>
              ) : (
                <ClientOnly>
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Connection Type</h3>
                      <p>
                        {(navigator as any).connection 
                          ? (navigator as any).connection.effectiveType 
                          : 'Not available'}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Online Status</h3>
                      <p className={navigator.onLine ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'}>
                        {navigator.onLine ? 'Online' : 'Offline'}
                      </p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Cookies Enabled</h3>
                      <p>{navigator.cookieEnabled ? 'Yes' : 'No'}</p>
                    </div>
                    
                    <div>
                      <h3 className="text-sm font-medium text-muted-foreground">Platform</h3>
                      <p>{navigator.platform}</p>
                    </div>
                  </div>
                </ClientOnly>
              )}
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Button 
              onClick={copyAllInfo} 
              className="flex items-center gap-2"
              disabled={loading}
            >
              <Copy className="w-4 h-4" />
              {copied ? 'Copied!' : 'Copy All Information'}
            </Button>
          </div>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>使用说明</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2 text-muted-foreground">
            <li>本页面显示您的网络信息、浏览器详情和系统规格</li>
            <li>IP地址通过公共API获取</li>
            <li>浏览器、操作系统和设备信息通过User Agent解析</li>
            <li>点击"Copy All Information"按钮可复制所有信息</li>
          </ul>
        </CardContent>
      </Card>
    </ToolLayout>
  );
}