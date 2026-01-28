# API Tool - API Tool Usage Documentation

🌐 [中文文档](./README.md) | English Documentation

🚀 **API Tool** - A powerful API testing and management tool built with React and Vite, providing developers with an intuitive and efficient API testing experience.

---

## ✨ Key Features

- 📡 **API Testing**: Support multiple HTTP methods for easy API endpoint testing
- 📊 **Response Visualization**: Beautiful response data display with support for JSON, XML, and other formats
- 🔒 **Environment Management**: Support for multiple environment configurations for easy switching between test environments
- 📋 **Request History**: Automatically save test history for easy repetition and comparison
- 🎯 **Parameter Management**: Intuitive parameter editing interface supporting query parameters, headers, and request bodies
- 🚀 **Fast Response**: Built on Vite for a smooth user experience
- 🌓 **Dark Mode**: Support for light/dark theme switching to protect eyesight

## 🛠️ Tech Stack

- **Frontend Framework**: [React](https://react.dev/) v18+
- **Build Tool**: [Vite](https://vite.dev/) v7+
- **Runtime**: [React DOM](https://react.dev/reference/react-dom)
- **Style Handling**: CSS Modules/Standard CSS

## 📦 Installation Guide

Follow these steps to install and run API Tool:

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd apitool

# Install dependencies
npm install
# or
yarn install
# or
pnpm install
```

## 🚀 Quick Start

### Start Development Server

```bash
npm run dev
```

The development server will start at [http://localhost:5173](http://localhost:5173).

### Build for Production

```bash
npm run build
```

The built files will be generated in the `dist` directory, ready for deployment to any static hosting service.

### Preview Production Build

```bash
npm run preview
```

This command simulates the production environment locally for testing the build result.

## 🎯 Core Features

### 1. API Testing

- **Supported HTTP Methods**: GET, POST, PUT, DELETE, PATCH, HEAD, OPTIONS
- **Request Parameters**: Support for query parameters, headers, and request bodies
- **Request Body Formats**: Support for JSON, Form Data, Raw Text
- **Authentication Methods**: Support for Bearer Token, Basic Auth, API Key, etc.

### 2. Environment Management

- **Multi-environment Configuration**: Create and manage multiple test environments (e.g., development, testing, production)
- **Environment Variables**: Define variables in environments for reference in requests
- **Environment Switching**: One-click switching between different environments for easy testing

### 3. Response Analysis

- **Formatted Display**: Automatically format JSON, XML, and other response data
- **Response Time**: Display API response time for performance analysis
- **Status Codes**: Clearly show HTTP status codes and their meanings
- **Headers**: Display response header information

### 4. History Records

- **Automatic Saving**: Automatically save test history without manual recording
- **History Management**: View, edit, and re-execute historical requests
- **Search and Filter**: Support filtering history records by URL, method, status code, etc.

## 📖 Usage Guide

### Basic Usage Flow

1. **Add Request**: Click the "New Request" button, enter API URL and select HTTP method
2. **Configure Parameters**: Add query parameters, headers, or request body as needed
3. **Send Request**: Click the "Send" button to view the response result
4. **Save Environment**: Configure common environments and variables in environment management
5. **Manage History**: View and manage past requests in history records

#### Request Body Templates

- **JSON Template**: Auto-complete JSON format with syntax highlighting
- **Form Data**: Intuitive key-value pair editing interface
- **Raw Text**: Support for custom text formats

## 📚 Examples

### Example 1: Testing GET Request

```bash
# Request URL
https://api.example.com/users

# Query Parameters
?page=1&limit=10

# Expected Response
{
  "data": [
    {"id": 1, "name": "John Doe"},
    {"id": 2, "name": "Jane Smith"}
  ],
  "total": 200,
  "page": 1
}
```

### Example 2: Testing POST Request

```bash
# Request URL
https://api.example.com/users

# Request Body (JSON)
{
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30
}

# Expected Response
{
  "id": 123,
  "name": "John Doe",
  "email": "john@example.com",
  "age": 30,
  "created_at": "2024-01-01T00:00:00Z"
}
```

## 🔧 Configuration Options

### Project Configuration

- **Proxy Settings**: Configure API proxy in `vite.config.js`
- **Theme Settings**: Support light/dark theme switching, configurable in app settings
- **Default Timeout**: Set request timeout, default is 30 seconds

### Environment Variable Configuration

```bash
# .env file example
VITE_API_BASE_URL=https://api.example.com
VITE_APP_TITLE=API Tool
```

## 🚀 Deployment

### Static Hosting

1. Run `npm run build` to build the project
2. Upload the `dist` directory to any static hosting service

### Recommended Hosting Services

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)
- [Cloudflare Pages](https://pages.cloudflare.com/)

### Local Deployment

```bash
# Build the project
npm run build

# Use static file server
npx serve dist
```

## 🤝 Contribution Guidelines

We welcome all forms of contributions! Here's how you can participate:

1. Fork this repository
2. Create a feature branch (`git checkout -b feature/awesome-feature`)
3. Commit your changes (`git commit -m 'Add awesome feature'`)
4. Push to the branch (`git push origin feature/awesome-feature`)
5. Open a Pull Request

### Development Workflow

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Before submitting PR, ensure the project builds correctly
npm run build
```

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.

## 🆘 Technical Support

If you encounter any issues or have questions:

1. Check the [Issues](https://github.com/username/repository/issues) tab
2. Search for similar issues
3. If you need help, create a new Issue with detailed information

## 💡 Notes

- This tool is only for development and testing purposes, not for production environments
- Please comply with the terms of use and restrictions of related APIs
- For sensitive APIs, ensure you use them in a secure environment

---

⭐ If this tool has been helpful to you, please consider starring the repository!

---

## 📞 Contact Information

- **GitHub**: [https://github.com/username/apitool](https://github.com/username/apitool)
- **Email**: support@apitool.com
- **Documentation**: [https://docs.apitool.com](https://docs.apitool.com)