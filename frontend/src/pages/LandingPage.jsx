    import react from "react"
    import { Button } from "@/components/ui/button"
    import { Bell, Smartphone, ArrowRight, Target, Book } from "lucide-react"

    function LandingPage({ onNavigateToSignup, onNavigateToLogin }) {
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
                onClick={onNavigateToLogin}
                className="text-deep-navy hover:text-aqua-blue group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
                Sign In
            </Button>
            <Button 
                onClick={onNavigateToSignup}
                className="bg-aqua-blue hover:bg-aqua-blue/90 text-white group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
                Get Started
                <ArrowRight className=" h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            </div>
        </nav>

        {/* Hero Section */}
        <main className="max-w-7xl mx-auto px-6 py-12">
            <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-bold text-deep-navy mb-6">
                Stay <span className="text-aqua-blue">Hydrated</span>,
                <br />
                Stay <span className="text-success-seafoam">Healthy</span>
            </h1>
            
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Track your daily water intake, set personalized goals, and receive smart reminders 
                to maintain optimal hydration throughout your day.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
                <Button 
                size="lg" 
                onClick={onNavigateToSignup}
                className="bg-aqua-blue hover:bg-aqua-blue/90 text-white text-lg px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                Get Started Free
                <ArrowRight className=" h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button 
                variant="outline" 
                size="lg"
                className="text-deep-navy border-border-subtle hover:bg-background-light text-lg px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                    <Book className=" h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Learn More
                </Button>
            </div>

            {/* Features Preview */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
                <div className="rounded-xl bg-white p-8 shadow-sm border border-[#D6E4F0] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group">
                    <div className="bg-surface-card p-6 rounded-xl shadow-sm border border-border-subtle">
                <div className="w-12 h-12 bg-aqua-blue/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                <span className="text-aqua-blue text-2xl">💧</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Smart Tracking</h3>
                <p className="text-muted-foreground">
                Easily log your water intake with our intuitive interface and smart suggestions.
                </p>
            </div>
                </div>
                
                <div className="rounded-xl bg-white p-8 shadow-sm border border-[#D6E4F0] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group"><div className="bg-surface-card p-6 rounded-xl shadow-sm border border-border-subtle">
                <div className="w-12 h-12 bg-success-seafoam/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-success-seafoam text-2xl">🎯</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Personal Goals</h3>
                <p className="text-muted-foreground">
                    Set customized daily hydration goals based on your lifestyle and preferences.
                </p>
                </div>
                </div>
                
                <div className="rounded-xl bg-white p-8 shadow-sm border border-[#D6E4F0] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group"><div className="bg-surface-card p-6 rounded-xl shadow-sm border border-border-subtle">
                <div className="w-12 h-12 bg-sky-cyan/10 rounded-lg flex items-center justify-center mb-4 mx-auto">
                    <span className="text-sky-cyan text-2xl">🔔</span>
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Smart Reminders</h3>
                <p className="text-muted-foreground">
                    Get gentle notifications throughout the day to help you stay on track.
                </p>
                </div>
                </div>
                
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
                <a href="#" className="hover:text-aqua-blue transition-colors">Privacy</a>
                <a href="#" className="hover:text-aqua-blue transition-colors">Terms</a>
                <a href="#" className="hover:text-aqua-blue transition-colors">Support</a>
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

    export default LandingPage;