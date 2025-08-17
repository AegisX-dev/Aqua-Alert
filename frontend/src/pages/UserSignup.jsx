import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import api from '@/lib/api'; // Import the API client

function SignupPage({ onNavigateToLanding, onNavigateToLogin }) {
    const [formData, setFormData] = useState({
        email: '',
        display_name: '',
        password: '',
        confirmPassword: '',
        timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
        goal: {
            units_volume: 'ml',
            amount: 2000
        }
    });
    
    const [errors, setErrors] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name.startsWith('goal.')) {
            const goalField = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                goal: {
                    ...prev.goal,
                    [goalField]: goalField === 'amount' ? parseInt(value) || 0 : value
                }
            }));
        } else {
            setFormData(prev => ({
                ...prev,
                [name]: value
            }));
        }
        
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

        // Email validation
        if (!formData.email) {
            newErrors.email = 'Email is required';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        // Display name validation
        if (!formData.display_name) {
            newErrors.display_name = 'Display name is required';
        } else if (formData.display_name.length < 2) {
            newErrors.display_name = 'Display name must be at least 2 characters';
        } else if (formData.display_name.length > 50) {
            newErrors.display_name = 'Display name must be less than 50 characters';
        }

        // Password validation
        if (!formData.password) {
            newErrors.password = 'Password is required';
        } else if (formData.password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        // Confirm password validation
        if (!formData.confirmPassword) {
            newErrors.confirmPassword = 'Please confirm your password';
        } else if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }

        // Goal amount validation
        if (formData.goal.amount < 1 || formData.goal.amount > 10000) {
            newErrors.goalAmount = 'Daily goal must be between 1 and 10000';
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
            const signupData = {
                email: formData.email,
                display_name: formData.display_name,
                password: formData.password,
                timezone: formData.timezone,
                goal: formData.goal
            };

            const response = await api.post('/users/register', signupData);
            
            console.log('Signup successful:', response.data);
            alert('Account created successfully! Please login.');
            if (onNavigateToLogin) {
                onNavigateToLogin();
            }
            
        } catch (error) {
            console.error('Signup error:', error);
            
            if (error.code === 'ERR_NETWORK') {
                setErrors({ submit: 'Network error. Please check your connection and try again.' });
            } else if (error.response?.data?.error) {
                setErrors({ submit: error.response.data.error });
            } else {
                setErrors({ submit: 'Failed to create account. Please try again.' });
            }
        } finally {
            setIsLoading(false);
        }
    };

    const handleAnonymousSignup = async () => {
        if (!formData.display_name) {
            setErrors({ display_name: 'Display name is required for anonymous signup' });
            return;
        }

        setIsLoading(true);
        
        try {
            const anonymousData = {
                display_name: formData.display_name,
                timezone: formData.timezone,
                goal: formData.goal
            };

            const response = await api.post('/users/anonymous', anonymousData);
            
            console.log('Anonymous signup successful:', response.data);
            
            // Store user data for anonymous users (no token needed)
            localStorage.setItem('user', JSON.stringify(response.data.user));
            localStorage.setItem('isAnonymous', 'true');
            
            alert('Anonymous account created successfully!');
            
        } catch (error) {
            console.error('Anonymous signup error:', error);
            
            if (error.code === 'ERR_NETWORK') {
                setErrors({ submit: 'Network error. Please check your connection and try again.' });
            } else if (error.response?.data?.error) {
                setErrors({ submit: error.response.data.error });
            } else {
                setErrors({ submit: 'Failed to create anonymous account. Please try again.' });
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
                            Join <span className="text-aqua-blue">Aqua Alert</span>
                        </h1>
                        <p className="text-muted-foreground">
                            Start your hydration journey today
                        </p>
                    </div>

                    {/* Form */}
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Email Field */}
                        <div>
                            <label htmlFor="email" className="text-sm font-medium text-foreground mb-2 flex items-center">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleInputChange}
                                className={cn(
                                    "w-full px-3 py-2 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-aqua-blue focus:border-transparent",
                                    errors.email ? "border-alert-coral" : "border-border-subtle"
                                )}
                                placeholder="Enter your email"
                            />
                            {errors.email && (
                                <p className="mt-1 text-sm text-alert-coral">{errors.email}</p>
                            )}
                        </div>

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

                        {/* Confirm Password Field */}
                        <div>
                            <label htmlFor="confirmPassword" className="text-sm font-medium text-foreground mb-2 flex items-center">
                                Confirm Password
                            </label>
                            <div className="relative">
                                <input
                                    type={showConfirmPassword ? "text" : "password"}
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={cn(
                                        "w-full px-3 py-2 pr-10 border rounded-md bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-aqua-blue focus:border-transparent",
                                        errors.confirmPassword ? "border-alert-coral" : "border-border-subtle"
                                    )}
                                    placeholder="Confirm your password"
                                />
                                <button
                                    type="button"
                                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                                    className="absolute inset-y-0 right-0 pr-3 flex items-center text-muted-foreground hover:text-foreground"
                                >
                                    {showConfirmPassword ? "Hide" : "Show"}
                                </button>
                            </div>
                            {errors.confirmPassword && (
                                <p className="mt-1 text-sm text-alert-coral">{errors.confirmPassword}</p>
                            )}
                        </div>

                        {/* Daily Goal Section */}
                        <div className="space-y-4 p-4 bg-background-light rounded-lg border border-border-subtle">
                            <h3 className="text-sm font-medium text-foreground">Daily Water Goal</h3>
                            
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="goal.amount" className="block text-xs font-medium text-muted-foreground mb-1">
                                        Amount
                                    </label>
                                    <input
                                        type="number"
                                        id="goal.amount"
                                        name="goal.amount"
                                        value={formData.goal.amount}
                                        onChange={handleInputChange}
                                        min="1"
                                        max="10000"
                                        className={cn(
                                            "w-full px-3 py-2 border rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-aqua-blue focus:border-transparent",
                                            errors.goalAmount ? "border-alert-coral" : "border-border-subtle"
                                        )}
                                    />
                                </div>
                                
                                <div>
                                    <label htmlFor="goal.units_volume" className="block text-xs font-medium text-muted-foreground mb-1">
                                        Unit
                                    </label>
                                    <select
                                        id="goal.units_volume"
                                        name="goal.units_volume"
                                        value={formData.goal.units_volume}
                                        onChange={handleInputChange}
                                        className="w-full px-3 py-2 border border-border-subtle rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-aqua-blue focus:border-transparent"
                                    >
                                        <option value="ml">ml</option>
                                        <option value="fl_oz">fl oz</option>
                                    </select>
                                </div>
                            </div>
                            
                            {errors.goalAmount && (
                                <p className="text-sm text-alert-coral">{errors.goalAmount}</p>
                            )}
                        </div>

                        {/* Timezone Field */}
                        <div>
                            <label htmlFor="timezone" className="text-sm font-medium text-foreground mb-2 flex items-center">
                                Timezone
                            </label>
                            <select
                                id="timezone"
                                name="timezone"
                                value={formData.timezone}
                                onChange={handleInputChange}
                                className="w-full px-3 py-2 border border-border-subtle rounded-md bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-aqua-blue focus:border-transparent"
                            >
                                <option value="UTC">UTC</option>
                                <option value="America/New_York">Eastern Time</option>
                                <option value="America/Chicago">Central Time</option>
                                <option value="America/Denver">Mountain Time</option>
                                <option value="America/Los_Angeles">Pacific Time</option>
                                <option value="Europe/London">London</option>
                                <option value="Europe/Paris">Paris</option>
                                <option value="Asia/Tokyo">Tokyo</option>
                                <option value="Asia/Shanghai">Shanghai</option>
                                <option value="Asia/Kolkata">India</option>
                            </select>
                        </div>

                        {/* Submit Error */}
                        {errors.submit && (
                            <div className="p-3 bg-alert-coral/10 border border-alert-coral/20 rounded-md">
                                <p className="text-sm text-alert-coral">{errors.submit}</p>
                            </div>
                        )}

                        {/* Submit Buttons */}
                        <div className="space-y-3">
                            <Button
                                type="submit"
                                disabled={isLoading}
                                className="w-full bg-aqua-blue hover:bg-aqua-blue/90 text-white"
                            >
                                {isLoading ? 'Creating Account...' : 'Create Account'}
                            </Button>

                            <div className="relative">
                                <div className="absolute inset-0 flex items-center">
                                    <span className="w-full border-t border-border-subtle" />
                                </div>
                                <div className="relative flex justify-center text-xs uppercase">
                                    <span className="bg-surface-card px-2 text-muted-foreground">Or</span>
                                </div>
                            </div>

                            <Button
                                type="button"
                                variant="outline"
                                onClick={handleAnonymousSignup}
                                disabled={isLoading}
                                className="w-full"
                            >
                                {isLoading ? 'Creating...' : 'Continue Anonymously'}
                            </Button>
                        </div>
                    </form>

                    {/* Footer */}
                    <div className="mt-6 text-center space-y-2">
                        <p className="text-sm text-muted-foreground">
                            Already have an account?{' '}
                            <button 
                                onClick={onNavigateToLogin}
                                className="text-aqua-blue hover:underline font-medium"
                            >
                                Sign in here
                            </button>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SignupPage;