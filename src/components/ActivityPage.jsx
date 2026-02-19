import { useState, useEffect } from "react";

const ActivityPage = ({ id, title, icon, desc, bullets, images, heroImage, onScrollTo }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [animationKey, setAnimationKey] = useState(0);

  // Détection de visibilité pour animation fade-in
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById(id);
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [id]);

  // Écouter les événements de scroll forcé depuis le parent
  useEffect(() => {
    const handleForceAnimation = () => {
      // Forcer la réinitialisation complète pour déclencher l'animation
      setIsVisible(false);
      setAnimationKey(prev => prev + 1); // Changer la clé pour forcer le re-render
      // Attendre un peu plus longtemps pour que le changement soit visible
      setTimeout(() => {
        setIsVisible(true);
      }, 100);
    };

    window.addEventListener(`forceAnimation_${id}`, handleForceAnimation);
    return () => {
      window.removeEventListener(`forceAnimation_${id}`, handleForceAnimation);
    };
  }, [id]);


  // Auto-scroll des images avec slide continu et infini
  useEffect(() => {
    if (!images || images.length === 0) return;

    // Translation continue et infinie en boucle
    const interval = setInterval(() => {
      setCurrentImageIndex((prev) => {
        // Boucle infinie : après la dernière image, recommence à 0
        const nextIndex = prev + 1;
        if (nextIndex >= images.length) {
          return 0; // Recommence depuis le début
        }
        return nextIndex;
      });
    }, 3000); // Translation toutes les 3 secondes

    return () => clearInterval(interval);
  }, [images]);

  const scrollToInstallations = () => {
    const element = document.getElementById("installations");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section 
      id={id}
      key={animationKey}
      className={`min-h-screen scroll-smooth transition-opacity duration-1000 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Hero Image Full Screen */}
      <div className="relative h-screen w-full">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${heroImage}')` }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/60" />
        
        {/* Contenu Hero avec animation fade-in */}
        <div className={`relative h-full flex flex-col justify-end pb-20 px-4 md:px-8 transition-all duration-1000 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="mx-auto max-w-6xl w-full">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-2xl bg-white/90 backdrop-blur grid place-items-center text-4xl shadow-xl">
                {icon}
              </div>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white drop-shadow-2xl">
                {title}
              </h1>
            </div>
            <p className="text-xl md:text-2xl text-white/90 max-w-3xl leading-relaxed drop-shadow-lg">
              {desc}
            </p>
          </div>
        </div>

        {/* Bouton retour vers installations */}
        <button
          onClick={scrollToInstallations}
          className="absolute top-6 left-6 rounded-full bg-white/90 backdrop-blur px-4 py-2 text-sm font-semibold text-slate-900 hover:bg-white transition-all shadow-lg"
        >
          ← Retour
        </button>
      </div>

      {/* Contenu structuré avec animation fade-in */}
      <div className={`bg-white transition-all duration-1000 delay-500 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}>
        <div className="mx-auto max-w-6xl px-4 md:px-8 py-16 md:py-24">
          {/* Description, caractéristiques et galerie */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Colonne gauche : À propos + Caractéristiques */}
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-6">
                À propos de {title}
              </h2>
              <p className="text-lg text-slate-700 leading-relaxed mb-8">
                {desc}
              </p>

              {/* Caractéristiques en bas */}
              <div className="bg-slate-50 rounded-3xl p-8">
                <h3 className="text-xl font-semibold text-slate-900 mb-6">Caractéristiques</h3>
                <ul className="space-y-4">
                  {bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-3 items-start">
                      <span className="text-emerald-700 text-xl mt-1">✓</span>
                      <span className="text-slate-700 text-base leading-relaxed">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Colonne droite : Galerie réduite */}
            {images && images.length > 0 && (
              <div className="flex flex-col items-center lg:items-end gap-4">
                <div className="relative h-[500px] w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl">
                  <div 
                    className="flex h-full transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                  >
                    {images.map((img, index) => (
                      <div
                        key={index}
                        className="min-w-full h-full bg-cover bg-center flex-shrink-0"
                        style={{ backgroundImage: `url('${img}')` }}
                      />
                    ))}
                  </div>
              
                  {images.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentImageIndex((prev) => {
                            const prevIndex = prev - 1;
                            return prevIndex < 0 ? images.length - 1 : prevIndex;
                          });
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur text-white w-12 h-12 grid place-items-center hover:bg-black/70 transition-all shadow-lg z-10 text-xl"
                      >
                        ‹
                      </button>
                      <button
                        type="button"
                        onClick={() => {
                          setCurrentImageIndex((prev) => {
                            const nextIndex = prev + 1;
                            return nextIndex >= images.length ? 0 : nextIndex;
                          });
                        }}
                        className="absolute right-4 top-1/2 -translate-y-1/2 rounded-full bg-black/50 backdrop-blur text-white w-12 h-12 grid place-items-center hover:bg-black/70 transition-all shadow-lg z-10 text-xl"
                      >
                        ›
                      </button>
                      
                      {/* Indicateurs */}
                      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 bg-black/40 backdrop-blur rounded-full px-3 py-1.5">
                        {images.map((_, i) => (
                          <button
                            type="button"
                            key={i}
                            onClick={() => {
                              setCurrentImageIndex(i);
                            }}
                            className={`h-1.5 w-6 rounded-full transition-all ${
                              i === currentImageIndex ? "bg-white" : "bg-white/40 hover:bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivityPage;

