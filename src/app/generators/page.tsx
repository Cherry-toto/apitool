"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Copy, RefreshCw, Key, Dice5 } from "lucide-react";
import ToolLayout from "@/components/tool-layout";

export default function GeneratorsPage() {
  const [passwordLength, setPasswordLength] = useState(16);
  const [useUppercase, setUseUppercase] = useState(true);
  const [useLowercase, setUseLowercase] = useState(true);
  const [useNumbers, setUseNumbers] = useState(true);
  const [useSymbols, setUseSymbols] = useState(true);
  const [generatedPassword, setGeneratedPassword] = useState("");
  
  const [minRandom, setMinRandom] = useState(1);
  const [maxRandom, setMaxRandom] = useState(100);
  const [generatedRandom, setGeneratedRandom] = useState("");

  const generatePassword = () => {
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    let chars = "";
    if (useUppercase) chars += uppercase;
    if (useLowercase) chars += lowercase;
    if (useNumbers) chars += numbers;
    if (useSymbols) chars += symbols;

    if (chars === "") {
      setGeneratedPassword("请至少选择一种字符类型");
      return;
    }

    let password = "";
    for (let i = 0; i < passwordLength; i++) {
      password += chars.charAt(Math.floor(Math.random() * chars.length));
    }

    setGeneratedPassword(password);
  };

  const generateRandom = () => {
    const min = parseInt(minRandom.toString());
    const max = parseInt(maxRandom.toString());

    if (isNaN(min) || isNaN(max)) {
      setGeneratedRandom("请输入有效的数字");
      return;
    }

    if (min >= max) {
      setGeneratedRandom("最小值必须小于最大值");
      return;
    }

    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    setGeneratedRandom(random.toString());
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <ToolLayout title="密码与随机数生成器" description="生成安全的密码和随机数">
      <Tabs defaultValue="password" className="w-full">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="password">
            <Key className="h-4 w-4 mr-2" />
            密码生成器
          </TabsTrigger>
          <TabsTrigger value="random">
            <Dice5 className="h-4 w-4 mr-2" />
            随机数生成器
          </TabsTrigger>
        </TabsList>

        <TabsContent value="password" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>密码设置</CardTitle>
                <CardDescription>配置密码生成选项</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label>密码长度：{passwordLength}</Label>
                  <Slider
                    value={[passwordLength]}
                    onValueChange={(value) => setPasswordLength(value[0])}
                    min={4}
                    max={64}
                    step={1}
                    className="w-full"
                  />
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Label htmlFor="uppercase">大写字母 (A-Z)</Label>
                    <Switch
                      id="uppercase"
                      checked={useUppercase}
                      onCheckedChange={setUseUppercase}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="lowercase">小写字母 (a-z)</Label>
                    <Switch
                      id="lowercase"
                      checked={useLowercase}
                      onCheckedChange={setUseLowercase}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="numbers">数字 (0-9)</Label>
                    <Switch
                      id="numbers"
                      checked={useNumbers}
                      onCheckedChange={setUseNumbers}
                    />
                  </div>

                  <div className="flex items-center justify-between">
                    <Label htmlFor="symbols">特殊字符 (!@#$...)</Label>
                    <Switch
                      id="symbols"
                      checked={useSymbols}
                      onCheckedChange={setUseSymbols}
                    />
                  </div>
                </div>

                <Button onClick={generatePassword} className="w-full">
                  <RefreshCw className="h-4 w-4 mr-2" />
                  生成密码
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>生成的密码</CardTitle>
                <CardDescription>点击复制按钮复制密码</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Input
                    value={generatedPassword}
                    readOnly
                    className="font-mono text-lg pr-12"
                    placeholder="点击生成密码..."
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8"
                    onClick={() => copyToClipboard(generatedPassword)}
                    disabled={!generatedPassword}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                {generatedPassword && generatedPassword !== "请至少选择一种字符类型" && (
                  <div className="text-sm text-muted-foreground">
                    <p>长度：{generatedPassword.length} 字符</p>
                    <p className="text-green-600 dark:text-green-400">✓ 已生成安全密码</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>密码安全提示</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>建议使用至少 12 位的密码长度</li>
                <li>混合使用大小写字母、数字和特殊字符可以提高密码强度</li>
                <li>避免在多个网站使用相同的密码</li>
                <li>定期更换重要账户的密码</li>
                <li>使用密码管理器来保存和管理复杂密码</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="random" className="mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>随机数设置</CardTitle>
                <CardDescription>配置随机数生成范围</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="min">最小值</Label>
                    <Input
                      id="min"
                      type="number"
                      value={minRandom}
                      onChange={(e) => setMinRandom(Number(e.target.value))}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="max">最大值</Label>
                    <Input
                      id="max"
                      type="number"
                      value={maxRandom}
                      onChange={(e) => setMaxRandom(Number(e.target.value))}
                    />
                  </div>
                </div>

                <Button onClick={generateRandom} className="w-full">
                  <Dice5 className="h-4 w-4 mr-2" />
                  生成随机数
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>生成的随机数</CardTitle>
                <CardDescription>点击复制按钮复制结果</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Input
                    value={generatedRandom}
                    readOnly
                    className="font-mono text-2xl text-center pr-12"
                    placeholder="点击生成随机数..."
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="absolute right-2 top-1/2 -translate-y-1/2 h-8"
                    onClick={() => copyToClipboard(generatedRandom)}
                    disabled={!generatedRandom}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>

                {generatedRandom && !isNaN(parseInt(generatedRandom)) && (
                  <div className="text-sm text-muted-foreground text-center">
                    <p className="text-green-600 dark:text-green-400">✓ 随机数已生成</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <Card className="mt-6">
            <CardHeader>
              <CardTitle>使用说明</CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="list-disc pl-5 space-y-2">
                <li>输入最小值和最大值来定义随机数范围</li>
                <li>最小值必须小于最大值</li>
                <li>支持负数和小数范围</li>
                <li>点击复制按钮可以快速复制生成的随机数</li>
                <li>适用于抽奖、决策、游戏等场景</li>
              </ul>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </ToolLayout>
  );
}
