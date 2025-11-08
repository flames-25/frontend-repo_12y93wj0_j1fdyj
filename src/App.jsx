import Navbar from "./components/Navbar";
import Hero3D from "./components/Hero3D";
import Projects from "./components/Projects";
import About from "./components/About";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-white/60 text-sm">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
        <div className="text-white/60 text-sm">Made with React, Tailwind & Spline</div>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero3D />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
