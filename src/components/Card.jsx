const Card = ({ id, title, desc, bullets, img, icon, onMore, isActive, onCardClick }) => {
  const handleCardClick = () => {
    onCardClick(id);
  };

  return (
    <div 
      className="group relative overflow-hidden rounded-3xl border border-slate-100 bg-white/80 backdrop-blur shadow-sm transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl hover:scale-[1.02] cursor-pointer"
      onClick={handleCardClick}
    >
      {img ? (
        <div className="relative h-80 bg-cover bg-center transition-transform duration-500 group-hover:scale-110">
          <div
            className="h-full w-full bg-cover bg-center"
            style={{ backgroundImage: `url(${img})` }}
          />
          {/* Overlay professionnel avec gradient sombre */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
          
          {/* Conteneur overlay structuré en bas */}
          <div className={`absolute inset-x-0 bottom-0 px-6 transition-all duration-300 ${
            isActive ? 'pb-4' : 'pb-1'
          } sm:pb-6`}>
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 sm:gap-4">
              {/* Bloc titre avec logo - en bas à gauche */}
              <div className={`flex items-center gap-3 min-w-0 flex-1 transition-transform duration-300 ${
                isActive ? 'sm:translate-y-0 -translate-y-3' : 'translate-y-0'
              }`}>
                <div className="h-12 w-12 rounded-xl bg-white/90 backdrop-blur grid place-items-center text-2xl shadow-lg flex-shrink-0">
                  {icon}
                </div>
                {/* Titre complet par défaut sur mobile, tronqué seulement quand le bouton est visible */}
                <h3 className={`text-2xl font-bold text-white drop-shadow-lg ${
                  isActive ? 'truncate' : ''
                } sm:truncate`}>{title}</h3>
              </div>
              
              {/* Bouton "En savoir plus" - aligné à droite et remonté sur mobile, aligné avec le titre sur desktop */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onMore();
                }}
                className={`rounded-full bg-emerald-700 px-4 py-2 text-xs font-semibold text-white shadow-xl hover:bg-emerald-800 flex-shrink-0 whitespace-nowrap sm:opacity-0 sm:group-hover:opacity-100 sm:group-hover:-translate-y-2 sm:transition-all sm:duration-300 self-end sm:self-auto ${
                  isActive 
                    ? 'opacity-100 translate-y-0 -translate-y-1 scale-100' 
                    : 'opacity-0 translate-y-2 scale-95'
                } transition-all duration-500 ease-out`}
              >
                En savoir plus →
              </button>
            </div>
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
};

export default Card;


