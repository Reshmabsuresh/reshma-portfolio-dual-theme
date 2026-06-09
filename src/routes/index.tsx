import { createFileRoute } from "@tanstack/react-router";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import {
  ArrowRight, ArrowDown, Mail, MapPin, Linkedin, Dribbble,
  Sparkles, Compass, Search, Lightbulb, PenTool, Layers, FlaskConical, Repeat, Rocket,
  Figma, Palette, Bot, Wand2, Brush, Layout, Image as ImageIcon, Eye, Workflow, Box,
} from "lucide-react";
import { GridBackdrop, Particles } from "@/components/portfolio/Noise";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

import heroBg from "@/assets/hero-bg.jpg";
import portraitAsset from "@/assets/portrait.png.asset.json";
const portrait = portraitAsset.url;
import pBotimAsset from "@/assets/project-botim-new.png.asset.json";
import pFintechAsset from "@/assets/project-fitness.jpg";
import pFitness from "@/assets/project-fitness.jpg";
import pEcom from "@/assets/project-ecom.jpg";
import pFintechAssetNew from "@/assets/project-fintech.jpg.asset.json";
const pBotim = pBotimAsset.url;
const pFintech = pFintechAssetNew.url;
void pFintechAsset;

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Reshma Suresh , UX/UI Designer" },
      { name: "description", content: "Portfolio of Reshma Suresh , a UX/UI designer crafting intuitive digital experiences that connect business goals with human needs." },
      { property: "og:title", content: "Reshma Suresh , UX/UI Designer" },
      { property: "og:description", content: "Award-quality UX work across fintech, HR, health, and e-commerce." },
      { property: "og:type", content: "website" },
    ],
  }),
  component: Portfolio,
});

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

function Nav() {
  const items = [
    { label: "Work", href: "#work" },
    { label: "About", href: "#about" },
    { label: "Process", href: "#process" },
    { label: "Tools", href: "#tools" },
    { label: "Contact", href: "#contact" },
  ];
  return (
    <header className="fixed top-4 inset-x-0 z-50 flex justify-center px-4">
      <nav className="glass-strong flex items-center gap-1 rounded-full px-2 py-2 grad-border">
        <a href="#top" className="px-4 py-1.5 text-sm font-medium tracking-tight flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-violet shadow-[0_0_12px_var(--violet)]" />
          Reshma
        </a>
        <div className="hidden md:flex items-center">
          {items.map((i) => (
            <a key={i.href} href={i.href} className="px-4 py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors">
              {i.label}
            </a>
          ))}
        </div>
        <a href="#contact" className="ml-1 inline-flex items-center gap-1.5 rounded-full bg-foreground px-4 py-1.5 text-sm font-medium text-background hover:opacity-90 transition">
          Let's talk <ArrowRight className="h-3.5 w-3.5" />
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.3]);

  return (
    <section id="top" ref={ref} className="relative min-h-[100svh] overflow-hidden pt-32 pb-24">
      <motion.div style={{ y, opacity }} className="absolute inset-0 -z-10">
        <img src={heroBg} alt="" width={1920} height={1280} className="h-full w-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/60 to-background" />
      </motion.div>
      <Particles />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <motion.div {...fadeUp} className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-xs text-muted-foreground">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Available to new opportunities
        </motion.div>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          <div className="lg:col-span-8">
            <motion.h1
              {...fadeUp}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="font-display text-[clamp(3rem,9vw,8.5rem)] leading-[0.95] tracking-[-0.03em]"
            >
              Designing the<br />
              <span className="text-gradient italic">quiet intelligence</span><br />
              behind great products.
            </motion.h1>
            <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="mt-8 max-w-xl text-lg text-muted-foreground leading-relaxed">
              I'm <span className="text-foreground">Reshma Suresh</span>, a UX/UI designer crafting intuitive digital experiences that connect business goals with human needs across different platforms.
            </motion.p>
            <motion.div {...fadeUp} transition={{ duration: 0.7, delay: 0.25 }} className="mt-10 flex flex-wrap items-center gap-3">
              <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition glow">
                View my work <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="glass inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium hover:bg-white/10 transition">
                Contact me
              </a>
            </motion.div>
          </div>

          <motion.div {...fadeUp} transition={{ duration: 0.9, delay: 0.2 }} className="lg:col-span-4 relative">
            <div className="relative grad-border rounded-3xl overflow-hidden animate-float">
              <img src={portrait} alt="Portrait of Reshma Suresh" width={896} height={1152} className="w-full h-auto object-cover aspect-[3/4]" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 glass rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Based in</div>
                  <div className="text-sm font-medium">Dubai · UAE</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Experience</div>
                  <div className="text-sm font-medium">3.5 years</div>
                </div>
              </div>
            </div>
            <div className="absolute -top-4 -left-4 glass rounded-2xl p-3 animate-float-slow">
              <Sparkles className="h-5 w-5 text-violet" />
            </div>
          </motion.div>
        </div>

        <motion.div {...fadeUp} transition={{ duration: 0.8, delay: 0.4 }} className="mt-24 flex flex-wrap items-center justify-between gap-8 text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <div className="flex items-center gap-2">
            <ArrowDown className="h-3 w-3 animate-bounce" /> Scroll to explore
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionHeading({ kicker, title, sub }: { kicker: string; title: React.ReactNode; sub?: string }) {
  return (
    <div className="max-w-3xl">
      <motion.div {...fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
        <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" /> {kicker}
      </motion.div>
      <motion.h2 {...fadeUp} transition={{ duration: 0.7, delay: 0.1 }} className="mt-4 font-display text-5xl md:text-6xl lg:text-7xl tracking-[-0.02em] leading-[1]">
        {title}
      </motion.h2>
      {sub && (
        <motion.p {...fadeUp} transition={{ duration: 0.7, delay: 0.15 }} className="mt-6 text-lg text-muted-foreground max-w-2xl">
          {sub}
        </motion.p>
      )}
    </div>
  );
}

function About() {
  const skills = [
    "UX Research", "User Testing", "Wireframing", "Information Architecture",
    "Design Systems", "Interaction Design", "Prototyping", "Visual Design",
    "Figma", "AI-Assisted Design",
  ];
  return (
    <section id="about" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="About"
          title={<>A designer who believes <em className="text-gradient not-italic">clarity is a feature</em>.</>}
          sub=""
        />

        <div className="mt-20 grid grid-cols-1 lg:grid-cols-12 gap-6">
          <motion.div {...fadeUp} className="lg:col-span-7 space-y-6">
            <div className="glass-strong rounded-3xl p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Design philosophy</div>
              <p className="mt-4 font-display text-3xl md:text-4xl leading-[1.15] tracking-[-0.01em]">
                "Design is not just what it looks like and feels like. <span className="text-gradient">Design is how it works</span>."
              </p>
            </div>
            <div className="glass-strong rounded-3xl p-8 lg:p-10">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Who I am</div>
              <p className="mt-4 text-base md:text-lg leading-relaxed text-foreground/80">
                "With 3.5 years of experience in UI/UX design, I began my career as a web designer with a strong foundation in HTML, CSS, and JavaScript. I transitioned into UX because I believe great design isn't just about how a product looks, but about how it genuinely serves the user and solves real problems. In my work, my top priorities are the users, stakeholders, and market needs, ensuring each solution is both meaningful and viable. Driven by strong visualization skills and a deep curiosity for the 'why' behind design decisions, I am dedicated to delivering high-quality, impactful products on time."
              </p>
            </div>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.1 }} className="lg:col-span-5 space-y-6">
            <div className="glass-strong rounded-3xl p-8">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">Capabilities</div>
              <div className="mt-5 flex flex-wrap gap-2">
                {skills.map((s) => (
                  <span key={s} className="grad-border rounded-full px-3.5 py-1.5 text-sm text-foreground/90">
                    {s}
                  </span>
                ))}
              </div>
            </div>
            <div className="glass-strong rounded-3xl p-8">
              <div className="text-xs uppercase tracking-[0.25em] text-muted-foreground">My Experiences</div>
              <ul className="mt-5 space-y-5">
                {[
                  { when: "2025 , Present (remote)", role: "UX Designer & Active Learner", company: "UX Gym by UX Anudeep" },
                  { when: "2024 , 2025 (on-site)", role: "UI/UX Designer", company: "Protectol Health, UAE" },
                  { when: "2024 , 2024 (on-site)", role: "UI / Web / Graphics Designer", company: "Brand Cast Solutions, UAE" },
                  { when: "2022 , 2023 (on-site)", role: "Web / Graphic Designer", company: "Extreme Media, IND" },
                  { when: "2021 , 2022 (on-site)", role: "Junior Web Designer", company: "Nyeste Venture, IND" },
                ].map((e) => (
                  <li key={e.company} className="flex items-start justify-between gap-4">
                    <div>
                      <div className="font-mono text-xs text-muted-foreground">{e.when}</div>
                      <div className="mt-1 text-sm">{e.role}</div>
                    </div>
                    <div className="text-sm text-right text-foreground/90 font-medium">{e.company}</div>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type Project = {
  title: string; category: string; role: string; duration: string;
  tools: string[]; summary: string; outcome?: string; image: string;
  span: string; tone: string;
};

const projects: Project[] = [
  {
    title: "BOTIM Money Transfer, Trust-first redesign",
    category: "Fintech · Mobile",
    role: "UX Designer",
    duration: "1 month",
    tools: ["Figma", "Claude AI", "Leonardo AI"],
    summary: "Rebuilt the cross-border transfer flow around moments of trust, clarity on every action and recipient confidence at every step.",
    image: pBotim,
    span: "lg:col-span-7 lg:row-span-2",
    tone: "from-violet/30 via-transparent to-cyan/20",
  },
  {
    title: "FinTech Finance Management App",
    category: "Fintech · Mobile",
    role: "Product Designer",
    duration: "3 months",
    tools: ["Figma", "ChatGPT", "Illustrator"],
    summary: "A clean, confidence-building finance companion that turns spending, transfers, and budgets into a single calm dashboard, helping users feel in control of every dirham.",
    image: pFintech,
    span: "lg:col-span-5",
    tone: "from-magenta/30 via-transparent to-violet/20",
  },
  {
    title: "Fitness Tracking App",
    category: "Health · Mobile",
    role: "Product Designer",
    duration: "4 months",
    tools: ["Figma", "ChatGPT", "Illustrator"],
    summary: "An adaptive coaching experience that turns daily metrics into a calm, motivating ritual.",
    image: pFitness,
    span: "lg:col-span-5",
    tone: "from-cyan/30 via-transparent to-violet/20",
  },
  {
    title: "AI Vibe Coding Project, E-commerce Designer Boutique Web App",
    category: "Commerce",
    role: "Senior Designer",
    duration: "5 months",
    tools: ["Orchid AI", "Claude AI"],
    summary: "Re-architected discovery and checkout for a premium goods retailer, removing friction in the path to purchase.",
    image: pEcom,
    span: "lg:col-span-7",
    tone: "from-magenta/30 via-transparent to-cyan/20",
  },
];

function Work() {
  return (
    <section id="work" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="flex items-end justify-between gap-10 flex-wrap">
          <SectionHeading
            kicker="Featured work"
            title={<>Selected <em className="text-gradient not-italic">project case studies</em>.</>}
          />
          <motion.a {...fadeUp} href="#contact" className="text-sm text-muted-foreground hover:text-foreground inline-flex items-center gap-1.5">
            Request full case studies <ArrowRight className="h-4 w-4" />
          </motion.a>
        </div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[minmax(280px,auto)]">
          {projects.map((p, i) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.8, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative glass-strong rounded-3xl overflow-hidden grad-border ${p.span}`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${p.tone} opacity-60 pointer-events-none`} />
              <div className="relative h-full flex flex-col">
                <div className="relative overflow-hidden p-6 pb-0">
                  <div className="aspect-[16/10] rounded-2xl overflow-hidden grad-border">
                    <img
                      src={p.image}
                      alt={p.title}
                      width={1280}
                      height={960}
                      loading="lazy"
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  </div>
                </div>
                <div className="p-6 lg:p-8 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                    <span>{p.category}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{p.role}</span>
                    <span className="h-1 w-1 rounded-full bg-muted-foreground/50" />
                    <span>{p.duration}</span>
                  </div>
                  <h3 className="mt-3 font-display text-2xl md:text-3xl tracking-[-0.01em] leading-tight">
                    {p.title}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground leading-relaxed max-w-prose">
                    {p.summary}
                  </p>
                  <div className="mt-auto pt-6 flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex flex-wrap gap-1.5">
                      {p.tools.map((t) => (
                        <span key={t} className="text-[11px] glass rounded-full px-2.5 py-1 text-muted-foreground">{t}</span>
                      ))}
                    </div>
                    {p.outcome && <div className="text-sm font-medium text-gradient">{p.outcome}</div>}
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

const processSteps = [
  { icon: Compass, name: "Discover", note: "Stakeholder interviews · audits" },
  { icon: Search, name: "Research", note: "Generative & evaluative studies" },
  { icon: Layers, name: "Define", note: "Problem framing · north star" },
  { icon: Lightbulb, name: "Ideate", note: "Workshops · solution exploration" },
  { icon: PenTool, name: "Prototype", note: "Low → high fidelity" },
  { icon: FlaskConical, name: "Test", note: "Usability · A/B · diary studies" },
  { icon: Repeat, name: "Iterate", note: "Refine against signals" },
  { icon: Rocket, name: "Deliver", note: "Specs · design system · QA" },
];

function Process() {
  return (
    <section id="process" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="How I work"
          title={<>A process tuned for <em className="text-gradient not-italic">signal over noise</em>.</>}
          sub="Eight repeatable moves I adapt to every engagement , from a 2-week sprint to a year-long platform rebuild."
        />

        <div className="mt-16 relative">
          <div aria-hidden className="absolute left-0 right-0 top-12 h-px bg-gradient-to-r from-transparent via-violet/50 to-transparent hidden md:block" />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {processSteps.map((s, i) => (
              <motion.div
                key={s.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.06 }}
                className="relative"
              >
                <div className="glass-strong grad-border rounded-2xl p-5 h-full">
                  <div className="flex items-center justify-between">
                    <div className="glass h-10 w-10 rounded-xl flex items-center justify-center text-violet">
                      <s.icon className="h-5 w-5" />
                    </div>
                    <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  </div>
                  <div className="mt-5 font-display text-2xl tracking-[-0.01em]">{s.name}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.note}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const testimonials = [
  {
    name: "Mohammed",
    title: "VP of Product · Brand Cast Solutions, UAE",
    quote: "Reshma turned a tangled transfer flow into something our team is genuinely proud of. Her research instinct is rare.",
    initials: "MO", tint: "from-violet/40 to-magenta/30",
  },
  {
    name: "Vipin Kumar",
    title: "CEO · Extrememedia, IND",
    quote: "Reshma's design transformed our user experience and directly drove a 28% jump in conversion rates.",
    initials: "VK", tint: "from-cyan/40 to-violet/30",
  },
  {
    name: "Shaiju Hamza",
    title: "CEO · Stralog Alliance, UAE",
    quote: "Reshma delivers flawless visuals. She designed our stunning website and graphics while perfectly addressing our business and user pain points.",
    initials: "SH", tint: "from-magenta/40 to-cyan/30",
  },
];

function Testimonials() {
  return (
    <section className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Kind words"
          title={<>Trusted by teams shipping <em className="text-gradient not-italic">at the edge</em>.</>}
        />
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.08 }}
              className="relative glass-strong grad-border rounded-3xl p-8 flex flex-col"
            >
              <div className={`absolute inset-0 rounded-3xl bg-gradient-to-br ${t.tint} opacity-30 pointer-events-none`} />
              <div className="relative">
                <div className="font-display text-5xl text-gradient leading-none">"</div>
                <blockquote className="mt-2 text-base leading-relaxed text-foreground/90">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8 flex items-center gap-3 pt-6 border-t border-border">
                  <div className="h-11 w-11 rounded-full grad-border flex items-center justify-center font-mono text-sm bg-background/40">
                    {t.initials}
                  </div>
                  <div>
                    <div className="text-sm font-medium">{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.title}</div>
                  </div>
                </figcaption>
              </div>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

const tools = [
  { name: "Figma", icon: Figma },
  { name: "FigJam", icon: Layout },
  { name: "Sketch", icon: PenTool },
  { name: "Photoshop", icon: ImageIcon },
  { name: "Illustrator", icon: Brush },
  { name: "Miro", icon: Workflow },
  { name: "ChatGPT", icon: Bot },
  { name: "Midjourney", icon: Wand2 },
  { name: "Galileo AI", icon: Sparkles },
  { name: "Framer", icon: Palette },
  { name: "Claude AI", icon: Sparkles },
  { name: "AI Designing", icon: Wand2 },
];

function Tools() {
  return (
    <section id="tools" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          kicker="Tools & stack"
          title={<>Crafted with a <em className="text-gradient not-italic">modern toolkit</em>.</>}
          sub="From classic design tools to AI-native workflows , chosen pragmatically, never for novelty's sake."
        />
        <div className="mt-16 grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 gap-4">
          {tools.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, scale: 0.92 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group glass-strong grad-border rounded-2xl p-5 aspect-square flex flex-col items-center justify-center gap-3 hover:bg-white/[0.06] transition"
            >
              <div className="h-12 w-12 rounded-xl glass flex items-center justify-center text-foreground/90 group-hover:text-violet transition">
                <t.icon className="h-6 w-6" />
              </div>
              <div className="text-xs font-medium text-center">{t.name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative py-32 px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="relative glass-strong grad-border rounded-[2rem] overflow-hidden">
          <div className="absolute inset-0 -z-0 opacity-60" style={{ background: "var(--grad-mesh)" }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 md:p-12 lg:p-16">
            <div className="lg:col-span-6">
              <motion.div {...fadeUp} className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                <span className="h-px w-8 bg-gradient-to-r from-violet to-transparent" /> Get in touch
              </motion.div>
              <motion.h2 {...fadeUp} transition={{ delay: 0.1 }} className="mt-4 font-display text-5xl md:text-6xl tracking-[-0.02em] leading-[1]">
                Let's create <em className="text-gradient not-italic">meaningful digital experiences</em> together.
              </motion.h2>
              <motion.p {...fadeUp} transition={{ delay: 0.15 }} className="mt-6 text-muted-foreground max-w-md">
                Open to Product / UI/UX / AUI Design roles, Full-time / Fractional engagements, and ambitious 0→1 collaborations.
              </motion.p>

              <div className="mt-10 space-y-4">
                {[
                  { icon: Mail, label: "breshmasuresh@gmail.com", href: "mailto:breshmasuresh@gmail.com" },
                  { icon: Mail, label: "hello@reshmasuresh.design", href: "mailto:breshmasuresh@gmail.com" },
                  { icon: MapPin, label: "Dubai, UAE", href: null as string | null },
                ].map((r) => (
                  <div key={r.label} className="flex items-center gap-3 text-sm">
                    <div className="glass h-10 w-10 rounded-xl flex items-center justify-center text-violet">
                      <r.icon className="h-4 w-4" />
                    </div>
                    {r.href ? (
                      <a href={r.href} className="hover:text-foreground transition">{r.label}</a>
                    ) : (
                      <span>{r.label}</span>
                    )}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-2">
                {[
                  { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/reshma-suresh12/" },
                  { icon: Box, label: "Behance", href: "https://www.behance.net/reshmasuresh4" },
                  { icon: Dribbble, label: "Dribbble", href: "https://dribbble.com/Reshmasuresh" },
                ].map((s) => (
                  <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer" className="glass grad-border rounded-full px-4 py-2 text-sm inline-flex items-center gap-2 hover:bg-white/10 transition">
                    <s.icon className="h-3.5 w-3.5" /> {s.label}
                  </a>
                ))}
              </div>
            </div>

            <motion.form
              {...fadeUp}
              transition={{ delay: 0.2 }}
              onSubmit={(e) => e.preventDefault()}
              className="lg:col-span-6 glass-strong rounded-3xl p-6 md:p-8 space-y-5"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Name</Label>
                  <Input id="name" placeholder="Your name" className="bg-white/5 border-white/10 h-11" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Email</Label>
                  <Input id="email" type="email" placeholder="you@company.com" className="bg-white/5 border-white/10 h-11" />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="type" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Project type</Label>
                <Input id="type" placeholder="e.g. Mobile app redesign" className="bg-white/5 border-white/10 h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="msg" className="text-xs uppercase tracking-[0.2em] text-muted-foreground">Message</Label>
                <Textarea id="msg" placeholder="Tell me about the problem you're solving…" className="bg-white/5 border-white/10 min-h-36" />
              </div>
              <Button type="submit" className="w-full h-12 rounded-full bg-foreground text-background hover:opacity-90 glow">
                Send message <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.form>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative px-6 lg:px-10 pb-10 pt-16">
      <div className="mx-auto max-w-7xl">
        <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 text-sm">
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-violet shadow-[0_0_12px_var(--violet)]" />
            <span className="font-medium">Reshma Suresh</span>
            <span className="text-muted-foreground">, UX/UI Designer</span>
          </div>
          <div className="text-xs text-muted-foreground">© 2026 Reshma Suresh. All rights reserved.</div>
        </div>
      </div>
    </footer>
  );
}

function Portfolio() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <GridBackdrop />
      <Nav />
      <Hero />
      <Work />
      <About />
      <Process />
      <Testimonials />
      <Tools />
      <Contact />
      <Footer />
    </main>
  );
}
