export default function FeaturesSection() {
  const features = [
    {
      icon: "fa-store",
      title: "Boutique Personnalisable",
      description: "Créez une boutique qui reflète votre marque avec nos thèmes et options de personnalisation."
    },
    {
      icon: "fa-truck",
      title: "Intégration de Livraison",
      description: "Connectez votre boutique avec les services de livraison tunisiens pour une gestion fluide."
    },
    {
      icon: "fa-credit-card",
      title: "Paiements Électroniques",
      description: "Acceptez facilement les paiements en ligne avec nos intégrations de passerelles de paiement."
    },
    {
      icon: "fa-chart-bar",
      title: "Statistiques Détaillées",
      description: "Suivez vos performances et prenez des décisions éclairées avec nos tableaux de bord analytiques."
    },
    {
      icon: "fa-box",
      title: "Gestion des Commandes",
      description: "Gérez efficacement vos commandes, de la création à la livraison et aux retours."
    },
    {
      icon: "fa-search",
      title: "Optimisation SEO",
      description: "Améliorez votre visibilité en ligne avec nos outils d'optimisation pour les moteurs de recherche."
    }
  ];

  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Fonctionnalités Principales</h2>
          <p className="text-gray-600 mt-2">Tout ce dont vous avez besoin pour réussir en ligne</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="feature-card bg-white rounded-lg p-8 shadow-sm">
              <div className="feature-icon w-14 h-14 rounded-full flex items-center justify-center mb-6">
                <i className={`fas ${feature.icon} text-xl`}></i>
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}