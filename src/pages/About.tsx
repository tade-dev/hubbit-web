import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Target, Users } from "lucide-react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-background font-nunito">
      {/* Navigation */}
      <nav className="w-full px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <HabbitMascot size={36} />
            <span className="text-xl font-bold text-foreground">Hubbit</span>
          </Link>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-smooth text-sm font-medium"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </nav>

      {/* Hero Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <HabbitMascot size={100} className="animate-float mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            About <span className="text-primary">Hubbit</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Your mindful companion for building better habits, one day at a time.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="w-full py-12 px-6 bg-card">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                We believe building good habits shouldn't feel like a chore. Hubbit is designed to make personal growth feel natural and enjoyable.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Our goal is to help you transform daily routines into stepping stones toward your aspirations.
              </p>
            </div>
            <div className="flex justify-center">
              <HabbitMascot size={160} className="animate-float" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="w-full py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-foreground mb-10">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-card rounded-2xl">
              <div className="bg-secondary/50 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Heart className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Simplicity</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                No overwhelming features, just what you need to succeed.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl">
              <div className="bg-secondary/50 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Purpose</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Every feature is designed with intention and focus.
              </p>
            </div>
            <div className="text-center p-6 bg-card rounded-2xl">
              <div className="bg-secondary/50 rounded-xl w-12 h-12 flex items-center justify-center mx-auto mb-4">
                <Users className="text-primary" size={24} />
              </div>
              <h3 className="text-lg font-bold text-foreground mb-2">Community</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Building a community committed to positive change.
              </p>
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
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-smooth">Privacy Policy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-smooth">Terms of Service</Link>
              <a href="mailto:akintadeseun816@gmail.com" className="text-muted-foreground hover:text-foreground transition-smooth">Contact</a>
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

export default About;
