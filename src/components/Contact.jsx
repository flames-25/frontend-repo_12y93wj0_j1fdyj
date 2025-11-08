import { Mail, Send } from "lucide-react";

export default function Contact() {
  const phone = "+918999480581";
  const email = "advaitbhoyar1404@gmail.com";

  return (
    <section id="contact" className="relative py-20 bg-black text-white">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-zinc-900 to-zinc-950 p-8">
          <div className="flex items-center gap-3">
            <span className="inline-flex size-10 items-center justify-center rounded-lg bg-white/10">
              <Mail className="size-5" />
            </span>
            <div>
              <h2 className="text-2xl font-semibold">Let’s build something</h2>
              <p className="text-white/70">Open for freelance, internships, and collaborations.</p>
            </div>
          </div>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="mt-6 grid gap-4 sm:grid-cols-2"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-white/30 sm:col-span-1"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-white/30 sm:col-span-1"
              required
            />
            <textarea
              name="message"
              placeholder="Your message"
              rows={5}
              className="sm:col-span-2 w-full rounded-md border border-white/10 bg-black/40 px-4 py-3 outline-none focus:border-white/30"
              required
            />

            <button
              type="submit"
              className="sm:col-span-2 inline-flex items-center justify-center gap-2 rounded-md bg-white text-black px-5 py-3 font-medium hover:opacity-90"
            >
              Send message
              <Send className="size-4" />
            </button>
          </form>

          <div className="mt-6 grid gap-2 text-sm text-white/70">
            <p>
              Phone: <a className="underline" href={`tel:${phone}`}>{phone}</a>
            </p>
            <p>
              Email: <a className="underline" href={`mailto:${email}`}>{email}</a>
            </p>
            <p>
              LinkedIn: <a className="underline" target="_blank" rel="noreferrer" href="https://linkedin.com/in/advait-bhoyar">linkedin.com/in/advait-bhoyar</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
