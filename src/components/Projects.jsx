import { ExternalLink, Github } from "lucide-react";

const projects = [
  {
    title: "AI‑Driven Business Decision Support System",
    description:
      "Interactive dashboard to upload CSVs, auto‑profile datasets, visualize insights, and chat over findings.",
    tags: ["React", "Tailwind", "Python", "Flask", "AI"],
    live: "#",
    repo: "https://github.com/AdvaitBhoyar14",
  },
  {
    title: "Abstractive Text Summarization using BART",
    description:
      "Fine‑tuned BART on CNN/DailyMail, optimized for ROUGE to produce concise, high‑quality summaries.",
    tags: ["Python", "PyTorch", "NLP", "BART"],
    live: "#",
    repo: "https://github.com/AdvaitBhoyar14",
  },
  {
    title: "ggdc.in – Freelance Website",
    description:
      "Built and optimized a production website with best practices for SEO and performance.",
    tags: ["WordPress", "SEO", "Web"],
    live: "https://ggdc.in",
    repo: "#",
  },
];

export default function Projects() {
  return (
    <section id="work" className="relative py-20 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Selected Work</h2>
            <p className="mt-2 text-white/70">Projects across AI, front‑end, and growth engineering.</p>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <div key={p.title} className="group rounded-xl border border-white/10 bg-zinc-900/60 p-5 hover:border-white/20 transition-colors">
              <div className="aspect-video w-full rounded-lg bg-gradient-to-br from-zinc-800 to-zinc-900 mb-4" />
              <h3 className="text-lg font-medium">{p.title}</h3>
              <p className="mt-2 text-sm text-white/70">{p.description}</p>
              <div className="mt-3 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="text-xs rounded-md border border-white/10 bg-white/5 px-2 py-1 text-white/80">
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-4 flex items-center gap-3">
                {p.live !== "#" && (
                  <a href={p.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-white hover:underline">
                    <ExternalLink className="size-4" /> Live
                  </a>
                )}
                {p.repo !== "#" && (
                  <a href={p.repo} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-white/80 hover:text-white">
                    <Github className="size-4" /> Code
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
