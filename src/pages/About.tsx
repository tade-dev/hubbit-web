
import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100 font-poppins">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 flex justify-between items-center backdrop-blur-sm bg-white/80 sticky top-0 z-50 border-b border-orange-100">
        <div className="flex items-center gap-3">
          <Link to="/" className="flex items-center gap-3">
            <HabbitMascot size={40} className="animate-float" />
            <span className="text-2xl font-bold text-[#F68A1F]">Hubbit</span>
          </Link>
        </div>
        <Link 
          to="/" 
          className="flex items-center gap-2 text-gray-600 hover:text-[#F68A1F] transition-colors font-medium"
        >
          <ArrowLeft size={20} />
          Back to Home
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <HabbitMascot size={120} className="animate-float mx-auto mb-8" />
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            About <span className="text-[#F68A1F]">Hubbit</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Hubbit is more than just a habit tracker - it's your personal companion for building a better life, one habit at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                We believe that building good habits shouldn't be stressful or overwhelming. That's why we created Hubbit - a playful, intuitive habit tracker that makes personal growth feel natural and enjoyable.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our goal is to help millions of people transform their daily routines into powerful stepping stones toward their dreams and aspirations.
              </p>
            </div>
            <div className="flex justify-center">
              <HabbitMascot size={200} className="animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Heart className="text-[#F68A1F]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Simplicity</h3>
              <p className="text-gray-600 leading-relaxed">
                We believe in keeping things simple and focused. No overwhelming features, just what you need to succeed.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Target className="text-[#F68A1F]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Purpose</h3>
              <p className="text-gray-600 leading-relaxed">
                Every feature is designed with intention, helping you stay focused on what truly matters in your journey.
              </p>
            </div>
            <div className="text-center p-8 bg-white rounded-2xl shadow-lg">
              <div className="bg-orange-50 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
                <Users className="text-[#F68A1F]" size={32} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Community</h3>
              <p className="text-gray-600 leading-relaxed">
                We're building more than an app - we're creating a community of people committed to positive change.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-16 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">The Story Behind Hubbit</h2>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Hubbit was born from the simple observation that most habit tracking apps are either too complex or too boring. 
            We wanted to create something different - an app that feels like having a friendly companion cheering you on.
          </p>
          <p className="text-lg text-gray-600 mb-6 leading-relaxed">
            Our mascot represents the playful spirit we bring to habit building. Building better habits doesn't have to be 
            a chore - it can be an adventure filled with small victories and meaningful progress.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            We're currently in development, carefully crafting every detail to ensure Hubbit becomes your favorite tool 
            for personal growth. Stay tuned for our launch!
          </p>
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
              <Link to="/privacy" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="text-gray-400 hover:text-white transition-colors">Terms of Service</Link>
              <a href="mailto:hi@tade.me" className="text-gray-400 hover:text-white transition-colors">Contact</a>
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

export default About;
