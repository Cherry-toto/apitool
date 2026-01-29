# API Tool - API 工具使用文档

🌐 [English Documentation](./README.en.md) | 中文文档

🚀 **API Tool** - 一款功能强大的API测试和管理工具，基于React和Vite构建，为开发者提供直观、高效的API测试体验。

---

## ✨ 主要特性

- 📡 **API测试**：支持多种HTTP方法，轻松测试API接口
- 📊 **响应可视化**：美观的响应数据展示，支持JSON、XML等格式
- 📋 **请求历史**：自动保存测试历史，方便重复测试和对比
- 🎯 **参数管理**：直观的参数编辑界面，支持查询参数、请求头、请求体
- 🚀 **快速响应**：基于Vite构建，提供流畅的用户体验
- 🌓 **暗色模式**：支持明暗主题切换，保护视力

## 🛠️ 技术栈

- **前端框架**：[React](https://react.dev/) v18+
- **构建工具**：[Vite](https://vite.dev/) v7+
- **运行时**：[React DOM](https://react.dev/reference/react-dom)
- **样式处理**：CSS Modules/标准 CSS

## 📦 安装指南

按照以下步骤安装和运行API Tool：

```bash
# 克隆仓库
git clone <repository-url>

# 进入项目目录
cd apitool

# 安装依赖
npm install
# 或者
yarn install
# 或者
pnpm install
```

## 🚀 快速开始

### 启动开发服务器

```bash
npm run dev
```

开发服务器将在 [http://localhost:5173](http://localhost:5173) 启动。

### 构建生产版本

```bash
npm run build
```

构建后的文件将生成在 `dist` 目录中，可直接部署到任何静态托管服务。

### 预览生产构建

```bash
npm run preview
```

此命令在本地模拟生产环境，用于测试构建结果。

## 🎯 核心功能

### 1. API测试

- **支持的HTTP方法**：GET、POST、PUT、DELETE、PATCH、HEAD、OPTIONS
- **请求参数**：支持查询参数、请求头、请求体
- **请求体格式**：支持JSON、Form Data、Raw Text
- **认证方式**：支持Bearer Token、Basic Auth、API Key等

### 2. 响应分析

- **格式化展示**：自动格式化JSON、XML等响应数据
- **响应时间**：显示API响应时间，便于性能分析
- **状态码**：清晰显示HTTP状态码和含义
- **Headers**：展示响应头信息

### 3. 历史记录

- **自动保存**：自动保存测试历史，无需手动记录
- **历史管理**：查看、编辑、重复执行历史请求
- **搜索过滤**：支持按URL、方法、状态码等过滤历史记录

## 📖 使用指南

### 基本使用流程

1. **添加请求**：点击"新建请求"按钮，输入API URL和选择HTTP方法
2. **配置参数**：根据需要添加查询参数、请求头或请求体
3. **发送请求**：点击"发送"按钮，查看响应结果
4. **管理历史**：在历史记录中查看和管理过往请求

#### 请求体模板

- **JSON模板**：自动补全JSON格式，提供语法高亮
- **Form Data**：直观的键值对编辑界面
- **Raw Text**：支持自定义文本格式

## 📚 示例

### 示例1：测试GET请求

```bash
# 请求URL
https://api.example.com/users

# 查询参数
?page=1&limit=10

# 预期响应
{
  "data": [
    {"id": 1, "name": "John Doe"},
    {"id": 2, "name": "Jane Smith"}
  ],
  "total": 200,
  "page": 1
}
```

### 示例2：测试POST请求

```bash
# 请求URL
https://api.example.com/users

# 请求体 (JSON)
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

# 预期响应
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "created_at": "2024-01-01T00:00:00Z"
}
```

## 🔧 配置选项

### 项目配置

- **代理设置**：在 `vite.config.js` 中配置API代理
- **主题设置**：支持明暗主题切换，可在应用设置中配置
- **默认超时**：可设置请求超时时间，默认为30秒

### 环境变量配置

```bash
# .env 文件示例
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=API Tool
```

## 🚀 部署

### 静态托管

1. 运行 `npm run build` 构建项目
2. 将 `dist` 目录上传到任何静态托管服务

### 推荐托管服务

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

### 本地部署

```bash
# 构建项目
npm run build

# 使用静态文件服务器
npx serve dist
```

## 🤝 贡献指南

我们欢迎所有形式的贡献！以下是参与项目的步骤：

1. Fork 此仓库
2. 创建功能分支 (`git checkout -b feature/awesome-feature`)
3. 提交您的更改 (`git commit -m 'Add awesome feature'`)
4. 推送到分支 (`git push origin feature/awesome-feature`)
5. 开启 Pull Request

### 开发工作流

```bash
# 安装依赖
npm install

# 启动开发服务器
npm run dev

# 提交PR前，确保项目能正常构建
npm run build
```

## 📄 许可证

此项目根据 MIT 许可证授权 - 详情请参阅 [LICENSE](./LICENSE) 文件。

## 🆘 技术支持

如果您遇到任何问题或有疑问：

1. 查看 [Issues](https://github.com/username/repository/issues) 标签页
2. 搜索类似问题
3. 如需帮助，请创建新 Issue，并提供详细信息

## 💡 注意事项

- 此工具仅用于开发和测试目的，请勿用于生产环境
- 请遵守相关API的使用条款和限制
- 对于敏感API，请确保在安全环境中使用

---

⭐ 如果此工具对您有帮助，请考虑给仓库点星！

---

## 📞 联系方式

- **GitHub**：[https://github.com/username/apitool](https://github.com/username/apitool)
- **Email**：support@apitool.com
- **文档**：[https://docs.apitool.com](https://docs.apitool.com)