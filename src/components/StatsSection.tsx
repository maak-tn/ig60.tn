"use client";
import { useState, useEffect, useRef } from 'react';

export default function StatsSection() {
  const [animate, setAnimate] = useState(false);
  const sectionRef = useRef(null);

  const stats = [
    {
      title: "Boutiques créées",
      value: "2745+",
      icon: "fas fa-store",
      color: "from-blue-500 to-indigo-600"
    },
    {
      title: "Ventes totales",
      value: "10,811 DT",
      icon: "fas fa-chart-line",
      color: "from-emerald-500 to-teal-600"
    },
    {
      title: "Visiteurs",
      value: "8877+",
      icon: "fas fa-users",
      color: "from-amber-500 to-orange-600"
    },
    {
      title: "Taux de conversion",
      value: "2.6%",
      icon: "fas fa-percentage",
      color: "from-pink-500 to-rose-600"
    }
  ];

  // Animation trigger on scroll into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimate(true);
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

  return (
    <section ref={sectionRef} className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">Statistiques</span>
          <h2 className="text-3xl font-bold text-gray-900">Nos performances</h2>
          <p className="mt-3 text-lg text-gray-600 max-w-2xl mx-auto">
            Des chiffres qui témoignent de notre succès et de la confiance de nos clients
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`relative overflow-hidden bg-white rounded-xl shadow-md p-6 transform transition-all duration-500 ease-in-out hover:shadow-xl hover:-translate-y-1 ${animate ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                  <i className={`${stat.icon} text-white text-lg`}></i>
                </div>

                {/* Decorative pattern */}
                <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 opacity-10">
                  <div className={`w-full h-full rounded-full bg-gradient-to-br ${stat.color}`}></div>
                </div>
              </div>

              <h3 className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.title}</h3>
              <p className="mt-2 text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-700">
                {stat.value}
              </p>

              {/* Subtle progress indicator */}
              <div className="mt-4 h-1 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${stat.color} transition-all duration-1000 ease-out`}
                  style={{
                    width: animate ? '100%' : '0%',
                    transitionDelay: `${(index * 150) + 300}ms`
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}