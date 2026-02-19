import { handleInstagramClick } from "../utils/instagramLink";

const ClubLife = () => (
  <section className="bg-white py-20">
    <div className="mx-auto max-w-6xl px-4">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <h2 className="text-3xl font-extrabold tracking-tight text-slate-900">
            La vie du club au quotidien
          </h2>
          <p className="mt-3 text-slate-600 text-sm sm:text-base max-w-xl">
            Tournois internes, stages pour les enfants des collaborateurs, afterworks sportifs, journées
            familles… le Riad Club vit toute l'année au rythme des équipes REDAL.
          </p>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
            <div className="rounded-2xl bg-white/80 border border-slate-100 p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Compétitions
              </div>
              <p className="mt-2 text-slate-700">
                Tournois internes de tennis et de padel, inter-entreprises et challenges inter-sites.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 border border-slate-100 p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Jeunes & familles
              </div>
              <p className="mt-2 text-slate-700">
                Académies jeunes, cours collectifs, animations week-end pour les familles REDAL.
              </p>
            </div>
            <div className="rounded-2xl bg-white/80 border border-slate-100 p-4 shadow-sm">
              <div className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-700">
                Événements
              </div>
              <p className="mt-2 text-slate-700">
                Afterworks, soirées thématiques et événements de fin d'année pour les équipes.
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-500">
                Réseaux sociaux
              </p>
              <h3 className="mt-1 text-lg font-semibold text-slate-900">Suivez le club</h3>
            </div>
            <div className="h-10 w-10 rounded-2xl bg-gradient-to-tr from-amber-400 via-pink-500 to-purple-600 grid place-items-center text-white text-xl">
              📷
            </div>
          </div>

          <p className="mt-3 text-sm text-slate-600">
            Découvrez l'ambiance du club en images : matchs, événements, coulisses et temps forts de la
            communauté.
          </p>

          <a
            href="https://www.instagram.com/riadclubofficiel/"
            target="_blank"
            rel="noreferrer"
            onClick={handleInstagramClick}
            className="mt-4 inline-flex items-center gap-2 rounded-full bg-slate-900 px-5 py-2 text-xs font-semibold text-white hover:bg-black"
          >
            Voir le fil Instagram officiel
            <span>↗</span>
          </a>

          <p className="mt-3 text-[11px] text-slate-400">
            Exemples de contenus inspirés du compte officiel Instagram du Riad Club : photos des
            installations, tournois, animations pour enfants et moments de convivialité.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default ClubLife;


