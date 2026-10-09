import { useState, useEffect, useRef, useCallback } from 'react';
import { motion, useScroll, useSpring, useMotionTemplate, useMotionValue, AnimatePresence } from 'framer-motion';
import { 
  ArrowUpRight, 
  Github, 
  Linkedin, 
  Mail, 
  ExternalLink, 
  CheckCircle2, 
  Copy, 
  Zap, 
  Boxes, 
  Sparkles,
  Terminal,
  Award,
  FileText,
  ShieldCheck,
  Activity,
  ChevronDown,
  ArrowUp
} from 'lucide-react';

/* ── Utility: cn (className merge) ─────────────── */
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';
function cn(...inputs: ClassValue[]) { return twMerge(clsx(inputs)); }

/* ── Scroll-triggered section reveal ───────────── */
const ease = [0.16, 1, 0.3, 1] as [number, number, number, number];

const sectionVariants = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  visible: { 
    opacity: 1, y: 0, filter: 'blur(0px)',
    transition: { duration: 0.6, ease }
  }
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } }
};

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease } }
};

/* ── Spotlight Card Component ──────────────────── */
function SpotlightCard({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    const { left, top } = ref.current.getBoundingClientRect();
    mouseX.set(e.clientX - left);
    mouseY.set(e.clientY - top);
  }, [mouseX, mouseY]);

  const background = useMotionTemplate`radial-gradient(500px circle at ${mouseX}px ${mouseY}px, rgba(59, 130, 246, 0.06), transparent 40%)`;

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      className={cn('card-glass rounded-xl relative group h-full', className)}
    >
      <motion.div
        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-0"
        style={{ background }}
      />
      <div className="relative z-10 h-full flex flex-col">{children}</div>
    </div>
  );
}

/* ── Active Section Scrollspy Hook ─────────────── */
function useActiveSection(sectionIds: string[]) {
  const [active, setActive] = useState('');
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: '-30% 0px -60% 0px' }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [sectionIds]);
  return active;
}

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const activeSection = useActiveSection(['products', 'experience', 'skills', 'achievements']);

  // Scroll progress bar
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 200, damping: 50, restDelta: 0.001 });

  // Back to top visibility
  useEffect(() => {
    const handler = () => setShowBackToTop(window.scrollY > 600);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  const copyEmail = () => {
    navigator.clipboard.writeText('sanamreddysaivenkatareddy@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navLinks = [
    { id: 'products', label: 'Products' },
    { id: 'experience', label: 'Experience' },
    { id: 'skills', label: 'Skills' },
    { id: 'achievements', label: 'Achievements' },
  ];

  const flagshipProjects = [
    {
      title: "LINKEDAPPLY PRO",
      subtitle: "AI Auto-Applier & Real-Time Resume Tailorer",
      status: "Published on Chrome Web Store",
      statusColor: "text-blue-400 bg-blue-500/10 border-blue-500/20",
      description: "Engineered an intelligent auto-applier solving low ATS callback rates by dynamically parsing each job's JD and auto-tailoring resume content before submission. Built with zero recurring server cost via client-side BYOK AI integration.",
      techStack: ["TypeScript", "React", "Python FastAPI", "Chrome Extension (MV3)", "BYOK AI (Gemini/OpenAI)"],
      link: "https://chromewebstore.google.com/detail/ajgnfmojakmcoicgnmnfefiliaeikmah?utm_source=item-share-cb",
      actionText: "Chrome Web Store",
      highlights: [
        { title: "ATS Form Automation", desc: "Real-time ATS scoring & multi-step application form automation" },
        { title: "Zero Server Costs", desc: "Client-side BYOK architecture eliminating recurring API hosting costs" },
        { title: "Dynamic Tailoring", desc: "Dynamic job description parser & customized resume generator" }
      ]
    },
    {
      title: "DEGHOST",
      subtitle: "Real-Time AI Interview Integrity & Cheat Detection Platform",
      status: "Live Production MVP",
      statusColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      description: "Architected a low-latency anti-cheat detection engine that identifies 65+ stealth AI assistance tools, transparent overlays, and virtual cameras during live remote interviews, delivering instant tamper-evident PDF forensic reports.",
      techStack: ["Python", "FastAPI", "WebSockets", "PostgreSQL", "SQLAlchemy", "HTMX", "Alpine.js", "FPDF2"],
      link: "https://deghost-mvp.onrender.com",
      actionText: "Live Demo on Render",
      highlights: [
        { title: "Real-Time WebSockets", desc: "Live WebSocket integrity scoring (0–100%) with continuous telemetry" },
        { title: "65+ Stealth AI Detection", desc: "Flags AI teleprompters, hidden overlays & virtual camera devices" },
        { title: "Tamper-Evident Audits", desc: "Sub-second PDF forensic audit report generation with SHA-256 signatures" }
      ]
    },
    {
      title: "HIGH-THROUGHPUT URL SHORTENER",
      subtitle: "Event-Driven Analytics & Redirection Engine",
      status: "Open Source / 100% Test Coverage",
      statusColor: "text-purple-400 bg-purple-500/10 border-purple-500/20",
      description: "Architected an event-driven Kafka pipeline to decouple real-time click tracking from redirect execution, slashing latency from ~18ms to ~4ms while ensuring zero-loss graceful degradation during database outages.",
      techStack: ["Java", "Spring Boot", "Apache Kafka", "Redis", "PostgreSQL", "Docker", "Flyway", "Bucket4j"],
      link: "https://github.com/naamsanamone/URL-Shortener",
      actionText: "GitHub Repository",
      highlights: [
        { title: "<4ms Redirections", desc: "Slashing latency from ~18ms to ~4ms via Kafka KRaft (3 partitions)" },
        { title: "High-Concurrency Caching", desc: "Collision-free Base62 encoding & dual-key Redis cache strategy" },
        { title: "100% JaCoCo Coverage", desc: "Enforced across 25 unit/integration test suites with Testcontainers" }
      ]
    }
  ];

  const enterpriseExp = [
    {
      role: "Software Engineer / Java Backend",
      company: "Mphasis Ltd",
      client: "Client: FedEx",
      project: "Global Regulatory Security Intercept Scanning (GRSIS)",
      period: "Apr 2023 – July 2026",
      location: "Hyderabad, India",
      points: [
        "Spearheaded architectural migration of a mission-critical logistics monolith into 5 distributed Spring Boot microservices, routing high-throughput traffic via Spring Cloud Gateway.",
        "Engineered the core algorithmic Rule Engine using Strategy and Factory design patterns with short-circuit evaluation logic across 10+ shipment parameters in O(n) execution time.",
        "Built the high-throughput Scanning Service validation pipeline handling 70,000+ air cargo scans daily across 41 global airport hubs under a strict <100ms P99 latency SLA.",
        "Implemented partition resilience using Resilience4j circuit breakers and distributed Redis caching (5-min TTL), eliminating single points of failure.",
        "Architected an event-driven cache invalidation pipeline using RabbitMQ topic exchanges, slashing regulatory rule synchronization across 41 global stations to sub-100ms."
      ],
      tech: ["Java", "Spring Boot", "Spring Cloud", "PostgreSQL", "Redis", "RabbitMQ", "Resilience4j", "Docker", "Flyway", "Maven", "JUnit", "Mockito"]
    },
    {
      role: "Software Engineering Intern",
      company: "Murven Design Solutions",
      client: null,
      project: "Design & Generative AI Platform",
      period: "Nov 2022 – Jan 2023",
      location: "Remote, India",
      points: [
        "Developed RESTful APIs using Python Flask for file upload, download, and AI-based background removal workflows.",
        "Integrated AWS cloud services including Lambda, S3, EC2, and IAM for serverless processing and scalable media storage.",
        "Deployed Stable Diffusion ML models via Google Colab for AI-powered image generation pipelines."
      ],
      tech: ["Python", "Flask", "AWS (Lambda, S3, EC2, IAM)", "Google Colab", "Stable Diffusion"]
    }
  ];

  const skillCategories = [
    { name: "Languages", skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"] },
    { name: "Backend & Systems", skills: ["Spring Boot", "Spring Cloud", "Spring Security", "Spring Batch", "FastAPI", "Flask", "Microservices", "REST APIs", "Distributed Systems", "CQRS"] },
    { name: "Frontend & Realtime", skills: ["React", "Next.js", "WebSockets", "Angular", "TypeScript", "HTMX", "Alpine.js", "Tailwind CSS", "HTML5/CSS3", "Thymeleaf"] },
    { name: "Databases & Messaging", skills: ["PostgreSQL", "Apache Kafka", "Redis", "RabbitMQ", "Supabase", "MongoDB", "MySQL", "asyncpg", "SQLAlchemy"] },
    { name: "Cloud & DevOps", skills: ["AWS (EC2, S3, RDS, Lambda, IAM)", "Microsoft Azure", "Docker", "Jenkins", "SonarQube", "Maven", "Flyway", "CI/CD Pipelines"] },
    { name: "Testing & Tooling", skills: ["GitHub Copilot", "JUnit", "Mockito", "JaCoCo", "Testcontainers", "Git", "Postman", "Swagger", "Chrome Extension", "Splunk", "Zipkin"] }
  ];

  const filteredCategories = activeSkillCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.name === activeSkillCategory);

  const metrics = [
    { value: "70K+", label: "Daily FedEx Hub Scans", hoverColor: "group-hover:text-blue-400" },
    { value: "<4ms", label: "Kafka KRaft Redirect Latency", hoverColor: "group-hover:text-blue-400" },
    { value: "300+", label: "LeetCode Solved in Java", hoverColor: "group-hover:text-amber-400" },
    { value: "100%", label: "JaCoCo Microservice Coverage", hoverColor: "group-hover:text-emerald-400" },
  ];

  const achievements = [
    { icon: Award, iconBg: "bg-amber-500/10 border-amber-500/20", iconText: "text-amber-400", title: "Star Performer of the PI", desc: "Recognized at FedEx for spearheading the end-to-end Java 8 to Java 17 migration across compliance microservices, delivering 30% latency reduction." },
    { icon: Activity, iconBg: "bg-blue-500/10 border-blue-500/20", iconText: "text-blue-400", title: "30% System Performance", desc: "Diagnosed latency bottlenecks, optimized database plans with composite B-Tree indexes, and deployed distributed Redis caching." },
    { icon: Terminal, iconBg: "bg-purple-500/10 border-purple-500/20", iconText: "text-purple-400", title: "300+ LeetCode Solved", desc: "Demonstrated algorithmic rigor in Java across graphs, trees, dynamic programming, backtracking, and high-concurrency structures." },
    { icon: ShieldCheck, iconBg: "bg-emerald-500/10 border-emerald-500/20", iconText: "text-emerald-400", title: "Chrome Web Store & Render Deployments", desc: "Published LinkedApply Pro to the official Google Chrome Web Store; deployed DeGhost live MVP on Render with sub-second WebSocket audits." },
    { icon: Sparkles, iconBg: "bg-indigo-500/10 border-indigo-500/20", iconText: "text-indigo-400", title: "Best Paper Award — Research Publication", desc: "Published deep learning research on Lung Cancer Prediction using ResNet-50 at IJARBEST and won Best Paper. (B.Tech IT, Pondicherry University, CGPA 7.97)." },
  ];

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-200 relative selection:bg-blue-600/30 selection:text-blue-200 font-sans">
      {/* Background Effects */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] radial-glow pointer-events-none" />
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] radial-glow-secondary pointer-events-none" />
      <div className="noise-overlay" />

      {/* Scroll Progress Bar */}
      <motion.div className="scroll-progress" style={{ scaleX }} />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08080a]/85 border-b border-white/[0.06]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group" aria-label="Sai Venkat - Home">
            <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-700/70 flex items-center justify-center font-mono font-bold text-xs text-blue-400 group-hover:border-blue-500/50 transition-colors">
              SV
            </div>
            <span className="font-semibold text-xs sm:text-sm text-zinc-200 group-hover:text-white transition-colors">
              Sai Venkat
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Main navigation">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                className={cn(
                  'text-xs font-medium transition-colors relative py-1',
                  activeSection === link.id ? 'text-white' : 'text-zinc-400 hover:text-white'
                )}
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-[1px] left-0 right-0 h-[2px] bg-blue-500 rounded-full"
                    transition={{ type: 'spring', stiffness: 500, damping: 35 }}
                  />
                )}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
              aria-label="Copy email address to clipboard"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
              <span className="sr-only" aria-live="polite">{copied ? "Email copied to clipboard" : ""}</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
              aria-label="View resume PDF (opens in new tab)"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/naamsanamone"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-md bg-white text-zinc-900 hover:bg-zinc-200 transition-colors shadow-sm"
              aria-label="GitHub profile (opens in new tab)"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" aria-hidden="true" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main id="main-content" className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-24 relative z-10 space-y-16 sm:space-y-20">

        {/* ─── Hero Section ─────────────────────────── */}
        <motion.section
          className="space-y-6"
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
        >
          <motion.div variants={staggerItem} className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span className="relative flex h-2 w-2" aria-hidden="true">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75 motion-reduce:hidden"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Product-Minded Systems Engineer</span>
          </motion.div>

          <motion.div variants={staggerItem} className="space-y-3.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
              Architecting distributed backends. <br className="hidden sm:inline" />
              <span className="gradient-text">
                Shipping 0-to-1 products.
              </span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
              Software Engineer with 3+ years scaling mission-critical microservices to{' '}
              <strong className="text-zinc-200 font-semibold">70,000+ daily scans at FedEx</strong>.
              Active builder of high-performance developer tools, real-time AI security engines, and event-driven Kafka pipelines.
              Leverages <strong className="text-zinc-200 font-semibold">GitHub Copilot</strong> to accelerate engineering velocity from database schema to production.
            </p>
          </motion.div>

          <motion.div variants={staggerItem} className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
            <a href="#products" className="shimmer-border text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)] inline-flex items-center gap-1.5">
              <span>Explore Products</span>
              <ChevronDown className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
            {[
              { href: "/resume.pdf", icon: FileText, label: "Resume (PDF)", external: true },
              { href: "https://linkedin.com/in/naamsanam13", icon: Linkedin, label: "LinkedIn", external: true },
              { href: "https://github.com/naamsanamone", icon: Github, label: "GitHub", external: true },
              { href: "https://leetcode.com/u/sanamsai/", icon: Terminal, label: "LeetCode (300+)", external: true, iconColor: "text-amber-400" },
            ].map((btn) => (
              <a
                key={btn.label}
                href={btn.href}
                target={btn.external ? "_blank" : undefined}
                rel={btn.external ? "noreferrer" : undefined}
                className="text-xs font-medium px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all inline-flex items-center gap-1.5"
                aria-label={`${btn.label}${btn.external ? ' (opens in new tab)' : ''}`}
              >
                <btn.icon className={cn("w-3.5 h-3.5", btn.iconColor || "text-blue-400")} aria-hidden="true" />
                <span>{btn.label}</span>
              </a>
            ))}
          </motion.div>

          {/* Proof of Work Metrics */}
          <motion.div variants={staggerItem} className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3">
            {metrics.map((m, i) => (
              <SpotlightCard key={i} className="p-3.5 group">
                <div className={cn("text-2xl font-bold font-mono text-white transition-colors", m.hoverColor)}>{m.value}</div>
                <div className="text-[11px] font-medium text-zinc-400 mt-0.5">{m.label}</div>
              </SpotlightCard>
            ))}
          </motion.div>
        </motion.section>

        {/* ─── Flagship Products ────────────────────── */}
        <motion.section
          id="products"
          className="space-y-6 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-widest">Flagship Products</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">0-to-1 Tools Built & Deployed</h2>
            <p className="text-xs sm:text-sm text-zinc-400">Live products built end-to-end — from database schemas and async pipelines to user interfaces.</p>
          </div>

          <motion.div className="grid grid-cols-1 gap-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {flagshipProjects.map((p, idx) => (
              <motion.div key={idx} variants={staggerItem}>
                <SpotlightCard className="p-5 sm:p-6 flex flex-col justify-between space-y-4">
                  <div className="space-y-3.5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <div className="flex flex-wrap items-center gap-2.5">
                        <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{p.title}</h3>
                        <span className={cn("text-[11px] font-medium font-mono px-2 py-0.5 rounded-full border", p.statusColor)}>{p.status}</span>
                      </div>
                      <a href={p.link} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-all shrink-0" aria-label={`${p.actionText} (opens in new tab)`}>
                        <span>{p.actionText}</span>
                        <ExternalLink className="w-3.5 h-3.5" aria-hidden="true" />
                      </a>
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-zinc-300">{p.subtitle}</div>
                    <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">{p.description}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                      {p.highlights.map((h, hIdx) => (
                        <div key={hIdx} className="bg-zinc-900/60 border border-white/[0.05] rounded-lg p-2.5 text-xs flex items-start gap-2">
                          <Zap className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" aria-hidden="true" />
                          <div>
                            <div className="font-medium text-white text-[11px]">{h.title}</div>
                            <div className="text-[11px] text-zinc-400 leading-snug">{h.desc}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                    {p.techStack.map((tech, tIdx) => (
                      <span key={tIdx} className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-white/[0.06]">{tech}</span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ─── Enterprise Experience ────────────────── */}
        <motion.section
          id="experience"
          className="space-y-6 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-widest">Enterprise Scale</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Production Systems Experience</h2>
            <p className="text-xs sm:text-sm text-zinc-400">High-throughput architectures operating in high-concurrency enterprise environments.</p>
          </div>

          <motion.div className="space-y-5" variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {enterpriseExp.map((exp, idx) => (
              <motion.div key={idx} variants={staggerItem}>
                <SpotlightCard className="p-5 sm:p-6 space-y-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{exp.role}</h3>
                        {exp.client && (
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">{exp.client}</span>
                        )}
                      </div>
                      <div className="text-xs sm:text-sm font-medium text-blue-400 pt-0.5">{exp.company}</div>
                      <div className="text-xs text-zinc-400 italic pt-0.5">Project: {exp.project}</div>
                    </div>
                    <div className="text-xs font-mono text-zinc-400 text-left sm:text-right shrink-0">
                      <div className="text-zinc-300 font-medium"><time>{exp.period}</time></div>
                      <div className="text-zinc-500">{exp.location}</div>
                    </div>
                  </div>
                  <ul className="space-y-2 pt-1" role="list">
                    {exp.points.map((pt, pIdx) => (
                      <li key={pIdx} className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" aria-hidden="true" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                    {exp.tech.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-white/[0.06]">{t}</span>
                    ))}
                  </div>
                </SpotlightCard>
              </motion.div>
            ))}
          </motion.div>
        </motion.section>

        {/* ─── Technical Skills ────────────────────── */}
        <motion.section
          id="skills"
          className="space-y-6 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-widest">Technical Expertise</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Skills & Core Technologies</h2>
            <p className="text-xs sm:text-sm text-zinc-400">Clean, categorized overview across backend, frontend, systems, databases, and AI tooling.</p>
          </div>

          <div className="flex flex-wrap items-center gap-1.5" role="tablist" aria-label="Skill categories">
            {["All", ...skillCategories.map(c => c.name)].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSkillCategory(cat)}
                role="tab"
                aria-selected={activeSkillCategory === cat}
                className={cn(
                  'text-xs px-3 py-1.5 rounded-lg border transition-all',
                  activeSkillCategory === cat
                    ? "bg-blue-600 border-blue-500 text-white font-medium shadow-[0_0_15px_rgba(37,99,235,0.3)]"
                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                )}
              >
                {cat}
              </button>
            ))}
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={activeSkillCategory}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              role="tabpanel"
            >
              {filteredCategories.map((cat, idx) => (
                <SpotlightCard key={idx} className="p-4">
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                    <div className="text-xs font-mono font-semibold text-zinc-200 flex items-center gap-2">
                      <Boxes className="w-3.5 h-3.5 text-blue-400" aria-hidden="true" />
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">{cat.skills.length} tools</span>
                  </div>
                  <div className="flex flex-wrap gap-1.5 pt-2.5 flex-1 content-start">
                    {cat.skills.map((s, sIdx) => (
                      <span key={sIdx} className="whitespace-nowrap text-[11px] px-2 py-0.5 rounded-md border font-mono bg-zinc-900/90 border-white/[0.06] text-zinc-300 hover:border-zinc-700 transition-colors h-fit">{s}</span>
                    ))}
                  </div>
                </SpotlightCard>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.section>

        {/* ─── Achievements ────────────────────────── */}
        <motion.section
          id="achievements"
          className="space-y-6 scroll-mt-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-widest">Proof of Work</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Milestones & Achievements</h2>
            <p className="text-xs sm:text-sm text-zinc-400">Verified outcomes, algorithmic rigor, and academic publication.</p>
          </div>

          <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            {/* Row 1: 3 cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
              {achievements.slice(0, 3).map((a, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <SpotlightCard className="p-4 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${a.iconBg}`}>
                        <a.icon className={`w-4 h-4 ${a.iconText}`} aria-hidden="true" />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white">{a.title}</div>
                    </div>
                    <div className="text-xs text-zinc-400 leading-relaxed flex-1">{a.desc}</div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
            {/* Row 2: 2 cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 mt-3.5">
              {achievements.slice(3).map((a, i) => (
                <motion.div key={i} variants={staggerItem}>
                  <SpotlightCard className="p-4 space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className={`w-7 h-7 rounded-lg border flex items-center justify-center shrink-0 ${a.iconBg}`}>
                        <a.icon className={`w-4 h-4 ${a.iconText}`} aria-hidden="true" />
                      </div>
                      <div className="text-xs sm:text-sm font-semibold text-white">{a.title}</div>
                    </div>
                    <div className="text-xs text-zinc-400 leading-relaxed flex-1">{a.desc}</div>
                  </SpotlightCard>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.section>

        {/* ─── Contact CTA ─────────────────────────── */}
        <motion.section
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          variants={sectionVariants}
        >
          <SpotlightCard className="p-6 sm:p-10 text-center space-y-4 max-w-2xl mx-auto rounded-2xl">
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">Let's Build Something High-Impact</h2>
              <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">Open to early-stage product startups, distributed systems engineering, and full-stack building opportunities.</p>
              <p className="text-[11px] font-mono text-zinc-500">Hyderabad, India (IST / UTC+5:30) · Response time: &lt;24 hours</p>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
              <a href="mailto:sanamreddysaivenkatareddy@gmail.com" className="shimmer-border text-xs font-semibold px-5 py-2.5 rounded-lg bg-white text-zinc-900 hover:bg-zinc-200 transition-colors inline-flex items-center gap-1.5 shadow-sm">
                <Mail className="w-3.5 h-3.5 text-zinc-900" aria-hidden="true" />
                <span>Send Email</span>
              </a>
              <button onClick={copyEmail} className="text-xs font-medium px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all inline-flex items-center gap-1.5" aria-label="Copy email address">
                {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" aria-hidden="true" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" aria-hidden="true" />}
                <span>{copied ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>
          </SpotlightCard>
        </motion.section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-6 text-xs text-zinc-400 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>© {new Date().getFullYear()} Sanamreddy Sai Venkata Reddy. Built with React & Tailwind.</div>
          <div className="flex items-center gap-4">
            <a href="https://github.com/naamsanamone" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="GitHub (opens in new tab)">GitHub</a>
            <a href="https://linkedin.com/in/naamsanam13" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LinkedIn (opens in new tab)">LinkedIn</a>
            <a href="https://leetcode.com/u/sanamsai/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="LeetCode (opens in new tab)">LeetCode</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors" aria-label="Resume PDF (opens in new tab)">Resume</a>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="fixed bottom-6 right-6 z-50 w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-zinc-400 hover:text-white hover:border-zinc-700 transition-all shadow-lg"
            aria-label="Back to top"
          >
            <ArrowUp className="w-4 h-4" aria-hidden="true" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
