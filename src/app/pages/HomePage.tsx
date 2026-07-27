import { useEffect, useRef, useState } from "react";
import { Link } from "react-router";

import {
  ArrowRight,
  Lightbulb,
  Cpu,
  Layers,
  Scissors,
  Sparkles,
  Zap,
  Box,
  ChevronRight,
  Star,
  ShieldCheck,
  Clock,
  Award,
} from "lucide-react";

const MONO = "'JetBrains Mono', 'Space Mono', ui-monospace, monospace";
const HEAD = "Poppins, sans-serif";

const services = [
  {
    code: "LB-01",
    icon: Lightbulb,
    title: "Light Box Signs",
    desc: "Single-sided, double-sided & round light boxes for maximum brand visibility.",
    color: "#1DA4E4",
    link: "/light-box",
    previewLabel: "Illuminated branding",
  },
  {
    code: "NL-02",
    icon: Zap,
    title: "Neon Light Signage",
    desc: "Custom neon signs for indoor and outdoor use — vibrant, energy-efficient.",
    color: "#DF8B23",
    link: "/neon-light",
    previewLabel: "Bright visual impact",
  },
  {
    code: "SL-03",
    icon: Layers,
    title: "Shadow Light Acrylic",
    desc: "Premium acrylic shadow light signs that add depth and luxury to branding.",
    color: "#6A6A6A",
    link: "/shadow-light",
    previewLabel: "Luxury edge finish",
  },
  {
    code: "CR-04",
    icon: Cpu,
    title: "CNC Router Cutting",
    desc: "Precision CNC router cutting for complex shapes and custom designs.",
    color: "#1DA4E4",
    link: "/services",
    previewLabel: "Precision fabrication",
  },
  {
    code: "LC-05",
    icon: Scissors,
    title: "Laser Cutting & Engraving",
    desc: "High-precision laser services for acrylic, wood, and metal materials.",
    color: "#DF8B23",
    link: "/services",
    previewLabel: "Detailed engraving",
  },
  {
    code: "AF-06",
    icon: Box,
    title: "Acrylic & Foam Boards",
    desc: "Quality acrylic sheets (2mm, 3mm) and foam boards (5mm, 10mm, 18mm).",
    color: "#6A6A6A",
    link: "/materials",
    previewLabel: "Material supply",
  },
];

const portfolioItems = [
  {
    job: "JOB-0142",
    title: "Dubai Restaurant Signage",
    category: "Light Box",
    img: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=600&h=400&fit=crop&auto=format",
    accent: "#1DA4E4",
  },
  {
    job: "JOB-0139",
    title: "Fashion Boutique Neon",
    category: "Neon Sign",
    img: "https://images.unsplash.com/photo-1519608487953-e999c86e7455?w=600&h=400&fit=crop&auto=format",
    accent: "#DF8B23",
  },
  {
    job: "JOB-0133",
    title: "Corporate Lobby Branding",
    category: "Shadow Light",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=400&fit=crop&auto=format",
    accent: "#6A6A6A",
  },
  {
    job: "JOB-0128",
    title: "Gym Outdoor Signage",
    category: "CNC Cut",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&h=400&fit=crop&auto=format",
    accent: "#1DA4E4",
  },
  {
    job: "JOB-0121",
    title: "Café Round Light Box",
    category: "Light Box",
    img: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=600&h=400&fit=crop&auto=format",
    accent: "#DF8B23",
  },
  {
    job: "JOB-0114",
    title: "Mall Directory Boards",
    category: "Branding",
    img: "https://images.unsplash.com/photo-1600508774634-4e11d34730e2?w=600&h=400&fit=crop&auto=format",
    accent: "#6A6A6A",
  },
];

const stats = [
  { value: "500+", label: "Projects Delivered" },
  { value: "10+", label: "Years Experience" },
  { value: "200+", label: "Happy Clients" },
  { value: "48hr", label: "Avg. Turnaround" },
];

const whyUs = [
  {
    icon: ShieldCheck,
    title: "Premium Quality Materials",
    desc: "We source only top-grade acrylic, LEDs, and hardware for long-lasting signage.",
  },
  {
    icon: Cpu,
    title: "Advanced Machinery",
    desc: "Industrial CNC routers and laser cutters for millimeter-precise fabrication.",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    desc: "We understand deadlines. Fast production with no compromise on quality.",
  },
  {
    icon: Award,
    title: "End-to-End Service",
    desc: "Design, fabrication, and on-site installation — we handle everything.",
  },
];

const clients = [
  "McDonald's", "KFC", "Daraz", "PIA", "Bank Alfalah", "Unilever", "Haier", "Pepsi",
];

/** Registration-mark corner brackets — echoes the alignment marks used on a laser-cut file. */
function CornerMarks({
  color = "currentColor",
  className = "",
}: {
  color?: string;
  className?: string;
}) {
  const base = "absolute w-3 h-3 transition-opacity duration-300";
  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`} style={{ color }}>
      <span className={`${base} top-0 left-0 border-t-2 border-l-2 border-current`} />
      <span className={`${base} top-0 right-0 border-t-2 border-r-2 border-current`} />
      <span className={`${base} bottom-0 left-0 border-b-2 border-l-2 border-current`} />
      <span className={`${base} bottom-0 right-0 border-b-2 border-r-2 border-current`} />
    </div>
  );
}

/** Scroll-triggered reveal: fades content up into place once it enters the viewport. */
function useReveal<T extends HTMLElement>() {
  const ref = useRef<T | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({
  as: Tag = "div",
  className = "",
  delay = 0,
  children,
}: {
  as?: any;
  className?: string;
  delay?: number;
  children: React.ReactNode;
}) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  return (
    <Tag
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </Tag>
  );
}

export default function HomePage() {
  return (
    <div className="overflow-x-hidden">
      <style>{`
        @keyframes laserSweep {
          0% { top: -8%; opacity: 0; }
          12% { opacity: 1; }
          88% { opacity: 1; }
          100% { top: 108%; opacity: 0; }
        }
        @keyframes neonFlicker {
          0%, 18%, 22%, 25%, 53%, 57%, 100% { opacity: 1; }
          20%, 23.5%, 55% { opacity: 0.4; }
        }
        @keyframes signBuzz {
          0%, 100% { box-shadow: 0 0 0 1px rgba(29,164,228,0.18), 0 18px 42px rgba(106,106,106,0.08), 0 0 40px rgba(29,164,228,0.06); }
          50% { box-shadow: 0 0 0 1px rgba(29,164,228,0.32), 0 18px 42px rgba(106,106,106,0.08), 0 0 60px rgba(29,164,228,0.14); }
        }
        @media (prefers-reduced-motion: reduce) {
          .anim-sweep, .anim-flicker, .anim-buzz { animation: none !important; }
        }
      `}</style>

      {/* ── HERO ── */}
      <section className="relative isolate flex min-h-screen items-center overflow-hidden bg-[radial-gradient(circle_at_top_left,_rgba(29,164,228,0.2),_transparent_32%),radial-gradient(circle_at_85%_20%,_rgba(223,139,35,0.16),_transparent_28%),linear-gradient(135deg,_#08111d_0%,_#0f172a_45%,_#111827_100%)] px-4 py-24 sm:px-6 lg:px-8">
        <div className="absolute inset-0 opacity-30" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)", backgroundSize: "72px 72px" }} />
        <div className="absolute left-[-8rem] top-[-6rem] h-56 w-56 rounded-full bg-primary/20 blur-3xl" />
        <div className="absolute bottom-[-6rem] right-[-5rem] h-64 w-64 rounded-full bg-[#DF8B23]/20 blur-3xl" />
        <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent" />

        <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
          <div className="max-w-2xl text-left">
            {/* <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-slate-200 backdrop-blur-md" style={{ fontFamily: MONO }}>
              <Zap className="h-3.5 w-3.5 text-primary" />
             Premier Signage Company
            </div> */}

            <h1 className="mb-6 text-4xl font-black leading-[0.95] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-6xl" style={{ fontFamily: HEAD }}>
              We build signs that make your brand impossible to ignore.
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              From precision fabrication to striking visual branding, we create signage that elevates your presence and drives attention.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <Link
                to="/portfolio"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1aa6e6]"
              >
                View Our Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-7 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition-all duration-200 hover:border-primary/40 hover:text-primary"
              >
                Contact Us
              </Link>
            </div>
{/* 
            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-md">
                <ShieldCheck className="h-4 w-4 text-primary" />
                Premium fabrication
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-[#DF8B23]" />
                Designed to stand out
              </div>
            </div> */}
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-[#DF8B23]/25 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-slate-900/70 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Launch-ready signage</p>
                    <p className="text-xl font-semibold">Designed for impact</p>
                  </div>
                  <div className="rounded-full bg-primary/15 p-2 text-primary">
                    <Zap className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-bold text-primary">+150%</p>
                    <p className="mt-1 text-sm text-slate-300">Brand visibility</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-bold text-[#DF8B23]">4x</p>
                    <p className="mt-1 text-sm text-slate-300">Faster customer attention</p>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/20 via-transparent to-[#DF8B23]/20 p-4">
                  <p className="text-sm font-medium text-slate-200">
                    Built to look premium, feel effortless, and guide visitors straight into action.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── STATS BAR ── */}
      <section className="bg-card/70 dark:bg-slate-900/70 border-y border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <Reveal
                key={s.label}
                delay={i * 80}
                className="relative text-center"
              >
                {i > 0 && (
                  <span className="hidden md:block absolute -left-3 top-1/2 -translate-y-1/2 w-px h-8 bg-border" />
                )}
                <p
                  className="text-3xl font-black text-primary mb-1"
                  style={{ fontFamily: MONO }}
                >
                  {s.value}
                </p>
                <p className="text-muted-foreground text-sm">{s.label}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p
              className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: MONO }}
            >
              What We Do
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-foreground mb-4"
              style={{ fontFamily: HEAD }}
            >
              Complete Signage Solutions
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              From concept to installation.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc, i) => (
              <Reveal key={svc.title} delay={i * 60}>
                <Link to={svc.link} className="group block h-full">
                  <div className="relative h-full overflow-hidden rounded-xl border border-slate-200 bg-white/95 p-6 shadow-[0_10px_30px_rgba(15,23,42,0.06)] transition-all duration-300 hover:border-primary/40 hover:-translate-y-1 hover:shadow-[0_16px_36px_rgba(106,106,106,0.12)] dark:bg-card dark:border-border dark:shadow-none">
                    <CornerMarks
                      color={svc.color}
                      className="opacity-0 group-hover:opacity-60 m-2"
                    />
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                      style={{
                        background: `radial-gradient(ellipse at top left, ${svc.color}08 0%, transparent 60%)`,
                      }}
                    />

                    <div className="relative mb-5 overflow-hidden rounded-lg border border-border/70 bg-slate-50 p-3 dark:bg-slate-900/60">
                      <div className="flex h-28 items-center justify-center rounded-md border border-dashed border-slate-300/70 bg-gradient-to-br from-white to-slate-100 text-slate-400 dark:border-slate-700 dark:from-slate-950 dark:to-slate-900">
                        <div className="text-center">
                          <div
                            className="mx-auto mb-2 flex h-10 w-10 items-center justify-center rounded-full"
                            style={{ background: `${svc.color}16`, color: svc.color }}
                          >
                            <svc.icon className="h-5 w-5" />
                          </div>
                          <p className="text-[11px] font-semibold uppercase tracking-[0.2em]" style={{ color: svc.color }}>
                            {svc.previewLabel}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-start justify-between mb-5">
                      <div>
                        <h3
                          className="mb-2 text-lg font-bold text-slate-900 dark:text-foreground"
                          style={{ fontFamily: HEAD }}
                        >
                          {svc.title}
                        </h3>
                        <p className="text-sm leading-relaxed text-slate-600 dark:text-muted-foreground">
                          {svc.desc}
                        </p>
                      </div>
                      <span
                        className="ml-3 shrink-0 text-[11px] tracking-wider text-slate-500 transition-colors group-hover:text-slate-700 dark:text-muted-foreground/50 dark:group-hover:text-muted-foreground/80"
                        style={{ fontFamily: MONO }}
                      >
                        {svc.code}
                      </span>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-200/70 dark:border-slate-800">
                      <span className="text-sm font-semibold" style={{ color: svc.color }}>
                        Explore this service
                      </span>
                      <div
                        className="flex items-center gap-1 text-xs font-medium"
                        style={{ color: svc.color }}
                      >
                        More
                        <ChevronRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all duration-200"
            >
              View all services <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── PORTFOLIO PREVIEW ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/70 dark:bg-slate-900/70">
        <div className="max-w-7xl mx-auto">
          <Reveal className="text-center mb-14">
            <p
              className="text-secondary text-sm font-semibold uppercase tracking-widest mb-3"
              style={{ fontFamily: MONO }}
            >
              Featured Projects
            </p>
            <h2
              className="text-3xl sm:text-4xl font-black text-foreground mb-4"
              style={{ fontFamily: HEAD }}
            >
              Our Work Speaks
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Signage solutions delivered to restaurants, boutiques, corporations,
              and more across Pakistan.
            </p>
          </Reveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {portfolioItems.map((item, i) => (
              <Reveal key={item.title} delay={i * 50}>
                <div className="group relative rounded-xl overflow-hidden bg-card border border-border aspect-[4/3] shadow-sm">
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ background: `${item.accent}15` }}
                  />
                  <CornerMarks
                    color="#fff"
                    className="opacity-0 group-hover:opacity-50 m-3 transition-opacity duration-300"
                  />
                  <span
                    className="absolute top-3 left-3 text-[10px] tracking-wider text-white/70"
                    style={{ fontFamily: MONO }}
                  >
                    {item.job}
                  </span>
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <span
                      className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold mb-2"
                      style={{
                        background: `${item.accent}22`,
                        color: item.accent,
                        border: `1px solid ${item.accent}40`,
                      }}
                    >
                      {item.category}
                    </span>
                    <p
                      className="text-white font-bold"
                      style={{ fontFamily: HEAD }}
                    >
                      {item.title}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-md border border-secondary/30 text-secondary text-sm font-semibold hover:bg-secondary/5 hover:border-secondary/60 transition-all duration-200"
              style={{ fontFamily: HEAD }}
            >
              View Full Portfolio <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY CHOOSE US ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: image */}
            <Reveal className="relative">
              <div className="relative rounded-2xl overflow-hidden border border-border shadow-[0_18px_40px_rgba(106,106,106,0.12)]">
                <img
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=600&fit=crop&auto=format"
                  alt="Viatech workshop with CNC machinery"
                  className="w-full h-[400px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent" />
                <CornerMarks color="#ffffff" className="m-4 opacity-70" />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 bg-card border border-primary/20 rounded-xl px-5 py-4 shadow-[0_16px_32px_rgba(106,106,106,0.14)]">
                <p
                  className="text-2xl font-black text-primary"
                  style={{ fontFamily: MONO }}
                >
                  10+
                </p>
                <p className="text-xs text-muted-foreground">Years in Business</p>
              </div>
            </Reveal>

            {/* Right: points */}
            <Reveal delay={120}>
              <p
                className="text-primary text-sm font-semibold uppercase tracking-widest mb-3"
                style={{ fontFamily: MONO }}
              >
                Why Viatech
              </p>
              <h2
                className="text-3xl sm:text-4xl font-black text-foreground mb-6"
                style={{ fontFamily: HEAD }}
              >
                Built for Businesses That Mean Business
              </h2>
              <p className="text-muted-foreground mb-8 leading-relaxed">
                We are a full-service industrial signage company with our own
                workshop, CNC machines, and laser cutters. No middlemen — just
                quality from our floor to your storefront.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {whyUs.map((item) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                      <item.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p
                        className="font-semibold text-foreground text-sm mb-1"
                        style={{ fontFamily: HEAD }}
                      >
                        {item.title}
                      </p>
                      <p className="text-muted-foreground text-xs leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary text-sm font-medium hover:gap-3 transition-all"
                >
                  Learn about our workshop <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── CLIENT LOGOS ── */}
      {/* <section className="border-y border-slate-200 bg-slate-50/90 px-4 py-16 backdrop-blur-sm dark:border-border dark:bg-slate-900/70 dark:bg-white/10">
        <div className="max-w-7xl mx-auto">
          <p
            className="text-center text-muted-foreground/60 text-xs uppercase tracking-widest mb-8"
            style={{ fontFamily: MONO }}
          >
            Trusted by leading brands across Pakistan
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-14">
            {clients.map((client) => (
              <span
                key={client}
                className="cursor-default text-lg font-bold text-slate-500 transition-colors hover:text-slate-700 dark:text-muted-foreground/40 dark:hover:text-muted-foreground/70"
                style={{ fontFamily: HEAD }}
              >
                {client}
              </span>
            ))}
          </div>
        </div>
      </section> */}

      {/* ── CTA BANNER ── */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* <Reveal
            className="anim-buzz relative overflow-hidden rounded-2xl border border-slate-700/60 bg-slate-900/95 p-10 shadow-[0_16px_44px_rgba(2,6,23,0.28)] sm:p-16 dark:bg-slate-950/95 dark:border-slate-700/60 dark:shadow-[0_18px_46px_rgba(2,6,23,0.35)]"
            delay={0}
          > */}
          <Reveal
  className="anim-buzz relative overflow-hidden rounded-2xl border border-slate-700/60 bg-gradient-to-br from-slate-900/95 to-slate-950/95 p-10 shadow-[0_16px_44px_rgba(2,6,23,0.28)] sm:p-16 dark:from-slate-950/95 dark:to-slate-900/30 dark:border-slate-700/60 dark:shadow-[0_18px_46px_rgba(2,6,23,0.35)]"
  delay={0}
>
            <div
              className="absolute inset-0 rounded-2xl"
              style={{ animation: "signBuzz 3.4s ease-in-out infinite" }}
            />
            <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5" />
            <div className="absolute -top-20 -right-20 w-60 h-60 bg-primary/8 rounded-full blur-[80px]" />
            <div className="absolute -bottom-20 -left-20 w-60 h-60 bg-secondary/8 rounded-full blur-[80px]" />

            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-[#ffcc00] fill-[#ffcc00]" />
                ))}
              </div>
              <h2
                className="mb-4 text-3xl font-black text-white sm:text-4xl"
                style={{ fontFamily: HEAD }}
              >
                Ready to Illuminate Your Brand?
              </h2>
              <p className="mx-auto mb-8 max-w-lg text-slate-300">
                Get in touch with us today. Tell us about your project and we&rsquo;ll
                get back to you within 24 hours.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-semibold text-primary-foreground bg-primary hover:bg-primary/90 transition-all shadow-[0_12px_26px_rgba(29,164,228,0.22)]"
                  style={{ fontFamily: HEAD }}
                >
                  Contact Us
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+251965031414"
                  className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md font-semibold text-[#25d366] border border-[#25d366]/30 hover:bg-[#25d366]/5 transition-all"
                  style={{ fontFamily: HEAD }}
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}