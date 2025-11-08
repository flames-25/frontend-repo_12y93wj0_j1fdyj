export default function About() {
  return (
    <section id="about" className="relative py-20 bg-gradient-to-b from-black to-zinc-950 text-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">About</h2>
        <p className="mt-4 text-white/80 leading-relaxed">
          I’m Advait Bhoyar, pursuing MBA.Tech (Computer Engineering) at NMIMS, Mumbai. I blend
          software engineering with data analytics and growth to build products that are both smart
          and delightful. My experience spans AI prototypes, web apps, and digital marketing
          campaigns that scale.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">Tech</p>
            <p className="mt-1">React, Tailwind, Python, Flask, PyTorch, Firebase</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">Marketing</p>
            <p className="mt-1">SEO, Google Ads, Meta Ads, Analytics</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">Focus</p>
            <p className="mt-1">AI dashboards, summarization, data storytelling</p>
          </div>
          <div className="rounded-lg border border-white/10 bg-white/5 p-4">
            <p className="text-sm text-white/70">Location</p>
            <p className="mt-1">Sector 34-A, Kharghar, Navi Mumbai 410210</p>
          </div>
        </div>
      </div>
    </section>
  );
}
