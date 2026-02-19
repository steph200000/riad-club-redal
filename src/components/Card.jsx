const Card = ({ title, desc, bullets, img, icon, onMore }) => (
  <div className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 backdrop-blur shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] cursor-pointer">
    {img ? (
      <div className="relative h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
        <div
          className="h-full w-full bg-cover bg-center"
          style={{ backgroundImage: `url(${img})` }}
        />
        {/* Overlay avec titre et logo sur l'image - décalé à droite */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent flex items-end">
          <div className="w-full p-6 pl-8">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-xl bg-white/90 backdrop-blur grid place-items-center text-2xl shadow-lg">
                {icon}
              </div>
              <h3 className="text-2xl font-bold text-white drop-shadow-lg">{title}</h3>
            </div>
          </div>
        </div>
        {/* Bouton "En savoir plus" en bas à droite qui apparaît au survol - décalé du bord pour éviter qu'il touche lors de l'agrandissement */}
        <div className="absolute bottom-6 right-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <button
            type="button"
            onClick={onMore}
            className="rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-xl hover:bg-emerald-800 transition-transform hover:scale-105"
          >
            En savoir plus →
          </button>
        </div>
      </div>
    ) : (
      <div className="h-80 flex items-center justify-center bg-slate-100">
        <div className="text-center">
          <div className="h-12 w-12 rounded-xl bg-emerald-50 grid place-items-center text-2xl mx-auto mb-3">
            {icon}
          </div>
          <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
        </div>
      </div>
    )}
  </div>
);

export default Card;

