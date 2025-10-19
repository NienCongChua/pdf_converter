<div align="center">

# 📄 NienOCR4Community

### Advanced OCR & Document Conversion Platform

[![React](https://img.shields.io/badge/React-18.3.1-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8.3-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Vite](https://img.shields.io/badge/Vite-5.4.19-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4.17-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

*Convert PDF files and images to editable documents with advanced OCR technology*

[🚀 Live Demo](#) • [📖 Documentation](#) • [🐛 Report Bug](#) • [✨ Request Feature](#)

</div>

---

## ✨ Features

<div align="center">

### 🎯 Core Functionality

| Feature | Description | Status |
|---------|-------------|--------|
| **Multi-Format Conversion** | Convert PDFs to Word, Excel, PowerPoint, and Text | ✅ Ready |
| **Advanced OCR** | High-accuracy text recognition with AI enhancement | ✅ Ready |
| **Multi-Language Support** | Vietnamese, English, Chinese, Japanese | ✅ Ready |
| **Batch Processing** | Process multiple documents simultaneously | ✅ Ready |
| **Smart Detection** | Auto-detect tables, forms, and layouts | ✅ Ready |

</div>

### 🔧 Advanced OCR Tools

- **🤖 AI-Powered Enhancement**: Auto-correct, noise removal, contrast boost
- **📊 Smart Detection**: Table extraction, form detection, layout analysis  
- **🖼️ Image Pre-processing**: Rotation, cropping, deskewing
- **⚡ Batch Processing**: Fast processing with queue management
- **🌍 Multi-Language OCR**: Support for 4+ languages
- **✍️ Handwriting Recognition**: Process handwritten documents

### 🎨 Modern UI/UX

- **📱 Responsive Design**: Works on all devices
- **🌙 Dark/Light Mode**: Theme switching support
- **⚡ Fast Performance**: Optimized with Vite and React
- **🎯 Intuitive Interface**: User-friendly drag-and-drop upload
- **📊 Real-time Progress**: Live conversion progress tracking

---

## 🚀 Quick Start

### Prerequisites

- **Node.js** >= 18.0.0
- **npm** >= 8.0.0 or **yarn** >= 1.22.0

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/pdf_converter.git
cd pdf_converter

# Install dependencies
npm install
# or
yarn install

# Start development server
npm run dev
# or
yarn dev
```

### Build for Production

```bash
# Build the application
npm run build
# or
yarn build

# Preview production build
npm run preview
# or
yarn preview
```

---

## 📁 Project Structure

```
pdf_converter/
├── 📁 public/                 # Static assets
├── 📁 src/
│   ├── 📁 components/         # Reusable UI components
│   │   ├── 📁 ui/            # shadcn/ui components
│   │   ├── AppSidebar.tsx    # Sidebar navigation
│   │   ├── Layout.tsx        # Main layout wrapper
│   │   └── Topbar.tsx        # Top navigation bar
│   ├── 📁 hooks/             # Custom React hooks
│   ├── 📁 lib/               # Utility functions
│   ├── 📁 pages/             # Page components
│   │   ├── Index.tsx         # Home page
│   │   ├── Upload.tsx        # File upload page
│   │   ├── Convert.tsx       # Conversion page
│   │   ├── History.tsx       # Conversion history
│   │   ├── Compare.tsx       # Document comparison
│   │   └── OcrTools.tsx      # OCR tools showcase
│   ├── App.tsx               # Main app component
│   └── main.tsx              # App entry point
├── 📄 package.json           # Dependencies and scripts
├── 📄 vite.config.ts         # Vite configuration
├── 📄 tailwind.config.ts     # Tailwind CSS config
└── 📄 tsconfig.json          # TypeScript config
```

---

## 🛠️ Tech Stack

<div align="center">

### Frontend
![React](https://img.shields.io/badge/React-61DAFB?style=flat&logo=react&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=flat&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=flat&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat&logo=tailwind-css&logoColor=white)

### UI Components
![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=flat&logo=radix-ui&logoColor=white)
![Lucide React](https://img.shields.io/badge/Lucide_React-FF6B6B?style=flat&logo=lucide&logoColor=white)
![shadcn/ui](https://img.shields.io/badge/shadcn%2Fui-000000?style=flat&logo=shadcn&logoColor=white)

### Development Tools
![ESLint](https://img.shields.io/badge/ESLint-4B32C3?style=flat&logo=eslint&logoColor=white)
![PostCSS](https://img.shields.io/badge/PostCSS-DD3A0A?style=flat&logo=postcss&logoColor=white)

</div>

---

## 📖 Usage

### 1. Upload Documents
- Drag and drop PDF files or images
- Support for multiple file formats
- Batch upload capability

### 2. Choose Output Format
- **Word (.docx)**: Preserve formatting and layout
- **Excel (.xlsx)**: Extract tables and data
- **PowerPoint (.pptx)**: Convert to presentations
- **Text (.txt)**: Plain text extraction

### 3. Configure OCR Settings
- Select language for better accuracy
- Adjust image preprocessing options
- Enable AI enhancement features

### 4. Convert & Download
- Real-time progress tracking
- Download converted files
- View conversion history

---

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
# OCR Configuration
VITE_OCR_API_URL=your_ocr_api_url
VITE_OCR_API_KEY=your_api_key

# File Upload Settings
VITE_MAX_FILE_SIZE=10485760  # 10MB
VITE_ALLOWED_FILE_TYPES=pdf,jpg,jpeg,png

# Development Settings
VITE_DEV_MODE=true
```

### Customization

The application can be customized through:

- **Theme**: Modify `tailwind.config.ts` for color schemes
- **Components**: Edit components in `src/components/ui/`
- **Pages**: Customize pages in `src/pages/`
- **Styling**: Update global styles in `src/index.css`

---

## 🤝 Contributing

We welcome contributions! Please see our [Contributing Guidelines](CONTRIBUTING.md) for details.

### Development Workflow

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Radix UI](https://www.radix-ui.com/) - Headless UI primitives
- [Lucide](https://lucide.dev/) - Icon library

---

<div align="center">

### 📞 Support

[![GitHub Issues](https://img.shields.io/github/issues/yourusername/pdf_converter?style=for-the-badge)](https://github.com/yourusername/pdf_converter/issues)
[![GitHub Stars](https://img.shields.io/github/stars/yourusername/pdf_converter?style=for-the-badge)](https://github.com/yourusername/pdf_converter/stargazers)
[![GitHub Forks](https://img.shields.io/github/forks/yourusername/pdf_converter?style=for-the-badge)](https://github.com/yourusername/pdf_converter/forks)

**Made with ❤️ by NienOCR4Community**

[⬆ Back to Top](#-nienocr4community)

</div>