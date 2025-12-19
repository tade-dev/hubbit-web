import { Helmet } from "react-helmet-async";
import { motion, useScroll, useSpring } from "framer-motion";
import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft, Scale } from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const Terms = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full min-h-screen bg-background font-nunito overflow-x-hidden">
      <Helmet>
        <title>Terms of Service | Hubbit</title>
        <meta name="description" content="Review our terms of service to understand the rules and guidelines for using Hubbit." />
        <link rel="canonical" href="https://usehubbit.xyz/terms" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-[0%]"
        style={{ scaleX }}
      />

      {/* Navigation */}
      <motion.nav
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto z-10 sticky top-0 bg-background/80 backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <HabbitMascot size={36} />
            <span className="text-xl font-bold text-foreground tracking-tight group-hover:text-primary transition-colors">Hubbit</span>
          </Link>
        </div>
        <Link
          to="/"
          className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-bold bg-secondary/20 px-4 py-2 rounded-full"
        >
          <ArrowLeft size={18} />
          Back
        </Link>
      </motion.nav>

      {/* Hero Header */}
      <section className="pt-20 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-6">
            <Scale size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Terms of Service</h1>
          <p className="text-muted-foreground font-medium">Last updated: {new Date().toLocaleDateString()}</p>
        </motion.div>
      </section>

      {/* Content */}
      <div className="max-w-3xl mx-auto px-6 pb-24">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="bg-card rounded-[2.5rem] p-8 md:p-12 border border-border shadow-sm space-y-12"
        >
          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Agreement to Terms</h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-medium">
              By accessing and using Hubbit, you accept and agree to be bound by these terms. Our mission is to provide a safe and effective environment for personal growth.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Description of Service</h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-medium">
              Hubbit provides a digital habit-tracking platform designed to help users establish and maintain positive daily routines through various visual and interactive tools.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">User Accounts</h2>
            <div className="bg-background p-6 rounded-2xl border border-border">
              <p className="text-muted-foreground leading-relaxed font-medium">
                To access certain features, you must provide accurate, complete information. You are solely responsible for maintaining the confidentiality of your account credentials.
              </p>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Acceptable Use</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground font-medium text-lg leading-relaxed">To ensure a positive community, users agree not to:</p>
              <ul className="grid grid-cols-1 gap-3">
                {[
                  "Use the service for any unlawful purposes",
                  "Interfere with or disrupt the technical integrity of Hubbit",
                  "Submit false information or impersonate others",
                  "Harvest or collect data from our users without consent"
                ].map((rule, idx) => (
                  <li key={idx} className="flex items-center gap-3 bg-primary/5 px-4 py-3 rounded-xl text-primary font-bold text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {rule}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Intellectual Property</h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-medium">
              All content and functionality, including logos, designs, and text, are the exclusive property of Hubbit and are protected by international copyright laws.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp} className="pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Information</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-6">
              If you have any questions regarding these Terms, please reach out to our legal support team.
            </p>
            <a
              href="mailto:akintadeseun816@gmail.com"
              className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Contact Legal Support
            </a>
          </motion.section>
        </motion.div>
      </div>

      {/* Footer */}
      <footer className="w-full py-16 px-6 bg-card border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="flex items-center gap-3">
              <HabbitMascot size={40} />
              <div className="flex flex-col">
                <span className="text-2xl font-black text-foreground tracking-tight">Hubbit</span>
                <span className="text-sm font-medium text-muted-foreground">Habits made simple.</span>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-10 text-sm font-bold">
              <Link to="/about" className="text-muted-foreground hover:text-foreground transition-all">About</Link>
              <Link to="/" className="text-muted-foreground hover:text-foreground transition-all">Home</Link>
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-all">Privacy</Link>
              <Link to="/terms" className="text-primary underline underline-offset-4">Terms</Link>
              <a href="mailto:akintadeseun816@gmail.com" className="bg-foreground text-background px-6 py-2 rounded-full hover:opacity-80 transition-all font-bold">Contact</a>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-12 text-center text-muted-foreground text-sm font-medium">
            <p>© {new Date().getFullYear()} Hubbit. Built for your success.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Terms;

