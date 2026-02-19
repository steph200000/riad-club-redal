import Card from "./Card";

const Installations = ({ onMore }) => (
  <section id="installations" className="mx-auto max-w-6xl px-4 py-20">
    <div className="text-center">
      <h2 className="text-4xl font-extrabold tracking-tight text-slate-900">Installations du club</h2>
      <p className="mt-4 text-slate-600 max-w-2xl mx-auto">
        Des espaces pensés pour les collaborateurs REDAL et leurs invités : pratiques sportives, détente
        en famille et moments de convivialité dans un cadre sécurisé au cœur de Rabat.
      </p>
    </div>

    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
      <Card
        title="Tennis"
        icon="🏆"
        desc="8 courts en terre battue dans un cadre arboré, adaptés à la pratique loisir comme à la compétition."
        bullets={[
          "Courts entretenus quotidiennement",
          "Éclairage nocturne pour le jeu après le travail",
          "Tournois internes et inter-entreprises",
        ]}
        img="/tennis.jpg"
        onMore={() => onMore("activity-tennis")}
      />
      <Card
        title="Padel"
        icon="🎾"
        desc="Un court de padel dernière génération pour découvrir ce sport dynamique en équipe."
        bullets={[
          "Revêtement de qualité et éclairage LED",
          "Location simple par créneaux horaires",
          "Cours collectifs et coaching individuel",
        ]}
        img="/padel.jpg"
        onMore={() => onMore("activity-padel")}
      />
      <Card
        title="Piscine"
        icon="🌊"
        desc="Un bassin semi-olympique idéal pour l'entraînement, la remise en forme et la détente en famille."
        bullets={[
          "Piscine 25 m avec lignes de nage",
          "Espace transats et zone enfants",
          "Surveillance par maître-nageur diplômé",
        ]}
        img="/pool.jpg"
        onMore={() => onMore("activity-piscine")}
      />
      <Card
        title="Restaurant"
        icon="🍽️"
        desc="Un espace de restauration chaleureux mêlant cuisine marocaine et internationale."
        bullets={[
          "Terrasse avec vue sur les courts",
          "Menus adaptés aux familles et aux sportifs",
          "Organisation de soirées et événements d'entreprise",
        ]}
        img="/restaurant.jpg"
        onMore={() => onMore("activity-restaurant")}
      />
    </div>
  </section>
);

export default Installations;


