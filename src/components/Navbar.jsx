import { Github, Linkedin, Mail, Rocket } from "lucide-react";

export default function Navbar() {
  const links = [
    { href: "#work", label: "Work" },
    { href: "#about", label: "About" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 text-white">
          <span className="inline-flex size-9 items-center justify-center rounded-md bg-white/10 text-white">
            <Rocket className="size-5" />
          </span>
          <span className="font-semibold tracking-tight">My 3D Portfolio</span>
        </a>

        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-white transition-colors">
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10"
            aria-label="GitHub"
          >
            <Github className="size-5" />
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white hover:bg-white/10"
            aria-label="LinkedIn"
          >
            <Linkedin className="size-5" />
          </a>
          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-2 rounded-md bg-white text-black px-4 py-2 font-medium hover:opacity-90"
          >
            <Mail className="size-4" />
            Contact
          </a>
        </div>
      </div>
    </header>
  );
}
