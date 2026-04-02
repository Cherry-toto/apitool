# Cookie 授权功能说明

## 概述

根据谷歌 SEO 要求和 GDPR（通用数据保护条例）、CCPA（加州消费者隐私法案）等隐私法规，本网站已添加完整的 Cookie 授权和隐私政策功能。

## 功能特性

### 1. Cookie 授权提示组件（CookieConsent）

**位置**: `src/components/cookie-consent.tsx`

**功能特点**:
- ✅ 用户首次访问时自动显示 Cookie 使用声明
- ✅ 提供"接受所有 Cookie"和"拒绝非必要 Cookie"选项
- ✅ 包含隐私政策链接
- ✅ 用户选择后存储在 localStorage，不会重复显示
- ✅ 支持关闭按钮
- ✅ 响应式设计，适配移动端和桌面端
- ✅ 平滑动画效果
- ✅ 符合 GDPR 和 CCPA 合规要求

**使用方法**:
组件已在全局布局 `src/app/layout.tsx` 中集成，无需额外配置。

### 2. 隐私政策页面

**位置**: `src/app/privacy/page.tsx`

**内容包含**:
- 信息收集类型说明
- Cookie 使用类型详解
- 信息使用方式
- 第三方服务披露（Google AdSense、Google Analytics）
- Cookie 管理指南
- 用户数据权利说明
- 数据安全说明
- 联系方式

**访问路径**: `/privacy`

### 3. Cookie 政策页面

**位置**: `src/app/cookies/page.tsx`

**内容包含**:
- Cookie 基础知识
- Cookie 类型详解（必要 Cookie、分析 Cookie、广告 Cookie）
- 具体使用的 Cookie 列表
- Cookie 管理方法
- 主流浏览器的 Cookie 设置指南
- 行业选择退出工具链接

**访问路径**: `/cookies`

### 4. 页脚链接

在主页的页脚已添加：
- 隐私政策链接
- Cookie 政策链接

## 技术实现

### CookieConsent 组件

```tsx
// 组件使用 localStorage 存储用户选择
localStorage.setItem("cookie-consent", "accepted"); // 或 "declined"

// 检查用户是否已做出选择
const hasConsented = localStorage.getItem("cookie-consent");
```

### 集成方式

在 `src/app/layout.tsx` 中：

```tsx
import { CookieConsent } from "@/components/cookie-consent";

export default function RootLayout({ children }) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">
        <ThemeProvider>
          {children}
          <CookieConsent />
        </ThemeProvider>
      </body>
    </html>
  );
}
```

## 谷歌 SEO 合规要点

### ✅ 已实现的功能

1. **明确的 Cookie 使用声明**
   - 清晰说明使用 Cookie 的目的
   - 提供接受/拒绝选项

2. **隐私政策页面**
   - 详细的隐私政策说明
   - 包含所有法律要求的信息

3. **Cookie 政策页面**
   - 详细的 Cookie 使用说明
   - 列出所有使用的 Cookie 类型

4. **用户同意管理**
   - 用户可以接受或拒绝 Cookie
   - 同意状态会被保存

5. **第三方服务披露**
   - Google AdSense 使用声明
   - Google Analytics 使用说明

## 自定义配置

### 修改 Cookie 提示文本

编辑 `src/components/cookie-consent.tsx` 文件中的文本内容。

### 添加更多 Cookie 类型

在 `src/app/cookies/page.tsx` 的 Cookie 列表表格中添加新的 Cookie 信息。

### 修改隐私政策

编辑 `src/app/privacy/page.tsx` 文件，根据实际情况更新隐私政策内容。

## 法律免责声明

本功能提供了符合 GDPR 和 CCPA 要求的技术实现，但不构成法律建议。建议您：

1. 根据实际业务情况调整隐私政策
2. 咨询法律专业人士确保完全合规
3. 定期更新隐私政策以反映最新实践
4. 确保所有第三方服务都在隐私政策中披露

## 浏览器测试

测试步骤：
1. 清除浏览器 localStorage
2. 访问网站首页
3. 验证 Cookie 提示是否正确显示
4. 测试"接受"和"拒绝"功能
5. 验证隐私政策和 Cookie 政策页面链接

## 相关文件

- `src/components/cookie-consent.tsx` - Cookie 授权组件
- `src/app/privacy/page.tsx` - 隐私政策页面
- `src/app/cookies/page.tsx` - Cookie 政策页面
- `src/app/layout.tsx` - 全局布局（已集成 CookieConsent）
- `src/app/page.client.tsx` - 主页（页脚已添加政策链接）

## 更新日志

- 2026-04-02: 初始版本，实现完整的 Cookie 授权和隐私政策功能
