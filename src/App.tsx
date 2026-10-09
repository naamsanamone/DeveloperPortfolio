import { useState } from 'react';
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
  ChevronDown
} from 'lucide-react';

export default function App() {
  const [copied, setCopied] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState('All');

  const copyEmail = () => {
    navigator.clipboard.writeText('sanamreddysaivenkatareddy@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      location: "Chennai, India",
      points: [
        "Spearheaded architectural migration of a mission-critical logistics monolith into 5 distributed Spring Boot microservices, routing high-throughput traffic via Spring Cloud Gateway.",
        "Engineered the core algorithmic Rule Engine using Strategy and Factory design patterns with short-circuit evaluation logic across 10+ shipment parameters in O(n) execution time.",
        "Built the high-throughput Scanning Service validation pipeline handling 60,000+ air cargo scans daily across 41 global airport hubs under a strict <100ms P99 latency SLA.",
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
    {
      name: "Languages",
      skills: ["Java", "Python", "TypeScript", "JavaScript", "SQL"]
    },
    {
      name: "Backend & Systems",
      skills: ["Spring Boot", "Spring Cloud", "Spring Security", "Spring Batch", "FastAPI", "Flask", "Microservices", "REST APIs", "Distributed Systems", "CQRS"]
    },
    {
      name: "Frontend & Realtime",
      skills: ["React", "Next.js", "WebSockets", "Angular", "TypeScript", "HTMX", "Alpine.js", "Tailwind CSS", "HTML5/CSS3", "Thymeleaf"]
    },
    {
      name: "Databases & Messaging",
      skills: ["PostgreSQL", "Apache Kafka", "Redis", "RabbitMQ", "Supabase", "MongoDB", "MySQL", "asyncpg", "SQLAlchemy"]
    },
    {
      name: "Cloud & DevOps",
      skills: ["AWS (EC2, S3, RDS, Lambda, IAM)", "Microsoft Azure", "Docker", "Jenkins", "SonarQube", "Maven", "Flyway", "CI/CD Pipelines"]
    },
    {
      name: "Testing & Tooling",
      skills: ["GitHub Copilot", "JUnit", "Mockito", "JaCoCo", "Testcontainers", "Git", "Postman", "Swagger", "Chrome Extension", "Splunk", "Zipkin"]
    }
  ];

  const filteredCategories = activeSkillCategory === 'All' 
    ? skillCategories 
    : skillCategories.filter(c => c.name === activeSkillCategory);

  return (
    <div className="min-h-screen bg-[#08080a] text-zinc-200 relative selection:bg-blue-600/30 selection:text-blue-200 font-sans">
      {/* Background radial glows and grid pattern */}
      <div className="fixed inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[900px] h-[400px] radial-glow pointer-events-none" />
      <div className="fixed top-1/3 right-0 w-[500px] h-[500px] radial-glow-secondary pointer-events-none" />

      {/* Navigation */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-[#08080a]/85 border-b border-white/[0.06] transition-all">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-7 h-7 rounded-md bg-zinc-900 border border-zinc-700/70 flex items-center justify-center font-mono font-bold text-xs text-blue-400 group-hover:border-blue-500/50 transition-colors">
              SV
            </div>
            <span className="font-semibold text-xs sm:text-sm text-zinc-200 group-hover:text-white transition-colors">
              Sai Venkat
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6 text-xs font-medium text-zinc-400">
            <a href="#products" className="hover:text-white transition-colors">Products</a>
            <a href="#experience" className="hover:text-white transition-colors">Experience</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills</a>
            <a href="#achievements" className="hover:text-white transition-colors">Achievements</a>
          </nav>

          <div className="flex items-center gap-2">
            <button
              onClick={copyEmail}
              className="hidden sm:inline-flex items-center gap-1.5 text-xs px-2.5 py-1.5 rounded-md bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
              title="Copy Email"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1.5 rounded-md bg-zinc-900/90 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume</span>
            </a>

            <a
              href="https://github.com/naamsanamone"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1.5 rounded-md bg-white text-zinc-900 hover:bg-zinc-200 transition-colors shadow-sm"
            >
              <span>GitHub</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          </div>
        </div>
      </header>

      {/* Main Container with tailored max-w and balanced vertical rhythm */}
      <main className="max-w-5xl mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-24 relative z-10 space-y-16 sm:space-y-20">

        {/* Hero Section */}
        <section className="space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Product-Minded Systems Engineer</span>
          </div>

          {/* Headline & Bio */}
          <div className="space-y-3.5">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-[1.14]">
              Architecting distributed backends. <br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-400">
                Shipping 0-to-1 products.
              </span>
            </h1>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed max-w-3xl pt-1">
              Software Engineer with 3+ years scaling mission-critical microservices to{' '}
              <strong className="text-zinc-200 font-semibold">60,000+ daily scans at FedEx</strong>. 
              Active builder of high-performance developer tools, real-time AI security engines, and event-driven Kafka pipelines. 
              Leverages <strong className="text-blue-300 font-semibold">GitHub Copilot</strong> to accelerate engineering velocity from database schema to production.
            </p>
          </div>

          {/* Social & Contact Buttons */}
          <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1">
            <a
              href="#products"
              className="text-xs font-semibold px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-all shadow-[0_0_20px_rgba(37,99,235,0.25)] inline-flex items-center gap-1.5"
            >
              <span>Explore Products</span>
              <ChevronDown className="w-3.5 h-3.5" />
            </a>

            <a
              href="/resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              <FileText className="w-3.5 h-3.5 text-blue-400" />
              <span>Resume (PDF)</span>
            </a>

            <a
              href="https://linkedin.com/in/naamsanam13"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              <Linkedin className="w-3.5 h-3.5 text-blue-400" />
              <span>LinkedIn</span>
            </a>

            <a
              href="https://github.com/naamsanamone"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              <Github className="w-3.5 h-3.5 text-zinc-300" />
              <span>GitHub</span>
            </a>

            <a
              href="https://leetcode.com/u/sanamsai/"
              target="_blank"
              rel="noreferrer"
              className="text-xs font-medium px-3.5 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              <Terminal className="w-3.5 h-3.5 text-amber-400" />
              <span>LeetCode (300+)</span>
            </a>
          </div>

          {/* Proof of Work Metrics Strip - Redesigned as sleek Bento glass strip */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 pt-3">
            <div className="bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-3.5 transition-all group">
              <div className="text-2xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors">60K+</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">Daily FedEx Hub Scans</div>
            </div>
            <div className="bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-3.5 transition-all group">
              <div className="text-2xl font-bold font-mono text-white group-hover:text-blue-400 transition-colors">&lt;4ms</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">Kafka KRaft Redirect Latency</div>
            </div>
            <div className="bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-3.5 transition-all group">
              <div className="text-2xl font-bold font-mono text-white group-hover:text-amber-400 transition-colors">300+</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">LeetCode Solved in Java</div>
            </div>
            <div className="bg-zinc-900/40 hover:bg-zinc-900/60 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-3.5 transition-all group">
              <div className="text-2xl font-bold font-mono text-white group-hover:text-emerald-400 transition-colors">100%</div>
              <div className="text-[11px] font-medium text-zinc-400 mt-0.5">JaCoCo Microservice Coverage</div>
            </div>
          </div>
        </section>

        {/* Flagship Products Section */}
        <section id="products" className="space-y-6 scroll-mt-20">
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-widest">Flagship Products</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              0-to-1 Tools Built & Deployed
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Live products built end-to-end — from database schemas and async pipelines to user interfaces.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5">
            {flagshipProjects.map((p, idx) => (
              <div 
                key={idx}
                className="card-linear rounded-xl p-5 sm:p-6 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-3.5">
                  {/* Top Bar: Title, Status, Action Link */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">{p.title}</h3>
                      <span className={`text-[11px] font-medium font-mono px-2 py-0.5 rounded-full border ${p.statusColor}`}>
                        {p.status}
                      </span>
                    </div>

                    <a
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 hover:border-blue-500/40 transition-all shrink-0"
                    >
                      <span>{p.actionText}</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </a>
                  </div>

                  {/* Subtitle */}
                  <div className="text-xs sm:text-sm font-medium text-zinc-300">
                    {p.subtitle}
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                    {p.description}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 pt-1">
                    {p.highlights.map((h, hIdx) => (
                      <div key={hIdx} className="bg-zinc-900/60 border border-white/[0.05] rounded-lg p-2.5 text-xs text-zinc-300 flex items-start gap-2">
                        <Zap className="w-3.5 h-3.5 text-blue-400 mt-0.5 shrink-0" />
                        <div>
                          <div className="font-medium text-white text-[11px]">{h.title}</div>
                          <div className="text-[11px] text-zinc-400 leading-snug">{h.desc}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                  {p.techStack.map((tech, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-white/[0.06]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Enterprise Experience Section */}
        <section id="experience" className="space-y-6 scroll-mt-20">
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-widest">Enterprise Scale</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Production Systems Experience
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              High-throughput architectures operating in high-concurrency enterprise environments.
            </p>
          </div>

          <div className="space-y-5">
            {enterpriseExp.map((exp, idx) => (
              <div key={idx} className="card-linear rounded-xl p-5 sm:p-6 space-y-4">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">{exp.role}</h3>
                      {exp.client && (
                        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-blue-300">
                          {exp.client}
                        </span>
                      )}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-blue-400 pt-0.5">{exp.company}</div>
                    <div className="text-xs text-zinc-400 italic pt-0.5">Project: {exp.project}</div>
                  </div>
                  <div className="text-xs font-mono text-zinc-400 text-left sm:text-right shrink-0">
                    <div className="text-zinc-300 font-medium">{exp.period}</div>
                    <div className="text-zinc-500">{exp.location}</div>
                  </div>
                </div>

                {/* Bullets */}
                <ul className="space-y-2 pt-1">
                  {exp.points.map((pt, pIdx) => (
                    <li key={pIdx} className="text-xs sm:text-sm text-zinc-400 flex items-start gap-2.5 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500 mt-2 shrink-0" />
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>

                {/* Skills Badges Bar */}
                <div className="pt-3 border-t border-white/[0.06] flex flex-wrap items-center gap-1.5">
                  {exp.tech.map((t, tIdx) => (
                    <span 
                      key={tIdx} 
                      className="text-[10px] sm:text-[11px] font-mono px-2 py-0.5 rounded bg-zinc-900/90 text-zinc-300 border border-white/[0.06]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Technical Skills Radar */}
        <section id="skills" className="space-y-6 scroll-mt-20">
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-widest">Technical Expertise</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Skills & Core Technologies
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Clean, categorized overview across backend, frontend, systems, databases, and AI tooling.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5">
            {["All", ...skillCategories.map(c => c.name)].map((cat, idx) => (
              <button
                key={idx}
                onClick={() => setActiveSkillCategory(cat)}
                className={`text-xs px-3 py-1.5 rounded-lg border transition-all ${
                  activeSkillCategory === cat 
                    ? "bg-blue-600 border-blue-500 text-white font-medium shadow-[0_0_15px_rgba(37,99,235,0.3)]" 
                    : "bg-zinc-900/60 border-zinc-800 text-zinc-400 hover:text-white hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Grid of Skill Cards with uniform height and clean layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3.5">
            {filteredCategories.map((cat, idx) => (
              <div 
                key={idx} 
                className="bg-zinc-900/40 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 flex flex-col justify-between transition-colors space-y-3"
              >
                <div>
                  <div className="flex items-center justify-between pb-2 border-b border-white/[0.05]">
                    <div className="text-xs font-mono font-semibold text-zinc-200 flex items-center gap-2">
                      <Boxes className="w-3.5 h-3.5 text-blue-400" />
                      <span>{cat.name}</span>
                    </div>
                    <span className="text-[10px] font-mono text-zinc-400">{cat.skills.length} tools</span>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2.5">
                    {cat.skills.map((s, sIdx) => (
                      <span 
                        key={sIdx} 
                        className="whitespace-nowrap text-[11px] px-2 py-0.5 rounded-md border font-mono bg-zinc-900/90 border-white/[0.06] text-zinc-300 hover:border-zinc-700 transition-colors"
                      >
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Milestones & Achievements - Tight, balanced bento grid */}
        <section id="achievements" className="space-y-6 scroll-mt-20">
          <div className="space-y-1.5">
            <div className="text-[11px] font-mono font-medium text-blue-400 uppercase tracking-widest">Proof of Work</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Milestones & Achievements
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400">
              Verified outcomes, algorithmic rigor, and academic publication.
            </p>
          </div>

          {/* Row 1: 3 cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5">
            <div className="bg-zinc-900/40 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 flex flex-col justify-between space-y-2 transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                  <Award className="w-4 h-4 text-amber-400" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">Star Performer of the PI</div>
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                Recognized at FedEx for spearheading the end-to-end Java 8 to Java 17 migration across compliance microservices, delivering 30% latency reduction.
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 flex flex-col justify-between space-y-2 transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
                  <Activity className="w-4 h-4 text-blue-400" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">30% System Performance</div>
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                Diagnosed latency bottlenecks, optimized database plans with composite B-Tree indexes, and deployed distributed Redis caching.
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 flex flex-col justify-between space-y-2 transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0">
                  <Terminal className="w-4 h-4 text-purple-400" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">300+ LeetCode Solved</div>
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                Demonstrated algorithmic rigor in Java across graphs, trees, dynamic programming, backtracking, and high-concurrency structures.
              </div>
            </div>
          </div>

          {/* Row 2: 2 balanced wider cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
            <div className="bg-zinc-900/40 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 flex flex-col justify-between space-y-2 transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">Chrome Web Store & Render Deployments</div>
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                Published LinkedApply Pro to the official Google Chrome Web Store; deployed DeGhost live MVP on Render with sub-second WebSocket audits.
              </div>
            </div>

            <div className="bg-zinc-900/40 border border-white/[0.06] hover:border-white/[0.12] rounded-xl p-4 flex flex-col justify-between space-y-2 transition-all">
              <div className="flex items-center gap-2.5">
                <div className="w-7 h-7 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
                  <Sparkles className="w-4 h-4 text-indigo-400" />
                </div>
                <div className="text-xs sm:text-sm font-semibold text-white">Best Paper Award — Research Publication</div>
              </div>
              <div className="text-xs text-zinc-400 leading-relaxed">
                Published deep learning research on <em>Lung Cancer Prediction using ResNet-50</em> at IJARBEST and won Best Paper. (B.Tech IT, Pondicherry University, CGPA 7.97).
              </div>
            </div>
          </div>
        </section>

        {/* Contact & CTA Section */}
        <section className="card-linear rounded-2xl p-6 sm:p-10 text-center space-y-4 max-w-2xl mx-auto">
          <div className="space-y-2">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Let's Build Something High-Impact
            </h2>
            <p className="text-xs sm:text-sm text-zinc-400 max-w-lg mx-auto">
              Open to early-stage product startups, distributed systems engineering, and full-stack building opportunities.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-2.5 pt-1">
            <a
              href="mailto:sanamreddysaivenkatareddy@gmail.com"
              className="text-xs font-semibold px-5 py-2.5 rounded-lg bg-white text-zinc-900 hover:bg-zinc-200 transition-colors inline-flex items-center gap-1.5 shadow-sm"
            >
              <Mail className="w-3.5 h-3.5 text-zinc-900" />
              <span>Send Email</span>
            </a>

            <button
              onClick={copyEmail}
              className="text-xs font-medium px-4 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-all inline-flex items-center gap-1.5"
            >
              {copied ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5 text-zinc-400" />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-white/[0.06] py-6 text-xs text-zinc-400 relative z-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <div>
            © {new Date().getFullYear()} Sanamreddy Sai Venkata Reddy. Built with React & Tailwind.
          </div>
          <div className="flex items-center gap-4 text-zinc-400">
            <a href="https://github.com/naamsanamone" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">GitHub</a>
            <a href="https://linkedin.com/in/naamsanam13" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LinkedIn</a>
            <a href="https://leetcode.com/u/sanamsai/" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">LeetCode</a>
            <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-white transition-colors">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
