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

export default function GeneratorsClientComponent() {
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

    const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
    setGeneratedRandom(randomNum.toString());
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const refreshPassword = () => {
    generatePassword();
  };

  const refreshRandom = () => {
    generateRandom();
  };

  return (
    <div className="container mx-auto py-10 px-4">
      <Tabs defaultValue="password" className="w-full max-w-2xl mx-auto">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="password">密码生成器</TabsTrigger>
          <TabsTrigger value="random">随机数生成器</TabsTrigger>
        </TabsList>
        
        <TabsContent value="password">
          <Card>
            <CardHeader>
              <CardTitle>安全密码生成器</CardTitle>
              <CardDescription>自定义密码长度和字符类型，生成高强度安全密码</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password-length">密码长度: {passwordLength}</Label>
                  <Button variant="outline" size="icon" onClick={refreshPassword}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                
                <Slider
                  id="password-length"
                  min={6}
                  max={128}
                  value={[passwordLength]}
                  onValueChange={(value) => setPasswordLength(value[0])}
                />
                
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
                    <Label htmlFor="symbols">特殊符号 (!@#$...)</Label>
                    <Switch
                      id="symbols"
                      checked={useSymbols}
                      onCheckedChange={setUseSymbols}
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Input 
                    value={generatedPassword} 
                    readOnly 
                    placeholder="生成的密码将显示在这里"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => copyToClipboard(generatedPassword)}
                    disabled={!generatedPassword}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button 
                  className="w-full" 
                  onClick={generatePassword}
                  disabled={!useUppercase && !useLowercase && !useNumbers && !useSymbols}
                >
                  <Key className="mr-2 h-4 w-4" />
                  生成密码
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="random">
          <Card>
            <CardHeader>
              <CardTitle>随机数生成器</CardTitle>
              <CardDescription>在指定范围内生成随机数</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <Label>随机数: {generatedRandom || "点击生成"}</Label>
                  <Button variant="outline" size="icon" onClick={refreshRandom}>
                    <RefreshCw className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="min-random">最小值</Label>
                    <Input
                      id="min-random"
                      type="number"
                      value={minRandom}
                      onChange={(e) => setMinRandom(parseInt(e.target.value) || 1)}
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="max-random">最大值</Label>
                    <Input
                      id="max-random"
                      type="number"
                      value={maxRandom}
                      onChange={(e) => setMaxRandom(parseInt(e.target.value) || 100)}
                    />
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <Input 
                    value={generatedRandom} 
                    readOnly 
                    placeholder="生成的随机数将显示在这里"
                  />
                  <Button 
                    variant="outline" 
                    size="icon"
                    onClick={() => copyToClipboard(generatedRandom)}
                    disabled={!generatedRandom}
                  >
                    <Copy className="h-4 w-4" />
                  </Button>
                </div>
                
                <Button className="w-full" onClick={generateRandom}>
                  <Dice5 className="mr-2 h-4 w-4" />
                  生成随机数
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}