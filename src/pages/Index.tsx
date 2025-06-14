
import HabbitMascot from "../components/HabbitMascot";
import FeatureCard from "../components/FeatureCard";
import { Clock10, Bell, LayoutDashboard, Heart, Wand2, PlusCircle } from "lucide-react";

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
      "Get timely notifications when it’s time to complete a habit — no stress, just a calm nudge to stay consistent.",
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

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-0 pt-0 font-playfair" style={{ fontFamily: "'Playfair Display', serif" }}>
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-tl from-[#FFE1C6] via-white to-[#F68A1F13] relative">
        <div className="absolute left-6 top-6">
          {/* Tiny mascot badge floating on the side/top left */}
          <HabbitMascot size={56} className="opacity-90 hover:scale-110 transition-transform" />
        </div>
        <HabbitMascot bounce size={160} className="mb-8 drop-shadow-2xl" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#F68A1F] mb-3 animate-fade-in font-playfair" style={{ fontFamily: "'Playfair Display', serif" }}>Hubbit</h1>
        <p className="text-2xl md:text-3xl text-orange-900 font-semibold mb-6 animate-fade-in font-playfair" style={{ fontFamily: "'Playfair Display', serif" }}>
          Build new habits. The playful way.
        </p>
        <button
          className="font-bold rounded-full bg-[#F68A1F] text-white px-9 py-4 text-lg shadow-xl opacity-60 cursor-not-allowed animate-fade-in font-playfair"
          style={{ letterSpacing: "0.03em", pointerEvents: "none", fontFamily: "'Playfair Display', serif" }}
          disabled
        >
          Coming soon
        </button>
      </div>

      {/* Features Section */}
      <section className="w-full max-w-5xl px-6 py-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-400 text-sm opacity-90 animate-fade-in font-playfair" style={{ fontFamily: "'Playfair Display', serif" }}>
        <div className="flex items-center justify-center gap-2 mb-2">
          <HabbitMascot size={32} />
          <span className="font-semibold text-[#F68A1F] font-playfair">Hubbit</span>
        </div>
        <span>Copyright © {new Date().getFullYear()} Hubbit. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Index;
