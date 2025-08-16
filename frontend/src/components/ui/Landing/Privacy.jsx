    import { Button } from '@/components/ui/button';
    import { ArrowRight, Shield, Eye, Lock, Database, Mail, Cookie, Github } from 'lucide-react';

    function PrivacyPage({ onNavigateToLanding, onNavigateToSignup, onNavigateToTerms }) {
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
                <Shield className="h-8 w-8 text-aqua-blue" />
                </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Privacy <span className="text-aqua-blue">Policy</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Your privacy is important to us. Learn how we collect, use, and protect your information.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
                Last updated: August 2025
            </p>
            </div>

            {/* Privacy Content */}
            <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 space-y-8">
            
            {/* Information We Collect */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-aqua-blue/10 rounded-lg flex items-center justify-center">
                    <Database className="h-5 w-5 text-aqua-blue" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Information We Collect</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                <div>
                    <h3 className="font-medium text-foreground mb-2">Account Information</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Email address (for registered users only)</li>
                    <li>Display name</li>
                    <li>Password (encrypted and hashed)</li>
                    <li>Timezone settings</li>
                    <li>Daily hydration goals</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium text-foreground mb-2">Usage Data</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Water intake logs and timestamps</li>
                    <li>App usage patterns</li>
                    <li>Device information (for notifications)</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium text-foreground mb-2">Anonymous Users</h3>
                    <p className="ml-4">
                    For anonymous users, we only collect your display name, timezone, and hydration data. 
                    No email or personal identifiers are required or stored.
                    </p>
                </div>
                </div>
            </section>

            {/* How We Use Information */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success-seafoam/10 rounded-lg flex items-center justify-center">
                    <Eye className="h-5 w-5 text-success-seafoam" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">How We Use Your Information</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>• <strong>Provide Services:</strong> Track your water intake and provide personalized hydration reminders</p>
                <p>• <strong>Account Management:</strong> Authenticate users and maintain account settings</p>
                <p>• <strong>Notifications:</strong> Send hydration reminders via push notifications or email (if enabled)</p>
                <p>• <strong>Analytics:</strong> Understand usage patterns to improve the app (anonymized data only)</p>
                <p>• <strong>Weather Integration:</strong> Provide weather-based hydration recommendations (location data is not stored)</p>
                </div>
            </section>

            {/* Data Protection */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-sky-cyan/10 rounded-lg flex items-center justify-center">
                    <Lock className="h-5 w-5 text-sky-cyan" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Data Protection & Security</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>• <strong>Encryption:</strong> All passwords are hashed using bcrypt with salt rounds</p>
                <p>• <strong>Secure Transmission:</strong> Data is transmitted over HTTPS connections</p>
                <p>• <strong>JWT Tokens:</strong> Authentication uses secure JSON Web Tokens with expiration</p>
                <p>• <strong>Database Security:</strong> MongoDB with access controls and secure connections</p>
                <p>• <strong>No Third-Party Sharing:</strong> We never sell or share your personal data with third parties</p>
                </div>
            </section>

            {/* Third-Party Services */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-alert-coral/10 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 text-alert-coral" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Third-Party Services</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                <div>
                    <h3 className="font-medium text-foreground mb-2">Weather API</h3>
                    <p className="ml-4">
                    We use OpenWeather API to provide weather-based hydration recommendations. 
                    Location data is only used temporarily for weather queries and is not stored.
                    </p>
                </div>
                <div>
                    <h3 className="font-medium text-foreground mb-2">Email Service</h3>
                    <p className="ml-4">
                    Email notifications are sent through Nodemailer. Your email is only used for 
                    account-related communications and hydration reminders if you opt-in.
                    </p>
                </div>
                <div>
                    <h3 className="font-medium text-foreground mb-2">Push Notifications</h3>
                    <p className="ml-4">
                    Browser push notifications use the Web Push API. Device tokens are stored 
                    securely and only used for sending hydration reminders.
                    </p>
                </div>
                </div>
            </section>

            {/* Cookies and Storage */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-deep-navy/10 rounded-lg flex items-center justify-center">
                    <Cookie className="h-5 w-5 text-deep-navy" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Cookies & Local Storage</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>• <strong>Authentication Tokens:</strong> Stored in browser localStorage for maintaining login sessions</p>
                <p>• <strong>User Preferences:</strong> App settings and preferences stored locally</p>
                <p>• <strong>Anonymous Users:</strong> Data stored locally in browser storage without server backup</p>
                <p>• <strong>No Tracking Cookies:</strong> We don't use cookies for advertising or tracking purposes</p>
                </div>
            </section>

            {/* Your Rights */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success-seafoam/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-success-seafoam" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Your Privacy Rights</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>• <strong>Access:</strong> View all personal data we have about you</p>
                <p>• <strong>Update:</strong> Modify your profile information and preferences</p>
                <p>• <strong>Delete:</strong> Permanently delete your account and all associated data</p>
                <p>• <strong>Export:</strong> Request a copy of your data in a portable format</p>
                <p>• <strong>Opt-out:</strong> Disable email notifications or push notifications at any time</p>
                </div>
            </section>

            {/* Data Retention */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-aqua-blue/10 rounded-lg flex items-center justify-center">
                    <Database className="h-5 w-5 text-aqua-blue" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Data Retention</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>• <strong>Active Accounts:</strong> Data retained while account is active</p>
                <p>• <strong>Deleted Accounts:</strong> All data permanently deleted within 30 days</p>
                <p>• <strong>Anonymous Users:</strong> Data stored locally on device, not on our servers</p>
                <p>• <strong>Backup Retention:</strong> Encrypted backups retained for 90 days for security</p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-background-light rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                <p>
                    If you have any questions about this Privacy Policy or our data practices, 
                    please contact us:
                </p>
                <div className="space-y-3">
                    <div className="space-x-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-aqua-blue/10 rounded-lg flex items-center justify-center">
                        <Mail className="h-4 w-4 text-aqua-blue" />
                    </div>
                    <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a 
                        href="mailto:privacy@aqua-alert.app" 
                        className="text-aqua-blue hover:underline"
                        >
                        privacy@aqua-alert.app
                        </a>
                    </div>
                    </div>

                    <div className="space-x-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-deep-navy/10 rounded-lg flex items-center justify-center">
                        <Github className="h-4 w-4 text-deep-navy" />
                    </div>
                    <div>
                        <p className="font-medium text-foreground">GitHub</p>
                        <a 
                        href="https://github.com/AegisX-Dev/aqua-alert/issues" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-aqua-blue hover:underline"
                        >
                        Create an issue on our repository
                        </a>
                    </div>
                    </div>

                    <div className="space-x-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-success-seafoam/10 rounded-lg flex items-center justify-center">
                        <Shield className="h-4 w-4 text-success-seafoam" />
                    </div>
                    <div>
                        <p className="font-medium text-foreground">Response Time</p>
                        <p className="text-muted-foreground">We aim to respond within 48 hours</p>
                    </div>
                    </div>
                </div>
                </div>
            </section>

            {/* Changes to Policy */}
            <section className="border-t pt-6">
                <h2 className="text-xl font-semibold text-deep-navy mb-3">Changes to This Policy</h2>
                <p className="text-muted-foreground">
                We may update this Privacy Policy from time to time. When we make changes, 
                we will update the "Last updated" date and notify users through the app or email. 
                Continued use of Aqua Alert after changes constitutes acceptance of the updated policy.
                </p>
            </section>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-aqua-blue/10 to-sky-cyan/10 rounded-xl border border-border-subtle">
            <h3 className="text-2xl font-semibold text-deep-navy mb-4">
                Ready to Start Your Hydration Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
                Join thousands of users who trust Aqua Alert with their hydration tracking.
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
                Learn More
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
                <button className="hover:text-aqua-blue transition-colors font-medium">Privacy</button>
                <button 
                    onClick={onNavigateToTerms}
                    className="hover:text-aqua-blue transition-colors cursor-pointer"
                >
                    Terms
                </button>
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

    export default PrivacyPage;