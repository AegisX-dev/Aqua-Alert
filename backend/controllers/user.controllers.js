const userService = require('../services/user.services'); // Fixed path

class UserController {
    async register(req, res) {
        try {
            const { email, display_name, password, timezone, goal } = req.body;

            if (!display_name || !password) {
                return res.status(400).json({
                    error: 'Display name and password are required'
                });
            }

            const userData = {
                email,
                display_name,
                password,
                timezone: timezone || 'UTC',
                goal: goal || { units_volume: 'ml', amount: 2000 }
            };

            const user = await userService.createUser(userData);

            res.status(201).json({
                message: 'User registered successfully',
                user
            });
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }

    async login(req, res) {
        try {
            const { display_name, password } = req.body;

            if (!display_name || !password) {
                return res.status(400).json({
                    error: 'Display name and password are required'
                });
            }

            const result = await userService.loginUser(display_name, password);

            res.status(200).json({
                message: 'Login successful',
                user: result.user,
                token: result.token
            });
        } catch (error) {
            res.status(401).json({
                error: error.message
            });
        }
    }

    async getProfile(req, res) {
        try {
            const userId = req.user.userId;
            const user = await userService.getUserById(userId);

            res.status(200).json({
                user
            });
        } catch (error) {
            res.status(404).json({
                error: error.message
            });
        }
    }

    async updateProfile(req, res) {
        try {
            const userId = req.user.userId;
            const updateData = req.body;

            // Remove sensitive fields that shouldn't be updated directly
            delete updateData.id;
            delete updateData.password;
            delete updateData.is_anonymous;

            const user = await userService.updateUser(userId, updateData);

            res.status(200).json({
                message: 'Profile updated successfully',
                user
            });
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }

    async deleteAccount(req, res) {
        try {
            const userId = req.user.userId;
            await userService.deleteUser(userId);

            res.status(200).json({
                message: 'Account deleted successfully'
            });
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }

    async createAnonymous(req, res) {
        try {
            const { display_name, timezone, goal } = req.body;

            if (!display_name) {
                return res.status(400).json({
                    error: 'Display name is required'
                });
            }

            const user = await userService.createAnonymousUser(display_name, timezone, goal);

            res.status(201).json({
                message: 'Anonymous user created successfully',
                user
            });
        } catch (error) {
            res.status(400).json({
                error: error.message
            });
        }
    }
}

module.exports = new UserController();