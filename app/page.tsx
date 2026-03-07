import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 flex flex-col justify-center" style={{ minHeight: "calc(100vh - 64px)" }}>
      <div className="py-24">
        <p className="font-dm-sans text-sm uppercase tracking-widest text-stone-400 mb-4">
          Front-End Developer
        </p>
        <h1 className="font-crimson text-7xl font-semibold text-stone-900 leading-tight mb-6">
          Merhaba, ben<br />
          <span className="text-amber-600">Aleyna.</span>
        </h1>
        <p className="font-dm-sans text-lg text-stone-500 max-w-xl leading-relaxed mb-10">
          JavaScript, React ve Next.js ile kullanıcı odaklı arayüzler geliştiriyorum.
          Her gün öğreniyor, her gün ilerliyorum.
        </p>
        <div className="flex gap-4">
          <Link
            href="/projects"
            className="font-dm-sans text-sm bg-stone-900 text-stone-50 px-6 py-3 rounded-full hover:bg-amber-600 transition-colors"
          >
            Projelerimi Gör
          </Link>
          <Link
            href="/contact"
            className="font-dm-sans text-sm border border-stone-300 text-stone-700 px-6 py-3 rounded-full hover:border-stone-900 transition-colors"
          >
            İletişime Geç
          </Link>
        </div>
      </div>
    </main>
  );
}