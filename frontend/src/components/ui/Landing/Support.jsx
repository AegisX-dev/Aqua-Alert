    import { Button } from '@/components/ui/button';
    import { ArrowRight, MessageCircle, Mail, Github, Book, HelpCircle, Heart, Clock, CheckCircle } from 'lucide-react';

    function SupportPage({ onNavigateToLanding, onNavigateToSignup, onNavigateToPrivacy, onNavigateToTerms }) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-sky-cyan/20 via-background-light to-aqua-blue/10 rounded-2xl">
        {/* Header/Navigation */}
        <nav className="flex justify-between items-center p-6 max-w-7xl mx-auto">
            <div className="flex items-center space-x-2">
            <div className="rounded-full bg-white p-2 backdrop-blur-sm">
                <img 
                src="/public/logo.png" 
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
                onClick={onNavigateToSignup}
                className="bg-aqua-blue hover:bg-aqua-blue/90 text-white group transition-all duration-300 hover:scale-105 hover:shadow-lg"
            >
                Get Started
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            </div>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto px-6 py-8">
            {/* Header */}
            <div className="text-center mb-12">
            <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-aqua-blue/10 rounded-full flex items-center justify-center">
                <HelpCircle className="h-8 w-8 text-aqua-blue" />
                </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Support & <span className="text-aqua-blue">Help</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We're here to help you stay hydrated. Find answers to common questions or get in touch with our team.
            </p>
            </div>

            {/* Quick Help Cards */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
            <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-success-seafoam/10 rounded-lg flex items-center justify-center mb-4">
                <Book className="h-6 w-6 text-success-seafoam" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">Getting Started Guide</h3>
                <p className="text-muted-foreground mb-4">
                New to Aqua Alert? Learn how to set up your account, configure goals, and start tracking your hydration.
                </p>
                <Button 
                variant="outline" 
                className="group transition-all duration-300"
                >
                Read Guide
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>

            <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-6 hover:shadow-xl transition-all duration-300 hover:scale-105">
                <div className="w-12 h-12 bg-sky-cyan/10 rounded-lg flex items-center justify-center mb-4">
                <MessageCircle className="h-6 w-6 text-sky-cyan" />
                </div>
                <h3 className="text-xl font-semibold text-deep-navy mb-3">FAQ</h3>
                <p className="text-muted-foreground mb-4">
                Find quick answers to the most commonly asked questions about Aqua Alert features and functionality.
                </p>
                <Button 
                variant="outline" 
                className="group transition-all duration-300"
                >
                View FAQ
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
            </div>
            </div>

            {/* Frequently Asked Questions */}
            <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 mb-12">
            <h2 className="text-2xl font-semibold text-deep-navy mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-6">
                <div className="border-b border-border-subtle pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-aqua-blue/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-aqua-blue" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-deep-navy mb-2">How do I set my daily hydration goal?</h3>
                    <p className="text-muted-foreground">
                        You can set your daily hydration goal during signup or update it anytime in your profile settings. 
                        We recommend 2000ml (8 glasses) for most adults, but you can customize based on your needs.
                    </p>
                    </div>
                </div>
                </div>

                <div className="border-b border-border-subtle pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-success-seafoam/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-success-seafoam" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-deep-navy mb-2">What's the difference between registered and anonymous accounts?</h3>
                    <p className="text-muted-foreground">
                        Registered accounts sync your data across devices and provide backup. Anonymous accounts store 
                        data locally on your device only - perfect for privacy-conscious users who don't want to share personal information.
                    </p>
                    </div>
                </div>
                </div>

                <div className="border-b border-border-subtle pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-sky-cyan/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-sky-cyan" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-deep-navy mb-2">How do I enable or disable reminder notifications?</h3>
                    <p className="text-muted-foreground">
                        You can manage notification preferences in your browser settings or through the app's notification settings. 
                        We respect your privacy and only send helpful hydration reminders.
                    </p>
                    </div>
                </div>
                </div>

                <div className="border-b border-border-subtle pb-4 last:border-b-0 last:pb-0">
                <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-alert-coral/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-alert-coral" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-deep-navy mb-2">Is my data secure and private?</h3>
                    <p className="text-muted-foreground">
                        Yes! We use industry-standard encryption, never sell your data, and offer anonymous tracking options. 
                        Read our <button onClick={onNavigateToPrivacy} className="text-aqua-blue hover:underline">Privacy Policy</button> for details.
                    </p>
                    </div>
                </div>
                </div>

                <div>
                <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-deep-navy/10 rounded-full flex items-center justify-center mt-1">
                    <CheckCircle className="h-4 w-4 text-deep-navy" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-deep-navy mb-2">Can I export my hydration data?</h3>
                    <p className="text-muted-foreground">
                        Registered users can export their data anytime through the account settings. Anonymous users 
                        can manually backup their data by saving their browser's local storage.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Contact Options */}
            <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 mb-12">
            <h2 className="text-2xl font-semibold text-deep-navy mb-6">Contact Our Support Team</h2>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-aqua-blue/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-aqua-blue" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-deep-navy">Email Support</h3>
                    <p className="text-muted-foreground">Get help via email</p>
                    </div>
                </div>
                <div className="ml-13">
                    <a 
                    href="mailto:support@aqua-alert.app" 
                    className="text-aqua-blue hover:underline font-medium"
                    >
                    support@aqua-alert.app
                    </a>
                    <div className="flex items-center space-x-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Response within 24 hours</span>
                    </div>
                </div>
                </div>

                <div className="space-y-4">
                <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-deep-navy/10 rounded-lg flex items-center justify-center">
                    <Github className="h-5 w-5 text-deep-navy" />
                    </div>
                    <div>
                    <h3 className="font-semibold text-deep-navy">GitHub Issues</h3>
                    <p className="text-muted-foreground">Report bugs or request features</p>
                    </div>
                </div>
                <div className="ml-13">
                    <a 
                    href="https://github.com/AegisX-Dev/aqua-alert/issues" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-aqua-blue hover:underline font-medium"
                    >
                    Create an Issue
                    </a>
                    <div className="flex items-center space-x-2 mt-1">
                    <Clock className="h-4 w-4 text-muted-foreground" />
                    <span className="text-sm text-muted-foreground">Community support</span>
                    </div>
                </div>
                </div>
            </div>
            </div>

            {/* Feature Requests */}
            <div className="bg-gradient-to-r from-success-seafoam/10 to-aqua-blue/10 rounded-xl border border-border-subtle p-8 mb-12">
            <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success-seafoam/10 rounded-lg flex items-center justify-center">
                <Heart className="h-5 w-5 text-success-seafoam" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Feature Requests & Feedback</h2>
            </div>
            <p className="text-muted-foreground mb-6">
                We love hearing from our users! Your feedback helps us improve Aqua Alert and build features that matter to you.
            </p>
            <div className="space-y-3">
                <p className="text-muted-foreground">• Share your ideas for new features</p>
                <p className="text-muted-foreground">• Report any bugs you encounter</p>
                <p className="text-muted-foreground">• Suggest improvements to existing functionality</p>
                <p className="text-muted-foreground">• Tell us about your hydration journey</p>
            </div>
            <Button 
                className="mt-6 bg-success-seafoam hover:bg-success-seafoam/90 text-white group transition-all duration-300"
            >
                <Heart className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Share Feedback
            </Button>
            </div>

            {/* Call to Action */}
            <div className="text-center p-8 bg-gradient-to-r from-aqua-blue/10 to-sky-cyan/10 rounded-xl border border-border-subtle">
            <h3 className="text-2xl font-semibold text-deep-navy mb-4">
                Still Need Help?
            </h3>
            <p className="text-muted-foreground mb-6">
                Our support team is here to help you succeed on your hydration journey. Don't hesitate to reach out!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                onClick={onNavigateToSignup}
                className="bg-aqua-blue hover:bg-aqua-blue/90 text-white group transition-all duration-300 hover:scale-105"
                >
                Get Started Free
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button 
                variant="outline"
                onClick={onNavigateToLanding}
                className="group transition-all duration-300 hover:scale-105"
                >
                Back to Home
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
                <button className="hover:text-aqua-blue transition-colors font-medium">Support</button>
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

    export default SupportPage;