const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');

// Load environment variables
dotenv.config();

const app = express();

// CORS configuration for production
const corsOptions = {
    origin: [
        'http://localhost:5173', // Vite dev server
        'http://localhost:3000', // Alternative dev port
        'https://aqua-alert-git-main-aegisx-devs.vercel.app', // Your current Vercel domain
        'https://aqua-alert.vercel.app', // Production domain
        'https://aqua-alert-aegisx-devs.vercel.app', // Alternative Vercel domain
    ],
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Middleware
app.use(cors(corsOptions));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Trust proxy for Render deployment
app.set('trust proxy', 1);

// Health check endpoint
app.get('/', (req, res) => {
    res.json({ 
        message: 'Aqua Alert API is running!', 
        timestamp: new Date().toISOString(),
        environment: process.env.NODE_ENV || 'development'
    });
});

// API routes
const userRoutes = require('./routes/user.routes');
app.use('/api/users', userRoutes);

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({ error: 'Route not found' });
});

// Global error handler
app.use((error, req, res, next) => {
    console.error('Global error:', error);
    res.status(500).json({ 
        error: process.env.NODE_ENV === 'production' 
            ? 'Internal server error' 
            : error.message 
    });
});

// Database connection
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/aqua-alert';

mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        console.log('Database:', mongoose.connection.name);
    })
    .catch((error) => {
        console.error('❌ MongoDB connection error:', error);
        process.exit(1);
    });

// Handle MongoDB connection errors after initial connection
mongoose.connection.on('error', (error) => {
    console.error('MongoDB connection error:', error);
});

mongoose.connection.on('disconnected', () => {
    console.log('MongoDB disconnected');
});

// Start server
const PORT = process.env.PORT || 5000;
const server = app.listen(PORT, '0.0.0.0', () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📍 Environment: ${process.env.NODE_ENV || 'development'}`);
    console.log(`🔗 API URL: http://localhost:${PORT}`);
});

// Graceful shutdown handlers (Fixed for Mongoose 8.x)
const gracefulShutdown = () => {
    console.log('Shutting down gracefully...');
    
    server.close(() => {
        console.log('HTTP server closed.');
        
        mongoose.connection.close() // No callback in Mongoose 8.x
            .then(() => {
                console.log('MongoDB connection closed.');
                process.exit(0);
            })
            .catch((error) => {
                console.error('Error closing MongoDB connection:', error);
                process.exit(1);
            });
    });
};

process.on('SIGTERM', gracefulShutdown);
process.on('SIGINT', gracefulShutdown);

// Handle uncaught exceptions
process.on('uncaughtException', (error) => {
    console.error('Uncaught Exception:', error);
    gracefulShutdown();
});

process.on('unhandledRejection', (reason, promise) => {
    console.error('Unhandled Rejection at:', promise, 'reason:', reason);
    gracefulShutdown();
});