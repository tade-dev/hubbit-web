
import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Terms = () => {
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

      {/* Content */}
      <div className="max-w-4xl mx-auto px-6 py-16">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Terms of Service</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Agreement to Terms</h2>
              <p className="text-gray-600 leading-relaxed">
                By accessing and using Hubbit, you accept and agree to be bound by the terms and provision of this agreement. 
                If you do not agree to abide by the above, please do not use this service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Description of Service</h2>
              <p className="text-gray-600 leading-relaxed">
                Hubbit is a habit tracking application designed to help users build and maintain positive daily habits. 
                Our service provides tools for scheduling, tracking, and analyzing personal habits and routines.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">User Accounts</h2>
              <div className="space-y-4">
                <p className="text-gray-600 leading-relaxed">
                  When you create an account with us, you must provide information that is accurate, complete, and current at all times.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  You are responsible for safeguarding the password and for keeping your account information secure.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Acceptable Use</h2>
              <p className="text-gray-600 leading-relaxed mb-4">You agree not to use the service:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>For any unlawful purpose or to solicit others to perform unlawful acts</li>
                <li>To violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances</li>
                <li>To infringe upon or violate our intellectual property rights or the intellectual property rights of others</li>
                <li>To harass, abuse, insult, harm, defame, slander, disparage, intimidate, or discriminate</li>
                <li>To submit false or misleading information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Intellectual Property Rights</h2>
              <p className="text-gray-600 leading-relaxed">
                The service and its original content, features, and functionality are and will remain the exclusive property 
                of Hubbit and its licensors. The service is protected by copyright, trademark, and other laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Privacy Policy</h2>
              <p className="text-gray-600 leading-relaxed">
                Your privacy is important to us. Please review our Privacy Policy, which also governs your use of the service, 
                to understand our practices.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Termination</h2>
              <p className="text-gray-600 leading-relaxed">
                We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, 
                under our sole discretion, for any reason whatsoever and without limitation, including but not limited to a breach 
                of the Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Disclaimer</h2>
              <p className="text-gray-600 leading-relaxed">
                The information on this service is provided on an "as is" basis. To the fullest extent permitted by law, 
                this Company excludes all representations, warranties, conditions and terms relating to our service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Governing Law</h2>
              <p className="text-gray-600 leading-relaxed">
                These Terms shall be interpreted and governed by the laws of the jurisdiction in which we operate, 
                without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about these Terms of Service, please contact us at:{" "}
                <a href="mailto:hi@tade.me" className="text-[#F68A1F] hover:underline">
                  hi@tade.me
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

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

export default Terms;
