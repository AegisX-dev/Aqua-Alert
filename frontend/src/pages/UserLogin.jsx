import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import api from '@/lib/api'; // Import the API client

function LoginPage({ onNavigateToLanding, onNavigateToSignup }) {
    const [formData, setFormData] = useState({
        display_name: '',
        password: ''
    });
    
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
        
        // Clear error for this field
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    const validateForm = () => {
        const newErrors = {};

        // Display name validation
        if (!formData.display_name) {
            newErrors.display_name = 'Display name is required';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) {
            return;
        }

        setIsLoading(true);
        
        try {
            const response = await api.post('/users/login', formData);
            
            console.log('Login successful:', response.data);
            
            // Store the token and user data
            localStorage.setItem('authToken', response.data.token);
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.removeItem('isAnonymous'); // Clear anonymous flag
            
            alert('Login successful! Welcome back.');
            // Handle success - redirect to dashboard
            // You can add navigation logic here when you create a dashboard
            
        } catch (error) {
            console.error('Login error:', error);
            
            if (error.code === 'ERR_NETWORK') {
                setErrors({ submit: 'Network error. Please check your connection and try again.' });
            } else if (error.response?.data?.error) {
                setErrors({ submit: error.response.data.error });
            } else {
                setErrors({ submit: 'Failed to login. Please try again.' });
            }
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-cyan/20 via-background-light to-aqua-blue/10 flex items-center justify-center p-4 rounded-2xl">
            <div className="w-full max-w-md">
                {/* Back Button */}
                <div className="mb-4">
                    <Button 
                        variant="ghost" 
                        onClick={onNavigateToLanding}
                        className="text-deep-navy hover:text-aqua-blue group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                    >
                        ← Back to Home
                    </Button>
                </div>

                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 bg-gradient-to-br from-aqua-blue/10 via-background-light to-sky-cyan/20">
                    {/* Header */}
                    <div className="text-center mb-8">
                        <div className="flex items-center justify-center space-x-2 mb-2">
                            <div className="rounded-full bg-white p-2 backdrop-blur-sm">
                                <img 
                                    src="/logo.png" 
                                    alt="AquaAlert Logo" 
                                    className="h-18 w-18 object-contain"
                                />
                            </div>
                        </div>
                        <h1 className="text-3xl font-bold text-deep-navy mb-2">
                            Welcome Back to <span className="text-aqua-blue">Aqua Alert</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Sign in to continue tracking your hydration
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Display Name Field */}
                        <div>
                            <label htmlFor="display_name" className="text-sm font-medium text-foreground mb-2 flex items-center">
                                Display Name
                            </label>
                            <input
                                type="text"
                                id="display_name"
                                name="display_name"
                                value={formData.display_name}
                                onChange={handleInputChange}
                                className={cn(
                                    "w-full px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-aqua-blue focus:border-transparent",
                                    errors.display_name ? "border-alert-coral" : "border-border-subtle"
                                )}
                                placeholder="Enter your display name"
                            />
                            {errors.display_name && (
                                <p className="mt-1 text-sm text-alert-coral">{errors.display_name}</p>
                            )}
                        </div>

                        {/* Password Field */}
                        <div>
                            <label htmlFor="password" className="text-sm font-medium text-foreground mb-2 flex items-center">
                                Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={cn(
                                        "w-full px-3 py-2 pr-10 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-aqua-blue focus:border-transparent",
                                        errors.password ? "border-alert-coral" : "border-border-subtle"
                                    )}
                                    placeholder="Enter your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                                >
                                    {showPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.password && (
                                <p className="mt-1 text-sm text-alert-coral">{errors.password}</p>
                            )}
                        </div>

                        {/* Submit Error */}
                        {errors.submit && (
                            <div className="p-3 bg-alert-coral/10 border border-alert-coral/20 rounded-md">
                                <p className="text-sm text-alert-coral">{errors.submit}</p>
                            </div>
                        )}

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-aqua-blue hover:bg-aqua-blue/90 text-white"
                        >
                            {isLoading ? 'Signing In...' : 'Sign In'}
                        </Button>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                            Don't have an account?{' '}
                            <button 
                                onClick={onNavigateToSignup}
                                className="text-aqua-blue hover:underline font-medium"
                            >
                                Sign up here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoginPage;