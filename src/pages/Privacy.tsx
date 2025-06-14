
import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const Privacy = () => {
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
          <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
          <p className="text-gray-600 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

          <div className="space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Introduction</h2>
              <p className="text-gray-600 leading-relaxed">
                At Hubbit, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, 
                and safeguard your information when you use our habit tracking application.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Personal Information</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We may collect personal information such as your name, email address, and other contact details 
                    when you create an account or contact us for support.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">Usage Data</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We collect information about how you use our app, including your habit tracking data, completion rates, 
                    and app interaction patterns to improve our services.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">How We Use Your Information</h2>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>To provide and maintain our service</li>
                <li>To notify you about changes to our service</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our service</li>
                <li>To monitor the usage of our service</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Security</h2>
              <p className="text-gray-600 leading-relaxed">
                The security of your data is important to us. We implement appropriate security measures to protect 
                your personal information against unauthorized access, alteration, disclosure, or destruction.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Data Retention</h2>
              <p className="text-gray-600 leading-relaxed">
                We will retain your personal data only for as long as is necessary for the purposes set out in this 
                Privacy Policy. We will retain and use your data to comply with our legal obligations, resolve disputes, 
                and enforce our policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Your Rights</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                <li>Access, update, or delete your personal information</li>
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
                <li>Object to data processing</li>
                <li>Request restriction of processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Us</h2>
              <p className="text-gray-600 leading-relaxed">
                If you have any questions about this Privacy Policy, please contact us at:{" "}
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

export default Privacy;
