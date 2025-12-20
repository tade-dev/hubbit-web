import { Helmet } from "react-helmet-async";
import { motion, useScroll, useSpring } from "framer-motion";
import HabbitMascot from "../components/HabbitMascot";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Clock10, Bell, LayoutDashboard, Heart, PlusCircle, BookOpen, ArrowRight, Menu } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.jpg";
import appScreenshot1 from "@/assets/app-screenshot-1.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";
import appScreenshot3 from "@/assets/app-screenshot-3.png";

const features = [
  {
    icon: <Clock10 className="w-6 h-6" />,
    title: "Simple Daily Habit Scheduling",
    description:
      "Plan your day with ease. Add habits and assign them specific times to receive gentle reminders throughout the day.",
  },
  {
    icon: <Bell className="w-6 h-6" />,
    title: "Smart Reminders",
    description:
      "Get timely notifications when it's time to complete a habit — no stress, just a calm nudge to stay consistent.",
  },
  {
    icon: <LayoutDashboard className="w-6 h-6" />,
    title: "Time-Based Habit Organization",
    description:
      "Habits are grouped by Morning, Afternoon, and Evening, helping you focus on what matters in the right moment.",
  },
  {
    icon: <Heart className="w-6 h-6" />,
    title: "Clean, Minimal Design",
    description:
      "No distractions. Hubbit is designed for clarity — with a lightweight interface and warm accent tones that feel familiar on iOS.",
  },
  {
    icon: <PlusCircle className="w-6 h-6" />,
    title: "Quick Add & Edit",
    description:
      "Create, update, or remove habits in seconds with an intuitive and smooth workflow.",
  },
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Journaling for Reflection",
    description:
      "Capture your thoughts and reflect on your progress. Journaling helps you understand patterns and stay mindful of your journey.",
  },
];

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }
};

const staggerContainer = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
    }
  }
};

const Index = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full min-h-screen bg-background">
      <Helmet>
        <title>Hubbit | Mindful Habit Tracker & Journal</title>
        <meta name="description" content="Transform your daily routine with Hubbit - the beautiful, mindful habit tracker for iOS. Track habits, journal patterns, and build lasting streaks." />
        <meta name="keywords" content="habit tracker, daily routine, mindful habits, productivity app, iOS habit tracker, habit journal, building habits, progress visualization" />
        <meta property="og:title" content="Hubbit | Mindful Habit Tracker & Journal" />
        <meta property="og:description" content="Transform your daily routine with Hubbit - the beautiful, mindful habit tracker for iOS." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hubbit | Mindful Habit Tracker & Journal" />
        <meta name="twitter:description" content="Transform your daily routine with Hubbit - the beautiful, mindful habit tracker for iOS." />
        <link rel="canonical" href="https://usehubbit.xyz/" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-[0%]"
        style={{ scaleX }}
      />
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-start pt-20 md:pt-32 pb-20 px-6 relative overflow-hidden">
        {/* Animated Background Blur Elements */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.3 }}
          transition={{ duration: 2 }}
          className="absolute top-[-10%] left-[-5%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full z-0"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.2 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute bottom-[-10%] right-[-5%] w-[40%] h-[40%] bg-secondary/30 blur-[120px] rounded-full z-0"
        />

        {/* Navigation */}
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="w-full max-w-6xl flex justify-between items-center mb-24 relative z-10"
        >
          <div className="flex items-center gap-1.5 md:gap-2">
            <HabbitMascot size={28} className="md:w-[36px] md:h-[36px]" />
            <span className="text-base md:text-xl font-bold text-foreground tracking-tight">Hubbit</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <a href="/" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">Home</a>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">Features</a>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">About</Link>
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger asChild>
                  <button className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-bold opacity-60 cursor-not-allowed transition-all">Get App</button>
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
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-border bg-background pt-20">
                <div className="flex flex-col gap-6">
                  <a href="/" className="text-2xl font-black text-foreground hover:text-primary transition-colors">Home</a>
                  <a href="#features" className="text-2xl font-black text-foreground hover:text-primary transition-colors">Features</a>
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

        {/* Hero Content */}
        <div className="max-w-4xl text-center mb-16 md:mb-24 relative z-10 px-4">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-1 md:mb-2 leading-[1.1] tracking-tighter"
            >
              Habits Made <span className="text-primary italic">Simple.</span>
            </motion.h1>
            <motion.h1
              variants={fadeInUp}
              className="text-3xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-foreground mb-6 md:mb-8 leading-[1.1] tracking-tighter"
            >
              Progress <span className="underline decoration-secondary decoration-8 underline-offset-4">Visualized.</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-xl text-muted-foreground mb-8 md:mb-12 max-w-2xl mx-auto leading-relaxed font-medium"
            >
              Transform your daily routine with a habit tracker that's as beautiful as it is powerful. Track habits, journal patterns, and build lasting streaks.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      className="bg-foreground/80 text-background px-10 py-5 rounded-full font-bold text-lg flex items-center gap-3 cursor-not-allowed opacity-70"
                    >
                      <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                      </svg>
                      Download for iOS
                    </motion.button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>Coming Soon</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </motion.div>
          </motion.div>
        </div>

        {/* Phone Mockups with Parallax & Float */}
        <div className="relative w-full max-w-6xl mx-auto mt-20 md:mt-24 px-4 overflow-visible">
          <div className="flex justify-center items-end gap-4 md:gap-12 relative h-[450px] xs:h-[500px] md:h-[600px]">
            {/* Left Phone */}
            <motion.div
              variants={{
                initial: { opacity: 0, x: -50, rotate: -15 },
                animate: {
                  opacity: 1,
                  x: 0,
                  rotate: [-12, -10, -12],
                  y: [0, -15, 0],
                  transition: {
                    x: { duration: 1.2, delay: 0.6, ease: "easeOut" },
                    opacity: { duration: 1.2, delay: 0.6 },
                    rotate: { duration: 5, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 5, repeat: Infinity, ease: "easeInOut" }
                  }
                }
              }}
              initial="initial"
              animate="animate"
              className="hidden md:block absolute left-[10%] bottom-0 z-0"
            >
              <div className="w-48 lg:w-64 rounded-[3rem] overflow-hidden phone-shadow bg-foreground/5 p-1.5 backdrop-blur-sm">
                <img
                  src={appScreenshot2}
                  alt="Hubbit Analytics"
                  className="w-full rounded-[2.5rem]"
                />
              </div>
            </motion.div>

            {/* Center Phone (Main) */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 100 },
                animate: {
                  opacity: 1,
                  y: [0, -20, 0],
                  transition: {
                    opacity: { duration: 1, delay: 0.4 },
                    y: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 0.2 // delay the start of the loop relative to entrance
                    }
                  }
                }
              }}
              initial="initial"
              animate="animate"
              className="relative z-20 transition-all duration-500"
            >
              <div className="w-[200px] xs:w-64 md:w-72 lg:w-80 rounded-[2.5rem] xs:rounded-[3.5rem] overflow-hidden phone-shadow bg-foreground/5 p-1.5 md:p-2 backdrop-blur-sm ring-1 ring-white/20">
                <img
                  src={appScreenshot1}
                  alt="Hubbit Home Screen"
                  className="w-full rounded-[3rem]"
                />
              </div>
            </motion.div>

            {/* Right Phone */}
            <motion.div
              variants={{
                initial: { opacity: 0, x: 50, rotate: 15 },
                animate: {
                  opacity: 1,
                  x: 0,
                  rotate: [12, 14, 12],
                  y: [0, -12, 0],
                  transition: {
                    x: { duration: 1.2, delay: 0.8, ease: "easeOut" },
                    opacity: { duration: 1.2, delay: 0.8 },
                    rotate: { duration: 5.5, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
                  }
                }
              }}
              initial="initial"
              animate="animate"
              className="hidden md:block absolute right-[10%] bottom-0 z-0"
            >
              <div className="w-48 lg:w-64 rounded-[3rem] overflow-hidden phone-shadow bg-foreground/5 p-1.5 backdrop-blur-sm">
                <img
                  src={appScreenshot3}
                  alt="Hubbit Habit Detail"
                  className="w-full rounded-[2.5rem]"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="w-full py-32 px-6 bg-card relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-24"
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-6 tracking-tight">
              Designed for <span className="text-primary italic">consistency.</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-medium">
              Every feature of Hubbit is crafted to help you build habits without friction.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                className="group bg-background rounded-[2rem] p-8 border border-border/50 shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-secondary/20 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4 tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-base leading-relaxed font-medium">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="w-full py-32 px-6 bg-primary text-primary-foreground text-center overflow-hidden relative">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto relative z-10"
        >
          <h2 className="text-4xl md:text-6xl font-black mb-8 tracking-tighter leading-tight">
            Ready to transform your life, one habit at a time?
          </h2>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-primary px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:bg-secondary transition-colors"
          >
            Download Hubbit Today
          </motion.button>
        </motion.div>
        {/* Background decorative rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-white/10 rounded-full pointer-events-none" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/10 rounded-full pointer-events-none" />
      </section>

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
              <Link to="/privacy" className="text-muted-foreground hover:text-foreground transition-all">Privacy</Link>
              <Link to="/terms" className="text-muted-foreground hover:text-foreground transition-all">Terms</Link>
              <a href="mailto:akintadeseun816@gmail.com" className="bg-foreground text-background px-6 py-2 rounded-full hover:opacity-80 transition-all font-bold">Contact Us</a>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm font-medium">
            <p>© {new Date().getFullYear()} Hubbit. Built with heart for better habits.</p>
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

export default Index;

