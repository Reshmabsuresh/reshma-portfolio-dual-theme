import { useState, useEffect, type FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Menu, X, ArrowRight, Sparkles, MapPin, Lightbulb, Heart, Zap, Users,
  ArrowUpRight, Search, FlaskConical, Target, Layers, TestTube, RefreshCw, Rocket,
  Figma, MessageSquare, Pen, Palette, Layout, Bot, Wand2, Frame,
  Mail, Linkedin, Send,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { ThemeToggle } from "@/components/portfolio/ThemeToggle";

const ORB_IMG = "https://media.base44.com/images/public/6a21463fef8b80e04de687ea/b865d12e0_generated_image.png";
const PORTRAIT = "https://media.base44.com/images/public/6a21463fef8b80e04de687ea/ae3640e36_Firefly_GeminiFlash_makeskinsmoothnotaddmakeup976711.png";
const SHAPES_IMG = "https://media.base44.com/images/public/6a21463fef8b80e04de687ea/ad832c29e_generated_image.png";
const CONTACT_VISUAL = "https://media.base44.com/images/public/6a21463fef8b80e04de687ea/e4103c180_generated_image.png";
const BOTIM_IMG = "https://media.base44.com/images/public/6a21463fef8b80e04de687ea/c822867ce_Firefly_placethebotimimageininsteadofsecondimage420130.png";
const FINTECH_IMG = "https://media.base44.com/images/public/6a21463fef8b80e04de687ea/aa118af14_fintech.png";
const FITNESS_IMG = "https://media.base44.com/images/public/6a21463fef8b80e04de687ea/103fdd5f8_fitnessapp.jpg";
const ECOMMERCE_IMG = "https://media.base44.com/images/public/6a21463fef8b80e04de687ea/b244e79e5_Voidfuture.png";

const BehanceIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.97 5.466-5.97 3.082 0 4.964 2.13 4.964 5.886 0 .405-.04.619-.07.84H15.5c.029 1.511.792 2.215 2.213 2.215 1.207 0 1.94-.648 2.18-1.496h2.833zM8.5 14.5c0-1.5-.5-2.5-2-2.5 1.5 0 2-1 2-2.5C8.5 7.5 7 6 4 6H0v12h4.5c3 0 4-1.5 4-3.5zM3 8h1.5c1 0 1.5.5 1.5 1.5S5.5 11 4.5 11H3V8zm0 5h2c1 0 1.5.5 1.5 1.5S6 16 5 16H3v-3z" />
  </svg>
);

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Process", href: "#process" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Contact", href: "#contact" },
];

function LightNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-strong shadow-[0_1px_0_rgba(0,0,0,0.06)] py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center shadow-lg shadow-blue-500/25">
            <span className="text-white font-bold text-sm">R</span>
          </div>
          <span className="font-heading font-semibold text-foreground text-[15px] tracking-tight">
            Reshma Suresh
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/[0.04] transition-all duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a href="mailto:breshmasuresh@gmail.com" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            breshmasuresh@gmail.com
          </a>
          <ThemeToggle className="h-9 w-9 text-blue-600 bg-blue-50 border border-blue-100 hover:bg-blue-100" />
          <a href="#contact" className="text-sm font-semibold px-5 py-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 transition-all duration-200 shadow-sm">
            Hire Me
          </a>
        </div>

        <div className="flex md:hidden items-center gap-1">
          <ThemeToggle className="h-9 w-9 text-blue-600 bg-blue-50 border border-blue-100 hover:bg-blue-100" />
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="p-2 rounded-lg hover:bg-black/[0.05] transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mx-4 mt-2 glass-strong rounded-2xl overflow-hidden"
          >
            <nav className="p-4 flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="px-4 py-3 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-black/[0.04] transition-all"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-2 mt-1 border-t border-border">
                <a
                  href="#contact"
                  onClick={() => setMobileOpen(false)}
                  className="block text-center text-sm font-semibold px-5 py-2.5 rounded-xl bg-foreground text-background"
                >
                  Hire Me
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}

const ROLES = ["UX/UI Designer", "Problem Solver", "Product Strategist", "AI Forward Designer"];

function TypewriterText() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[idx];
    let t: ReturnType<typeof setTimeout>;
    if (!deleting && text.length < current.length) {
      t = setTimeout(() => setText(current.slice(0, text.length + 1)), 75);
    } else if (!deleting && text.length === current.length) {
      t = setTimeout(() => setDeleting(true), 2200);
    } else if (deleting && text.length > 0) {
      t = setTimeout(() => setText(text.slice(0, -1)), 40);
    } else {
      setDeleting(false);
      setIdx((i) => (i + 1) % ROLES.length);
    }
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="text-primary">
      {text}
      <span className="cursor-blink" aria-hidden="true" />
    </span>
  );
}

function LightHero() {
  return (
    <section id="top" className="relative min-h-screen overflow-hidden bg-gradient-to-b from-white via-slate-50/60 to-white">
      <div aria-hidden="true" className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="orb absolute -top-32 -right-32 w-[600px] h-[600px] bg-blue-100/60" />
        <div className="orb absolute top-1/2 -left-64 w-[500px] h-[500px] bg-violet-100/40" />
        <div className="orb absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-cyan-100/30" />
      </div>

      <div aria-hidden="true" className="absolute right-0 top-1/2 -translate-y-1/2 w-[700px] h-[700px] opacity-30 pointer-events-none hidden lg:block">
        <img src={ORB_IMG} alt="" className="w-full h-full object-contain animate-float-delayed" />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full pb-16">
        <div className="grid lg:grid-cols-[1fr_420px] gap-12 items-start">
          <motion.div
            className="pt-28"
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center gap-2 badge-gradient rounded-full px-4 py-1.5 text-xs font-medium mb-8"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              Available for new projects
              <Sparkles className="w-3 h-3 opacity-60" />
            </motion.div>

            <h1 className="font-display font-bold tracking-tight leading-[1.05] text-foreground" style={{ fontSize: "clamp(2.8rem, 7vw, 5.5rem)", letterSpacing: "-0.035em" }}>
              Hi, I'm{" "}
              <span className="gradient-text-subtle">Reshma</span>
              <br />
              <span className="text-foreground/90">Suresh</span>
            </h1>

            <div className="mt-4 flex items-center gap-2 h-9">
              <span className="text-xl md:text-2xl font-heading font-medium text-muted-foreground">
                <TypewriterText />
              </span>
            </div>

            <p className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-[520px] font-body">
              I design with the end user in mind, always, not just to meet a brief, but to solve a real problem someone is actually facing.
            </p>

            <div className="mt-8 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="w-4 h-4" />
              <span>Dubai, UAE · Available Worldwide</span>
              <span className="w-1 h-1 rounded-full bg-border" />
              <span className="font-medium text-foreground">4.5 Years Experience</span>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <motion.a
                href="#work"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-foreground text-background font-semibold text-sm shadow-lg shadow-black/10 hover:shadow-xl hover:shadow-black/15 transition-all duration-300"
              >
                View My Work
                <ArrowRight className="w-4 h-4" />
              </motion.a>
              <motion.a
                href="#contact"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-2xl bg-white text-foreground font-semibold text-sm card-shadow hover:card-shadow-hover transition-all duration-300 border border-border"
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 32 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:flex justify-center pt-20"
          >
            <div className="relative">
              <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-blue-100 via-violet-50 to-cyan-50 blur-2xl opacity-70" aria-hidden="true" />
              <div className="relative w-[340px] h-[520px] rounded-[2rem] overflow-hidden glass-strong card-shadow">
                <img src={PORTRAIT} alt="Reshma Suresh — UX/UI Designer" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
              </div>

              <motion.div
                className="absolute -left-10 top-12 glass-strong rounded-2xl px-4 py-3 card-shadow"
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              >
                <p className="text-xs font-semibold text-foreground">Design Systems</p>
                <div className="mt-1.5">
                  <div className="h-1.5 w-16 rounded-full bg-slate-200/80 overflow-hidden">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
                  </div>
                </div>
              </motion.div>

              <motion.div
                className="absolute -right-10 bottom-16 glass-strong rounded-2xl px-4 py-3 card-shadow"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
              >
                <p className="text-xs font-semibold text-foreground">UX Research</p>
                <div className="mt-1.5">
                  <div className="h-1.5 w-16 rounded-full bg-slate-200/80 overflow-hidden">
                    <div className="h-full w-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="w-5 h-8 rounded-full border-2 border-border flex items-start justify-center pt-1.5">
          <div className="w-1 h-2 rounded-full bg-muted-foreground" />
        </div>
      </motion.div>
    </section>
  );
}

const skills = [
  "UX Research", "User Testing", "Wireframing", "Information Architecture",
  "Design Systems", "Interaction Design", "Prototyping", "Visual Design",
  "Figma", "AI-Assisted Design", "Service Design", "Accessibility (WCAG)",
];

const timeline = [
  { year: "2025–Now", role: "UX Designer", company: "UX Gym · Full time · Remote", highlight: true },
  { year: "2024–25", role: "UX/UI Designer", company: "Protectol Health · Full time · UAE" },
  { year: "2024", role: "UI/Web Designer", company: "Brand Cast Solutions · Full time · UAE" },
  { year: "2022–23", role: "Web Designer", company: "Extreme Media · Full time · India" },
  { year: "2021–22", role: "Junior Web Designer", company: "Nyeste Venture Technologies · Full time · India" },
];

const pillars = [
  { icon: Users, label: "User-Centered", desc: "Research first, always", color: "text-blue-600 bg-blue-50" },
  { icon: Lightbulb, label: "Systems Thinker", desc: "Seeing the bigger picture", color: "text-violet-600 bg-violet-50" },
  { icon: Heart, label: "Empathy-Driven", desc: "Designing for real humans", color: "text-pink-600 bg-pink-50" },
  { icon: Zap, label: "Impact-Focused", desc: "Outcomes over outputs", color: "text-amber-600 bg-amber-50" },
];

function LightAbout() {
  return (
    <section id="about" className="relative py-28 bg-white overflow-hidden">
      <div aria-hidden="true" className="absolute -top-40 right-0 orb w-[500px] h-[500px] bg-blue-50/80 pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 -left-32 orb w-[400px] h-[400px] bg-violet-50/60 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }} className="mb-20"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase mb-3 font-medium">01 — About</p>
          <h2 className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", letterSpacing: "-0.03em" }}>
            Designing with <span className="gradient-text">empathy</span><br />
            and <span className="gradient-text">precision</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-5"
            >
              I'm a UX/UI Designer with 4+ years of experience crafting digital products that balance business objectives with genuine human needs. My approach blends rigorous research methodology with creative problem-solving.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed mb-10"
            >
              I believe great design is invisible, it removes friction, builds trust, and creates moments of delight. Every pixel serves a purpose.
            </motion.p>

            <div className="flex flex-wrap gap-2">
              {skills.map((s, i) => (
                <motion.span
                  key={s}
                  initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.04 }}
                  className="px-3.5 py-1.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground border border-border hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 transition-all duration-200 cursor-default"
                >
                  {s}
                </motion.span>
              ))}
            </div>

            <div className="grid grid-cols-2 gap-3 mt-10">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.07 }}
                  className="p-4 rounded-2xl bg-secondary/60 border border-border hover:border-blue-100 transition-all duration-200 group"
                >
                  <div className={`w-9 h-9 rounded-xl ${p.color} flex items-center justify-center mb-3`}>
                    <p.icon className="w-4 h-4" />
                  </div>
                  <p className="font-semibold text-sm text-foreground">{p.label}</p>
                  <p className="text-xs text-muted-foreground mt-0.5">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.25, duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden mb-8 h-52 bg-gradient-to-br from-blue-50 to-violet-50"
            >
              <img src={SHAPES_IMG} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-80 animate-float" />
              <div className="absolute inset-0 bg-gradient-to-t from-white/60 via-transparent to-transparent" />
            </motion.div>

            <div className="space-y-1">
              {timeline.map((item, i) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                  transition={{ delay: 0.35 + i * 0.08 }}
                  className={`flex gap-5 items-center p-4 rounded-2xl transition-all duration-200 group ${
                    item.highlight ? "bg-gradient-to-r from-blue-50 to-violet-50 border border-blue-100" : "hover:bg-secondary/60"
                  }`}
                >
                  <span className={`text-xs font-mono shrink-0 w-20 ${item.highlight ? "text-blue-600 font-semibold" : "text-muted-foreground"}`}>
                    {item.year}
                  </span>
                  <div className="flex-1">
                    <p className={`font-semibold text-sm ${item.highlight ? "text-foreground" : "text-foreground/80"}`}>{item.role}</p>
                    <p className="text-xs text-muted-foreground">{item.company}</p>
                  </div>
                  {item.highlight && <span className="text-xs badge-gradient rounded-full px-2.5 py-1 font-medium">Current</span>}
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type LightProject = {
  id: number; title: string; category: string; tags: string[]; role: string; duration: string;
  tools: string[]; summary: string; image: string; accentText: string; tagColor: string;
  size: "large" | "small" | "wide"; pill?: string; outcome?: string; link: string;
};

const lightProjects: LightProject[] = [
  {
    id: 1,
    title: "Botim money transfer, trust-first redesign",
    category: "FinTech · UX Research",
    tags: ["User Journey Mapping", "Trust Building", "Financial UX"],
    role: "UX Designer",
    duration: "1 month",
    tools: ["Figma", "Claude AI"],
    summary: "Rebuilt the cross-border transfer flow around moments of trust, clarity on every action and recipient confidence at every step.",
    image: BOTIM_IMG,
    accentText: "text-blue-600",
    tagColor: "bg-blue-50 text-blue-700",
    size: "large",
    link: "https://www.figma.com/proto/s6zrdUneQZsei59oxgvT35/Botim---International-money-transfer-to-botim-contact?node-id=1-178&page-id=0%3A1&t=EgAbzf8ZNPrxvihh-1",
  },
  {
    id: 2,
    title: "FinTech Finance Management App",
    category: "Mobile · Fintech",
    tags: [],
    role: "Product Designer",
    duration: "2 months",
    tools: ["Figma", "ChatGPT", "Illustrator"],
    summary: "Designed a personal finance management app that makes budgeting, tracking, and goal-setting intuitive and empowering for everyday users.",
    image: FINTECH_IMG,
    accentText: "text-emerald-600",
    tagColor: "bg-emerald-50 text-emerald-700",
    size: "small",
    link: "https://www.behance.net/gallery/212888909/FinTech-Finance-Management-Application",
  },
  {
    id: 3,
    title: "FitTrack Adaptive Health App",
    category: "Health",
    tags: [],
    role: "Product Designer",
    duration: "2 months",
    tools: ["Figma", "ChatGPT", "Illustrator"],
    summary: "An adaptive coaching experience that turns daily metrics into a calm, motivating ritual.",
    image: FITNESS_IMG,
    accentText: "text-amber-600",
    tagColor: "bg-amber-50 text-amber-700",
    size: "small",
    link: "https://www.behance.net/gallery/211717057/FitTrack-UI-Case-Study-of-a-Fitness-Application",
  },
  {
    id: 4,
    title: "AI Vibe Coding Project, E-Commerce Designer Boutique Web App",
    category: "E-Commerce",
    tags: [],
    role: "UI/UX Designer",
    duration: "24 Hours",
    tools: ["Figma", "Claude AI", "Orchid AI"],
    summary: "Re-architected discovery and checkout for a premium goods retailer, removing friction in the path to purchase.",
    image: ECOMMERCE_IMG,
    accentText: "text-violet-600",
    tagColor: "bg-violet-50 text-violet-700",
    pill: "bg-violet-600",
    size: "wide",
    link: "https://voidfuturefashion.store/",
  },
];

function ProjectModal({ project, onClose }: { project: LightProject; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      <div className="absolute inset-0 bg-black/30 backdrop-blur-sm" />
      <motion.div
        initial={{ scale: 0.95, y: 20, opacity: 0 }}
        animate={{ scale: 1, y: 0, opacity: 1 }}
        exit={{ scale: 0.95, y: 20, opacity: 0 }}
        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden card-shadow-hover max-h-[90vh] overflow-y-auto"
      >
        <button onClick={onClose} className="absolute top-4 right-4 z-10 p-2 rounded-xl bg-white/90 hover:bg-white shadow-sm transition-colors" aria-label="Close">
          <X className="w-4 h-4 text-foreground" />
        </button>
        <div className="h-56 overflow-hidden bg-slate-100">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
        </div>
        <div className="p-8">
          <p className={`text-xs font-mono tracking-wider uppercase mb-2 ${project.accentText}`}>{project.category}</p>
          <h3 className="font-display font-bold text-2xl text-foreground mb-4 tracking-tight">{project.title}</h3>
          <p className="text-muted-foreground leading-relaxed mb-6">{project.summary}</p>
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tags.map((tag) => (
                <span key={tag} className={`text-xs font-medium px-3 py-1 rounded-full ${project.tagColor}`}>{tag}</span>
              ))}
            </div>
          )}
          <div className="flex items-center justify-between text-xs text-muted-foreground flex-wrap gap-2">
            <span>{project.role} · {project.duration}</span>
            <div className="flex gap-2 flex-wrap">
              {project.tools.map((t) => (
                <span key={t} className="px-2.5 py-1 rounded-lg bg-slate-100 border border-border font-medium">{t}</span>
              ))}
            </div>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-foreground text-background font-semibold text-sm hover:opacity-90 transition"
          >
            View full case study <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </motion.div>
    </motion.div>
  );
}

function BentoCard({ project, index, className }: { project: LightProject; index: number; className: string }) {
  const [hovered, setHovered] = useState(false);
  const [selected, setSelected] = useState(false);

  return (
    <>
      <motion.article
        initial={{ opacity: 0, y: 28 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 0.55, delay: index * 0.1 }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => setSelected(true)}
        className={`group relative bg-[#FAFAF9] border border-[#EBEBEA] rounded-3xl overflow-hidden cursor-pointer transition-all duration-300 ${
          hovered ? "card-shadow-hover -translate-y-0.5" : "card-shadow"
        } ${className}`}
      >
        <div className={`relative overflow-hidden bg-slate-100 ${project.size === "large" ? "h-64 md:h-72" : project.size === "wide" ? "h-52 md:h-56" : "h-48"}`}>
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
          <motion.a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            animate={{ opacity: hovered ? 1 : 0, scale: hovered ? 1 : 0.8 }}
            transition={{ duration: 0.2 }}
            className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white shadow-md flex items-center justify-center"
            aria-label={`Open ${project.title} externally`}
          >
            <ArrowUpRight className="w-4 h-4 text-foreground" />
          </motion.a>
          {project.outcome && (
            <div className={`absolute bottom-4 left-4 px-3 py-1.5 rounded-full text-xs font-semibold text-white shadow-sm ${project.pill}`}>
              {project.outcome}
            </div>
          )}
        </div>
        <div className="p-6">
          <p className={`text-[11px] font-mono tracking-[0.15em] uppercase mb-1.5 ${project.accentText}`}>{project.category}</p>
          <h3 className="font-display font-bold text-[17px] text-foreground tracking-tight mb-2 group-hover:opacity-70 transition-opacity leading-snug">
            {project.title}
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-2">{project.summary}</p>
          {project.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5 mb-4">
              {project.tags.map((tag) => (
                <span key={tag} className={`text-[11px] font-medium px-2.5 py-1 rounded-full ${project.tagColor}`}>{tag}</span>
              ))}
            </div>
          )}
          <div className="flex items-start justify-between pt-4 border-t border-[#EBEBEA] gap-2">
            <span className="text-xs text-muted-foreground whitespace-nowrap pt-0.5">{project.role} · {project.duration}</span>
            <div className="flex gap-1.5 flex-wrap justify-end">
              {project.tools.map((t) => (
                <span key={t} className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-[#EBEBEA] text-muted-foreground">{t}</span>
              ))}
            </div>
          </div>
        </div>
      </motion.article>
      <AnimatePresence>
        {selected && <ProjectModal project={project} onClose={() => setSelected(false)} />}
      </AnimatePresence>
    </>
  );
}

function LightWork() {
  return (
    <section id="work" className="relative py-28 bg-gradient-to-b from-white via-slate-50/40 to-white">
      <div aria-hidden="true" className="absolute top-0 right-0 orb w-[500px] h-[400px] bg-blue-50/60 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase mb-3 font-medium">02 — Featured Work</p>
          <div className="flex items-end justify-between gap-4 flex-wrap">
            <h2 className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", letterSpacing: "-0.03em" }}>
              Selected<br /><span className="gradient-text">case studies</span>
            </h2>
            <p className="text-muted-foreground max-w-sm text-sm leading-relaxed">
              Click any project to explore the full case study, process, and outcomes.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          <div className="md:col-span-2"><BentoCard project={lightProjects[0]} index={0} className="h-full" /></div>
          <div className="md:col-span-1"><BentoCard project={lightProjects[1]} index={1} className="h-full" /></div>
          <div className="md:col-span-1"><BentoCard project={lightProjects[2]} index={2} className="h-full" /></div>
          <div className="md:col-span-2"><BentoCard project={lightProjects[3]} index={3} className="h-full" /></div>
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  { num: "01", icon: Search, label: "Discover", desc: "Understanding the problem space, stakeholders, and business goals before touching any design tool.", deliverables: ["Stakeholder Interviews", "Competitive Audit", "Market Analysis"], color: "bg-blue-50 text-blue-600 border-blue-100", hover: "hover:border-blue-200" },
  { num: "02", icon: FlaskConical, label: "Research", desc: "Deep qualitative and quantitative research to understand real user needs, behaviors, and pain points.", deliverables: ["User Interviews", "Contextual Inquiry", "Surveys & Analytics"], color: "bg-violet-50 text-violet-600 border-violet-100", hover: "hover:border-violet-200" },
  { num: "03", icon: Target, label: "Define", desc: "Synthesizing research into actionable insights, clear personas, and well-framed problem statements.", deliverables: ["Personas", "Journey Maps", "HMW Statements"], color: "bg-purple-50 text-purple-600 border-purple-100", hover: "hover:border-purple-200" },
  { num: "04", icon: Lightbulb, label: "Ideate", desc: "Collaborative ideation sessions generating a wide range of potential solutions before converging.", deliverables: ["Design Sprints", "Crazy 8s", "Affinity Mapping"], color: "bg-amber-50 text-amber-600 border-amber-100", hover: "hover:border-amber-200" },
  { num: "05", icon: Layers, label: "Prototype", desc: "Building tangible, testable representations — from low-fidelity sketches to high-fidelity interactive prototypes.", deliverables: ["Wireframes", "Hi-Fi Mockups", "Interactive Prototypes"], color: "bg-cyan-50 text-cyan-600 border-cyan-100", hover: "hover:border-cyan-200" },
  { num: "06", icon: TestTube, label: "Test", desc: "Rigorous usability testing with real users to validate assumptions and uncover critical insights.", deliverables: ["Moderated Testing", "A/B Tests", "Heuristic Evaluation"], color: "bg-teal-50 text-teal-600 border-teal-100", hover: "hover:border-teal-200" },
  { num: "07", icon: RefreshCw, label: "Iterate", desc: "Refining designs based on test findings — continuous improvement until the solution truly works.", deliverables: ["Data Analysis", "Design Refinement", "Feedback Loops"], color: "bg-indigo-50 text-indigo-600 border-indigo-100", hover: "hover:border-indigo-200" },
  { num: "08", icon: Rocket, label: "Deliver", desc: "Meticulous developer handoff with comprehensive documentation, design specs, and QA support.", deliverables: ["Dev Handoff", "Design QA", "Component Docs"], color: "bg-emerald-50 text-emerald-600 border-emerald-100", hover: "hover:border-emerald-200" },
];

function LightProcess() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  return (
    <section id="process" className="relative py-28 bg-white overflow-hidden">
      <div aria-hidden="true" className="absolute bottom-0 left-0 orb w-[500px] h-[400px] bg-violet-50/60 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase mb-3 font-medium">03 — Process</p>
          <h2 className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", letterSpacing: "-0.03em" }}>
            Design is a<br /><span className="gradient-text">rigorous science</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-lg text-base leading-relaxed">
            Every great product starts with understanding people. My process is iterative, collaborative, and always grounded in evidence.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {processSteps.map((step, i) => {
            const isActive = activeStep === i;
            return (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: 0.1 + i * 0.07 }}
                onMouseEnter={() => setActiveStep(i)}
                onMouseLeave={() => setActiveStep(null)}
                className={`relative p-5 rounded-2xl border bg-white card-shadow cursor-default transition-all duration-300 ${step.hover} ${isActive ? "card-shadow-hover -translate-y-0.5" : ""}`}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`w-11 h-11 rounded-2xl ${step.color} border flex items-center justify-center`}>
                    <step.icon className="w-5 h-5" />
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground/60">{step.num}</span>
                </div>

                <h3 className="font-display font-bold text-base text-foreground mb-2">{step.label}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed mb-4">{step.desc}</p>

                <div className="space-y-1">
                  {step.deliverables.map((d) => (
                    <div key={d} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-muted-foreground/40 shrink-0" />
                      <span className="text-[11px] font-mono text-muted-foreground">{d}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

const lightTestimonials = [
  { name: "Mohammed", position: "VP of Product", company: "Brand Cast Solutions, UAE", text: "Reshma turned a tangled transfer flow into something our team is genuinely proud of. Her research instinct is rare.", initials: "MO", accent: "from-blue-500 to-cyan-500", bg: "from-blue-50 to-cyan-50", border: "border-blue-100" },
  { name: "Vipin Kumar", position: "CEO", company: "Extremedia, IND", text: "Reshma's design transformed our user experience and directly drove a 28% jump in conversion rates.", initials: "VK", accent: "from-violet-500 to-purple-500", bg: "from-violet-50 to-purple-50", border: "border-violet-100" },
  { name: "Shaiju Hamza", position: "CEO", company: "Stralog Alliance, UAE", text: "Reshma delivers flawless visuals. She designed our stunning website and graphics while perfectly addressing our business and user pain points.", initials: "SH", accent: "from-emerald-500 to-teal-500", bg: "from-emerald-50 to-teal-50", border: "border-emerald-100" },
];

function LightTestimonials() {
  return (
    <section id="testimonials" className="relative py-28 bg-gradient-to-b from-slate-50/60 to-white overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 right-0 orb w-[400px] h-[400px] bg-blue-50/60 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase mb-3 font-medium">04 — Testimonials</p>
          <h2 className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", letterSpacing: "-0.03em" }}>
            What clients<br /><span className="gradient-text">are saying</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-5">
          {lightTestimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 28 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.15 + i * 0.12 }}
              className={`relative p-7 rounded-3xl bg-gradient-to-br ${t.bg} border ${t.border} card-shadow group hover:card-shadow-hover transition-all duration-300`}
            >
              <div className={`text-5xl font-serif leading-none bg-gradient-to-br ${t.accent} bg-clip-text text-transparent mb-5 select-none`} aria-hidden="true">
                "
              </div>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-7">{t.text}</p>
              <div className="flex items-center gap-3 pt-5 border-t border-white/60">
                <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.accent} flex items-center justify-center shadow-md flex-shrink-0`}>
                  <span className="text-white text-sm font-bold">{t.initials}</span>
                </div>
                <div>
                  <p className="font-semibold text-sm text-foreground">{t.name}</p>
                  <p className="text-[11px] text-muted-foreground font-mono">{t.position} · {t.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

const lightTools = [
  { name: "Figma", icon: Figma, category: "Design", level: 95, color: "bg-pink-50 text-pink-600" },
  { name: "FigJam", icon: MessageSquare, category: "Collaboration", level: 90, color: "bg-amber-50 text-amber-600" },
  { name: "Adobe XD", icon: Pen, category: "Design", level: 85, color: "bg-rose-50 text-rose-600" },
  { name: "Photoshop", icon: Palette, category: "Visual", level: 88, color: "bg-blue-50 text-blue-600" },
  { name: "Illustrator", icon: Layers, category: "Visual", level: 82, color: "bg-orange-50 text-orange-600" },
  { name: "Miro", icon: Layout, category: "Collaboration", level: 93, color: "bg-yellow-50 text-yellow-600" },
  { name: "ChatGPT", icon: Bot, category: "AI", level: 92, color: "bg-emerald-50 text-emerald-600" },
  { name: "Midjourney", icon: Sparkles, category: "AI", level: 87, color: "bg-indigo-50 text-indigo-600" },
  { name: "Claude AI", icon: Wand2, category: "AI", level: 85, color: "bg-violet-50 text-violet-600" },
  { name: "Framer", icon: Frame, category: "Prototyping", level: 85, color: "bg-cyan-50 text-cyan-600" },
];

function LightTools() {
  return (
    <section className="relative py-28 bg-white overflow-hidden">
      <div aria-hidden="true" className="absolute bottom-0 right-0 orb w-[450px] h-[350px] bg-violet-50/60 pointer-events-none" />
      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase mb-3 font-medium">05 — Tools & Expertise</p>
          <h2 className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", letterSpacing: "-0.03em" }}>
            My design<br /><span className="gradient-text">tech stack</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {lightTools.map((tool, i) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: 0.1 + i * 0.05 }}
              className="p-5 rounded-2xl bg-white border border-border card-shadow group hover:card-shadow-hover hover:border-blue-100 transition-all duration-300 text-center cursor-default"
            >
              <div className={`w-12 h-12 rounded-2xl ${tool.color} flex items-center justify-center mx-auto mb-3 group-hover:scale-105 transition-transform`}>
                <tool.icon className="w-5 h-5" />
              </div>
              <p className="text-sm font-semibold text-foreground">{tool.name}</p>
              <p className="text-[10px] font-mono text-muted-foreground mt-0.5 mb-3">{tool.category}</p>
              <div className="h-1 rounded-full bg-secondary overflow-hidden">
                <motion.div
                  initial={{ width: 0 }} whileInView={{ width: `${tool.level}%` }} viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.3 + i * 0.05, ease: "easeOut" }}
                  className="h-full rounded-full bg-gradient-to-r from-blue-400 to-violet-400"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function encodeFormData(data: Record<string, string>) {
  return Object.keys(data)
    .map((key) => `${encodeURIComponent(key)}=${encodeURIComponent(data[key])}`)
    .join("&");
}

function LightContact() {
  const [formData, setFormData] = useState({ name: "", email: "", projectType: "", message: "" });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encodeFormData({ "form-name": "contact-light", ...formData }),
      });
      setSent(true);
      toast.success("Message sent! I'll reply within 24 hours.", { duration: 5000 });
      setFormData({ name: "", email: "", projectType: "", message: "" });
    } catch {
      toast.error("Something went wrong sending your message. Please email me directly instead.");
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="relative py-28 bg-gradient-to-b from-slate-50/50 to-white overflow-hidden">
      <div aria-hidden="true" className="absolute top-0 left-0 orb w-[500px] h-[400px] bg-blue-50/60 pointer-events-none" />
      <div aria-hidden="true" className="absolute bottom-0 right-0 orb w-[450px] h-[350px] bg-violet-50/50 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }} className="mb-16"
        >
          <p className="text-xs font-mono tracking-[0.3em] text-blue-500 uppercase mb-3 font-medium">06 — Contact</p>
          <h2 className="font-display font-bold text-foreground tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", letterSpacing: "-0.03em" }}>
            Let's create<br /><span className="gradient-text">something great</span>
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-lg leading-relaxed">
            Let's create meaningful digital experiences together. I'm always open to discussing new projects, opportunities, and creative challenges.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="p-8 rounded-3xl bg-white card-shadow border border-border"
          >
            {sent ? (
              <div className="py-16 text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-emerald-200">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <h3 className="font-display font-bold text-xl text-foreground mb-2">Message sent!</h3>
                <p className="text-muted-foreground text-sm">I'll get back to you within 24 hours.</p>
                <button onClick={() => setSent(false)} className="mt-6 text-sm text-blue-600 hover:underline">Send another</button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} name="contact-light" data-netlify="true" className="space-y-5">
                <input type="hidden" name="form-name" value="contact-light" />
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Name</label>
                    <Input
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your full name"
                      required
                      className="h-11 rounded-xl border-border focus-visible:border-blue-300 focus-visible:ring-blue-100 bg-secondary/40"
                    />
                  </div>
                  <div>
                    <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Email</label>
                    <Input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                      required
                      className="h-11 rounded-xl border-border focus-visible:border-blue-300 focus-visible:ring-blue-100 bg-secondary/40"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Project Type</label>
                  <Select value={formData.projectType} onValueChange={(v) => setFormData({ ...formData, projectType: v })}>
                    <SelectTrigger className="h-11 rounded-xl border-border bg-secondary/40">
                      <SelectValue placeholder="Select project type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ux-design">UX Design</SelectItem>
                      <SelectItem value="ui-design">UI Design</SelectItem>
                      <SelectItem value="design-system">Design System</SelectItem>
                      <SelectItem value="research">UX Research</SelectItem>
                      <SelectItem value="consultation">Consultation</SelectItem>
                      <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label className="text-xs font-semibold text-foreground/70 uppercase tracking-wider mb-2 block">Message</label>
                  <Textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project, goals, and timeline..."
                    required
                    rows={5}
                    className="rounded-xl border-border focus-visible:border-blue-300 focus-visible:ring-blue-100 bg-secondary/40 resize-none"
                  />
                </div>
                <motion.button
                  type="submit"
                  disabled={sending}
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  className="w-full h-12 rounded-xl bg-foreground text-background font-semibold text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all duration-200 disabled:opacity-60"
                >
                  {sending ? (
                    <span className="flex items-center gap-2"><div className="w-4 h-4 border-2 border-background/30 border-t-background rounded-full animate-spin" /> Sending...</span>
                  ) : (
                    <span className="flex items-center gap-2">Send Message <ArrowRight className="w-4 h-4" /></span>
                  )}
                </motion.button>
              </form>
            )}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="space-y-4"
          >
            <div className="rounded-3xl overflow-hidden h-48 bg-gradient-to-br from-blue-50 via-violet-50 to-cyan-50">
              <img src={CONTACT_VISUAL} alt="" aria-hidden="true" className="w-full h-full object-cover opacity-80 animate-float" />
            </div>

            {[
              { icon: Mail, label: "Email", value: "breshmasuresh@gmail.com", href: "mailto:breshmasuresh@gmail.com" },
              { icon: MapPin, label: "Location", value: "Dubai, UAE · Remote Worldwide", href: null as string | null },
            ].map((item) => {
              const inner = (
                <div className="p-5 rounded-2xl bg-white card-shadow border border-border flex items-center gap-4 group hover:card-shadow-hover transition-all duration-300">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-50 to-violet-50 border border-blue-100 flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-4 h-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider">{item.label}</p>
                    <p className="font-semibold text-sm text-foreground mt-0.5">{item.value}</p>
                  </div>
                </div>
              );
              return item.href ? <a key={item.label} href={item.href}>{inner}</a> : <div key={item.label}>{inner}</div>;
            })}

            <div className="p-5 rounded-2xl bg-white card-shadow border border-border">
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider mb-3">Find me on</p>
              <div className="flex gap-3">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/reshma-suresh12/", color: "hover:bg-blue-50 hover:text-blue-600 hover:border-blue-200" },
                  { icon: BehanceIcon, label: "Behance", href: "https://www.behance.net/reshmasuresh4", color: "hover:bg-pink-50 hover:text-pink-600 hover:border-pink-200" },
                ].map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className={`w-11 h-11 rounded-xl border border-border flex items-center justify-center text-muted-foreground transition-all duration-200 ${s.color}`}
                  >
                    <s.icon className="w-4 h-4" />
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LightFooter() {
  return (
    <footer className="relative border-t border-border bg-white py-10">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-500 to-violet-600 flex items-center justify-center">
              <span className="text-white font-bold text-xs">R</span>
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground text-sm">Reshma Suresh</p>
              <p className="text-[11px] font-mono text-muted-foreground">UX/UI Designer</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[11px] text-muted-foreground font-mono pl-2">© 2026 Reshma Suresh. All rights reserved.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export function LightPortfolio() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-white">
      <Toaster />
      <LightNavbar />
      <LightHero />
      <LightAbout />
      <LightWork />
      <LightProcess />
      <LightTestimonials />
      <LightTools />
      <LightContact />
      <LightFooter />
    </main>
  );
}
