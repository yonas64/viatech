import { ArrowRight, BookOpen, Shield, Sparkles, Zap } from "lucide-react";
import gmImage from "../images/gm.png";

export function Hero() {
  return (
    <section
      className="relative isolate flex min-h-screen items-center justify-center overflow-hidden px-4 py-24 sm:px-6 lg:px-8"
      style={{
        backgroundImage: `url(${gmImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(29,164,228,0.26),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(223,139,35,0.24),transparent_28%),linear-gradient(135deg,#06121f_0%,#0f172a_45%,#111827_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/10 to-transparent" />

      <div className="absolute left-8 top-20 h-40 w-40 rounded-full bg-primary/25 blur-3xl" />
      <div className="absolute bottom-16 right-10 h-48 w-48 rounded-full bg-[#DF8B23]/20 blur-3xl" />
      <div className="absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white/5 to-transparent" />

      <div className="container relative z-10 mx-auto max-w-7xl">
        <div className="grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="max-w-2xl text-left">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 shadow-[0_8px_24px_rgba(0,0,0,0.2)] backdrop-blur-md">
              <Shield className="h-4 w-4 text-primary" />
              <span className="text-sm font-medium text-slate-200">
                High-impact digital experiences for ambitious brands
              </span>
            </div>

            <h1 className="mb-6 text-5xl font-black leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
              Make your brand feel unforgettable.
            </h1>

            <p className="mb-8 max-w-xl text-lg leading-8 text-slate-300 sm:text-xl">
              From striking websites to premium product storytelling, we build experiences that look sharp, convert faster, and leave a lasting impression.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <a
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-white transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#1aa6e6]"
              >
                Get a Quote
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="/portfolio"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/10 px-6 py-3.5 text-sm font-semibold text-slate-100 backdrop-blur-md transition-all duration-200 hover:border-primary/40 hover:text-primary"
              >
                <BookOpen className="h-4 w-4" />
                View Portfolio
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3 text-sm text-slate-300">
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-md">
                <Sparkles className="h-4 w-4 text-primary" />
                Premium visual design
              </div>
              <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-2 backdrop-blur-md">
                <Zap className="h-4 w-4 text-[#DF8B23]" />
                Lightning-fast performance
              </div>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xl">
            <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-primary/25 via-transparent to-[#DF8B23]/25 blur-3xl" />
            <div className="relative rounded-[2rem] border border-white/15 bg-slate-900/80 p-5 shadow-[0_30px_100px_rgba(0,0,0,0.35)] backdrop-blur-2xl">
              <div className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-800 p-6 text-white">
                <div className="mb-6 flex items-center justify-between">
                  <div>
                    <p className="text-sm text-slate-400">Launch-ready experience</p>
                    <p className="text-xl font-semibold">Modern brand storytelling</p>
                  </div>
                  <div className="rounded-full bg-primary/15 p-2 text-primary">
                    <Shield className="h-5 w-5" />
                  </div>
                </div>

                <div className="grid gap-4 sm:grid-cols-2">
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-bold text-primary">+150%</p>
                    <p className="mt-1 text-sm text-slate-300">Engagement lift</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/10 p-4">
                    <p className="text-3xl font-bold text-[#DF8B23]">4x</p>
                    <p className="mt-1 text-sm text-slate-300">Faster conversion flow</p>
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
      </div>
    </section>
  );
}
