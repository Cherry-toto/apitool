"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Copy, RefreshCw, Clock, Globe, Calendar, ArrowLeftRight, Timer } from "lucide-react";
import ToolLayout from "@/components/tool-layout";

const timezones = [
  { value: "UTC", label: "UTC (协调世界时)" },
  { value: "Asia/Shanghai", label: "中国 - 北京 (UTC+8)" },
  { value: "Asia/Tokyo", label: "日本 - 东京 (UTC+9)" },
  { value: "Asia/Seoul", label: "韩国 - 首尔 (UTC+9)" },
  { value: "Asia/Singapore", label: "新加坡 (UTC+8)" },
  { value: "Asia/Dubai", label: "阿联酋 - 迪拜 (UTC+4)" },
  { value: "Europe/London", label: "英国 - 伦敦 (UTC+0)" },
  { value: "Europe/Paris", label: "法国 - 巴黎 (UTC+1)" },
  { value: "Europe/Berlin", label: "德国 - 柏林 (UTC+1)" },
  { value: "Europe/Moscow", label: "俄罗斯 - 莫斯科 (UTC+3)" },
  { value: "America/New_York", label: "美国 - 纽约 (UTC-5)" },
  { value: "America/Los_Angeles", label: "美国 - 洛杉矶 (UTC-8)" },
  { value: "America/Chicago", label: "美国 - 芝加哥 (UTC-6)" },
  { value: "America/Toronto", label: "加拿大 - 多伦多 (UTC-5)" },
  { value: "Australia/Sydney", label: "澳大利亚 - 悉尼 (UTC+10)" },
  { value: "Pacific/Auckland", label: "新西兰 - 奥克兰 (UTC+12)" },
  { value: "Asia/Kolkata", label: "印度 - 孟买 (UTC+5:30)" },
  { value: "Asia/Bangkok", label: "泰国 - 曼谷 (UTC+7)" },
  { value: "Asia/Ho_Chi_Minh", label: "越南 - 胡志明市 (UTC+7)" },
  { value: "Asia/Jakarta", label: "印度尼西亚 - 雅加达 (UTC+7)" },
];

export default function TimeToolsPage() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [currentTimestamp, setCurrentTimestamp] = useState(Math.floor(Date.now() / 1000));
  
  const [timestampInput, setTimestampInput] = useState("");
  const [timestampOutput, setTimestampOutput] = useState("");
  
  const [dateInput, setDateInput] = useState("");
  const [dateToTimestampOutput, setDateToTimestampOutput] = useState("");
  
  const [selectedTimezone, setSelectedTimezone] = useState("Asia/Shanghai");
  const [worldTimeOutput, setWorldTimeOutput] = useState("");
  
  const [formatInput, setFormatInput] = useState("");
  const [formatOutput, setFormatOutput] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
      setCurrentTimestamp(Math.floor(now.getTime() / 1000));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const worldTime = new Date().toLocaleString("en-US", { timeZone: selectedTimezone });
      setWorldTimeOutput(worldTime);
    }, 1000);

    return () => clearInterval(timer);
  }, [selectedTimezone]);

  const convertTimestamp = () => {
    const timestamp = parseInt(timestampInput);
    if (isNaN(timestamp)) {
      setTimestampOutput("请输入有效的时间戳");
      return;
    }

    const date = new Date(timestamp * 1000);
    const formatted = date.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
    setTimestampOutput(formatted);
  };

  const convertDateToTimestamp = () => {
    if (!dateInput) {
      setDateToTimestampOutput("请选择日期和时间");
      return;
    }

    const date = new Date(dateInput);
    const timestamp = Math.floor(date.getTime() / 1000);
    setDateToTimestampOutput(timestamp.toString());
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const formatCurrentTime = (date: Date) => {
    return date.toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });
  };

  return (
    <ToolLayout title="时间转化工具" description="时间戳转换、全球时间查询、日期格式化等工具">
      <Tabs defaultValue="current" className="w-full">
        <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4">
          <TabsTrigger value="current">
            <Clock className="h-4 w-4 mr-2" />
            当前时间
          </TabsTrigger>
          <TabsTrigger value="timestamp">
            <ArrowLeftRight className="h-4 w-4 mr-2" />
            时间戳转换
          </TabsTrigger>
          <TabsTrigger value="date">
            <Calendar className="h-4 w-4 mr-2" />
            日期转时间戳
          </TabsTrigger>
          <TabsTrigger value="world">
            <Globe className="h-4 w-4 mr-2" />
            全球时间
          </TabsTrigger>
        </TabsList>

        <TabsContent value="current" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>当前时间</CardTitle>
                <CardDescription>实时显示当前本地时间</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Input
                    value={formatCurrentTime(currentTime)}
                    readOnly
                    className="font-mono text-2xl text-center pr-12"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8"
                    onClick={() => copyToClipboard(formatCurrentTime(currentTime))}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  <p>格式：YYYY-MM-DD HH:mm:ss</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>当前时间戳</CardTitle>
                <CardDescription>实时显示当前 Unix 时间戳（秒）</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Input
                    value={currentTimestamp.toString()}
                    readOnly
                    className="font-mono text-2xl text-center pr-12"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8"
                    onClick={() => copyToClipboard(currentTimestamp.toString())}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-center text-sm text-muted-foreground">
                  <p>Unix 时间戳（秒）</p>
                  <p className="text-green-600 dark:text-green-400">✓ 实时更新中</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>时间戳说明</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>Unix 时间戳是从 1970 年 1 月 1 日 00:00:00 UTC 开始经过的秒数</li>
                <li>时间戳不受时区影响，是全球统一的时间表示方式</li>
                <li>常用于数据库存储、API 通信、日志记录等场景</li>
                <li>当前时间戳会每秒自动更新</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="timestamp" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>时间戳输入</CardTitle>
                <CardDescription>输入 Unix 时间戳（秒）</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="timestamp">时间戳</Label>
                  <Input
                    id="timestamp"
                    type="number"
                    placeholder="例如：1704067200"
                    value={timestampInput}
                    onChange={(e) => setTimestampInput(e.target.value)}
                  />
                </div>
                <Button onClick={convertTimestamp} className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  转换为日期
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>转换结果</CardTitle>
                <CardDescription>点击复制按钮复制结果</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Input
                    value={timestampOutput}
                    readOnly
                    className="font-mono text-xl pr-12"
                    placeholder="转换后的日期时间..."
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8"
                    onClick={() => copyToClipboard(timestampOutput)}
                    disabled={!timestampOutput}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                {timestampOutput && timestampOutput !== "请输入有效的时间戳" && (
                  <div className="text-sm text-muted-foreground">
                    <p className="text-green-600 dark:text-green-400">✓ 转换成功</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="date" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>日期时间输入</CardTitle>
                <CardDescription>选择要转换的日期和时间</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="datetime">日期和时间</Label>
                  <Input
                    id="datetime"
                    type="datetime-local"
                    value={dateInput}
                    onChange={(e) => setDateInput(e.target.value)}
                  />
                </div>
                <Button onClick={convertDateToTimestamp} className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  转换为时间戳
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>转换结果</CardTitle>
                <CardDescription>点击复制按钮复制结果</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Input
                    value={dateToTimestampOutput}
                    readOnly
                    className="font-mono text-2xl text-center pr-12"
                    placeholder="转换后的时间戳..."
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8"
                    onClick={() => copyToClipboard(dateToTimestampOutput)}
                    disabled={!dateToTimestampOutput}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                {dateToTimestampOutput && dateToTimestampOutput !== "请选择日期和时间" && (
                  <div className="text-sm text-muted-foreground text-center">
                    <p>Unix 时间戳（秒）</p>
                    <p className="text-green-600 dark:text-green-400">✓ 转换成功</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="world" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>选择时区</CardTitle>
                <CardDescription>选择要查看的城市/时区</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="timezone">时区</Label>
                  <Select value={selectedTimezone} onValueChange={setSelectedTimezone}>
                    <SelectTrigger id="timezone">
                      <SelectValue placeholder="选择时区" />
                    </SelectTrigger>
                    <SelectContent>
                      {timezones.map((tz) => (
                        <SelectItem key={tz.value} value={tz.value}>
                          {tz.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="text-sm text-muted-foreground">
                  <p>当前选择：{timezones.find(tz => tz.value === selectedTimezone)?.label}</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>当前时间</CardTitle>
                <CardDescription>所选时区的实时时间</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Input
                    value={worldTimeOutput}
                    readOnly
                    className="font-mono text-xl pr-12"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8"
                    onClick={() => copyToClipboard(worldTimeOutput)}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                <div className="text-sm text-muted-foreground text-center">
                  <p className="text-green-600 dark:text-green-400">✓ 实时更新中</p>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>全球主要城市时区</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {timezones.slice(0, 12).map((tz) => (
                  <Button
                    key={tz.value}
                    variant={selectedTimezone === tz.value ? "default" : "outline"}
                    className="justify-start"
                    onClick={() => setSelectedTimezone(tz.value)}
                  >
                    <Globe className="h-4 w-4 mr-2" />
                    <span className="truncate">{tz.label.split(" - ")[1] || tz.label}</span>
                  </Button>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ToolLayout>
  );
}
