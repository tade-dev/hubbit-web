import { Helmet } from "react-helmet-async";
import { motion, useScroll, useSpring } from "framer-motion";
import HabbitMascot from "../components/HabbitMascot";
import { Link } from "react-router-dom";
import { ArrowLeft, Heart, Target, Users, Sparkles, ShieldCheck, Menu } from "lucide-react";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

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

const About = () => {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="w-full min-h-screen bg-background font-nunito overflow-x-hidden">
      <Helmet>
        <title>About Hubbit | Our Philosophy & Vision</title>
        <meta name="description" content="Learn about the philosophy behind Hubbit and our mission to help you build lasting habits with a simple and beautiful experience." />
        <meta property="og:title" content="About Hubbit | Our Philosophy & Vision" />
        <meta property="og:description" content="Learn about our mission to make personal growth simple and beautiful." />
        <link rel="canonical" href="https://usehubbit.xyz/about" />
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
            <motion.div whileHover={{ rotate: 15 }}>
              <HabbitMascot size={32} className="md:w-[40px] md:h-[40px]" />
            </motion.div>
            <span className="text-xl md:text-2xl font-black text-foreground tracking-tight group-hover:text-primary transition-colors">Hubbit</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-all">Home</Link>
          <a href="/#features" className="text-muted-foreground hover:text-foreground transition-all">Features</a>
          <Link to="/about" className="text-primary decoration-2 underline-offset-4 underline">About</Link>
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
                <Link to="/about" className="text-2xl font-black text-primary transition-colors">About</Link>
                <div className="pt-8 mt-8 border-t border-border">
                  <p className="text-sm font-bold text-muted-foreground mb-4 uppercase tracking-widest">Connect</p>
                  <a href="mailto:akintadeseun816@gmail.com" className="text-lg font-bold text-foreground">Contact Us</a>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="w-full pt-20 pb-16 px-6 relative">
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <HabbitMascot size={120} className="mx-auto mb-8 drop-shadow-2xl" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-black text-foreground mb-6 tracking-tight"
          >
            About <span className="text-primary italic">Hubbit</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium"
          >
            We're building more than just an app; we're crafting your mindful companion for a better life.
          </motion.p>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full py-24 px-6 bg-card relative overflow-hidden">
        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-black text-foreground mb-8 tracking-tight">
                Our <span className="text-primary italic">Philosophy</span>
              </h2>
              <div className="space-y-6">
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  At Hubbit, we believe that personal growth shouldn't be a source of stress. The market is full of habit trackers that feel like spreadsheets — cold, calculated, and clinical.
                </p>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                  We took a different path. Hubbit is designed with warmth, using soft colors and intuitive interactions to make habit-building feel natural, not mandatory.
                </p>
                <div className="flex gap-4 pt-4">
                  <div className="flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-xl text-primary font-bold">
                    <Sparkles size={20} />
                    <span>Mindful Design</span>
                  </div>
                  <div className="flex items-center gap-2 bg-secondary/30 px-4 py-2 rounded-xl text-primary font-bold">
                    <ShieldCheck size={20} />
                    <span>Privacy First</span>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1 }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-[3rem] flex items-center justify-center p-12">
                <motion.div
                  animate={{
                    y: [0, -20, 0],
                    rotate: [0, 5, 0]
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  <HabbitMascot size={240} />
                </motion.div>
              </div>
              {/* Floating accent shapes */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse" />
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-secondary/10 rounded-full blur-xl animate-pulse delay-1000" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values grid */}
      <section className="w-full py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4 tracking-tight">The Core Principles</h2>
            <p className="text-xl text-muted-foreground font-medium">What drives every decision we make at Hubbit.</p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: <Heart size={32} />, title: "Empathy", desc: "We design for real people with real struggles, not just data points." },
              { icon: <Target size={32} />, title: "Focus", desc: "No feature bloat. We only build what truly helps you grow." },
              { icon: <Users size={32} />, title: "Openness", desc: "Transparent about our journey and committed to our users." }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                whileHover={{ y: -10 }}
                className="bg-card p-10 rounded-[2.5rem] border border-border shadow-sm hover:shadow-xl hover:shadow-primary/5 transition-all duration-300 group"
              >
                <div className="w-16 h-16 bg-secondary/30 rounded-2xl flex items-center justify-center text-primary mb-8 group-hover:scale-110 transition-transform">
                  {value.icon}
                </div>
                <h3 className="text-2xl font-black text-foreground mb-4">{value.title}</h3>
                <p className="text-lg text-muted-foreground leading-relaxed font-medium">{value.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
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
              <a href="mailto:akintadeseun816@gmail.com" className="bg-foreground text-background px-6 py-2 rounded-full hover:opacity-80 transition-all font-bold">Contact</a>
            </div>
          </div>
          <div className="border-t border-border mt-12 pt-12 flex flex-col md:flex-row justify-between items-center gap-4 text-muted-foreground text-sm font-medium">
            <p>© {new Date().getFullYear()} Hubbit. Built for your best self.</p>
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

export default About;

