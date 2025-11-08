import Spline from "@splinetool/react-spline";
import { ArrowRight } from "lucide-react";

export default function Hero3D() {
  return (
    <section id="top" className="relative min-h-screen w-full bg-gradient-to-b from-black via-zinc-900 to-black text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-28 md:pt-36">
        <div className="max-w-2xl">
          <p className="text-white/70">Mumbai, India</p>
          <h1 className="mt-2 text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Hi, I’m Advait Bhoyar — building data‑driven, interactive web experiences
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/80">
            MBA.Tech (Computer Engineering) student passionate about AI, analytics, and immersive front‑end.
            I craft performant interfaces and intelligent tools that turn data into decisions.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#work"
              className="inline-flex items-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium hover:opacity-90"
            >
              View Work
              <ArrowRight className="size-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-3 font-medium text-white hover:bg-white/10"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/70">
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">React</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Tailwind</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">Python</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">AI/ML</span>
            <span className="rounded-md border border-white/10 bg-white/5 px-2 py-1">SEO/Ads</span>
          </div>
        </div>
      </div>
    </section>
  );
}
