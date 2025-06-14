
import HabbitMascot from "../components/HabbitMascot";
import FeatureCard from "../components/FeatureCard";
import { CheckCircle, Calendar, Sparkles } from "lucide-react";

const features = [
  {
    icon: <CheckCircle size={32} />,
    title: "Simple Tracking",
    description: "Mark your habits done daily with one tap. Effortless, fun, and playful.",
  },
  {
    icon: <Calendar size={32} />,
    title: "Beautiful Streaks",
    description: "Visualize habits & streaks with gorgeous, easy-to-read progress.",
  },
  {
    icon: <Sparkles size={32} />,
    title: "Cheerful Rewards",
    description: "Earn encouragement from Hubbit with every streak you build!",
  },
];

const Index = () => {
  return (
    <div className="w-full min-h-screen bg-white flex flex-col items-center px-0 pt-0" style={{ fontFamily: "'Inter', Arial, sans-serif" }}>
      {/* Hero Section */}
      <div className="w-full flex flex-col items-center justify-center py-20 bg-gradient-to-tl from-[#FFE1C6] via-white to-[#F68A1F13] relative">
        <div className="absolute left-6 top-6">
          {/* Tiny mascot badge floating on the side/top left */}
          <HabbitMascot size={56} className="opacity-90 hover:scale-110 transition-transform" />
        </div>
        <HabbitMascot bounce size={160} className="mb-8 drop-shadow-2xl" />
        <h1 className="text-5xl md:text-7xl font-extrabold text-[#F68A1F] mb-3 animate-fade-in">Hubbit</h1>
        <p className="text-2xl md:text-3xl text-orange-900 font-semibold mb-6 animate-fade-in">
          Build new habits. The playful way.
        </p>
        <button
          className="font-bold rounded-full bg-[#F68A1F] text-white px-9 py-4 text-lg shadow-xl hover:bg-orange-400 active:scale-95 transition-all animate-bounce-twice"
          style={{ letterSpacing: "0.03em" }}
        >
          Get Started
        </button>
      </div>

      {/* Features Section */}
      <section className="w-full max-w-5xl px-6 py-20 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in">
        {features.map((f, i) => (
          <FeatureCard key={i} {...f} />
        ))}
      </section>

      {/* Footer */}
      <footer className="w-full py-8 text-center text-gray-400 text-sm opacity-90 animate-fade-in">
        <div className="flex items-center justify-center gap-2 mb-2">
          <HabbitMascot size={32} />
          <span className="font-semibold text-[#F68A1F]">Hubbit</span>
        </div>
        <span>Copyright © {new Date().getFullYear()} Hubbit. All rights reserved.</span>
      </footer>
    </div>
  );
};

export default Index;
