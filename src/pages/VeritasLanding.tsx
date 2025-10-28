import { useState, useEffect } from 'react';
import { motion, useReducedMotion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { 
  Search, 
  FileText, 
  Filter, 
  BookOpen, 
  Download, 
  Shield,
  Scale,
  Zap,
  CheckCircle,
  Star,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Code2,
  Users,
  Building2,
  Play,
  Sparkles,
  Eye,
  Timer,
  Award,
  Globe
} from 'lucide-react';

import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../components/ui/dialog';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../components/ui/accordion';
import { useToast } from '../components/Toast';

import { 
  features, 
  demoResults, 
  testimonials, 
  faqData, 
  pricingPlans, 
  howItWorksSteps,
  trustBadges 
} from '../data';

const VeritasLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDemoLoading, setIsDemoLoading] = useState(false);
  const [showDemoResults, setShowDemoResults] = useState(false);
  const [demoQuery, setDemoQuery] = useState('');
  const [selectedJurisdictions, setSelectedJurisdictions] = useState<string[]>(['SC', 'Bombay HC']);
  const [yearlyPricing, setYearlyPricing] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showBanner, setShowBanner] = useState(true);
  
  const { showToast, ToastContainer } = useToast();
  const shouldReduceMotion = useReducedMotion();

  // Section refs for scroll animations
  const heroRef = useRef(null);
  const problemRef = useRef(null);
  const howItWorksRef = useRef(null);
  const demoRef = useRef(null);
  const featuresRef = useRef(null);
  const pricingRef = useRef(null);

  const heroInView = useInView(heroRef, { once: true, margin: "-10%" });
  const problemInView = useInView(problemRef, { once: true, margin: "-10%" });
  const howItWorksInView = useInView(howItWorksRef, { once: true, margin: "-10%" });
  const demoInView = useInView(demoRef, { once: true, margin: "-10%" });
  const featuresInView = useInView(featuresRef, { once: true, margin: "-10%" });
  const pricingInView = useInView(pricingRef, { once: true, margin: "-10%" });

  // Animation variants
  const fadeUpVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: shouldReduceMotion ? 0 : 0.6,
        ease: [0.4, 0, 0.2, 1] as const
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: shouldReduceMotion ? 0 : 0.1
      }
    }
  };

  // Handle demo interaction
  const handleRunDemo = async () => {
    if (!demoQuery.trim()) {
      showToast('Please enter a query to search', 'error');
      return;
    }

    setIsDemoLoading(true);
    setShowDemoResults(false);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsDemoLoading(false);
    setShowDemoResults(true);
    showToast('Found relevant precedents and generated arguments!');
  };

  // Handle waitlist signup
  const handleWaitlistSignup = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email') as string;
    const name = formData.get('name') as string;
    
    if (!email || !name) {
      showToast('Please fill in all required fields', 'error');
      return;
    }

    // Simulate signup
    showToast(`Welcome ${name}! You've been added to our waitlist.`);
  };

  // Testimonial rotation
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const iconMap = {
    Search, FileText, Filter, BookOpen, Download, Shield, Scale, Zap, CheckCircle
  };

  return (
    <div className="min-h-screen bg-background">
      <a href="#main" className="skip-link">
        Skip to main content
      </a>

      <ToastContainer />

      {/* Top Banner */}
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-primary text-white py-3 px-4 text-center relative"
        >
          <p className="text-sm font-medium">
            🎉 Early access open — join the waitlist for exclusive beta access
          </p>
          <button
            onClick={() => setShowBanner(false)}
            className="absolute right-4 top-1/2 -translate-y-1/2"
            aria-label="Close banner"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}

      {/* Header */}
      <header className="sticky top-0 z-40 w-full backdrop-blur-lg bg-background/80 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-2">
              <Scale className="w-8 h-8 text-primary" />
              <span className="text-xl font-bold text-gradient">Veritas Copilot</span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium hover:text-primary transition-colors">
                Features
              </a>
              <a href="#how-it-works" className="text-sm font-medium hover:text-primary transition-colors">
                How it works
              </a>
              <a href="#demo" className="text-sm font-medium hover:text-primary transition-colors">
                Demo
              </a>
              <a href="#pricing" className="text-sm font-medium hover:text-primary transition-colors">
                Pricing
              </a>
              <a href="#faq" className="text-sm font-medium hover:text-primary transition-colors">
                FAQ
              </a>
            </nav>

            <div className="flex items-center gap-4">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline" size="sm" className="hidden md:flex ">
                    Join Waitlist
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle>Join the Waitlist</DialogTitle>
                  </DialogHeader>
                  <form onSubmit={handleWaitlistSignup} className="space-y-4">
                    <Input 
                      name="name" 
                      placeholder="Full Name" 
                      required 
                      aria-label="Full Name"
                    />
                    <Input 
                      name="email" 
                      type="email" 
                      placeholder="Email Address" 
                      required 
                      aria-label="Email Address"
                    />
                    <select 
                      name="role" 
                      className="w-full p-2 border border-border rounded-md bg-background"
                      required
                      aria-label="Role"
                    >
                      <option value="">Select your role</option>
                      <option value="advocate">Individual Advocate</option>
                      <option value="chamber">Law Chamber/Firm</option>
                      <option value="student">Law Student</option>
                      <option value="other">Other</option>
                    </select>
                    <Button type="submit" className="w-full">
                      Join Waitlist
                    </Button>
                  </form>
                </DialogContent>
              </Dialog>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden"
                aria-label="Toggle menu"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden border-t border-border py-4"
            >
              <nav className="flex flex-col gap-4">
                <a href="#features" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Features
                </a>
                <a href="#how-it-works" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  How it works
                </a>
                <a href="#demo" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Demo
                </a>
                <a href="#pricing" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  Pricing
                </a>
                <a href="#faq" className="text-sm font-medium" onClick={() => setIsMenuOpen(false)}>
                  FAQ
                </a>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" size="sm" className="w-fit">
                      Join Waitlist
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md">
                    <DialogHeader>
                      <DialogTitle>Join the Waitlist</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleWaitlistSignup} className="space-y-4">
                      <Input 
                        name="name" 
                        placeholder="Full Name" 
                        required 
                        aria-label="Full Name"
                      />
                      <Input 
                        name="email" 
                        type="email" 
                        placeholder="Email Address" 
                        required 
                        aria-label="Email Address"
                      />
                      <select 
                        name="role" 
                        className="w-full p-2 border border-border rounded-md bg-background"
                        required
                        aria-label="Role"
                      >
                        <option value="">Select your role</option>
                        <option value="advocate">Individual Advocate</option>
                        <option value="chamber">Law Chamber/Firm</option>
                        <option value="student">Law Student</option>
                        <option value="other">Other</option>
                      </select>
                      <Button type="submit" className="w-full">
                        Join Waitlist
                      </Button>
                    </form>
                  </DialogContent>
                </Dialog>
              </nav>
            </motion.div>
          )}
        </div>
      </header>

      <main id="main">
        {/* Hero Section */}
        <section ref={heroRef} className="relative overflow-hidden bg-background-dark text-white">
          <div className="absolute inset-0 bg-gradient-hero" />
          <div className="absolute inset-0 grid-pattern opacity-20" />
          
          {/* Floating Legal Icons */}
          {!shouldReduceMotion && (
            <>
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  delay: 0
                }}
                className="absolute top-20 left-10 text-primary-light"
              >
                <Scale className="w-6 h-6" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -15, 0],
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.5, 0.2]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  delay: 1
                }}
                className="absolute top-32 right-16 text-primary-light"
              >
                <FileText className="w-8 h-8" />
              </motion.div>
              <motion.div
                animate={{ 
                  y: [0, -8, 0],
                  scale: [1, 1.15, 1],
                  opacity: [0.25, 0.7, 0.25]
                }}
                transition={{ 
                  duration: 3.5,
                  repeat: Infinity,
                  delay: 2
                }}
                className="absolute bottom-32 left-20 text-primary-light"
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </>
          )}

          <div className="relative max-w-7xl mx-auto px-4 md:px-6 py-20 md:py-32">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Left Column - Content */}
              <motion.div
                variants={staggerChildren}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="space-y-8"
              >
                <motion.div variants={fadeUpVariants} className="space-y-6">
                  <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
                    Win time back with{' '}
                    <span className="text-gradient bg-gradient-to-r from-primary-light to-violet-400 bg-clip-text text-transparent">
                      AI-powered
                    </span>{' '}
                    legal research
                  </h1>
                  <p className="text-lg md:text-xl leading-relaxed text-slate-300 max-w-lg">
                    Veritas Copilot finds relevant Indian precedents and drafts argument starters with pinpoint citations—so you walk into court prepared.
                  </p>
                </motion.div>

                <motion.div variants={fadeUpVariants} className="flex flex-col sm:flex-row gap-4">
                  <Button 
                    size="lg" 
                    className="btn-hero-primary"
                    onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  >
                    <Play className="w-5 h-5 mr-2" />
                    Try the Live Demo
                  </Button>
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="lg" variant="outline" className="btn-hero-secondary">
                        Join Waitlist
                        <ArrowRight className="w-5 h-5 ml-2" />
                      </Button>
                    </DialogTrigger>
                  </Dialog>
                </motion.div>

                {/* Trust Badges */}
                <motion.div variants={fadeUpVariants} className="flex flex-wrap gap-4">
                  {trustBadges.map((badge, index) => {
                    const Icon = iconMap[badge.icon as keyof typeof iconMap];
                    return (
                      <div key={index} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-lg border border-white/20">
                        <Icon className="w-4 h-4 text-primary-light" />
                        <span className="text-sm font-medium">{badge.text}</span>
                      </div>
                    );
                  })}
                </motion.div>
              </motion.div>

              {/* Right Column - App Mockup */}
              <motion.div
                variants={fadeUpVariants}
                initial="hidden"
                animate={heroInView ? "visible" : "hidden"}
                className="relative"
              >
                <motion.div
                  animate={shouldReduceMotion ? {} : { y: [0, -8, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="card-elevated bg-card/95 backdrop-blur-sm p-6 space-y-4 text-black"
                >
                  <div className="flex items-center gap-3 pb-3 border-b border-border">
                    <div className="w-3 h-3 rounded-full bg-destructive" />
                    <div className="w-3 h-3 rounded-full bg-warning" />
                    <div className="w-3 h-3 rounded-full bg-success" />
                    <span className="text-sm font-mono text-muted-foreground ml-4">Veritas Research</span>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="bg-muted/50 p-3 rounded-lg">
                      <div className="text-xs text-muted-foreground mb-1">Query</div>
                      <div className="font-mono text-sm ">dishonest breach of trust investment fraud</div>
                    </div>
                    
                    <div className="bg-primary/5 p-3 rounded-lg border border-primary/20">
                      <div className="text-xs text-primary mb-2 font-semibold">Top Result (94% match)</div>
                      <div className="text-sm font-medium mb-1">State v. Mohd. Hussain (2019) SC</div>
                      <div className="text-xs text-muted-foreground">
                        "The burden of proof in <mark className="bg-primary/20 text-primary px-1 rounded">criminal breach of trust</mark> lies with..."
                      </div>
                      <div className="flex gap-1 mt-2">
                        <Badge variant="secondary" className="text-xs">IPC 405</Badge>
                        <Badge variant="secondary" className="text-xs">IPC 420</Badge>
                      </div>
                    </div>
                    
                    <div className="bg-success/5 p-3 rounded-lg border border-success/20">
                      <div className="text-xs text-success mb-2 font-semibold">AI Argument</div>
                      <div className="text-sm space-y-1">
                        <div><strong>1. Burden of Proof:</strong> Prosecution must establish dishonest intention <span className="text-primary">[State v. Hussain (2019)]</span></div>
                        <div><strong>2. Entrustment:</strong> Prior relationship required <span className="text-primary">[Ram Kumar v. State (2021)]</span></div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Social Proof Strip */}
            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={heroInView ? "visible" : "hidden"}
              className="mt-16 pt-8 border-t border-white/20"
            >
              <p className="text-center text-sm text-slate-400 mb-6">Used by advocates across India</p>
              <div className="flex justify-center items-center gap-8 flex-wrap">
                {['SC', 'BHC', 'DHC', 'MHC', 'CHC'].map((court) => (
                  <div key={court} className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20">
                    <span className="text-sm font-mono font-medium">{court}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem-Solution Section */}
        <section ref={problemRef} id="features" className="py-20 bg-background-light">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={problemInView ? "visible" : "hidden"}
              className="grid lg:grid-cols-2 gap-16 items-center"
            >
              {/* Pain Points */}
              <motion.div variants={fadeUpVariants} className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">The current legal research challenge</h2>
                  <p className="text-muted-foreground">Traditional legal research tools weren't built for how advocates actually work.</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Search, title: "Keywords miss intent", desc: "Searching for 'fraud' doesn't find relevant breach of trust cases" },
                    { icon: Timer, title: "Hours spent scrambling", desc: "Last-minute research before hearings leads to missed precedents" },
                    { icon: FileText, title: "Citation chaos", desc: "Managing dozens of PDFs without a systematic way to extract arguments" }
                  ].map((pain, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpVariants}
                      className="flex gap-4 p-4 bg-destructive/5 border border-destructive/20 rounded-xl"
                    >
                      <pain.icon className="w-6 h-6 text-destructive flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{pain.title}</h3>
                        <p className="text-sm text-muted-foreground">{pain.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Solutions */}
              <motion.div variants={fadeUpVariants} className="space-y-8">
                <div>
                  <h2 className="text-2xl md:text-3xl font-semibold mb-4">How Veritas solves it</h2>
                  <p className="text-muted-foreground">AI that understands legal concepts, not just keywords.</p>
                </div>
                
                <div className="space-y-6">
                  {[
                    { icon: Zap, title: "Semantic case retrieval", desc: "Search by facts and legal concepts. Find cases you'd never discover with keywords" },
                    { icon: CheckCircle, title: "On-point arguments", desc: "Generate structured arguments with verified citations in minutes" },
                    { icon: Award, title: "Instant citations", desc: "Every claim backed by specific case law with pinpoint references" }
                  ].map((solution, index) => (
                    <motion.div
                      key={index}
                      variants={fadeUpVariants}
                      className="flex gap-4 p-4 bg-success/5 border border-success/20 rounded-xl"
                    >
                      <solution.icon className="w-6 h-6 text-success flex-shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-semibold mb-1">{solution.title}</h3>
                        <p className="text-sm text-muted-foreground">{solution.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* How It Works Section */}
        <section ref={howItWorksRef} id="how-it-works" className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUpVariants} className="text-2xl md:text-3xl font-semibold mb-4">
                How Veritas works
              </motion.h2>
              <motion.p variants={fadeUpVariants} className="text-muted-foreground max-w-2xl mx-auto">
                From facts to arguments in three simple steps. No complex queries, no missed precedents.
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={howItWorksInView ? "visible" : "hidden"}
            >
              <Tabs defaultValue="describe" className="max-w-5xl mx-auto">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  {howItWorksSteps.map((step) => (
                    <TabsTrigger key={step.id} value={step.id} className="text-sm md:text-base">
                      {step.title}
                    </TabsTrigger>
                  ))}
                </TabsList>
                
                {howItWorksSteps.map((step) => (
                  <TabsContent key={step.id} value={step.id} className="space-y-8">
                    <div className="grid lg:grid-cols-2 gap-8 items-start">
                      <div className="space-y-4">
                        <h3 className="text-xl font-semibold">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                        
                        <Card className="bg-muted/50 border-0">
                          <CardContent className="p-4">
                            <div className="text-sm font-mono whitespace-pre-line">
                              {step.example}
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                      
                      <Card className="bg-card border border-border">
                        <CardContent className="p-4">
                          <div className="text-xs text-muted-foreground mb-2">API Response</div>
                          <pre className="text-sm font-mono overflow-x-auto text-foreground">
                            {step.code}
                          </pre>
                        </CardContent>
                      </Card>
                    </div>
                  </TabsContent>
                ))}
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Interactive Demo Section */}
        <section ref={demoRef} id="demo" className="py-20 bg-background-muted">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={demoInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeUpVariants} className="text-2xl md:text-3xl font-semibold mb-4">
                Try the live demo
              </motion.h2>
              <motion.p variants={fadeUpVariants} className="text-muted-foreground">
                Experience semantic legal search with real Indian case law (mocked data for demo)
              </motion.p>
            </motion.div>

            <motion.div
              variants={fadeUpVariants}
              initial="hidden"
              animate={demoInView ? "visible" : "hidden"}
            >
              <Card className="card-elevated">
                <CardContent className="p-8 space-y-6">
                  {/* Demo Input */}
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="demo-query" className="block text-sm font-medium mb-2">
                        Describe your case facts
                      </label>
                      <Textarea
                        id="demo-query"
                        placeholder="e.g., Client was given money to invest but used it for personal expenses. Charged under IPC 420 and 405."
                        value={demoQuery}
                        onChange={(e) => setDemoQuery(e.target.value)}
                        className="min-h-20"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Jurisdiction (select multiple)
                      </label>
                      <div className="flex flex-wrap gap-2">
                        {['SC', 'Bombay HC', 'Delhi HC', 'Madras HC', 'Calcutta HC'].map((jurisdiction) => (
                          <button
                            key={jurisdiction}
                            onClick={() => {
                              setSelectedJurisdictions(prev =>
                                prev.includes(jurisdiction)
                                  ? prev.filter(j => j !== jurisdiction)
                                  : [...prev, jurisdiction]
                              );
                            }}
                            className={`px-3 py-1 rounded-lg text-sm font-medium border transition-colors ${
                              selectedJurisdictions.includes(jurisdiction)
                                ? 'bg-primary text-white border-primary'
                                : 'bg-background border-border hover:border-primary'
                            }`}
                          >
                            {jurisdiction}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Button 
                    onClick={handleRunDemo}
                    disabled={isDemoLoading}
                    className="w-full sm:w-auto"
                    size="lg"
                  >
                    {isDemoLoading ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full mr-2"
                        />
                        Searching cases...
                      </>
                    ) : (
                      <>
                        <Search className="w-4 h-4 mr-2" />
                        Run Search
                      </>
                    )}
                  </Button>

                  {/* Demo Results */}
                  {showDemoResults && (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="space-y-6 pt-6 border-t border-border"
                    >
                      <h3 className="text-lg font-semibold">Search Results</h3>
                      
                      <div className="grid gap-4">
                        {demoResults.map((result, index) => (
                          <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            className="p-4 bg-card border border-card-border rounded-xl"
                          >
                            <div className="flex items-start justify-between gap-4 mb-3">
                              <div>
                                <h4 className="font-medium text-foreground">{result.title}</h4>
                                <p className="text-sm text-muted-foreground">
                                  {result.court} • {result.year}
                                </p>
                              </div>
                              <Badge variant="secondary" className="bg-primary/10 text-primary">
                                {result.relevanceScore}% match
                              </Badge>
                            </div>
                            
                            <p 
                              className="text-sm text-muted-foreground mb-3" 
                              dangerouslySetInnerHTML={{ __html: result.snippet }}
                            />
                            
                            <div className="flex flex-wrap gap-2">
                              {result.sections.map((section) => (
                                <Badge key={section} variant="outline" className="text-xs">
                                  {section}
                                </Badge>
                              ))}
                            </div>
                          </motion.div>
                        ))}
                      </div>

                      {/* AI Argument */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                        className="bg-success/5 border border-success/20 rounded-xl p-6"
                      >
                        <h3 className="text-lg font-semibold text-success mb-4">
                          AI-Generated Argument Structure
                        </h3>
                        <div className="space-y-3 text-sm">
                          <div>
                            <strong>1. Burden of Proof:</strong> The prosecution must establish dishonest intention from the beginning{' '}
                            <span className="text-primary font-medium">[State v. Mohd. Hussain (2019) SC]</span>
                          </div>
                          <div>
                            <strong>2. Distinction from Cheating:</strong> Criminal breach of trust requires prior entrustment, unlike cheating{' '}
                            <span className="text-primary font-medium">[Ram Kumar v. State (2021) SC]</span>
                          </div>
                          <div>
                            <strong>3. Nature of Entrustment:</strong> The relationship and circumstances of entrustment are crucial{' '}
                            <span className="text-primary font-medium">[Prakash Singh v. Union (2020) Del HC]</span>
                          </div>
                        </div>
                      </motion.div>
                    </motion.div>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section ref={featuresRef} className="py-20 bg-background">
          <div className="max-w-7xl mx-auto px-4 md:px-6">
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="text-center mb-16"
            >
              <motion.h2 variants={fadeUpVariants} className="text-2xl md:text-3xl font-semibold mb-4">
                Everything you need for legal research
              </motion.h2>
              <motion.p variants={fadeUpVariants} className="text-muted-foreground max-w-2xl mx-auto">
                Comprehensive tools designed specifically for Indian legal practice
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={featuresInView ? "visible" : "hidden"}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {features.map((feature, index) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <motion.div key={index} variants={fadeUpVariants}>
                    <Card className="card-elevated h-full hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6 space-y-4">
                        <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                          <Icon className="w-6 h-6 text-primary" />
                        </div>
                        <h3 className="text-lg font-semibold">{feature.title}</h3>
                        <p className="text-muted-foreground text-sm leading-relaxed">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>

        {/* Accuracy & Safety */}
        <section className="py-20 bg-background-muted">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Built for accuracy and reliability
              </h2>
              <p className="text-muted-foreground">
                How we ensure every argument is verifiable and citation-first
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="card-gradient">
                <CardContent className="p-8">
                  <div className="grid lg:grid-cols-3 gap-8 items-center">
                    <div className="lg:col-span-2 space-y-6">
                      <div>
                        <h3 className="text-xl font-semibold mb-3">Retrieval-Augmented Generation (RAG)</h3>
                        <p className="text-muted-foreground">
                          Veritas doesn't hallucinate legal facts. Our AI only generates responses based on the actual cases you can see and verify. Every argument includes inline citations to specific judgments and sections.
                        </p>
                      </div>
                      
                      <div className="space-y-4">
                        <div className="flex items-start gap-3">
                          <CheckCircle className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium">Citation-first responses</div>
                            <div className="text-sm text-muted-foreground">Every legal point backed by verifiable case law</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Shield className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium">Human-in-the-loop</div>
                            <div className="text-sm text-muted-foreground">You review and verify all AI suggestions before use</div>
                          </div>
                        </div>
                        
                        <div className="flex items-start gap-3">
                          <Eye className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                          <div>
                            <div className="font-medium">Transparent sourcing</div>
                            <div className="text-sm text-muted-foreground">See exactly which cases inform each argument</div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-primary/20">
                      <div className="text-center space-y-4">
                        <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                          <Shield className="w-8 h-8 text-primary" />
                        </div>
                        <div>
                          <div className="text-2xl font-bold text-primary">100%</div>
                          <div className="text-sm text-muted-foreground">Verifiable citations</div>
                        </div>
                        <div>
                          <div className="text-lg font-semibold">Zero hallucination</div>
                          <div className="text-sm text-muted-foreground">RAG-powered accuracy</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Pricing Section */}
        <section ref={pricingRef} id="pricing" className="py-20 bg-background">
          <div className="max-w-6xl mx-auto px-4 md:px-6">
            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
              className="text-center mb-12"
            >
              <motion.h2 variants={fadeUpVariants} className="text-2xl md:text-3xl font-semibold mb-4">
                Simple, transparent pricing
              </motion.h2>
              <motion.p variants={fadeUpVariants} className="text-muted-foreground mb-8">
                Choose the plan that fits your practice
              </motion.p>
              
              <motion.div variants={fadeUpVariants} className="flex items-center justify-center gap-4 mb-8">
                <span className={`text-sm ${!yearlyPricing ? 'font-semibold' : 'text-muted-foreground'}`}>
                  Monthly
                </span>
                <button
                  onClick={() => setYearlyPricing(!yearlyPricing)}
                  className={`relative w-12 h-6 rounded-full transition-colors ${
                    yearlyPricing ? 'bg-primary' : 'bg-muted'
                  }`}
                  aria-label="Toggle yearly pricing"
                >
                  <div
                    className={`absolute top-0.5 w-5 h-5 bg-white rounded-full transition-transform ${
                      yearlyPricing ? 'translate-x-6' : 'translate-x-0.5'
                    }`}
                  />
                </button>
                <span className={`text-sm ${yearlyPricing ? 'font-semibold' : 'text-muted-foreground'}`}>
                  Yearly
                  <Badge variant="secondary" className="ml-2 text-xs">Save 20%</Badge>
                </span>
              </motion.div>
            </motion.div>

            <motion.div
              variants={staggerChildren}
              initial="hidden"
              animate={pricingInView ? "visible" : "hidden"}
              className="grid md:grid-cols-3 gap-8"
            >
              {pricingPlans.map((plan, index) => (
                <motion.div key={index} variants={fadeUpVariants}>
                  <Card className={`
                    relative h-full transition-all duration-300 hover:-translate-y-1
                    ${plan.popular 
                      ? 'card-elevated ring-2 ring-primary shadow-card-hover' 
                      : 'card-elevated hover:shadow-card-hover'
                    }
                  `}>
                    {plan.popular && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-primary text-white px-4 py-1">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    
                    <CardContent className="p-8 space-y-6">
                      <div className="text-center">
                        <h3 className="text-xl font-semibold mb-2">{plan.name}</h3>
                        <div className="mb-2">
                          <span className="text-3xl font-bold">
                            {yearlyPricing && plan.name !== 'Free' 
                              ? `₹${Math.round(parseInt(plan.price.replace('₹', '').replace(',', '')) * 12 * 0.8).toLocaleString()}`
                              : plan.price
                            }
                          </span>
                          {plan.name !== 'Free' && (
                            <span className="text-muted-foreground">
                              /{yearlyPricing ? 'year' : 'month'}
                            </span>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground">{plan.description}</p>
                      </div>
                      
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-start gap-3">
                            <CheckCircle className="w-4 h-4 text-success flex-shrink-0 mt-0.5" />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      
                      <Button 
                        variant={plan.popular ? "default" : "outline"}
                        className="w-full"
                        disabled
                      >
                        {plan.cta}
                        <Badge variant="secondary" className="ml-2">Soon</Badge>
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20 bg-background-muted">
          <div className="max-w-5xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Trusted by advocates across India
              </h2>
              <p className="text-muted-foreground">
                See what legal professionals are saying about Veritas
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="card-elevated">
                <CardContent className="p-8">
                  <div className="text-center max-w-3xl mx-auto">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-warning fill-current" />
                      ))}
                    </div>
                    
                    <blockquote className="text-lg md:text-xl font-medium mb-6 leading-relaxed">
                      "{testimonials[currentTestimonial].quote}"
                    </blockquote>
                    
                    <div>
                      <div className="font-semibold">{testimonials[currentTestimonial].name}</div>
                      <div className="text-muted-foreground text-sm">
                        {testimonials[currentTestimonial].role} • {testimonials[currentTestimonial].location}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
              
              {/* Testimonial indicators */}
              <div className="flex justify-center gap-2 mt-6">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentTestimonial(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentTestimonial ? 'bg-primary' : 'bg-muted'
                    }`}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-background">
          <div className="max-w-4xl mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-semibold mb-4">
                Frequently asked questions
              </h2>
              <p className="text-muted-foreground">
                Everything you need to know about Veritas Copilot
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Accordion type="single" collapsible className="space-y-4">
                {faqData.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`item-${index}`}
                    className="bg-card border border-card-border rounded-xl px-6"
                  >
                    <AccordionTrigger className="text-left hover:no-underline py-6">
                      <span className="font-medium">{faq.question}</span>
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </motion.div>
          </div>
        </section>

        {/* CTA Band */}
        <section className="py-20 bg-background-dark text-white">
          <div className="max-w-5xl mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="space-y-4">
                <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                  Bring precedent-backed arguments to every hearing
                </h2>
                <p className="text-lg text-slate-300 max-w-2xl mx-auto">
                  Join hundreds of advocates who are already using AI to research faster and argue better.
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="btn-hero-primary"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                >
                  <Play className="w-5 h-5 mr-2" />
                  Try Demo Now
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button size="lg" variant="outline" className="btn-hero-secondary">
                      Join Waitlist
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </DialogTrigger>
                </Dialog>
              </div>
              
              <p className="text-sm text-slate-400">
                No credit card required • Free tier available • Built for Indian law
              </p>
            </motion.div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-16">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <Scale className="w-6 h-6 text-primary" />
                <span className="text-lg font-bold">Veritas Copilot</span>
              </div>
              <p className="text-sm text-muted-foreground">
                AI-powered legal research for Indian advocates. Find precedents fast, argue with citations.
              </p>
            </div>

            {/* Product */}
            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
                <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How it works</a></li>
                <li><a href="#demo" className="hover:text-foreground transition-colors">Demo</a></li>
                <li><a href="#pricing" className="hover:text-foreground transition-colors">Pricing</a></li>
              </ul>
            </div>

            {/* Company */}
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">About</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-4">Legal</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-foreground transition-colors">Data Security</a></li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-border">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-sm text-muted-foreground">
                © 2024 Veritas Copilot. All rights reserved.
              </p>
              <div className="flex items-center gap-6">
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Users className="w-5 h-5" />
                  <span className="sr-only">LinkedIn</span>
                </a>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  <Globe className="w-5 h-5" />
                  <span className="sr-only">Website</span>
                </a>
              </div>
            </div>
            
            <div className="mt-4 pt-4 border-t border-border">
              <p className="text-xs text-muted-foreground text-center">
                Disclaimer: Veritas Copilot is a research tool for legal professionals. It does not provide legal advice. 
                All AI-generated content should be reviewed and verified by qualified advocates before use in legal proceedings.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default VeritasLanding;