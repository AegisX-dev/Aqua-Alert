# Aqua Alert Frontend 💧

A modern React-based frontend for the Aqua Alert water intake tracking application. Built with React 19, Vite 7.1, and TailwindCSS 4.1 for a fast, responsive, and beautiful user experience.

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🎯 Features

- **Modern React 19** with latest features and performance optimizations
- **Lightning-fast Vite 7.1** for instant hot module replacement
- **TailwindCSS 4.1** with custom design system and dark mode support
- **shadcn/ui components** for consistent, accessible UI elements
- **Responsive Design** - Mobile-first approach with seamless device adaptation
- **Beautiful Icons** from Lucide React (500+ icons)
- **Smooth Animations** powered by Anime.js
- **Chart Visualizations** using Chart.js for hydration analytics

## 📁 Project Structure

```
frontend/
├── src/
│   ├── components/          # Reusable UI components
│   │   └── ui/             # shadcn/ui component library
│   │       └── button.jsx  # Button component
│   ├── pages/              # Page components
│   │   ├── LandingPage.jsx # Main landing page
│   │   ├── LearnMore.jsx   # Feature showcase
│   │   ├── Support.jsx     # Support and FAQ
│   │   ├── Privacy.jsx     # Privacy policy
│   │   ├── Terms.jsx       # Terms of service
│   │   ├── UserLogin.jsx   # User authentication
│   │   └── UserSignup.jsx  # User registration
│   ├── lib/                # Utility functions
│   │   ├── api.js          # API client configuration
│   │   └── utils.js        # Helper utilities
│   ├── assets/             # Static assets
│   │   ├── logo.png        # Application logo
│   │   └── react.svg       # React logo
│   ├── App.jsx             # Main application component
│   ├── App.css             # Application-specific styles
│   ├── main.jsx            # Application entry point
│   └── index.css           # Global styles and design system
├── public/                 # Public assets
│   ├── favicon.png         # Application favicon
│   └── vite.svg           # Vite logo
├── components.json         # shadcn/ui configuration
├── vite.config.js         # Vite configuration
├── jsconfig.json          # JavaScript configuration
├── eslint.config.js       # ESLint configuration
├── index.html             # HTML template
└── package.json           # Dependencies and scripts
```

## 🎨 Design System

### Color Palette
- **Primary**: Aqua Blue (`#00B8D9`) - Main brand color
- **Secondary**: Sky Cyan (`#63E6FF`) - Accent and highlights  
- **Accent**: Deep Navy (`#0A2540`) - Dark text and backgrounds
- **Success**: Seafoam Green (`#3DDC97`) - Success states
- **Warning**: Alert Coral (`#FF6B6B`) - Warnings and errors

### Typography
- **Font Stack**: System fonts with fallbacks for optimal performance
- **Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Responsive**: Mobile-first typography scaling

## 🛠️ Tech Stack

### Core Technologies
- **React 19** - Latest React with concurrent features
- **Vite 7.1** - Next-generation frontend tooling
- **TailwindCSS 4.1** - Utility-first CSS framework
- **JavaScript ES2020** - Modern JavaScript features

### UI & Components
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library
- **Radix UI** - Unstyled, accessible components
- **class-variance-authority** - Component variant management

### Data & Networking
- **Axios 1.11** - Promise-based HTTP client
- **Chart.js 4.5** - Flexible charting library
- **Date-fns** - Modern date utility library

### Development Tools
- **ESLint** - Code linting and formatting
- **PostCSS** - CSS processing
- **Autoprefixer** - CSS vendor prefixing

## 🚀 Available Scripts

| Script | Description |
|--------|-------------|
| `npm run dev` | Start development server with HMR at `http://localhost:5173` |
| `npm run build` | Build optimized production bundle |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint for code quality checks |

## 🎯 Key Pages

### Landing Page ([`LandingPage.jsx`](src/pages/LandingPage.jsx))
- Hero section with call-to-action
- Feature highlights
- Navigation to all other pages

### Learn More ([`LearnMore.jsx`](src/pages/LearnMore.jsx))
- Comprehensive feature showcase
- Technology stack information
- Benefits of proper hydration
- How the application works

### Support ([`Support.jsx`](src/pages/Support.jsx))
- Frequently asked questions
- Contact information
- Feature request guidance

### Authentication
- **Sign Up** ([`UserSignup.jsx`](src/pages/UserSignup.jsx)) - User registration
- **Login** ([`UserLogin.jsx`](src/pages/UserLogin.jsx)) - User authentication

### Legal Pages
- **Privacy Policy** ([`Privacy.jsx`](src/pages/Privacy.jsx))
- **Terms of Service** ([`Terms.jsx`](src/pages/Terms.jsx))

## 🔧 Configuration

### Vite Configuration
```javascript
// vite.config.js
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})
```

### Path Aliases
- `@/` - Points to `src/` directory
- `@/components` - UI components
- `@/pages` - Page components
- `@/lib` - Utility functions

## 🌐 API Integration

The frontend communicates with the backend API at:
- **Development**: `http://localhost:5000/api`
- **Authentication**: JWT tokens in Authorization headers
- **Content-Type**: `application/json`

### Key API Endpoints
- `POST /users/register` - User registration
- `POST /users/login` - User authentication
- `POST /users/anonymous` - Anonymous user creation
- `GET /users/profile` - Get user profile
- `PUT /users/profile` - Update user profile

## 📱 Responsive Design

The application is fully responsive and optimized for:

- **Desktop** (1280px+) - Full-featured interface
- **Tablet** (768px-1279px) - Touch-optimized layout
- **Mobile** (320px-767px) - Mobile-first design

## 🎭 Features in Development

- [ ] Water intake tracking dashboard
- [ ] Push notification system
- [ ] Data visualization charts
- [ ] Progressive Web App (PWA) support
- [ ] Dark mode toggle
- [ ] Multi-language support

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Make your changes
4. Run linting: `npm run lint`
5. Commit changes: `git commit -m 'Add amazing feature'`
6. Push to branch: `git push origin feature/amazing-feature`
7. Open a Pull Request

## 🔗 Related Documentation

- [Backend API Documentation](../backend/README.md)
- [Main Project README](../README.md)
- [shadcn/ui Documentation](https://ui.shadcn.com/)
- [TailwindCSS Documentation](https://tailwindcss.com/)
- [Vite Documentation](https://vitejs.dev/)

---

**Built with ❤️ for better hydration habits**