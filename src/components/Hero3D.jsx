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
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-tight">
            Crafting modern, playful, interactive experiences in 3D
          </h1>
          <p className="mt-4 md:mt-6 text-lg md:text-xl text-white/80">
            I’m a creative developer blending design and code to build immersive web apps,
            delightful interfaces, and engaging brand moments.
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
              Get in touch
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
