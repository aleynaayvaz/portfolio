export default function About() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-24">
      <p className="font-dm-sans text-sm uppercase tracking-widest text-stone-400 mb-4">
        Hakkımda
      </p>
      <h1 className="font-crimson text-6xl font-semibold text-stone-900 mb-10">
        Ben kimim?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
        <div>
          <p className="font-dm-sans text-stone-600 leading-relaxed mb-4">
            Bilgisayar Mühendisiyim. JavaScript ve React deneyimimin üzerine Next.js öğrenerek kendimi geliştirmeye devam ediyorum.
          </p>
          <p className="font-dm-sans text-stone-600 leading-relaxed mb-4">
            Disiplinli bir çalışma rutiniyle kendimi sürekli güncelliyor, oğluma daha iyi bir gelecek inşa etmek için her gece yeni teknolojiler öğreniyorum.
          </p>
          <p className="font-dm-sans text-stone-600 leading-relaxed">
            Kocaeli / Gebze'de yaşıyorum.
          </p>
        </div>

        <div>
          <h2 className="font-crimson text-2xl font-semibold text-stone-900 mb-6">Teknolojiler</h2>
          <div className="flex flex-wrap gap-2">
            {["JavaScript", "TypeScript", "React.js", "Next.js", "Tailwind CSS", "HTML", "CSS", "Git", "React Hook Form", "Postman"].map((tech) => (
              <span
                key={tech}
                className="font-dm-sans text-sm bg-stone-100 text-stone-700 px-4 py-2 rounded-full border border-stone-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}