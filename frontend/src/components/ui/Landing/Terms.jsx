    import { Button } from '@/components/ui/button';
    import { ArrowRight, Shield, FileText, Scale, AlertTriangle, Users } from 'lucide-react';

    function TermsPage({ onNavigateToLanding, onNavigateToSignup, onNavigateToPrivacy }) {
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
                <FileText className="h-8 w-8 text-aqua-blue" />
                </div>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-deep-navy mb-4">
                Terms of <span className="text-aqua-blue">Service</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Please read these terms carefully before using Aqua Alert.
            </p>
            <p className="text-sm text-muted-foreground mt-2">
                Last updated: August 2025
            </p>
            </div>

            {/* Terms Content */}
            <div className="bg-surface-card rounded-xl shadow-lg border border-border-subtle p-8 space-y-8">
            
            {/* Acceptance of Terms */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-aqua-blue/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-aqua-blue" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Acceptance of Terms</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>
                    By accessing and using Aqua Alert ("the Service"), you accept and agree to be bound by 
                    the terms and provision of this agreement.
                </p>
                <p>
                    If you do not agree to abide by the above, please do not use this service.
                </p>
                </div>
            </section>

            {/* Description of Service */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success-seafoam/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-success-seafoam" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Description of Service</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>
                    Aqua Alert is a water intake tracking application that helps users monitor their daily 
                    hydration goals. The service includes:
                </p>
                <ul className="list-disc list-inside space-y-1">
                    <li>Water intake logging and tracking</li>
                    <li>Personalized hydration goal setting</li>
                    <li>Smart reminder notifications</li>
                    <li>Analytics and progress tracking</li>
                    <li>Weather-based hydration recommendations</li>
                    <li>Anonymous and registered user options</li>
                </ul>
                </div>
            </section>

            {/* User Accounts */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-sky-cyan/10 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-sky-cyan" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">User Accounts</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                <div>
                    <h3 className="font-medium text-foreground mb-2">Account Types</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Registered accounts with email and password</li>
                    <li>Anonymous accounts with display name only</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium text-foreground mb-2">User Responsibilities</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Provide accurate and truthful information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Choose appropriate display names (no offensive content)</li>
                    <li>Notify us of any unauthorized use of your account</li>
                    </ul>
                </div>
                </div>
            </section>

            {/* Acceptable Use */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-alert-coral/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-alert-coral" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Acceptable Use Policy</h2>
                </div>
                <div className="space-y-4 text-muted-foreground">
                <div>
                    <h3 className="font-medium text-foreground mb-2">Prohibited Activities</h3>
                    <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Using the service for any unlawful purpose</li>
                    <li>Attempting to gain unauthorized access to our systems</li>
                    <li>Interfering with or disrupting the service</li>
                    <li>Creating multiple accounts to circumvent limitations</li>
                    <li>Using offensive, inappropriate, or misleading display names</li>
                    <li>Sharing false or misleading health information</li>
                    </ul>
                </div>
                <div>
                    <h3 className="font-medium text-foreground mb-2">Medical Disclaimer</h3>
                    <p className="ml-4 bg-alert-coral/10 p-3 rounded-lg border border-alert-coral/20">
                    <strong>Important:</strong> Aqua Alert is not a medical device or service. 
                    The hydration recommendations are for general wellness purposes only. 
                    Always consult with healthcare professionals for medical advice.
                    </p>
                </div>
                </div>
            </section>

            {/* Intellectual Property */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-deep-navy/10 rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-deep-navy" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Intellectual Property Rights</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>
                    The service and its original content, features, and functionality are and will remain 
                    the exclusive property of Aqua Alert and its licensors.
                </p>
                <p>
                    You retain ownership of any data you provide to the service, but grant us a license 
                    to use this data to provide and improve the service.
                </p>
                <p>
                    The service is protected by copyright, trademark, and other laws.
                </p>
                </div>
            </section>

            {/* Service Availability */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-success-seafoam/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-success-seafoam" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Service Availability</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>• We strive to maintain high availability but cannot guarantee 100% uptime</p>
                <p>• Scheduled maintenance will be announced in advance when possible</p>
                <p>• We reserve the right to modify or discontinue the service with reasonable notice</p>
                <p>• Free service is provided "as is" without warranties</p>
                </div>
            </section>

            {/* Privacy and Data */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-aqua-blue/10 rounded-lg flex items-center justify-center">
                    <Shield className="h-5 w-5 text-aqua-blue" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Privacy and Data Handling</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>• Your privacy is important to us - see our Privacy Policy for details</p>
                <p>• We collect minimal data necessary to provide the service</p>
                <p>• Anonymous users' data is stored locally on their devices</p>
                <p>• Registered users can export or delete their data at any time</p>
                <p>• We never sell or share personal data with third parties</p>
                </div>
            </section>

            {/* Limitation of Liability */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-alert-coral/10 rounded-lg flex items-center justify-center">
                    <AlertTriangle className="h-5 w-5 text-alert-coral" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Limitation of Liability</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>
                    <strong>Medical Disclaimer:</strong> Aqua Alert provides general hydration tracking 
                    and is not intended as medical advice, diagnosis, or treatment.
                </p>
                <p>
                    In no event shall Aqua Alert be liable for any indirect, incidental, special, 
                    consequential, or punitive damages arising from your use of the service.
                </p>
                <p>
                    Our total liability for any claims shall not exceed the amount you paid for the service 
                    (if any) in the 12 months preceding the claim.
                </p>
                </div>
            </section>

            {/* Termination */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-deep-navy/10 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-deep-navy" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Account Termination</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>• You may terminate your account at any time through the account settings</p>
                <p>• We may terminate accounts that violate these terms</p>
                <p>• Upon termination, your data will be deleted within 30 days</p>
                <p>• Anonymous users can clear their data by clearing browser storage</p>
                </div>
            </section>

            {/* Governing Law */}
            <section>
                <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-sky-cyan/10 rounded-lg flex items-center justify-center">
                    <Scale className="h-5 w-5 text-sky-cyan" />
                </div>
                <h2 className="text-2xl font-semibold text-deep-navy">Governing Law</h2>
                </div>
                <div className="space-y-3 text-muted-foreground ml-4">
                <p>
                    These terms shall be interpreted and governed by the laws of the jurisdiction 
                    where the service is operated, without regard to conflict of law provisions.
                </p>
                <p>
                    Any disputes arising from these terms or the use of the service shall be resolved 
                    through binding arbitration or in the courts of the applicable jurisdiction.
                </p>
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-background-light rounded-lg p-6">
                <h2 className="text-2xl font-semibold text-deep-navy mb-4">Contact Us</h2>
                <div className="space-y-4 text-muted-foreground">
                <p>
                    If you have any questions about these Terms of Service, please contact us:
                </p>
                <div className="space-y-3">
                    <div className="space-x-3 flex items-center justify-center">
                    <div className="w-8 h-8 bg-aqua-blue/10 rounded-lg flex items-center justify-center">
                        <FileText className="h-4 w-4 text-aqua-blue" />
                    </div>
                    <div>
                        <p className="font-medium text-foreground">Email</p>
                        <a 
                        href="mailto:legal@aqua-alert.app" 
                        className="text-aqua-blue hover:underline"
                        >
                        legal@aqua-alert.app
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

            {/* Changes to Terms */}
            <section className="border-t pt-6">
                <h2 className="text-xl font-semibold text-deep-navy mb-3">Changes to These Terms</h2>
                <p className="text-muted-foreground">
                We reserve the right to modify these terms at any time. When we make changes, 
                we will update the "Last updated" date and notify users through the app or email. 
                Continued use of Aqua Alert after changes constitutes acceptance of the updated terms.
                </p>
            </section>
            </div>

            {/* Call to Action */}
            <div className="text-center mt-12 p-8 bg-gradient-to-r from-aqua-blue/10 to-sky-cyan/10 rounded-xl border border-border-subtle">
            <h3 className="text-2xl font-semibold text-deep-navy mb-4">
                Ready to Start Your Hydration Journey?
            </h3>
            <p className="text-muted-foreground mb-6">
                By using Aqua Alert, you agree to these terms and our commitment to your privacy.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                onClick={onNavigateToSignup}
                className="bg-aqua-blue hover:bg-aqua-blue/90 text-white group transition-all duration-300 hover:scale-105"
                >
                Accept & Get Started
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
                <button className="hover:text-aqua-blue transition-colors font-medium">Terms</button>
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

    export default TermsPage;