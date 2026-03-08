export default function Contact() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-24">
      <p className="font-dm-sans text-sm uppercase tracking-widest text-stone-400 mb-4">
        İletişim
      </p>
      <h1 className="font-crimson text-6xl font-semibold text-stone-900 mb-16">
        Benimle iletişime geç.
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Form */}
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Adınız"
            className="font-dm-sans text-sm bg-transparent border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
          />
          <input
            type="email"
            placeholder="E-posta"
            className="font-dm-sans text-sm bg-transparent border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors"
          />
          <textarea
            placeholder="Mesajınız"
            rows={5}
            className="font-dm-sans text-sm bg-transparent border border-stone-200 rounded-xl px-4 py-3 focus:outline-none focus:border-amber-400 transition-colors resize-none"
          />
          <button className="font-dm-sans text-sm bg-stone-900 text-white px-6 py-3 rounded-full hover:bg-amber-600 transition-colors">
            Gönder
          </button>
        </div>

        {/* Linkler */}
        <div className="flex flex-col gap-4 justify-center">
          <a
            href="https://www.linkedin.com/in/aleynaayvaz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-sans text-sm border border-stone-200 rounded-xl px-6 py-4 hover:border-amber-400 transition-colors flex items-center gap-3"
          >
            <span className="text-stone-400">LinkedIn</span>
            <span className="text-stone-900 font-medium">linkedin.com/in/aleynaayvaz →</span>
          </a>
          <a
            href="https://github.com/aleynaayvaz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-dm-sans text-sm border border-stone-200 rounded-xl px-6 py-4 hover:border-amber-400 transition-colors flex items-center gap-3"
          >
            <span className="text-stone-400">GitHub</span>
            <span className="text-stone-900 font-medium">github.com/aleynaayvaz →</span>
          </a>
          <a
            href="mailto:anyelayoszo@gmail.com"
            className="font-dm-sans text-sm border border-stone-200 rounded-xl px-6 py-4 hover:border-amber-400 transition-colors flex items-center gap-3"
          >
            <span className="text-stone-400">E-posta</span>
            <span className="text-stone-900 font-medium">anyelayoszo@gmail.com →</span>
          </a>
        </div>
      </div>
    </main>
  );
}