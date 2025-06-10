
# AcademiaX - Your Gateway to Global Education

AcademiaX is a comprehensive guidance platform designed specifically for Class 11th and 12th students in India who are planning to study abroad. Our platform provides end-to-end support from university selection to application tracking, making your international education journey smooth and successful.

## 🌟 Features

### Core Tools
- **University Matching** - Find universities that match your profile, grades, and preferences across different countries
- **Budget Calculator** - Calculate tuition fees, living costs, and total expenses for studying abroad
- **SOP Assistant** - Get AI-powered feedback on your Statement of Purpose and personal essays
- **Application Tracker** - Keep track of your university applications, deadlines, and requirements
- **Country Guide** - Explore study destinations with detailed information about education systems

### What We Cover
- **200+ Universities** across 8 top study destinations
- **Countries Supported**: USA 🇺🇸, Canada 🇨🇦, UK 🇬🇧, Ireland 🇮🇪, Australia 🇦🇺, Germany 🇩🇪, Netherlands 🇳🇱, France 🇫🇷
- **Comprehensive Support** from planning to admission

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd academiax
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to view the application.

## 🛠️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Charts**: Recharts
- **State Management**: TanStack Query
- **Form Handling**: React Hook Form
- **Theme**: Dark/Light mode support

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── ui/             # shadcn/ui components
│   ├── budget/         # Budget calculator components
│   └── sop/            # SOP assistant components
├── pages/              # Route pages
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
└── App.tsx             # Main application component
```

## 🎨 Design System

The application uses a comprehensive design system built with:
- **Semantic color tokens** for consistent theming
- **Responsive design** principles
- **Dark/Light theme** support
- **Accessible** components following WCAG guidelines

## 🚀 Deployment

### Deploy to Netlify (Recommended)

1. **From GitHub** (Recommended):
   - Connect your GitHub repository to Netlify
   - Set build command: `npm run build`
   - Set publish directory: `dist`
   - Deploy automatically on every push

2. **Manual Deployment**:
   ```bash
   npm run build
   ```
   Upload the `dist` folder to Netlify

3. **Using Netlify CLI**:
   ```bash
   npm install -g netlify-cli
   npm run build
   netlify deploy --prod --dir=dist
   ```

### Deploy to Other Platforms

The application can be deployed to any static hosting service:
- **Vercel**: Connect GitHub repo, auto-detects Vite settings
- **GitHub Pages**: Use GitHub Actions for automated deployment
- **Firebase Hosting**: Use Firebase CLI
- **AWS S3**: Upload dist folder to S3 bucket

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint

## 🌍 Environment Setup

The application works out of the box without additional environment variables. For production deployment, ensure:

- Build command: `npm run build`
- Output directory: `dist`
- Node version: 18+

## 🎯 Usage Guide

### For Students
1. **Start Here**: Visit the homepage and click "Get Started"
2. **Find Universities**: Use the University Match tool to discover suitable institutions
3. **Plan Budget**: Calculate total costs using the Budget Calculator
4. **Write SOP**: Get AI assistance for your Statement of Purpose
5. **Track Applications**: Monitor your application progress

### For Developers
1. **Components**: All UI components are in `src/components/ui/`
2. **Pages**: Route components are in `src/pages/`
3. **Styling**: Use Tailwind CSS classes with semantic tokens
4. **State**: Use TanStack Query for server state management
5. **Theming**: Components automatically support dark/light themes

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📋 Features Checklist

- ✅ University matching system
- ✅ Budget calculation tools
- ✅ SOP writing assistance
- ✅ Application tracking
- ✅ Country-specific guides
- ✅ Dark/Light theme support
- ✅ Responsive design
- ✅ Guided tour for new users

## 🐛 Bug Reports

If you encounter any issues:
1. Check the console for error messages
2. Ensure all dependencies are installed
3. Verify Node.js version compatibility
4. Report issues with detailed reproduction steps

## 📞 Support

For questions or support:
- Check the guided tour within the application
- Review the country guides for specific requirements
- Use the SOP assistant for writing help

## 📄 License

This project is built with Lovable and uses various open-source packages. Please refer to individual package licenses for specific terms.

---

**Built with ❤️ for Indian students pursuing global education**

Made with [Lovable](https://lovable.dev)
