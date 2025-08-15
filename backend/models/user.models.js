const mongoose = require('mongoose');
const { v4: uuidv4 } = require('uuid');

const userSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true, // Allows null values to be non-unique
        lowercase: true,
        trim: true,
        validate: {
            validator: function(email) {
                if (!email) return true; // Allow null/undefined for anonymous users
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
            },
            message: 'Please provide a valid email address'
        }
    },
    display_name: {
        type: String,
        required: true,
        trim: true,
        maxlength: 50,
        unique: true,
        validate: {
            validator: function(display_name) {
                return display_name && display_name.length >= 2;
            },
            message: 'Display name must be at least 2 characters long'
        }
    },
    password: {
        type: String,
        required: function() {
            return this.email != null; // Password required only for registered users
        },
        minlength: 6,
        validate: {
            validator: function(password) {
                if (!this.email) return true; // Skip validation for anonymous users
                return password && password.length >= 6;
            },
            message: 'Password must be at least 6 characters long'
        }
    },
    timezone: {
        type: String,
        required: true,
        default: 'UTC',
        validate: {
            validator: function(tz) {
                // Basic IANA timezone validation
                try {
                    Intl.DateTimeFormat(undefined, { timeZone: tz });
                    return true;
                } catch (ex) {
                    return false;
                }
            },
            message: 'Please provide a valid IANA timezone (e.g., Asia/Kolkata)'
        }
    },
    goal: {
        units_volume: {
            type: String,
            enum: ['ml', 'fl_oz'],
            required: true,
            default: 'ml'
        },
        amount: {
            type: Number,
            required: true,
            min: 1,
            max: 10000, // Maximum reasonable daily goal
            default: 2000 // Default 2000ml daily goal
        }
    },
    is_anonymous: {
        type: Boolean,
        default: function() {
            return !this.email;
        }
    }
}, {
    timestamps: { createdAt: 'created_at', updatedAt: 'updated_at' }
});

// Index for better query performance
userSchema.index({ email: 1 });
userSchema.index({ id: 1 });
userSchema.index({ display_name: 1 });

// Pre-save middleware to generate UUID if not provided
userSchema.pre('save', function(next) {
    if (!this.id) {
        this.id = uuidv4();
    }
    next();
});

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
    if (!this.isModified('password') || !this.password) {
        return next();
    }
    
    try {
        const bcrypt = require('bcrypt');
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
        next();
    } catch (error) {
        next(error);
    }
});

// Method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    if (!this.password) {
        return false;
    }
    
    try {
        const bcrypt = require('bcrypt');
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        return false;
    }
};

// Method to check if user is anonymous
userSchema.methods.isAnonymous = function() {
    return !this.email;
};

// Transform output to hide password
userSchema.methods.toJSON = function() {
    const userObject = this.toObject();
    delete userObject.password;
    delete userObject.__v;
    return userObject;
};

module.exports = mongoose.model('User', userSchema);