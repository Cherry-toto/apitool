'use client';

import { useState, useRef } from 'react';
import { QRCodeCanvas, QRCodeSVG } from 'qrcode.react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Download, Palette, Settings } from 'lucide-react';
import ToolLayout from "@/components/tool-layout";

export default function QRGeneratorPage() {
  // 基础状态
  const [text, setText] = useState<string>('https://example.com');
  const [size, setSize] = useState<number>(200);
  const [foregroundColor, setForegroundColor] = useState<string>('#000000');
  const [backgroundColor, setBackgroundColor] = useState<string>('#FFFFFF');
  const [errorCorrectionLevel, setErrorCorrectionLevel] = useState<'L' | 'M' | 'Q' | 'H'>('M');
  
  // 预设模板状态
  const [templateType, setTemplateType] = useState<'text' | 'wifi' | 'contact' | 'email' | 'location'>('text');
  const [wifiSSID, setWifiSSID] = useState<string>('');
  const [wifiPassword, setWifiPassword] = useState<string>('');
  const [wifiEncryption, setWifiEncryption] = useState<'WPA' | 'WEP' | 'nopass'>('WPA');
  const [contactName, setContactName] = useState<string>('');
  const [contactPhone, setContactPhone] = useState<string>('');
  const [contactEmail, setContactEmail] = useState<string>('');
  const [emailAddress, setEmailAddress] = useState<string>('');
  const [emailSubject, setEmailSubject] = useState<string>('');
  const [emailBody, setEmailBody] = useState<string>('');
  const [locationLat, setLocationLat] = useState<string>('');
  const [locationLon, setLocationLon] = useState<string>('');

  const canvasRef = useRef<HTMLCanvasElement>(null);

  // 根据模板类型生成内容
  const generateQRContent = (): string => {
    switch (templateType) {
      case 'wifi':
        return `WIFI:T:${wifiEncryption};S:${wifiSSID};P:${wifiPassword};;`;
      case 'contact':
        return `MECARD:N:${contactName};TEL:${contactPhone};EMAIL:${contactEmail};;`;
      case 'email':
        return `MATMSG:TO:${emailAddress};SUB:${emailSubject};BODY:${emailBody};;`;
      case 'location':
        return `geo:${locationLat},${locationLon}`;
      default:
        return text;
    }
  };

  // 处理下载为PNG
  const handleDownloadPNG = () => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const pngUrl = canvas.toDataURL('image/png');
      
      const downloadLink = document.createElement('a');
      downloadLink.href = pngUrl;
      downloadLink.download = 'qrcode.png';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  // 处理下载为SVG
  const handleDownloadSVG = () => {
    const svgElement = document.querySelector('#qrcode-svg svg');
    if (svgElement) {
      const serializer = new XMLSerializer();
      const svgString = serializer.serializeToString(svgElement);
      const blob = new Blob([svgString], { type: 'image/svg+xml' });
      const url = URL.createObjectURL(blob);
      
      const downloadLink = document.createElement('a');
      downloadLink.href = url;
      downloadLink.download = 'qrcode.svg';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      URL.revokeObjectURL(url);
    }
  };

  const qrContent = generateQRContent();

  return (
    <ToolLayout title="QR Code Generator" description="生成二维码，支持多种格式和自定义选项">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* 左侧控制面板 */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Settings className="w-5 h-5" />
              QR Code Settings
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <Tabs value={templateType} onValueChange={(v: any) => setTemplateType(v)}>
              <TabsList className="grid w-full grid-cols-5">
                <TabsTrigger value="text">Text/URL</TabsTrigger>
                <TabsTrigger value="wifi">WiFi</TabsTrigger>
                <TabsTrigger value="contact">Contact</TabsTrigger>
                <TabsTrigger value="email">Email</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
              </TabsList>
              
              <TabsContent value="text" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Text/URL</label>
                  <Input
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Enter text or URL to encode..."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="wifi" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Network Name (SSID)</label>
                  <Input
                    value={wifiSSID}
                    onChange={(e) => setWifiSSID(e.target.value)}
                    placeholder="Enter network name..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Password</label>
                  <Input
                    value={wifiPassword}
                    onChange={(e) => setWifiPassword(e.target.value)}
                    placeholder="Enter password..."
                    type="password"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Encryption Type</label>
                  <Select value={wifiEncryption} onValueChange={(v: any) => setWifiEncryption(v)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select encryption" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="WPA">WPA/WPA2</SelectItem>
                      <SelectItem value="WEP">WEP</SelectItem>
                      <SelectItem value="nopass">No Password</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </TabsContent>
              
              <TabsContent value="contact" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <Input
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    placeholder="Enter contact name..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <Input
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
                    placeholder="Enter phone number..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <Input
                    value={contactEmail}
                    onChange={(e) => setContactEmail(e.target.value)}
                    placeholder="Enter email address..."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="email" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Email Address</label>
                  <Input
                    value={emailAddress}
                    onChange={(e) => setEmailAddress(e.target.value)}
                    placeholder="Enter email address..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <Input
                    value={emailSubject}
                    onChange={(e) => setEmailSubject(e.target.value)}
                    placeholder="Enter subject..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Body</label>
                  <Input
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    placeholder="Enter message body..."
                  />
                </div>
              </TabsContent>
              
              <TabsContent value="location" className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Latitude</label>
                  <Input
                    value={locationLat}
                    onChange={(e) => setLocationLat(e.target.value)}
                    placeholder="Enter latitude (e.g., 37.7749)..."
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Longitude</label>
                  <Input
                    value={locationLon}
                    onChange={(e) => setLocationLon(e.target.value)}
                    placeholder="Enter longitude (e.g., -122.4194)..."
                  />
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Size (px)</label>
                <Input
                  type="number"
                  min="100"
                  max="1000"
                  value={size}
                  onChange={(e) => setSize(Number(e.target.value))}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Error Correction</label>
                <Select value={errorCorrectionLevel} onValueChange={(v: any) => setErrorCorrectionLevel(v)}>
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="L">Low (7%)</SelectItem>
                    <SelectItem value="M">Medium (15%)</SelectItem>
                    <SelectItem value="Q">Quartile (25%)</SelectItem>
                    <SelectItem value="H">High (30%)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-2">Foreground Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={foregroundColor}
                    onChange={(e) => setForegroundColor(e.target.value)}
                    className="w-10 h-10 border-0 rounded cursor-pointer"
                  />
                  <Input
                    value={foregroundColor}
                    onChange={(e) => setForegroundColor(e.target.value)}
                    className="font-mono text-xs"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2">Background Color</label>
                <div className="flex items-center gap-2">
                  <input
                    type="color"
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="w-10 h-10 border-0 rounded cursor-pointer"
                  />
                  <Input
                    value={backgroundColor}
                    onChange={(e) => setBackgroundColor(e.target.value)}
                    className="font-mono text-xs"
                  />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* 右侧预览和下载 */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Palette className="w-5 h-5" />
                Preview
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center p-8">
              <div id="qrcode-svg" className="mb-6">
                <QRCodeSVG
                  value={qrContent}
                  size={size}
                  fgColor={foregroundColor}
                  bgColor={backgroundColor}
                  level={errorCorrectionLevel}
                  includeMargin={true}
                />
              </div>
              
              <div className="hidden">
                <QRCodeCanvas
                  ref={canvasRef}
                  value={qrContent}
                  size={size}
                  fgColor={foregroundColor}
                  bgColor={backgroundColor}
                  level={errorCorrectionLevel}
                  includeMargin={true}
                />
              </div>
              
              <p className="text-sm text-gray-500 mt-4 break-all text-center max-w-md">
                {qrContent.length > 100 ? `${qrContent.substring(0, 100)}...` : qrContent}
              </p>
            </CardContent>
          </Card>
          
          <div className="flex gap-4 justify-center">
            <Button onClick={handleDownloadPNG} className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download PNG
            </Button>
            <Button onClick={handleDownloadSVG} variant="outline" className="flex items-center gap-2">
              <Download className="w-4 h-4" />
              Download SVG
            </Button>
          </div>
        </div>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>使用说明</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc pl-5 space-y-2">
            <li>在左侧选择模板类型并输入相应信息</li>
            <li>调整尺寸、颜色和纠错级别等自定义选项</li>
            <li>右侧将实时预览生成的二维码</li>
            <li>点击按钮下载 PNG 或 SVG 格式的二维码</li>
          </ul>
        </CardContent>
      </Card>
    </ToolLayout>
  );
}