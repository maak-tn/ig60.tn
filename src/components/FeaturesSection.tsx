'use client';
import { useState, useEffect, useRef } from 'react';

export default function FeaturesSection() {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Once animation is triggered, we can disconnect the observer
          observer.disconnect();
        }
      },
      { threshold: 0.2, rootMargin: "0px 0px -100px 0px" }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const features = [
    {
      icon: "fa-store",
      title: "Boutique Personnalisable",
      description: "Créez une boutique qui reflète votre marque avec nos thèmes et options de personnalisation.",
      color: "bg-gradient-to-br from-blue-400 to-indigo-600",
      textColor: "text-blue-500"
    },
    {
      icon: "fa-truck",
      title: "Intégration de Livraison",
      description: "Connectez votre boutique avec les services de livraison tunisiens pour une gestion fluide.",
      color: "bg-gradient-to-br from-emerald-400 to-teal-600",
      textColor: "text-emerald-500"
    },
    {
      icon: "fa-credit-card",
      title: "Paiements Électroniques",
      description: "Acceptez facilement les paiements en ligne avec nos intégrations de passerelles de paiement.",
      color: "bg-gradient-to-br from-amber-400 to-orange-600",
      textColor: "text-amber-500"
    },
    {
      icon: "fa-chart-bar",
      title: "Statistiques Détaillées",
      description: "Suivez vos performances et prenez des décisions éclairées avec nos tableaux de bord analytiques.",
      color: "bg-gradient-to-br from-rose-400 to-pink-600",
      textColor: "text-rose-500"
    },
    {
      icon: "fa-box",
      title: "Gestion des Commandes",
      description: "Gérez efficacement vos commandes, de la création à la livraison et aux retours.",
      color: "bg-gradient-to-br from-purple-400 to-violet-600",
      textColor: "text-purple-500"
    },
    {
      icon: "fa-search",
      title: "Optimisation SEO",
      description: "Améliorez votre visibilité en ligne avec nos outils d'optimisation pour les moteurs de recherche.",
      color: "bg-gradient-to-br from-cyan-400 to-blue-600",
      textColor: "text-cyan-500"
    }
  ];

  return (
    <section ref={sectionRef} id="features-section" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">Fonctionnalités</span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Tout ce dont vous avez besoin pour réussir</h2>
          <p className="text-xl text-gray-600">Notre plateforme offre tous les outils essentiels pour développer votre commerce en ligne</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl transition-all duration-200 ease-in-out overflow-hidden ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                } ${activeFeature === index ? 'scale-[1.02] shadow-xl' : 'shadow-md hover:shadow-lg'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setActiveFeature(index)}
              onMouseLeave={() => setActiveFeature(null)}
            >
              {/* Top accent bar */}
              <div className={`h-2 w-full ${feature.color}`}></div>

              <div className="p-8">
                {/* Icon */}
                <div className={`relative inline-flex mb-6 rounded-2xl p-4 ${activeFeature === index ? feature.color : 'bg-gray-100'} transition-colors duration-300`}>
                  <i className={`fas ${feature.icon} text-xl ${activeFeature === index ? 'text-white' : feature.textColor}`}></i>

                  {/* Decorative elements */}
                  <div className="absolute top-1 right-1 w-2 h-2 rounded-full bg-white opacity-40"></div>
                  <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-white opacity-30"></div>
                </div>

                {/* Content */}
                <h3 className={`text-xl font-bold mb-3 group-hover:text-blue-600 transition-colors ${feature.textColor}`}>
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>

                {/* Action button */}
                <div className="mt-6 flex items-center">
                  <span className={`text-sm font-medium ${feature.textColor} cursor-pointer group flex items-center transition-all duration-300`}>
                    En savoir plus
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className={`h-4 w-4 ml-1 transform transition-transform duration-300 ${activeFeature === index ? 'translate-x-1' : ''}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>

                {/* Background decoration */}
                <div className="absolute -bottom-12 -right-12 w-32 h-32 rounded-full opacity-5 bg-current"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}