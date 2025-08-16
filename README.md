# Aqua Alert 💧

A modern water intake tracking application that helps you stay hydrated with smart reminders, personalized goals, and seamless tracking across all your devices.

## 🌟 Features

- **Smart Reminders**: Intelligent notifications that adapt to your schedule and hydration patterns
- **Personalized Goals**: Custom hydration targets (1-10,000ml) with multiple units (ml, fl oz)
- **Cross-Device Sync**: Real-time synchronization across all your devices with secure cloud backup
- **Anonymous Mode**: Track your hydration without creating an account - perfect for privacy-conscious users
- **Modern UI**: Beautiful, responsive design with smooth animations and Chart.js visualizations
- **Secure Authentication**: JWT-based authentication with bcrypt password hashing
- **Push Notifications**: Web push notifications to remind you to stay hydrated
- **Weather Integration**: Smart hydration recommendations based on weather conditions
- **Email Notifications**: Optional email reminders and updates
- **Privacy First**: Enterprise-grade security with anonymous tracking options
- **Advanced Analytics**: Comprehensive insights with daily, weekly, and monthly trends

## 🏗️ Architecture

This project follows a modern full-stack architecture:

- **Frontend**: React 19 with Vite 7.1, TailwindCSS 4.1, and Lucide React icons
- **Backend**: Node.js with Express 5.1 and MongoDB 6.18
- **Authentication**: JWT tokens (v9.0) with bcrypt password hashing (v6.0)
- **Database**: MongoDB with Mongoose ODM (v8.17)
- **Styling**: TailwindCSS with custom design system and shadcn/ui components
- **Notifications**: Web Push API integration (v3.6)
- **Email**: Nodemailer (v7.0) for email services
- **Visualizations**: Chart.js (v4.5) for data analytics
- **Animations**: Anime.js (v4.1) for smooth transitions

## 📁 Project Structure

```
aqua-alert/
├── README.md                 # Project documentation
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   │   ├── LearnMore.jsx    # Feature showcase page
│   │   │   ├── Support.jsx      # Support and FAQ page
│   │   │   ├── Privacy.jsx      # Privacy policy page
│   │   │   └── Terms.jsx        # Terms of service page
│   │   ├── lib/            # Utility functions
│   │   ├── assets/         # Static assets
│   │   ├── App.jsx         # Main application component
│   │   ├── main.jsx        # Application entry point
│   │   ├── App.css         # Application styles
│   │   └── index.css       # Global styles and design system
│   ├── public/             # Public assets
│   │   ├── favicon.png     # Application favicon
│   │   └── vite.svg        # Vite logo
│   ├── components.json     # shadcn/ui configuration
│   ├── vite.config.js      # Vite configuration
│   ├── jsconfig.json       # JavaScript configuration
│   ├── eslint.config.js    # ESLint configuration
│   ├── index.html          # HTML template
│   ├── package.json        # Frontend dependencies
│   └── README.md           # Frontend-specific documentation
└── backend/                 # Express backend API
    ├── controllers/        # Request handlers
    │   └── user.controllers.js  # User management controllers
    ├── models/            # Database models
    │   └── user.models.js      # User schema and validation
    ├── routes/            # API routes
    │   └── user.routes.js      # User-related routes
    ├── services/          # Business logic
    │   └── user.services.js    # User service layer
    ├── middlewares/       # Custom middleware
    │   └── auth.middleware.js  # Authentication middleware
    ├── public/            # Static files
    ├── server.js          # Application entry point
    ├── package.json       # Backend dependencies
    ├── .env               # Environment variables (not in repo)
    ├── .gitignore         # Git ignore rules
    └── README.md          # Backend API documentation
```

## 📋 Development Status

**Current Version**: 1.0.0 (Backend) | 0.0.0 (Frontend)  
**Last Updated**: January 2025

### ✅ Completed Features
- ✅ User authentication system (register, login, anonymous)
- ✅ JWT-based security with token management
- ✅ MongoDB database integration with Mongoose ODM
- ✅ React frontend with modern UI components (shadcn/ui)
- ✅ Complete API structure and routing
- ✅ CORS configuration and security middleware
- ✅ Environment variable management
- ✅ Responsive design with TailwindCSS
- ✅ Support and FAQ pages
- ✅ Privacy policy and terms of service pages
- ✅ Modern design system with custom colors

### 🚧 In Development
- 🔄 Water intake tracking functionality
- 🔄 Dashboard and analytics implementation
- 🔄 Push notification system
- 🔄 Email notification integration
- 🔄 Weather API integration for smart recommendations

### 📝 Known Issues
- Backend package.json missing development scripts (nodemon setup needed)
- Frontend build optimization for production deployment
- API documentation examples need testing

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **MongoDB** (local installation or MongoDB Atlas)
- **npm** or **yarn** package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/AegisX-Dev/aqua-alert.git
   cd aqua-alert
   ```

2. **Setup Backend**
   ```bash
   cd backend
   npm install
   ```

3. **Configure Environment Variables**
   
   Create a `.env` file in the backend directory:
   ```env
   MONGODB_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret_key
   ```

   *Optional environment variables for enhanced features:*
   ```env
   OPENWEATHER_API_KEY=your_openweather_api_key
   GOOGLE_MAPS_API_KEY=your_google_maps_api_key
   EMAIL_USER=your_email_for_notifications
   EMAIL_PASS=your_email_password
   ```

4. **Setup Frontend**
   ```bash
   cd ../frontend
   npm install
   ```

### Running the Application

1. **Start the Backend Server**
   ```bash
   cd backend
   node server.js
   ```
   The backend will run on `http://localhost:5000`

   *Note: For development with auto-restart, you can use: `npx nodemon server.js`*

2. **Start the Frontend Development Server**
   ```bash
   cd frontend
   npm run dev
   ```
   The frontend will run on `http://localhost:5173`

3. **Access the Application**
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000/api`

## 🔧 Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server with hot reload
- `npm run build` - Build optimized production bundle
- `npm run preview` - Preview production build locally
- `npm run lint` - Run ESLint for code quality

### Backend Scripts
- `node server.js` - Start production server
- `npx nodemon server.js` - Start development server with auto-restart
- `npm test` - Run tests (currently placeholder)

*Note: Development scripts need to be added to backend package.json for better DX.*

## 📚 API Documentation

The backend provides a comprehensive RESTful API for user management and hydration tracking.

### Authentication Endpoints
- `POST /api/users/register` - Register a new user with email and password
- `POST /api/users/login` - Login user and receive JWT token
- `POST /api/users/anonymous` - Create anonymous user (no email required)

### Protected Endpoints (Require Authentication)
- `GET /api/users/profile` - Get authenticated user's profile
- `PUT /api/users/profile` - Update user profile information
- `DELETE /api/users/account` - Permanently delete user account

### API Base URL
- **Development**: `http://localhost:5000/api`
- **Authentication**: Bearer token in Authorization header
- **Content-Type**: `application/json`

### Example Request
```bash
curl -X GET http://localhost:5000/api/users/profile \
  -H "Authorization: Bearer <your_jwt_token>" \
  -H "Content-Type: application/json"
```

For detailed API documentation with request/response examples, see [backend/README.md](backend/README.md).

## 🎨 Design System

The application uses a custom design system built on TailwindCSS 4.1 with the following color palette:

### Color Palette
- **Primary**: Aqua Blue (`#00B8D9`) - Main brand color
- **Secondary**: Sky Cyan (`#63E6FF`) - Accent and highlights
- **Accent**: Deep Navy (`#0A2540`) - Dark text and backgrounds
- **Success**: Seafoam Green (`#3DDC97`) - Success states and confirmations
- **Warning**: Alert Coral (`#FF6B6B`) - Warnings and errors

### Typography
- **Font Family**: System font stack with fallbacks
- **Font Weights**: 400 (normal), 500 (medium), 600 (semibold), 700 (bold)
- **Responsive Sizing**: Mobile-first approach with scalable typography

### Components
- Built with [shadcn/ui](https://ui.shadcn.com/) component library
- Consistent spacing and border radius system
- Smooth animations with Anime.js integration
- Dark mode support (coming soon)

## 🛠️ Technologies Used

### Frontend Technologies
- **React 19** - Modern UI framework with latest features
- **Vite 7.1** - Lightning-fast build tool and development server
- **TailwindCSS 4.1** - Utility-first CSS framework
- **shadcn/ui** - High-quality component library
- **Lucide React** - Beautiful icon library (500+ icons)
- **Axios 1.11** - Promise-based HTTP client
- **Chart.js 4.5** - Flexible data visualization library
- **Anime.js 4.1** - Lightweight animation library
- **Web Push 3.6** - Push notification support

### Backend Technologies
- **Node.js** - JavaScript runtime environment
- **Express 5.1** - Fast, minimalist web framework
- **MongoDB 6.18** - NoSQL document database
- **Mongoose 8.17** - Elegant MongoDB object modeling
- **JWT 9.0** - Secure authentication tokens
- **bcrypt 6.0** - Password hashing and salting
- **CORS 2.8** - Cross-origin resource sharing
- **Nodemailer 7.0** - Email sending service
- **UUID 11.1** - Unique identifier generation

### Development Tools
- **ESLint** - Code linting and formatting
- **Vite** - Module bundler and dev server
- **Nodemon** - Development auto-restart utility

## 🔐 Security Features

- **Password Security**: bcrypt hashing with salt rounds
- **JWT Authentication**: Secure token-based authentication
- **Input Validation**: Comprehensive request validation
- **CORS Protection**: Configured cross-origin policies
- **Environment Variables**: Secure configuration management
- **Data Sanitization**: Input cleaning and validation
- **Token Expiration**: Automatic session management

## 🌍 Environment Configuration

### Development Environment
- Local MongoDB instance or MongoDB Atlas
- Hot reload for both frontend and backend
- Detailed error logging and debugging
- CORS enabled for localhost origins

### Production Environment
- Optimized build with code splitting
- Environment variable validation
- Secure HTTP headers and policies
- Performance monitoring and logging

## 📱 Responsive Design

The application is fully responsive and provides an optimal experience across:

- **Desktop**: Full-featured interface with advanced analytics
- **Tablet**: Touch-optimized interface with simplified navigation
- **Mobile**: Mobile-first design with gesture support
- **PWA Ready**: Progressive Web App capabilities (coming soon)

## 🎯 User Experience Features

### Anonymous Users
- No registration required
- Local data storage only
- Privacy-focused hydration tracking
- Full access to core features

### Registered Users
- Cross-device synchronization
- Cloud data backup
- Email notifications
- Advanced analytics and insights
- Account management features

### Accessibility
- WCAG 2.1 compliance (in progress)
- Keyboard navigation support
- Screen reader compatibility
- High contrast mode support

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### Getting Started
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Add tests for new functionality
5. Commit your changes (`git commit -m 'Add some amazing feature'`)
6. Push to the branch (`git push origin feature/amazing-feature`)
7. Open a Pull Request

### Contribution Guidelines
- Follow the existing code style and conventions
- Add appropriate tests for new features
- Update documentation for API changes
- Ensure all tests pass before submitting
- Write clear, descriptive commit messages

### Areas for Contribution
- Bug fixes and improvements
- New features and enhancements
- Documentation improvements
- Performance optimizations
- UI/UX enhancements
- Test coverage improvements

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Enhancements

### Planned Features
- [ ] Progressive Web App (PWA) support
- [x] Push notifications (Web Push integrated)
- [x] Water intake history and analytics (Chart.js integration)
- [ ] Social features and hydration challenges
- [ ] Integration with fitness trackers (Apple Health, Google Fit)
- [ ] Dark mode support
- [ ] Multi-language support (i18n)
- [x] Weather-based hydration recommendations (Weather API integrated)
- [x] Email notification system (Nodemailer integrated)
- [ ] Mobile app development (React Native)
- [ ] Advanced data analytics and machine learning insights

### Technical Improvements
- [ ] TypeScript migration
- [ ] Comprehensive test suite (Jest, Cypress)
- [ ] Performance optimization
- [ ] Accessibility improvements
- [ ] SEO optimization
- [ ] Docker containerization
- [ ] CI/CD pipeline setup

## 📞 Support

If you need help or have questions:

### Documentation
- Check this README for general information
- See [backend/README.md](backend/README.md) for API documentation
- Review the [Support page](frontend/src/pages/Support.jsx) for common questions

### Getting Help
1. Check the [Issues page](https://github.com/AegisX-Dev/aqua-alert/issues) for existing solutions
2. Create a new issue if your question isn't addressed
3. Contact support at `support@aqua-alert.app`
4. Join our community discussions

### Contact Information
- **Email Support**: support@aqua-alert.app (Response within 24 hours)
- **Privacy Questions**: privacy@aqua-alert.app
- **Legal Inquiries**: legal@aqua-alert.app
- **GitHub Issues**: [Create an issue](https://github.com/AegisX-Dev/aqua-alert/issues)

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful component library
- [Lucide](https://lucide.dev/) for the comprehensive icon set
- [TailwindCSS](https://tailwindcss.com/) for the utility-first CSS framework
- [Chart.js](https://www.chartjs.org/) for powerful data visualization
- [MongoDB](https://www.mongodb.com/) for flexible data storage
- [React](https://react.dev/) for the robust UI framework
- [Express](https://expressjs.com/) for the minimal web framework
- All contributors and users who help make this project better

---

**Stay Hydrated! 💧**

*Building healthy hydration habits, one drop at a time.*