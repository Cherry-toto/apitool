'use client';

import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Copy, Palette, Droplets } from 'lucide-react';
import ToolLayout from '@/components/tool-layout';
import { hexToRgb, rgbToHex, rgbToHsl, hslToRgb, rgbToHsv, hsvToRgb } from '@/utils/color-utils';

interface ColorFormats {
  hex: string;
  rgb: string;
  hsl: string;
  hsv: string;
}

export default function ColorToolsPage() {
  const [color, setColor] = useState<ColorFormats>({
    hex: '#ffffff',
    rgb: 'rgb(255, 255, 255)',
    hsl: 'hsl(0, 0%, 100%)',
    hsv: 'hsv(0, 0%, 100%)'
  });

  const [copied, setCopied] = useState<string | null>(null);

  // Initialize with a default color
  useEffect(() => {
    handleColorChange('#ffffff');
  }, []);

  // Handle color picker change
  const handleColorPickerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = e.target.value;
    handleColorChange(newColor);
  };

  // Handle color change from any input
  const handleColorChange = (newColorValue: string) => {
    // Determine the format and convert to all formats
    let hex = '';
    let rgb = '';
    let hsl = '';
    let hsv = '';

    // If it's a hex value
    if (newColorValue.startsWith('#')) {
      hex = newColorValue.toLowerCase();
      const rgbValues = hexToRgb(hex);
      if (rgbValues) {
        rgb = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
        const hslValues = rgbToHsl(rgbValues.r, rgbValues.g, rgbValues.b);
        hsl = `hsl(${Math.round(hslValues.h)}, ${Math.round(hslValues.s)}%, ${Math.round(hslValues.l)}%)`;
        const hsvValues = rgbToHsv(rgbValues.r, rgbValues.g, rgbValues.b);
        hsv = `hsv(${Math.round(hsvValues.h)}, ${Math.round(hsvValues.s)}%, ${Math.round(hsvValues.v)}%)`;
      }
    } 
    // If it's an RGB value
    else if (newColorValue.startsWith('rgb')) {
      const match = newColorValue.match(/rgb\((\d+),\s*(\d+),\s*(\d+)\)/);
      if (match) {
        const r = parseInt(match[1]);
        const g = parseInt(match[2]);
        const b = parseInt(match[3]);
        hex = rgbToHex(r, g, b);
        const hslValues = rgbToHsl(r, g, b);
        hsl = `hsl(${Math.round(hslValues.h)}, ${Math.round(hslValues.s)}%, ${Math.round(hslValues.l)}%)`;
        const hsvValues = rgbToHsv(r, g, b);
        hsv = `hsv(${Math.round(hsvValues.h)}, ${Math.round(hsvValues.s)}%, ${Math.round(hsvValues.v)}%)`;
        rgb = newColorValue;
      }
    }
    // If it's an HSL value
    else if (newColorValue.startsWith('hsl')) {
      const match = newColorValue.match(/hsl\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
      if (match) {
        const h = parseInt(match[1]);
        const s = parseInt(match[2]);
        const l = parseInt(match[3]);
        const rgbValues = hslToRgb(h, s, l);
        hex = rgbToHex(rgbValues.r, rgbValues.g, rgbValues.b);
        rgb = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
        const hslValues = rgbToHsl(rgbValues.r, rgbValues.g, rgbValues.b);
        hsl = `hsl(${Math.round(hslValues.h)}, ${Math.round(hslValues.s)}%, ${Math.round(hslValues.l)}%)`;
        const hsvValues = rgbToHsv(rgbValues.r, rgbValues.g, rgbValues.b);
        hsv = `hsv(${Math.round(hsvValues.h)}, ${Math.round(hsvValues.s)}%, ${Math.round(hsvValues.v)}%)`;
        hsl = newColorValue;
      }
    }
    // If it's an HSV value
    else if (newColorValue.startsWith('hsv')) {
      const match = newColorValue.match(/hsv\((\d+),\s*(\d+)%,\s*(\d+)%\)/);
      if (match) {
        const h = parseInt(match[1]);
        const s = parseInt(match[2]);
        const v = parseInt(match[3]);
        const rgbValues = hsvToRgb(h, s, v);
        hex = rgbToHex(rgbValues.r, rgbValues.g, rgbValues.b);
        rgb = `rgb(${rgbValues.r}, ${rgbValues.g}, ${rgbValues.b})`;
        const hslValues = rgbToHsl(rgbValues.r, rgbValues.g, rgbValues.b);
        hsl = `hsl(${Math.round(hslValues.h)}, ${Math.round(hslValues.s)}%, ${Math.round(hslValues.l)}%)`;
        hsv = newColorValue;
      }
    }

    setColor({
      hex,
      rgb,
      hsl,
      hsv
    });
  };

  // Copy to clipboard function
  const copyToClipboard = (text: string, format: string) => {
    navigator.clipboard.writeText(text);
    setCopied(format);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <ToolLayout 
      title="Color Tools" 
      description="Convert between different color formats: HEX, RGB, HSL, and HSV"
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left panel - Color picker and preview */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Palette className="w-5 h-5" />
              Color Picker & Preview
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="flex flex-col items-center space-y-4">
              <div 
                className="w-48 h-48 rounded-lg border-2 border-gray-300 shadow-md"
                style={{ backgroundColor: color.hex }}
              ></div>
              
              <input
                type="color"
                value={color.hex}
                onChange={handleColorPickerChange}
                className="w-32 h-12 cursor-pointer"
              />
            </div>
            
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-gray-500">HEX</h3>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={color.hex}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="font-mono bg-gray-100 px-3 py-2 rounded w-full border border-gray-300 dark:text-white dark:bg-gray-700"
                    maxLength={7}
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyToClipboard(color.hex, 'hex')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">RGB</h3>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={color.rgb}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="font-mono bg-gray-100 px-3 py-2 rounded w-full border border-gray-300 dark:text-white dark:bg-gray-700"
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyToClipboard(color.rgb, 'rgb')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">HSL</h3>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={color.hsl}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="font-mono bg-gray-100 px-3 py-2 rounded w-full border border-gray-300 dark:text-white dark:bg-gray-700"
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyToClipboard(color.hsl, 'hsl')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
              
              <div>
                <h3 className="text-sm font-medium text-gray-500">HSV</h3>
                <div className="flex items-center gap-2 mt-1">
                  <input
                    type="text"
                    value={color.hsv}
                    onChange={(e) => handleColorChange(e.target.value)}
                    className="font-mono bg-gray-100 px-3 py-2 rounded w-full border border-gray-300 dark:text-white dark:bg-gray-700"
                  />
                  <Button 
                    size="sm" 
                    variant="outline" 
                    onClick={() => copyToClipboard(color.hsv, 'hsv')}
                  >
                    <Copy className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        
        {/* Right panel - Additional info and actions */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Droplets className="w-5 h-5" />
                Color Information
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Color Preview</h3>
                  <div 
                    className="w-full h-16 rounded-lg border border-gray-300 mt-2"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Format Conversion</h3>
                  <p className="text-sm text-gray-600 mt-1">
                    Change any color format to see real-time conversion to all other formats.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-sm font-medium text-gray-500">Usage Tips</h3>
                  <ul className="text-sm text-gray-600 mt-1 list-disc pl-5 space-y-1">
                    <li>Click the color picker to select a color visually</li>
                    <li>Click the copy button next to each format to copy to clipboard</li>
                    <li>All formats update in real-time when you change any value</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="flex justify-center">
            <Button 
              className="flex items-center gap-2"
              onClick={() => {
                // Reset to white
                handleColorChange('#ffffff');
              }}
            >
              <Palette className="w-4 h-4" />
              Reset to White
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
            <li>使用颜色选择器或直接输入颜色值来选择颜色</li>
            <li>所有颜色格式会实时转换显示</li>
            <li>点击每个格式旁边的复制按钮可复制该格式的值</li>
            <li>支持HEX、RGB、HSL和HSV格式之间的相互转换</li>
          </ul>
        </CardContent>
      </Card>
    </ToolLayout>
  );
}