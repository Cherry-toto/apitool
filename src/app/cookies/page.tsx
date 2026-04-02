import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Cookie 政策 | APITool",
  description: "APITool Cookie 政策 - 了解我们如何使用 Cookie 技术",
  robots: {
    index: true,
    follow: true,
  },
};

export default function CookiePolicyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">Cookie 政策</CardTitle>
            <CardDescription>
              了解我们如何使用 Cookie 和类似技术
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">什么是 Cookie？</h2>
              <p className="text-muted-foreground">
                Cookie 是存储在您设备上的小型文本文件，当您访问网站时会被创建。它们帮助网站记住您的偏好设置、改善用户体验，并提供相关广告。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">我们使用的 Cookie 类型</h2>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">1. 必要 Cookie（必需）</h3>
                  <p className="text-muted-foreground text-sm">
                    这些 Cookie 对于网站的正常运行至关重要，无法在我们的系统中关闭。它们仅用于响应您执行的操作，例如设置您的隐私偏好、登录或填写表单。
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
                    <li>目的：网站基本功能</li>
                    <li>存储期限：会话期间</li>
                    <li>可否禁用：否</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">2. 分析/性能 Cookie（可选）</h3>
                  <p className="text-muted-foreground text-sm">
                    这些 Cookie 允许我们计算访问次数和流量来源，以便我们可以衡量和改进网站的性能。它们帮助我们了解哪些页面最受欢迎，以及访问者如何浏览网站。
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
                    <li>目的：网站分析和优化</li>
                    <li>存储期限：通常 2 年</li>
                    <li>可否禁用：是</li>
                  </ul>
                </div>

                <div className="border rounded-lg p-4">
                  <h3 className="font-semibold mb-2">3. 广告 Cookie（可选）</h3>
                  <p className="text-muted-foreground text-sm">
                    这些 Cookie 可能通过我们的广告合作伙伴在我们的网站上设置。这些公司可能会使用它们来建立您的兴趣档案，并向您展示其他网站上的相关广告。
                  </p>
                  <ul className="list-disc pl-6 mt-2 text-sm text-muted-foreground">
                    <li>目的：个性化广告</li>
                    <li>存储期限：通常 1-2 年</li>
                    <li>可否禁用：是</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">我们使用的具体 Cookie</h2>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="border-b">
                      <th className="text-left py-2 px-3 font-semibold">Cookie 名称</th>
                      <th className="text-left py-2 px-3 font-semibold">类型</th>
                      <th className="text-left py-2 px-3 font-semibold">提供商</th>
                      <th className="text-left py-2 px-3 font-semibold">期限</th>
                      <th className="text-left py-2 px-3 font-semibold">目的</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b">
                      <td className="py-2 px-3">cookie-consent</td>
                      <td className="py-2 px-3">必要</td>
                      <td className="py-2 px-3">APITool</td>
                      <td className="py-2 px-3">1 年</td>
                      <td className="py-2 px-3">存储您的 Cookie 偏好</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">theme</td>
                      <td className="py-2 px-3">必要</td>
                      <td className="py-2 px-3">APITool</td>
                      <td className="py-2 px-3">1 年</td>
                      <td className="py-2 px-3">存储您的主题偏好</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">_ga</td>
                      <td className="py-2 px-3">分析</td>
                      <td className="py-2 px-3">Google</td>
                      <td className="py-2 px-3">2 年</td>
                      <td className="py-2 px-3">区分用户</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">_gid</td>
                      <td className="py-2 px-3">分析</td>
                      <td className="py-2 px-3">Google</td>
                      <td className="py-2 px-3">24 小时</td>
                      <td className="py-2 px-3">区分用户</td>
                    </tr>
                    <tr className="border-b">
                      <td className="py-2 px-3">
                        <a 
                          href="https://policies.google.com/technologies/ads" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline"
                        >
                          Google AdSense Cookies
                        </a>
                      </td>
                      <td className="py-2 px-3">广告</td>
                      <td className="py-2 px-3">Google</td>
                      <td className="py-2 px-3">可变</td>
                      <td className="py-2 px-3">提供个性化广告</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">如何管理 Cookie 偏好</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  您可以通过以下方式管理 Cookie 偏好：
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>
                    <strong>使用我们的 Cookie 同意工具：</strong> 当您首次访问网站时，会显示 Cookie 同意横幅，您可以在其中接受或拒绝非必要 Cookie。
                  </li>
                  <li>
                    <strong>浏览器设置：</strong> 大多数网络浏览器允许您控制 Cookie。您可以通过浏览器设置：
                    <ul className="list-circle pl-6 mt-1 space-y-1">
                      <li>查看所有 Cookie 并逐个删除</li>
                      <li>阻止第三方 Cookie</li>
                      <li>阻止来自特定网站的 Cookie</li>
                      <li>阻止所有 Cookie</li>
                    </ul>
                  </li>
                  <li>
                    <strong>行业选择退出工具：</strong>
                    <ul className="list-circle pl-6 mt-1 space-y-1">
                      <li>美国：
                        <a 
                          href="https://optout.aboutads.info/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline ml-1"
                        >
                          About Ads
                        </a>
                      </li>
                      <li>欧盟：
                        <a 
                          href="https://www.youronlinechoices.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-primary hover:underline ml-1"
                        >
                          Your Online Choices
                        </a>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">浏览器 Cookie 管理指南</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                <a 
                  href="https://support.google.com/chrome/answer/95647" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border rounded-lg hover:bg-accent transition-colors block"
                >
                  <span className="font-semibold">Google Chrome</span>
                  <p className="text-xs text-muted-foreground mt-1">管理 Chrome Cookie 设置</p>
                </a>
                <a 
                  href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border rounded-lg hover:bg-accent transition-colors block"
                >
                  <span className="font-semibold">Mozilla Firefox</span>
                  <p className="text-xs text-muted-foreground mt-1">管理 Firefox Cookie 设置</p>
                </a>
                <a 
                  href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border rounded-lg hover:bg-accent transition-colors block"
                >
                  <span className="font-semibold">Safari</span>
                  <p className="text-xs text-muted-foreground mt-1">管理 Safari Cookie 设置</p>
                </a>
                <a 
                  href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 border rounded-lg hover:bg-accent transition-colors block"
                >
                  <span className="font-semibold">Microsoft Edge</span>
                  <p className="text-xs text-muted-foreground mt-1">管理 Edge Cookie 设置</p>
                </a>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">更新通知</h2>
              <p className="text-muted-foreground">
                我们可能会不时更新本 Cookie 政策。更新后的政策将在本页面发布。建议您定期查看本页面以获取最新的 Cookie 使用信息。
              </p>
            </section>

            <section className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                本 Cookie 政策符合《通用数据保护条例》（GDPR）、《电子隐私指令》（ePrivacy Directive）和《加州消费者隐私法案》（CCPA）的要求。
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
