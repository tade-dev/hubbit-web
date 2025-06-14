
import HabbitMascot from "../components/HabbitMascot";
import FeatureCard from "../components/FeatureCard";
import { Clock10, Bell, LayoutDashboard, Heart, PlusCircle, Star, Users, Shield } from "lucide-react";

const features = [
  {
    icon: <Clock10 size={32} />,
    title: "Simple Daily Habit Scheduling",
    description:
      "Plan your day with ease. Add habits and assign them specific times to receive gentle reminders throughout the day.",
  },
  {
    icon: <Bell size={32} />,
    title: "Smart Reminders",
    description:
      "Get timely notifications when it's time to complete a habit — no stress, just a calm nudge to stay consistent.",
  },
  {
    icon: <LayoutDashboard size={32} />,
    title: "Time-Based Habit Organization",
    description:
      "Habits are grouped by Morning, Afternoon, and Evening, helping you focus on what matters in the right moment.",
  },
  {
    icon: <Heart size={32} />,
    title: "Clean, Minimal Design",
    description:
      "No distractions. Hubbit is designed for clarity — with a lightweight interface and warm accent tones that feel familiar on iOS.",
  },
  {
    icon: <PlusCircle size={32} />,
    title: "Quick Add & Edit",
    description:
      "Create, update, or remove habits in seconds with an intuitive and smooth workflow.",
  },
];

const stats = [
  { icon: <Users size={24} />, number: "10K+", label: "Happy Users" },
  { icon: <Star size={24} />, number: "4.9", label: "App Rating" },
  { icon: <Shield size={24} />, number: "99.9%", label: "Uptime" },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 font-poppins">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/80 sticky top-0 z-50 border-b border-orange-100">
        <div className="flex items-center gap-3">
          <HabbitMascot size={40} className="animate-float" />
          <span className="text-2xl font-bold text-[#F68A1F]">Hubbit</span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          <a href="#features" className="text-gray-600 hover:text-[#F68A1F] transition-colors font-medium">Features</a>
          <a href="#about" className="text-gray-600 hover:text-[#F68A1F] transition-colors font-medium">About</a>
          <button className="bg-[#F68A1F] text-white px-6 py-2 rounded-full font-semibold hover:bg-orange-600 transition-colors">
            Get Started
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="w-full flex flex-col items-center justify-center py-20 px-6">
        <div className="max-w-4xl text-center">
          <div className="mb-8">
            <HabbitMascot size={120} className="animate-float mx-auto mb-6" />
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Build Better
            <span className="text-[#F68A1F] block">Habits Daily</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your routine with Hubbit - the playful habit tracker that makes building new habits effortless and fun.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button
              className="bg-[#F68A1F] text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg opacity-60 cursor-not-allowed animate-pulse-glow"
              disabled
            >
              Coming Soon
            </button>
            <button className="text-[#F68A1F] px-8 py-4 rounded-full font-semibold text-lg border-2 border-[#F68A1F] hover:bg-[#F68A1F] hover:text-white transition-all">
              Learn More
            </button>
          </div>
          
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="flex justify-center mb-3 text-[#F68A1F]">
                  {stat.icon}
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Hubbit?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover the features that make Hubbit the perfect companion for your habit-building journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-20 px-6 bg-gradient-to-r from-[#F68A1F] to-orange-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <HabbitMascot size={80} className="mx-auto mb-6 animate-float" />
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of users who are already building better habits with Hubbit.
          </p>
          <button
            className="bg-white text-[#F68A1F] px-8 py-4 rounded-full font-bold text-lg shadow-lg opacity-60 cursor-not-allowed"
            disabled
          >
            Coming Soon
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full py-12 px-6 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center gap-3 mb-6 md:mb-0">
              <HabbitMascot size={40} />
              <span className="text-2xl font-bold text-[#F68A1F]">Hubbit</span>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">Contact</a>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Hubbit. All rights reserved. Built with ❤️ for habit builders.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
