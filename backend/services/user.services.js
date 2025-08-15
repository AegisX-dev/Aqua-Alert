const User = require('../models/user.models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

class UserService {
    async createUser(userData) {
        try {
            const existingUser = await User.findOne({
                $or: [
                    { email: userData.email },
                    { display_name: userData.display_name }
                ]
            });

            if (existingUser) {
                throw new Error('User with this email or display name already exists');
            }

            const user = new User(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }

    async loginUser(display_name, password) {
        try {
            const user = await User.findOne({ display_name });
            
            if (!user) {
                throw new Error('Invalid credentials');
            }

            const isPasswordValid = await user.comparePassword(password);
            
            if (!isPasswordValid) {
                throw new Error('Invalid credentials');
            }

            const token = jwt.sign(
                { userId: user.id, display_name: user.display_name },
                process.env.JWT_SECRET || 'your-secret-key',
                { expiresIn: '24h' }
            );

            return { user, token };
        } catch (error) {
            throw error;
        }
    }

    async getUserById(userId) {
        try {
            const user = await User.findOne({ id: userId });
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async updateUser(userId, updateData) {
        try {
            const user = await User.findOneAndUpdate(
                { id: userId },
                updateData,
                { new: true, runValidators: true }
            );
            
            if (!user) {
                throw new Error('User not found');
            }
            
            return user;
        } catch (error) {
            throw error;
        }
    }

    async deleteUser(userId) {
        try {
            const user = await User.findOneAndDelete({ id: userId });
            if (!user) {
                throw new Error('User not found');
            }
            return user;
        } catch (error) {
            throw error;
        }
    }

    async createAnonymousUser(display_name, timezone = 'UTC', goal = { units_volume: 'ml', amount: 2000 }) {
        try {
            const existingUser = await User.findOne({ display_name });
            
            if (existingUser) {
                throw new Error('Display name already exists');
            }

            const userData = {
                display_name,
                timezone,
                goal,
                is_anonymous: true
            };

            const user = new User(userData);
            await user.save();
            return user;
        } catch (error) {
            throw error;
        }
    }
}

module.exports = new UserService();