type Project = {
  title: string;
  description: string;
  techs: string[];
  github: string;
  live: string | null;
};

export default function Projects() {
  
    const projects: Project[] = [
    {
      title: "Todo App",
      description: "React ve Tailwind CSS ile geliştirdiğim görev yönetim uygulaması. Görev ekleme, silme, düzenleme ve localStorage ile kalıcı veri saklama özellikleri içeriyor.",
      techs: ["React", "Tailwind CSS", "localStorage"],
      github: "https://github.com/aleynaayvaz/geri-donus",
      live: null,
    },
    {
      title: "Weather App",
      description: "Next.js ve TypeScript ile geliştirdiğim hava durumu uygulaması. Anlık hava durumu, 5 günlük tahmin ve favori şehirler özellikleri içeriyor.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "OpenWeatherMap API", "localStorage"],
      github: "https://github.com/aleynaayvaz/nextjs-learning",
      live: "https://nextjs-learning-kxecihtos-aleynaayvazs-projects.vercel.app/",
    },
    {
      title: "Movie App",
      description: "Next.js ile geliştirdiğim film ve dizi arama uygulaması. TMDB API entegrasyonu, popüler içerikler, kategori filtresi, arama geçmişi ve favori kaydetme özellikleri içeriyor.",
      techs: ["Next.js", "TypeScript", "Tailwind CSS", "TMDB API", "localStorage", "Custom Hook"],
      github: "https://github.com/aleynaayvaz/movie-app",
      live: "https://movie-773bievic-aleynaayvazs-projects.vercel.app/",
    },
  ];

  return (
    <main className="min-h-screen max-w-5xl mx-auto px-6 py-24">
      <p className="font-dm-sans text-sm uppercase tracking-widest text-stone-400 mb-4">
        Projeler
      </p>
      <h1 className="font-crimson text-6xl font-semibold text-stone-900 mb-16">
        Neler yaptım?
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.title}
            className="border border-stone-200 rounded-2xl p-8 hover:border-amber-400 transition-colors"
          >
            <h2 className="font-crimson text-3xl font-semibold text-stone-900 mb-3">
              {project.title}
            </h2>
            <p className="font-dm-sans text-stone-500 text-sm leading-relaxed mb-6">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 mb-6">
              {project.techs.map((tech) => (
                <span
                  key={tech}
                  className="font-dm-sans text-xs bg-stone-100 text-stone-600 px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
            <div className= "flex gap-8">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="font-dm-sans text-sm text-stone-900 border border-stone-300 px-4 py-2 rounded-full hover:bg-stone-900 hover:text-white transition-colors"
                >
                GitHub →
                </a>
                {project.live && ( 
                <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-dm-sans text-sm text-stone-900 border border-stone-300 px-4 py-2 rounded-full hover:bg-stone-900 hover:text-white transition-colors"
                >
                    Demo →
                </a>
                )}
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}