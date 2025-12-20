import { Helmet } from "react-helmet-async";
import { motion, useScroll, useSpring } from "framer-motion";
import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft, Shield, Menu } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

const Privacy = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full min-h-screen bg-background font-nunito overflow-x-hidden">
      <Helmet>
        <title>Privacy Policy | Hubbit</title>
        <meta name="description" content="Read about how Hubbit protects your data and ensures your privacy while you focus on building better habits." />
        <link rel="canonical" href="https://usehubbit.xyz/privacy" />
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
        className="w-full px-6 py-6 flex justify-between items-center max-w-7xl mx-auto z-50 sticky top-0 bg-background/80 backdrop-blur-md"
      >
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2 group">
            <HabbitMascot size={32} className="md:w-[40px] md:h-[40px]" />
            <span className="text-xl md:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">Hubbit</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-all">Home</Link>
          <a href="/#features" className="text-muted-foreground hover:text-foreground transition-all">Features</a>
          <Link to="/about" className="text-muted-foreground hover:text-foreground transition-all">About</Link>
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="bg-foreground text-background px-5 py-2 rounded-full opacity-60 cursor-not-allowed transition-all">Get App</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coming Soon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden flex items-center gap-2">
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <button className="bg-foreground text-background px-3 py-1.5 rounded-full text-[10px] font-bold opacity-60 cursor-not-allowed transition-all">Get App</button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Coming Soon</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>

          <Sheet>
            <SheetTrigger asChild>
              <button className="p-2 text-foreground hover:bg-secondary/20 rounded-lg transition-colors">
                <Menu size={24} />
              </button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] border-l-border bg-background pt-20">
              <div className="flex flex-col gap-6">
                <Link to="/" className="text-2xl font-black text-foreground hover:text-primary transition-colors">Home</Link>
                <a href="/#features" className="text-2xl font-black text-foreground hover:text-primary transition-colors">Features</a>
                <Link to="/about" className="text-2xl font-black text-foreground hover:text-primary transition-colors">About</Link>
                <div className="pt-8 mt-8 border-t border-border">
                  <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-widest">Connect</p>
                  <a href="mailto:akintadeseun816@gmail.com" className="text-lg font-bold text-foreground">Contact Us</a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>

      {/* Hero Header */}
      <section className="pt-20 pb-12 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl text-primary mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-foreground mb-4">Privacy Policy</h1>
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
            <h2 className="text-2xl font-bold text-foreground mb-4">Introduction</h2>
            <p className="text-muted-foreground leading-relaxed text-lg font-medium">
              At Hubbit, we take your privacy seriously. This Privacy Policy explains how we collect, use, and safeguard your information when you use our habit tracking platform.
            </p>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Information We Collect</h2>
            <div className="grid gap-6">
              <div className="bg-background p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-foreground mb-2 text-lg">Personal Information</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  We may collect your name, email address, and contact details when you voluntarily create an account or subscribe to our newsletter.
                </p>
              </div>
              <div className="bg-background p-6 rounded-2xl border border-border">
                <h3 className="font-bold text-foreground mb-2 text-lg">Usage Data</h3>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  We automatically collect information about how you interact with our service to help us understand patterns and improve the Hubbit experience.
                </p>
              </div>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">How We Use Your Information</h2>
            <ul className="space-y-4">
              {[
                "To provide, maintain, and improve our core habit-tracking services",
                "To notify you about important updates or changes to our app",
                "To provide responsive customer support and handle inquiries",
                "To monitor usage patterns and optimize technical performance"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-muted-foreground font-medium">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.section>

          <motion.section variants={fadeInUp}>
            <h2 className="text-2xl font-bold text-foreground mb-4">Your Rights</h2>
            <div className="space-y-4">
              <p className="text-muted-foreground font-medium text-lg leading-relaxed">
                You have full control over your data. Depending on your location, you may have the right to:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Access your personal data",
                  "Request data deletion",
                  "Update inaccurate info",
                  "Withdraw consent anytime"
                ].map((right, idx) => (
                  <li key={idx} className="bg-primary/5 px-4 py-3 rounded-xl text-primary font-bold text-sm">
                    {right}
                  </li>
                ))}
              </ul>
            </div>
          </motion.section>

          <motion.section variants={fadeInUp} className="pt-8 border-t border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground text-lg leading-relaxed font-medium mb-6">
              If you have any questions or concerns about this Privacy Policy, our team is here to help.
            </p>
            <a
              href="mailto:akintadeseun816@gmail.com"
              className="inline-block bg-foreground text-background px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform"
            >
              Email Privacy Team
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
              <Link to="/privacy" className="text-primary decoration-2 underline-offset-4 underline">Privacy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-all">Terms</Link>
              <a href="mailto:akintadeseun816@gmail.com" className="bg-foreground text-background px-6 py-2 rounded-full hover:opacity-80 transition-all font-bold">Contact</a>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm font-medium">
            <p>© {new Date().getFullYear()} Hubbit. Protecting your progress.</p>
            <div className="flex gap-6">
              <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Privacy;

