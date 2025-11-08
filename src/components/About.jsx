export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          I’m a creative developer focused on crafting immersive experiences on the web. I blend
          design sensibilities with technical rigor to build fast, accessible, and playful
          interfaces. My toolkit centers around React, TypeScript, and WebGL, with a healthy dose
          of motion and micro-interactions.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">Core</p>
            <p className="mt-1">React, TypeScript, Tailwind, Framer Motion</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">3D & Visual</p>
            <p className="mt-1">Three.js, Spline, GLSL, Camera & Post FX</p>
          </div>
        </div>
      </div>
    </section>
  );
}
