import Stat from "./Stat";

const Hero = () => (
  <section id="accueil" className="relative min-h-screen md:h-[640px]">
    <div className="absolute inset-0">
      {/* Mets ton image dans /public/hero.jpg */}
      <div className="h-full w-full bg-cover bg-center" style={{ backgroundImage: "url('/hero.jpg')" }} />
      <div className="absolute inset-0 bg-gradient-to-r from-[#fbfaf7] via-[#fbfaf7]/45 to-transparent" />
    </div>

    <div className="relative mx-auto max-w-6xl px-4 pt-16 pb-20 md:pb-10">
      <div className="inline-flex items-center gap-2 rounded-full border border-emerald-100 bg-white/90 px-4 py-2 text-xs font-medium tracking-wide text-emerald-800 shadow-sm shadow-emerald-50">
        🏆 Club - sportif
      </div>

      <h1 className="mt-6 text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-slate-900">
        Bienvenue au <br /> <span className="text-slate-900">Riad Club</span>
      </h1>

      <p className="mt-6 max-w-2xl text-base sm:text-lg text-slate-600">
        Club sportif pluridisciplinaire réservé en priorité aux collaborateurs REDAL et à leurs familles,
        le Riad Club propose un environnement élégant pour le tennis, le padel, la natation et la détente.
      </p>

      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href="#installations"
          className="inline-flex items-center justify-center rounded-full bg-emerald-700 px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-emerald-200 transition hover:bg-emerald-800"
        >
          Découvrir le club
        </a>
        <a
          href="#tarifs"
          className="inline-flex items-center justify-center rounded-full border border-slate-300 bg-white/80 px-6 py-2.5 text-sm font-semibold text-slate-800 shadow-sm hover:bg-slate-50"
        >
          Voir les tarifs
        </a>
      </div>

      <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Stat icon="👥" value="800+" label="Membres actifs" />
        <Stat icon="🏆" value="8" label="Courts de tennis" />
        <Stat icon="📅" value="50+" label="Ans d'histoire" />
      </div>

      {/* Barre d'infos en bas du hero, posée sur la photo */}
      <div className="mt-6 hidden md:flex items-center gap-8 text-xs font-medium text-slate-700">
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-xl bg-emerald-50 border border-emerald-100 grid place-items-center text-emerald-700 text-sm">
            🎾
          </span>
          <span>8 courts de tennis • 1 court de padel • Piscine</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-xl bg-emerald-50 border border-emerald-100 grid place-items-center text-emerald-700 text-sm">
            🍽️
          </span>
          <span>Restaurant & événements conviviaux</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="h-7 w-7 rounded-xl bg-emerald-50 border border-emerald-100 grid place-items-center text-emerald-700 text-sm">
            🕒
          </span>
          <span>Ouvert 7j/7 • 6h - 22h</span>
        </div>
      </div>
    </div>

    {/* petit espace sous le hero, mais plus compact */}
    <div className="h-[32px]" />
  </section>
);

export default Hero;


