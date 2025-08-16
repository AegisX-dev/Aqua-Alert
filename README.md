# Aqua Alert 💧

A modern water intake tracking application that helps you stay hydrated with smart reminders, personalized goals, and seamless tracking across all your devices.

![Aqua Alert Logo](frontend/src/assets/logo.png)

## 🌟 Features

- **Smart Reminders**: Intelligent notifications that adapt to your schedule
- **Personalized Goals**: Custom hydration targets based on your lifestyle and activity level
- **Cross-Device Sync**: Real-time synchronization across all your devices with cloud backup
- **Anonymous Mode**: Track your hydration without creating an account
- **Modern UI**: Beautiful, responsive design with smooth animations and Chart.js visualizations
- **Secure Authentication**: JWT-based authentication for registered users
- **Push Notifications**: Web push notifications to remind you to stay hydrated
- **Weather Integration**: Smart hydration recommendations based on weather conditions
- **Email Notifications**: Optional email reminders and updates

## 🏗️ Architecture

This project follows a modern full-stack architecture:

- **Frontend**: React with Vite, TailwindCSS, and Lucide React icons
- **Backend**: Node.js with Express and MongoDB
- **Authentication**: JWT tokens with bcrypt password hashing
- **Database**: MongoDB with Mongoose ODM
- **Styling**: TailwindCSS with custom design system
- **Notifications**: Web Push API integration
- **Email**: Nodemailer for email services
- **Visualizations**: Chart.js for data analytics

## 📋 Development Status

**Current Version**: 1.0.0 (Backend) | 0.0.0 (Frontend)
**Last Updated**: August 2025

### ✅ Completed Features
- User authentication system (register, login, anonymous)
- JWT-based security with token management
- MongoDB database integration
- React frontend with modern UI components
- API structure and routing
- CORS configuration
- Environment variable management

### 🚧 In Development
- Water intake tracking functionality
- Dashboard and analytics
- Push notification implementation
- Email notification system
- Weather API integration

### 📝 Known Issues
- Backend package.json missing development scripts
- Frontend build optimization needed
- API documentation needs completion

## 📁 Project Structure

```
aqua-alert/
├── frontend/                 # React frontend application
│   ├── src/
│   │   ├── components/      # Reusable UI components
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   ├── lib/            # Utility functions
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── package.json
└── backend/                 # Express backend API
    ├── controllers/        # Request handlers
    ├── models/            # Database models
    ├── routes/            # API routes
    ├── services/          # Business logic
    ├── middlewares/       # Custom middleware
    └── package.json
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher) 
- MongoDB (local or MongoDB Atlas)
- npm or yarn

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

## 🔧 Available Scripts

### Frontend Scripts
- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Backend Scripts
- `npm start` - Start production server
- `npm test` - Run tests (currently placeholder)

Note: The backend currently uses `node server.js` to start the server. Development scripts need to be added to package.json.

## 📚 API Documentation

The backend provides a RESTful API for user management and hydration tracking. Here are the main endpoints:

### Authentication Endpoints
- `POST /api/users/register` - Register a new user
- `POST /api/users/login` - Login user  
- `POST /api/users/anonymous` - Create anonymous user

### Protected Endpoints (Require Authentication)
- `GET /api/users/profile` - Get user profile
- `PUT /api/users/profile` - Update user profile
- `DELETE /api/users/account` - Delete user account

### API Base URL
- Development: `http://localhost:5000/api`
- Authentication: Bearer token in Authorization header

For detailed API documentation, see [backend/README.md](backend/README.md).

## 🎨 Design System

The application uses a custom design system built on TailwindCSS with the following color palette:

- **Primary**: Aqua Blue (`#00B8D9`)
- **Secondary**: Sky Cyan (`#63E6FF`)
- **Accent**: Deep Navy (`#0A2540`)
- **Success**: Seafoam Green (`#3DDC97`)
- **Warning**: Alert Coral (`#FF6B6B`)

## 🛠️ Technologies Used

### Frontend
- **React 19** - UI framework
- **Vite 7.1** - Build tool and development server
- **TailwindCSS 4.1** - Utility-first CSS framework
- **Lucide React** - Icon library
- **shadcn/ui** - Component library
- **Axios 1.11** - HTTP client
- **Chart.js 4.5** - Data visualization
- **Web Push 3.6** - Push notification support
- **Anime.js 4.1** - Animation library

### Backend
- **Node.js** - Runtime environment
- **Express 5.1** - Web framework
- **MongoDB 6.18** - Database
- **Mongoose 8.17** - ODM for MongoDB
- **JWT 9.0** - Authentication tokens
- **bcrypt 6.0** - Password hashing
- **CORS 2.8** - Cross-origin resource sharing
- **Nodemailer 7.0** - Email service

## 🔐 Security Features

- Password hashing using bcrypt (v6.0)
- JWT token-based authentication (v9.0)
- Input validation and sanitization
- CORS protection (v2.8)
- Environment variable protection
- Secure HTTP headers
- Token expiration handling

## 🌍 Environment Configuration

The application supports different environments:

- **Development**: Local development with hot reload
- **Production**: Optimized build for deployment

## 📱 Responsive Design

The application is fully responsive and works seamlessly across:
- Desktop computers
- Tablets
- Mobile phones

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Future Enhancements

- [ ] Progressive Web App (PWA) support
- [x] Push notifications (Web Push integrated)
- [x] Water intake history and analytics (Chart.js integration)
- [ ] Social features and challenges
- [ ] Integration with fitness trackers
- [ ] Dark mode support
- [ ] Multi-language support
- [x] Weather-based hydration recommendations (Weather API integrated)
- [x] Email notification system (Nodemailer integrated)
- [ ] Mobile app development
- [ ] Advanced data analytics and insights

## 📞 Support

If you have any questions or need help, please:

1. Check the [Issues](https://github.com/AegisX-Dev/aqua-alert/issues) page
2. Create a new issue if your question isn't already addressed
3. Contact the development team

## 🙏 Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/) for the component library
- [Lucide](https://lucide.dev/) for the beautiful icons
- [TailwindCSS](https://tailwindcss.com/) for the styling framework
- All contributors who help make this project better

---

**Stay Hydrated! 💧**