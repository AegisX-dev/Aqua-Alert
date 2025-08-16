    import { Button } from '@/components/ui/button';
    import { ArrowRight, Droplets, Target, Bell, Smartphone, Cloud, BarChart3, Shield, Heart, Zap, CheckCircle, Star } from 'lucide-react';

    function LearnMorePage({ onNavigateToLanding, onNavigateToSignup, onNavigateToLogin, onNavigateToPrivacy, onNavigateToTerms, onNavigateToSupport }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-cyan/20 via-background-light to-aqua-blue/10 rounded-2xl">
        {/* Header/Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
            <div className="rounded-full bg-white p-2 backdrop-blur-sm">
                <img 
                src="/src/assets/logo.png" 
                alt="AquaAlert Logo" 
                className="h-24 w-24 object-contain"
                />
            </div>
            </div>
            
            <div className="flex items-center space-x-4">
            <Button 
                variant="ghost" 
                onClick={onNavigateToLanding}
                className="text-deep-navy hover:text-aqua-blue group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
                ← Back to Home
            </Button>
            <Button 
                variant="ghost" 
                onClick={onNavigateToLogin}
                className="text-deep-navy hover:text-aqua-blue group transition-all duration-300 hover:scale-105"
            >
                Sign In
            </Button>
            <Button 
                onClick={onNavigateToSignup}
                className="bg-aqua-blue hover:bg-aqua-blue/90 text-white group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto px-6 py-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
                <div className="w-20 h-20 bg-aqua-blue/10 rounded-full flex items-center justify-center">
                <Droplets className="h-10 w-10 text-aqua-blue" />
                </div>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-deep-navy mb-6">
                Everything You Need to Know About <span className="text-aqua-blue">Aqua Alert</span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover how Aqua Alert transforms your hydration habits with intelligent tracking, 
                personalized goals, and seamless integration across all your devices.
            </p>
            </div>

            {/* Key Features */}
            <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                Why Choose <span className="text-aqua-blue">Aqua Alert</span>?
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Built with modern technology and user-centric design to make hydration tracking effortless and effective.
                </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-aqua-blue/10 rounded-lg flex items-center justify-center mb-6">
                    <Target className="h-6 w-6 text-aqua-blue" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Personalized Goals</h3>
                <p className="text-muted-foreground mb-4">
                    Set customized daily hydration targets based on your body weight, activity level, and climate conditions.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Custom daily goals (1-10,000ml)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Multiple units (ml, fl oz)</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Weather-based adjustments</span>
                    </li>
                </ul>
                </div>

                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-success-seafoam/10 rounded-lg flex items-center justify-center mb-6">
                    <Bell className="h-6 w-6 text-success-seafoam" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Smart Reminders</h3>
                <p className="text-muted-foreground mb-4">
                    Intelligent notifications that adapt to your schedule and hydration patterns for optimal timing.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Adaptive scheduling</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Push notifications</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Email reminders (optional)</span>
                    </li>
                </ul>
                </div>

                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-sky-cyan/10 rounded-lg flex items-center justify-center mb-6">
                    <BarChart3 className="h-6 w-6 text-sky-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Advanced Analytics</h3>
                <p className="text-muted-foreground mb-4">
                    Comprehensive insights into your hydration patterns with beautiful charts and trend analysis.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Daily, weekly, monthly trends</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Goal achievement tracking</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Interactive Chart.js visualizations</span>
                    </li>
                </ul>
                </div>

                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-deep-navy/10 rounded-lg flex items-center justify-center mb-6">
                    <Cloud className="h-6 w-6 text-deep-navy" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Cross-Device Sync</h3>
                <p className="text-muted-foreground mb-4">
                    Access your hydration data anywhere with real-time synchronization across all your devices.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Real-time cloud sync</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Secure data backup</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>MongoDB cloud storage</span>
                    </li>
                </ul>
                </div>

                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-alert-coral/10 rounded-lg flex items-center justify-center mb-6">
                    <Shield className="h-6 w-6 text-alert-coral" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Privacy First</h3>
                <p className="text-muted-foreground mb-4">
                    Your data is protected with enterprise-grade security and anonymous tracking options.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Anonymous user option</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>End-to-end encryption</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>No data selling policy</span>
                    </li>
                </ul>
                </div>

                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-success-seafoam/10 rounded-lg flex items-center justify-center mb-6">
                    <Smartphone className="h-6 w-6 text-success-seafoam" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Modern Experience</h3>
                <p className="text-muted-foreground mb-4">
                    Built with the latest web technologies for a fast, responsive, and delightful user experience.
                </p>
                <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>React 19 & Vite 7.1</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Responsive design</span>
                    </li>
                    <li className="flex items-center space-x-2">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    <span>Smooth animations</span>
                    </li>
                </ul>
                </div>
            </div>
            </section>

            {/* Technology Stack */}
            <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                Built with <span className="text-aqua-blue">Modern Technology</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powered by industry-leading technologies for performance, security, and scalability.
                </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-aqua-blue/10 rounded-lg flex items-center justify-center">
                    <Smartphone className="h-5 w-5 text-aqua-blue" />
                    </div>
                    <h3 className="text-2xl font-semibold text-deep-navy">Frontend Technologies</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">React 19</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Vite 7.1</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">TailwindCSS 4.1</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">shadcn/ui</span>
                    </div>
                    </div>
                    <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Chart.js 4.5</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Axios 1.11</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Lucide React</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Anime.js 4.1</span>
                    </div>
                    </div>
                </div>
                </div>

                <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8">
                <div className="flex items-center space-x-3 mb-6">
                    <div className="w-10 h-10 bg-deep-navy/10 rounded-lg flex items-center justify-center">
                    <Cloud className="h-5 w-5 text-deep-navy" />
                    </div>
                    <h3 className="text-2xl font-semibold text-deep-navy">Backend Technologies</h3>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Node.js</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Express 5.1</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">MongoDB 6.18</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Mongoose 8.17</span>
                    </div>
                    </div>
                    <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">JWT 9.0</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">bcrypt 6.0</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Nodemailer 7.0</span>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Star className="h-4 w-4 text-success-seafoam" />
                        <span className="text-muted-foreground">Web Push 3.6</span>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>

            {/* How It Works */}
            <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                How <span className="text-aqua-blue">Aqua Alert</span> Works
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Get started in minutes with our simple three-step process.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                <div className="w-16 h-16 bg-aqua-blue/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-aqua-blue">1</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Set Your Goals</h3>
                <p className="text-muted-foreground">
                    Create an account (or go anonymous) and set your personalized daily hydration goal based on your needs.
                </p>
                </div>

                <div className="text-center">
                <div className="w-16 h-16 bg-success-seafoam/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-success-seafoam">2</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Track Your Intake</h3>
                <p className="text-muted-foreground">
                    Log your water consumption throughout the day with our intuitive interface and smart suggestions.
                </p>
                </div>

                <div className="text-center">
                <div className="w-16 h-16 bg-sky-cyan/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <span className="text-2xl font-bold text-sky-cyan">3</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Stay Motivated</h3>
                <p className="text-muted-foreground">
                    Receive smart reminders, view your progress, and celebrate your hydration achievements.
                </p>
                </div>
            </div>
            </section>

            {/* Benefits */}
            <section className="mb-20">
            <div className="bg-gradient-to-r from-aqua-blue/10 to-sky-cyan/10 rounded-xl border border-border-subtle p-8 md:p-12">
                <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                    Benefits of <span className="text-aqua-blue">Staying Hydrated</span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Discover how proper hydration can transform your health and well-being.
                </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center">
                    <div className="w-12 h-12 bg-success-seafoam/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Heart className="h-6 w-6 text-success-seafoam" />
                    </div>
                    <h3 className="font-semibold text-deep-navy mb-2">Better Health</h3>
                    <p className="text-sm text-muted-foreground">Supports organ function and overall wellness</p>
                </div>

                <div className="text-center">
                    <div className="w-12 h-12 bg-aqua-blue/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Zap className="h-6 w-6 text-aqua-blue" />
                    </div>
                    <h3 className="font-semibold text-deep-navy mb-2">More Energy</h3>
                    <p className="text-sm text-muted-foreground">Prevents fatigue and boosts mental clarity</p>
                </div>

                <div className="text-center">
                    <div className="w-12 h-12 bg-sky-cyan/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-6 w-6 text-sky-cyan" />
                    </div>
                    <h3 className="font-semibold text-deep-navy mb-2">Better Skin</h3>
                    <p className="text-sm text-muted-foreground">Maintains skin elasticity and radiance</p>
                </div>

                <div className="text-center">
                    <div className="w-12 h-12 bg-deep-navy/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <Target className="h-6 w-6 text-deep-navy" />
                    </div>
                    <h3 className="font-semibold text-deep-navy mb-2">Weight Management</h3>
                    <p className="text-sm text-muted-foreground">Supports healthy metabolism and appetite control</p>
                </div>
                </div>
            </div>
            </section>

            {/* Call to Action */}
            <div className="text-center p-8 md:p-12 bg-gradient-to-r from-aqua-blue/10 to-sky-cyan/10 rounded-xl border border-border-subtle">
            <h3 className="text-3xl md:text-4xl font-bold text-deep-navy mb-4">
                Ready to Transform Your <span className="text-aqua-blue">Hydration Habits</span>?
            </h3>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
                Join thousands of users who have already improved their health with Aqua Alert. 
                Start your hydration journey today - it's completely free!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                onClick={onNavigateToSignup}
                size="lg"
                className="bg-aqua-blue hover:bg-aqua-blue/90 text-white group transition-all duration-300 hover:scale-105"
                >
                Start Free Today
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button 
                variant="outline"
                size="lg"
                onClick={onNavigateToLogin}
                className="group transition-all duration-300 hover:scale-105"
                >
                Sign In
                </Button>
            </div>
            </div>
        </main>

        {/* Footer */}
        <footer className="bg-surface-card border-t border-border-subtle mt-20">
            <div className="max-w-7xl mx-auto px-6 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex items-center space-x-2 mb-4 md:mb-0">
                <div className="rounded-full bg-white p-2 backdrop-blur-sm">
                    <img 
                    src="/src/assets/logo.png" 
                    alt="AquaAlert Logo" 
                    className="h-24 w-24 object-contain"
                    />
                </div>
                </div>
                
                <div className="flex space-x-6 text-sm text-muted-foreground">
                <button 
                    onClick={onNavigateToPrivacy}
                    className="hover:text-aqua-blue transition-colors cursor-pointer"
                >
                    Privacy
                </button>
                <button 
                    onClick={onNavigateToTerms}
                    className="hover:text-aqua-blue transition-colors cursor-pointer"
                >
                    Terms
                </button>
                <button 
                    onClick={onNavigateToSupport}
                    className="hover:text-aqua-blue transition-colors cursor-pointer"
                >
                    Support
                </button>
                </div>
            </div>
            
            <div className="border-t border-border-subtle mt-6 pt-6 text-center text-sm text-muted-foreground">
                © 2025 Aqua Alert. All rights reserved.
            </div>
            </div>
        </footer>
        </div>
    );
    }

    export default LearnMorePage;