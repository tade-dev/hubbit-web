import HabbitMascot from "../components/HabbitMascot";
import { Clock10, Bell, LayoutDashboard, Heart, PlusCircle } from "lucide-react";
import appScreenshot1 from "@/assets/app-screenshot-1.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";
import appScreenshot3 from "@/assets/app-screenshot-3.png";

const features = [
  {
    icon: <Clock10 className="w-6 h-6" />,
    title: "Simple Daily Habit Scheduling",
    description:
      "Plan your day with ease. Add habits and assign them specific times to receive gentle reminders throughout the day.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Smart Reminders",
    description:
      "Get timely notifications when it's time to complete a habit — no stress, just a calm nudge to stay consistent.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Time-Based Habit Organization",
    description:
      "Habits are grouped by Morning, Afternoon, and Evening, helping you focus on what matters in the right moment.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Clean, Minimal Design",
    description:
      "No distractions. Hubbit is designed for clarity — with a lightweight interface and warm accent tones that feel familiar on iOS.",
  },
  {
    icon: <PlusCircle className="w-6 h-6" />,
    title: "Quick Add & Edit",
    description:
      "Create, update, or remove habits in seconds with an intuitive and smooth workflow.",
  },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-start pt-12 pb-20 px-6 relative overflow-hidden">
        {/* Navigation */}
        <nav className="w-full max-w-6xl flex justify-between items-center mb-16">
          <div className="flex items-center gap-2">
            <HabbitMascot size={36} />
            <span className="text-xl font-bold text-foreground">Hubbit</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-medium">Features</a>
            <a href="/about" className="text-muted-foreground hover:text-foreground transition-smooth text-sm font-medium">About</a>
          </div>
        </nav>

        {/* Hero Content */}
        <div className="max-w-4xl text-center mb-12">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground mb-4 leading-tight tracking-tight opacity-0 animate-fade-in-up">
            Habits Made Simple.
          </h1>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-primary mb-8 leading-tight tracking-tight opacity-0 animate-fade-in-up animation-delay-200">
            Progress Visualized.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up animation-delay-400">
            Transform your daily routine with a habit tracker that's as beautiful as it is powerful. Experience 
            <span className="text-primary font-semibold"> mindful tracking</span>, seamless 
            <span className="text-primary font-semibold"> insights</span>, and 
            <span className="text-primary font-semibold"> streaks</span> — all without the clutter.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up animation-delay-600">
            <button
              className="bg-foreground text-background px-8 py-4 rounded-full font-bold text-base opacity-60 cursor-not-allowed flex items-center gap-3"
              disabled
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              Coming Soon
            </button>
          </div>
        </div>

        {/* Phone Mockups */}
        <div className="relative w-full max-w-5xl mx-auto mt-8">
          <div className="flex justify-center items-end gap-4 md:gap-8">
            {/* Left Phone */}
            <div className="hidden md:block relative transform -rotate-6 translate-y-8 opacity-0 animate-fade-in-up animation-delay-400">
              <div className="w-48 lg:w-56 rounded-[2.5rem] overflow-hidden phone-shadow bg-foreground/5 p-1">
                <img 
                  src={appScreenshot2} 
                  alt="Hubbit Analytics" 
                  className="w-full rounded-[2rem]"
                />
              </div>
            </div>
            
            {/* Center Phone (Main) */}
            <div className="relative z-10 opacity-0 animate-fade-in-up animation-delay-200">
              <div className="w-56 md:w-64 lg:w-72 rounded-[2.5rem] overflow-hidden phone-shadow bg-foreground/5 p-1">
                <img 
                  src={appScreenshot1} 
                  alt="Hubbit Home Screen" 
                  className="w-full rounded-[2rem]"
                />
              </div>
            </div>
            
            {/* Right Phone */}
            <div className="hidden md:block relative transform rotate-6 translate-y-8 opacity-0 animate-fade-in-up animation-delay-600">
              <div className="w-48 lg:w-56 rounded-[2.5rem] overflow-hidden phone-shadow bg-foreground/5 p-1">
                <img 
                  src={appScreenshot3} 
                  alt="Hubbit Habit Detail" 
                  className="w-full rounded-[2rem]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-24 px-6 bg-card">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why you'll love Hubbit
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-background rounded-2xl p-6 transition-smooth hover:shadow-lg"
              >
                <div className="w-12 h-12 bg-secondary/50 rounded-xl flex items-center justify-center text-primary mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-24 px-6 bg-background">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to build better habits?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Use your phone's camera to scan and download when available.
          </p>
          <div className="inline-block bg-card p-6 rounded-2xl shadow-lg">
            <div className="w-32 h-32 bg-foreground/10 rounded-xl flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-medium">QR Coming Soon</span>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-card border-t border-border">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex items-center gap-2">
              <HabbitMascot size={32} />
              <span className="text-lg font-bold text-foreground">Hubbit</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="/privacy" className="text-muted-foreground hover:text-foreground transition-smooth">Privacy Policy</a>
              <a href="/terms" className="text-muted-foreground hover:text-foreground transition-smooth">Terms of Service</a>
              <a href="mailto:hi@tade.me" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© {new Date().getFullYear()} Hubbit. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
