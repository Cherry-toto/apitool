import type { Metadata } from "next";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "隐私政策 | APITool",
  description: "APITool 隐私政策 - 了解我们如何收集、使用和保护您的个人信息",
  robots: {
    index: true,
    follow: true,
  },
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-3xl">隐私政策</CardTitle>
            <CardDescription>
              最后更新日期：2026 年 4 月 2 日
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6 text-sm leading-relaxed">
            <section>
              <h2 className="text-xl font-semibold mb-3">1. 引言</h2>
              <p className="text-muted-foreground">
                APITool（&quot;我们&quot;、&quot;我们的&quot;或&quot;本网站&quot;）致力于保护您的隐私。本隐私政策说明我们如何收集、使用、披露和保护您在使用我们网站时的个人信息。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">2. 我们收集的信息</h2>
              <div className="space-y-3 text-muted-foreground">
                <p>
                  <strong>2.1 自动收集的信息：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li>设备信息（浏览器类型、操作系统、IP 地址）</li>
                  <li>使用数据（访问页面、访问时间、停留时间）</li>
                  <li>Cookie 和类似技术收集的信息</li>
                </ul>
                <p>
                  <strong>2.2 我们使用的 Cookie 类型：</strong>
                </p>
                <ul className="list-disc pl-6 space-y-1">
                  <li><strong>必要 Cookie：</strong> 网站正常运行所必需的 Cookie</li>
                  <li><strong>分析 Cookie：</strong> 帮助我们了解网站使用情况的匿名统计 Cookie</li>
                  <li><strong>广告 Cookie：</strong> 用于展示相关广告的 Cookie（通过 Google AdSense）</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">3. 我们如何使用您的信息</h2>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>提供、维护和改进我们的服务</li>
                <li>分析网站使用情况以优化用户体验</li>
                <li>检测、防止和解决技术问题</li>
                <li>遵守法律义务</li>
                <li>展示个性化广告（需经您同意）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">4. 第三方服务</h2>
              <p className="text-muted-foreground mb-3">
                我们使用以下第三方服务，这些服务可能会收集您的信息：
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>
                  <strong>Google AdSense：</strong> 用于展示广告。Google 会使用 Cookie 来提供个性化广告。
                  您可以访问{" "}
                  <a 
                    href="https://policies.google.com/privacy" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google 隐私政策
                  </a>{" "}
                  了解更多信息。
                </li>
                <li>
                  <strong>Google Analytics：</strong> 用于分析网站流量。
                  您可以通过{" "}
                  <a 
                    href="https://tools.google.com/dlpage/gaoptout" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Google Analytics 退出插件
                  </a>{" "}
                  选择退出。
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">5. Cookie 管理</h2>
              <p className="text-muted-foreground mb-3">
                您可以通过浏览器设置控制 Cookie 的使用：
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>大多数浏览器允许您拒绝所有 Cookie 或仅拒绝第三方 Cookie</li>
                <li>您可以通过浏览器设置删除已存储的 Cookie</li>
                <li>请注意，禁用 Cookie 可能会影响网站的某些功能</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">6. 数据安全</h2>
              <p className="text-muted-foreground">
                我们采取适当的技术和组织措施来保护您的个人信息，但我们无法保证互联网传输的绝对安全。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">7. 您的权利</h2>
              <p className="text-muted-foreground mb-3">
                根据适用的数据保护法律，您可能拥有以下权利：
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>访问您的个人数据的权利</li>
                <li>更正不准确数据的权利</li>
                <li>删除数据的权利（被遗忘权）</li>
                <li>限制处理的权利</li>
                <li>数据可携带权</li>
                <li>反对处理的权利</li>
                <li>撤回同意的权利（随时）</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">8. 儿童隐私</h2>
              <p className="text-muted-foreground">
                我们的服务不针对 13 岁以下的儿童。我们不会故意收集 13 岁以下儿童的个人信息。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">9. 政策变更</h2>
              <p className="text-muted-foreground">
                我们可能会不时更新本隐私政策。更新后的政策将在网站上发布，并在适用情况下通过更显著的通知告知您。
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-3">10. 联系我们</h2>
              <p className="text-muted-foreground">
                如果您对本隐私政策有任何疑问或疑虑，请通过以下方式联系我们：
              </p>
              <ul className="list-disc pl-6 space-y-1 text-muted-foreground">
                <li>GitHub:{" "}
                  <a 
                    href="https://github.com/Cherry-toto/apitool" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    Cherry-toto/apitool
                  </a>
                </li>
              </ul>
            </section>

            <section className="pt-4 border-t">
              <p className="text-xs text-muted-foreground">
                本隐私政策符合《通用数据保护条例》（GDPR）和《加州消费者隐私法案》（CCPA）的要求。
              </p>
            </section>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
