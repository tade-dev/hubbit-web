import { Helmet } from "react-helmet-async";
import { motion, useScroll, useSpring } from "framer-motion";
import HabbitMascot from "../components/HabbitMascot";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { CalendarCheck, BellRing, Pencil, BrainCircuit, Smartphone, Flame, ArrowRight, Menu, Star, CheckCircle2, Sparkles, TrendingUp } from "lucide-react";
import { Link } from "react-router-dom";
import logoImg from "@/assets/logo.jpg";
import appScreenshot1 from "@/assets/app-screenshot-1.png";
import appScreenshot2 from "@/assets/app-screenshot-2.png";
import appScreenshot3 from "@/assets/app-screenshot-3.png";
import appScreenshot4 from "@/assets/app-screenshot-4.png";
import appScreenshot5 from "@/assets/app-screenshot-5.png";
import appScreenshot6 from "@/assets/app-screenshot-6.png";
import appLangZh from "@/assets/app-lang-zh.png";
import appLangEs from "@/assets/app-lang-es.png";
import appLangFr from "@/assets/app-lang-fr.png";

const features = [
  {
    icon: <CalendarCheck className="w-6 h-6" />,
    title: "Daily Habit Scheduling",
    description:
      "Plan your day with ease. Add habits and assign them specific times to build a structured, personalized routine.",
  },
  {
    icon: <BellRing className="w-6 h-6" />,
    title: "Smart Reminders & Nudges",
    description:
      "Get timely, gentle notifications when it's time to complete a habit — no stress, just a calm nudge to stay on track.",
  },
  {
    icon: <Pencil className="w-6 h-6" />,
    title: "Quick Journaling for Reflection",
    description:
      "Capture thoughts and reflect on your progress. Journaling helps you understand patterns and stay mindful of your journey.",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    title: "AI Insights & Analysis",
    description:
      "Let AI analyze your habits and journal entries to uncover trends, suggest improvements, and keep you motivated.",
  },
  {
    icon: <Smartphone className="w-6 h-6" />,
    title: "Home Screen Widgets",
    description:
      "Glance at your progress without opening the app. Beautiful widgets keep your habits front and center on your home screen.",
  },
  {
    icon: <Flame className="w-6 h-6" />,
    title: "Streak Tracking",
    description:
      "Build momentum with visual streaks. Watch your consistency grow day by day and stay motivated to never break the chain.",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    handle: "@sarahbuilds",
    review: "Hubbit completely changed how I approach my mornings. The streak tracking keeps me honest and the AI insights are genuinely helpful — not just generic tips.",
    rating: 5,
  },
  {
    name: "James O.",
    handle: "@jameslifts",
    review: "I've tried every habit app out there. Hubbit is the only one that actually stuck. The design is clean, the widgets are beautiful, and it doesn't overwhelm you.",
    rating: 5,
  },
  {
    name: "Priya K.",
    handle: "@priyawrites",
    review: "The journaling feature pairs so well with habit tracking. Being able to see patterns between my mood and my habits is something I didn't know I needed.",
    rating: 5,
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
        <title>Hubbit | AI Habit Tracker</title>
        <meta name="description" content="Transform your daily routine with Hubbit - the beautiful, mindful AI habit tracker for iOS. Track habits, journal patterns, and build lasting streaks." />
        <meta name="keywords" content="habit tracker, daily routine, mindful habits, productivity app, iOS habit tracker, habit journal, building habits, progress visualization, AI habit tracker" />
        <meta property="og:title" content="Hubbit | AI Habit Tracker" />
        <meta property="og:description" content="Transform your daily routine with Hubbit - the beautiful, mindful AI habit tracker for iOS." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Hubbit | AI Habit Tracker" />
        <meta name="twitter:description" content="Transform your daily routine with Hubbit - the beautiful, mindful habit tracker for iOS." />
        <link rel="canonical" href="https://usehubbit.xyz/" />
      </Helmet>
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-primary z-50 origin-[0%]"
        style={{ scaleX }}
      />
      {/* Hero Section */}
      <section className="w-full min-h-screen flex flex-col items-center justify-start pt-6 pb-20 px-6 relative overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_60%_40%,hsl(var(--secondary)/0.18),transparent)] z-0 pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_40%_at_20%_70%,hsl(var(--primary)/0.08),transparent)] z-0 pointer-events-none" />

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
            <Link to="/" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">Home</Link>
            <a href="#features" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">Features</a>
            <Link to="/about" className="text-muted-foreground hover:text-foreground transition-all duration-300 text-sm font-medium">About</Link>
            <motion.a
              href="https://apps.apple.com/us/app/hubbit-ai-habit-tracker/id6758737921"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-foreground text-background px-5 py-2 rounded-full text-sm font-bold transition-all"
            >
              Get App
            </motion.a>
          </div>

          {/* Mobile Navigation */}
          <div className="md:hidden flex items-center gap-2">
            <motion.a
              href="https://apps.apple.com/us/app/hubbit-ai-habit-tracker/id6758737921"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-foreground text-background px-3 py-1.5 rounded-full text-[10px] font-bold transition-all"
            >
              Get App
            </motion.a>

            <Sheet>
              <SheetTrigger asChild>
                <button className="p-2 text-foreground hover:bg-secondary/20 rounded-lg transition-colors">
                  <Menu size={24} />
                </button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] border-l-border bg-background pt-20">
                <div className="flex flex-col gap-6">
                  <Link to="/" className="text-2xl font-black text-foreground hover:text-primary transition-colors">Home</Link>
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

        {/* Split Layout: Text + Phone */}
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 relative z-10 mt-8 px-4 flex-1">

          {/* Left: Text Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate="animate"
            className="flex-1 flex flex-col items-center md:items-start text-center md:text-left max-w-xl"
          >
            {/* Badge pill */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center gap-2 bg-secondary/25 border border-secondary/40 rounded-full px-4 py-2 mb-8"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-xs font-bold text-foreground/70 tracking-widest uppercase">AI-Powered · Available on iOS</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-foreground leading-[1.05] tracking-tighter mb-6"
            >
              Build habits<br />
              that <span className="text-primary italic">actually</span><br />
              stick.
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base md:text-lg text-muted-foreground mb-10 max-w-md leading-relaxed font-medium"
            >
              Track habits, journal patterns, and get AI-powered insights — all in one beautifully designed app.
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 items-center md:items-start">
              <motion.a
                href="https://apps.apple.com/us/app/hubbit-ai-habit-tracker/id6758737921"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                className="bg-foreground text-background px-8 py-4 rounded-full font-bold text-base flex items-center gap-3 shadow-xl hover:shadow-primary/20 transition-all"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                Download for iOS
              </motion.a>
            </motion.div>

          </motion.div>

          {/* Right: Phone + Floating Cards */}
          <div className="flex-1 flex justify-center items-center relative min-h-[520px] md:min-h-[600px]">
            {/* Glow behind phone */}
            <div className="absolute w-[320px] h-[320px] bg-primary/20 blur-[80px] rounded-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            {/* Phone mockup */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: [0, -16, 0],
                transition: {
                  opacity: { duration: 0.9, delay: 0.5 },
                  y: { duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.5 }
                }
              }}
              className="relative z-10"
            >
              <div className="w-[220px] sm:w-[260px] md:w-[280px] lg:w-[300px] rounded-[3rem] overflow-hidden phone-shadow bg-foreground/5 p-1.5 ring-1 ring-border/30 backdrop-blur-sm">
                <img
                  src={appScreenshot1}
                  alt="Hubbit Home Screen"
                  className="w-full rounded-[2.5rem]"
                />
              </div>
            </motion.div>

            {/* Floating card: streak */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute top-[12%] -left-2 md:left-[2%] z-20 bg-background/95 backdrop-blur-md border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-orange-100 flex items-center justify-center">
                <Flame className="w-5 h-5 text-orange-500" />
              </div>
              <div>
                <p className="text-sm font-black text-foreground leading-none">21-day streak</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">Keep it up!</p>
              </div>
            </motion.div>

            {/* Floating card: habits done */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute top-[38%] -right-2 md:right-[2%] z-20 bg-background/95 backdrop-blur-md border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-green-100 flex items-center justify-center">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
              </div>
              <div>
                <p className="text-sm font-black text-foreground leading-none">5/5 done today</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">Perfect day!</p>
              </div>
            </motion.div>

            {/* Floating card: AI insight */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 0.6 }}
              className="absolute bottom-[10%] -left-2 md:left-[4%] z-20 bg-background/95 backdrop-blur-md border border-border rounded-2xl px-4 py-3 shadow-xl flex items-center gap-3"
            >
              <div className="w-9 h-9 rounded-xl bg-secondary/30 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="text-sm font-black text-foreground leading-none">AI insight ready</p>
                <p className="text-xs text-muted-foreground mt-0.5 font-medium">View your patterns</p>
              </div>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Feature Showcase Section */}
      <section className="w-full py-28 px-6 bg-background overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
              Everything you need,<br />
              <span className="text-primary italic">all in one place.</span>
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl mx-auto text-lg">
              From tracking to reflection to AI-powered insights — Hubbit has you covered.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 items-end"
          >
            {/* Smart Check-ins */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6">
              <div className="text-center">
                <span className="inline-block bg-secondary/25 border border-secondary/40 text-foreground/70 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                  Smart Check-ins
                </span>
                <h3 className="text-xl font-black text-foreground tracking-tight mb-2">Track how you feel</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-[260px] mx-auto">
                  Log your mood, energy level, and how each habit felt — so you can spot patterns that matter.
                </p>
              </div>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="w-full max-w-[230px]"
              >
                <div className="rounded-[2.5rem] overflow-hidden phone-shadow bg-foreground/5 p-1.5 ring-1 ring-border/30">
                  <img src={appScreenshot4} alt="Hubbit smart check-in screen" className="w-full rounded-[2rem]" />
                </div>
              </motion.div>
            </motion.div>

            {/* AI Insights — center, elevated */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6 md:-mt-16">
              <div className="text-center">
                <span className="inline-block bg-primary/15 border border-primary/30 text-primary text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                  AI Insights & Analytics
                </span>
                <h3 className="text-xl font-black text-foreground tracking-tight mb-2">Understand your patterns</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-[260px] mx-auto">
                  Get weekly AI summaries, pattern analysis, and personalised suggestions based on your real data.
                </p>
              </div>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="w-full max-w-[230px]"
              >
                <div className="rounded-[2.5rem] overflow-hidden phone-shadow bg-foreground/5 p-1.5 ring-1 ring-primary/20">
                  <img src={appScreenshot5} alt="Hubbit AI insights screen" className="w-full rounded-[2rem]" />
                </div>
              </motion.div>
            </motion.div>

            {/* Journalling */}
            <motion.div variants={fadeInUp} className="flex flex-col items-center gap-6">
              <div className="text-center">
                <span className="inline-block bg-secondary/25 border border-secondary/40 text-foreground/70 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-3">
                  Journalling
                </span>
                <h3 className="text-xl font-black text-foreground tracking-tight mb-2">Reflect on your journey</h3>
                <p className="text-sm text-muted-foreground font-medium leading-relaxed max-w-[260px] mx-auto">
                  Write freely or record voice notes to capture your thoughts, wins, and reflections as you grow.
                </p>
              </div>
              <motion.div
                whileHover={{ y: -8, transition: { duration: 0.3 } }}
                className="w-full max-w-[230px]"
              >
                <div className="rounded-[2.5rem] overflow-hidden phone-shadow bg-foreground/5 p-1.5 ring-1 ring-border/30">
                  <img src={appScreenshot6} alt="Hubbit journal entry screen" className="w-full rounded-[2rem]" />
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Multilanguage Section */}
      <section className="w-full py-28 px-6 bg-card relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_100%,hsl(var(--secondary)/0.15),transparent)] pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <span className="inline-block bg-secondary/25 border border-secondary/40 text-foreground/70 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
              Multilanguage
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
              Hubbit speaks<br />
              <span className="text-primary italic">your language.</span>
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl mx-auto text-lg">
              Build better habits in the language you think in. Hubbit is fully localised so nothing gets lost in translation.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8 items-end"
          >
            {[
              { src: appLangZh, flag: "🇨🇳", lang: "Chinese", native: "中文" },
              { src: appLangEs, flag: "🇪🇸", lang: "Spanish", native: "Español", elevated: true },
              { src: appLangFr, flag: "🇫🇷", lang: "French", native: "Français" },
            ].map((item, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className={`flex flex-col items-center gap-5 ${item.elevated ? "md:-mt-12" : ""}`}
              >
                <motion.div
                  whileHover={{ y: -8, transition: { duration: 0.3 } }}
                  className="w-full max-w-[230px]"
                >
                  <div className={`rounded-[2.5rem] overflow-hidden phone-shadow bg-foreground/5 p-1.5 ${item.elevated ? "ring-2 ring-primary/30" : "ring-1 ring-border/30"}`}>
                    <img src={item.src} alt={`Hubbit in ${item.lang}`} className="w-full rounded-[2rem]" />
                  </div>
                </motion.div>
                <div className="text-center">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <span className="text-2xl">{item.flag}</span>
                    <span className="text-base font-black text-foreground">{item.lang}</span>
                  </div>
                  <span className="text-sm text-muted-foreground font-medium">{item.native}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Language count strip */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-16 flex flex-wrap items-center justify-center gap-3"
          >
            {[
              { flag: "🇬🇧", label: "English" },
              { flag: "🇨🇳", label: "中文" },
              { flag: "🇪🇸", label: "Español" },
              { flag: "🇫🇷", label: "Français" },
            ].map((l, i) => (
              <span key={i} className="inline-flex items-center gap-1.5 bg-background border border-border rounded-full px-4 py-2 text-sm font-semibold text-foreground">
                <span>{l.flag}</span> {l.label}
              </span>
            ))}
            <span className="inline-flex items-center gap-1.5 bg-primary/10 border border-primary/20 rounded-full px-4 py-2 text-sm font-bold text-primary">
              + more coming
            </span>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="w-full py-28 px-6 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-secondary/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground tracking-tight mb-4">
              Loved by <span className="text-primary italic">habit builders.</span>
            </h2>
            <p className="text-muted-foreground font-medium max-w-xl mx-auto text-lg">
              Real people building real habits, every day.
            </p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, margin: "-80px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={fadeInUp}
                className="bg-card rounded-[2rem] p-8 border border-border/50 shadow-sm flex flex-col gap-4"
              >
                <div className="flex gap-0.5">
                  {[...Array(t.rating)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-foreground font-medium leading-relaxed text-base flex-1">
                  "{t.review}"
                </p>
                <div>
                  <p className="font-bold text-foreground text-sm">{t.name}</p>
                  <p className="text-muted-foreground text-sm">{t.handle}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
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
          <motion.a
            href="https://apps.apple.com/us/app/hubbit-ai-habit-tracker/id6758737921"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block bg-white text-primary px-12 py-6 rounded-full font-black text-xl shadow-2xl hover:bg-secondary transition-colors"
          >
            Download Hubbit Today
          </motion.a>
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
              <a href="https://x.com/@useHubbit" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-all">
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

