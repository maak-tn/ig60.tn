import Link from 'next/link';

export default function PricingSection() {
  const features = [
    "Produits illimités",
    "Commandes illimitées",
    "Clients illimités",
    "Utilisateurs illimités",
    "Gestion de stock",
    "Gestion des commandes",
    "Exportation de commandes",
    "Service clients 24/7",
    "Statistiques détaillées",
    "Personnalisation des thèmes",
    "Optimisation SEO",
    "SSL gratuit",
    "Liaison avec Facebook Ads",
    "Paiements électroniques",
    "Notifications des ventes",
    "Dropshipping"
  ];

  // Split features into two columns
  const leftFeatures = features.slice(0, features.length / 2);
  const rightFeatures = features.slice(features.length / 2);

  return (
    <section id="pricing" className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold">Tarifs simples et transparents</h2>
          <p className="text-gray-600 mt-2">Commencez gratuitement, évoluez selon vos besoins</p>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-primary py-6 px-8 text-white text-center">
            <h3 className="text-xl font-bold">1 JETON / COMMANDE</h3>
            <p>Prix du Jeton à partir de 0.500 TND</p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <ul className="space-y-3">
                  {leftFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <ul className="space-y-3">
                  {rightFeatures.map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <i className="fas fa-check text-green-500 mr-2"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link href="#" className="btn-primary px-8 py-3 rounded-md font-medium">
                Créez votre boutique gratuitement
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}