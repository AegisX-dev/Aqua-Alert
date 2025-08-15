import react from "react"
    import { Button } from "@/components/ui/button"
    import { Bell, Smartphone, ArrowRight, Target, Book } from "lucide-react"

    function LandingPage() {
        return (
        <div className="h-screen bg-gradient-to-br from-[#00B8D9] via-[#00b8d989] to-[#63e5ff1a] text-white rounded-2xl">
        {/* Hero Section */}
            <section className="relative px-4 py-20 text-center">
            <div className="mx-auto max-w-4xl">
            {/* Logo */}
            <div className="mb-8 flex justify-center">
                <div className="rounded-full bg-white p-2 backdrop-blur-sm">
                <img 
                    src="/src/assets/logo.png" 
                    alt="AquaAlert Logo" 
                    className="h-24 w-24 object-contain"
                />
                </div>
            </div>
            
            {/* Headline */}
            <h1 className="mb-6 text-4xl font-bold leading-tight md:text-6xl">
                Never Miss a Sip
            </h1>
            
            <p className="mb-10 text-lg text-white/90 md:text-xl">
                Stay hydrated with smart reminders, personalized goals, and seamless tracking across all your devices.
            </p>
            
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button 
                size="lg" 
                className="bg-white text-black hover:bg-green-300 font-semibold px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                Get Started
                <ArrowRight className=" h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </Button>
                <Button 
                variant="outline" 
                size="lg"
                className="border-white text-black hover:bg-yellow-200 font-semibold px-8 py-3 group transition-all duration-300 hover:scale-105 hover:shadow-lg"
                >
                <Book className=" h-5 w-5 transition-transform duration-300 group-hover:rotate-12" />
                Learn More
                </Button>
            </div>
            </div>
        </section>

        {/* Features Section */}
        <section className="bg-gradient-to-br from-gray-500 via-gray-400 to-gray-300 py-16 text-[#0A2540]">
            <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-8 md:grid-cols-3">
                {/* Smart Reminders */}
                <div className="rounded-xl bg-white p-8 shadow-sm border border-[#D6E4F0] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group">
                <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-[#00B8D9]/10 p-3 transition-all duration-300 group-hover:bg-[#00B8D9]/20 group-hover:scale-110">
                    <Bell className="h-8 w-8 text-[#00B8D9] transition-all duration-300 group-hover:animate-pulse" />
                    </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-center transition-colors duration-300 group-hover:text-[#00B8D9]">Smart Reminders</h3>
                <p className="text-[#0A2540]/70 text-center leading-relaxed transition-colors duration-300 group-hover:text-[#0A2540]/90">
                    Intelligent notifications that adapt to your schedule and help you maintain healthy hydration habits throughout the day.
                </p>
                </div>

                {/* Personalized Goals */}
                <div className="rounded-xl bg-white p-8 shadow-sm border border-[#D6E4F0] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group">
                <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-[#3DDC97]/10 p-3 transition-all duration-300 group-hover:bg-[#3DDC97]/20 group-hover:scale-110">
                    <Target className="h-8 w-8 text-[#3DDC97] transition-all duration-300 group-hover:rotate-12" />
                    </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-center transition-colors duration-300 group-hover:text-[#3DDC97]">Personalized Goals</h3>
                <p className="text-[#0A2540]/70 text-center leading-relaxed transition-colors duration-300 group-hover:text-[#0A2540]/90">
                    Custom hydration targets based on your lifestyle, activity level, and personal preferences for optimal health.
                </p>
                </div>

                {/* Cross-Device Sync */}
                <div className="rounded-xl bg-white p-8 shadow-sm border border-[#D6E4F0] transform transition-all duration-300 hover:scale-105 hover:shadow-xl hover:-translate-y-2 group">
                <div className="mb-4 flex justify-center">
                    <div className="rounded-full bg-[#63E6FF]/10 p-3 transition-all duration-300 group-hover:bg-[#63E6FF]/20 group-hover:scale-110">
                    <Smartphone className="h-8 w-8 text-[#63E6FF] transition-all duration-300 group-hover:animate-bounce" />
                    </div>
                </div>
                <h3 className="mb-3 text-xl font-semibold text-center transition-colors duration-300 group-hover:text-[#63E6FF]">Cross-Device Sync</h3>
                <p className="text-[#0A2540]/70 text-center leading-relaxed transition-colors duration-300 group-hover:text-[#0A2540]/90">
                    Seamlessly track your water intake across all devices with real-time synchronization and cloud backup.
                </p>
                </div>
            </div>
            </div>
        </section>
        </div>
    )
    }

    export default LandingPage