const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');

// Goal sub-schema
const goalSchema = new mongoose.Schema({
    units_volume: {
        type: String,
        enum: ['ml', 'fl_oz'],
        default: 'ml'
    },
    amount: {
        type: Number,
        min: 1,
        max: 10000,
        default: 2000
    }
}, { _id: false });

// User schema
const userSchema = new mongoose.Schema({
    id: {
        type: String,
        default: uuidv4,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        sparse: true, // Allows multiple null values
        validate: {
            validator: function(v) {
                // Only validate email format if it's provided
                return !v || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
            },
            message: 'Please enter a valid email address'
        }
    },
    display_name: {
        type: String,
        required: [true, 'Display name is required'],
        unique: true,
        minlength: [2, 'Display name must be at least 2 characters'],
        maxlength: [50, 'Display name must be less than 50 characters'],
        trim: true
    },
    password: {
        type: String,
        required: function() {
            return !this.is_anonymous;
        },
        minlength: [6, 'Password must be at least 6 characters']
    },
    timezone: {
        type: String,
        default: 'UTC'
    },
    goal: {
        type: goalSchema,
        default: () => ({})
    },
    is_anonymous: {
        type: Boolean,
        default: false
    }
}, {
    timestamps: { 
        createdAt: 'created_at', 
        updatedAt: 'updated_at' 
    }
});

// Create indexes explicitly (removes duplicate warnings)
userSchema.index({ id: 1 }, { unique: true });
userSchema.index({ email: 1 }, { unique: true, sparse: true });
userSchema.index({ display_name: 1 }, { unique: true });

// Pre-save middleware to hash password
userSchema.pre('save', async function(next) {
    // Only hash the password if it has been modified (or is new)
    if (!this.isModified('password')) return next();
    
    try {
        // Hash password with cost of 12
        const hashedPassword = await bcrypt.hash(this.password, 12);
        this.password = hashedPassword;
        next();
    } catch (error) {
        next(error);
    }
});

// Instance method to compare password
userSchema.methods.comparePassword = async function(candidatePassword) {
    try {
        return await bcrypt.compare(candidatePassword, this.password);
    } catch (error) {
        throw error;
    }
};

// Instance method to get public user data
userSchema.methods.toPublicJSON = function() {
    return {
        id: this.id,
        email: this.email,
        display_name: this.display_name,
        timezone: this.timezone,
        goal: this.goal,
        is_anonymous: this.is_anonymous,
        created_at: this.created_at,
        updated_at: this.updated_at
    };
};

// Static method to find user by display name or email
userSchema.statics.findByLogin = function(loginField) {
    return this.findOne({
        $or: [
            { display_name: loginField },
            { email: loginField }
        ]
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;