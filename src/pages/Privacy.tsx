import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
          <h1 className="text-3xl font-bold text-foreground mb-2">Privacy Policy</h1>
          <p className="text-muted-foreground text-sm mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Hubbit, we take your privacy seriously. This Privacy Policy explains how we collect, use, and safeguard your information.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Information We Collect</h2>
              <div className="space-y-3">
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Personal Information</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We may collect your name, email address, and contact details when you create an account.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Usage Data</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    We collect information about how you use our app to improve our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes</li>
                <li>To provide customer support</li>
                <li>To improve our service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Your Rights</h2>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground text-sm">
                <li>Access, update, or delete your personal information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mb-3">Contact Us</h2>
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

export default Privacy;
