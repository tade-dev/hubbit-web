import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 py-12">
        <div className="bg-card rounded-2xl p-8 md:p-10">
          <h1 className="text-3xl font-bold text-foreground mb-2">Terms of Service</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using Hubbit, you accept and agree to be bound by these terms. If you do not agree, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Description of Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Hubbit is a habit tracking application designed to help users build and maintain positive daily habits.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">User Accounts</h2>
              <p className="text-muted-foreground leading-relaxed">
                You must provide accurate information and are responsible for safeguarding your account credentials.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Acceptable Use</h2>
              <p className="text-muted-foreground mb-2">You agree not to:</p>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Use the service for unlawful purposes</li>
                <li>Violate intellectual property rights</li>
                <li>Harass or harm others</li>
                <li>Submit false information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                The service and its content remain the exclusive property of Hubbit and are protected by applicable laws.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Termination</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may terminate your account for breach of these Terms without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Contact Information</h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Questions? Contact us at{" "}
                <a href="mailto:hi@tade.me" className="text-primary hover:underline">
                  hi@tade.me
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

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

export default Terms;
