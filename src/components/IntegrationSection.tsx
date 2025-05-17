'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

export default function IntegrationSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const deliveryServices = [
    {
      name: "FIRST DELIVERY",
      primaryColor: "#4ade80",
      secondaryColor: "#1e293b",
      tagline: "Livraison rapide et fiable"
    },
    {
      name: "ARAMEX",
      primaryColor: "#ef4444",
      secondaryColor: "#1e293b",
      tagline: "Livraison internationale et nationale"
    },
    {
      name: "POSTE TUNISIENNE",
      primaryColor: "#f59e0b",
      secondaryColor: "#0c4a6e",
      tagline: "Service de livraison national"
    },
    {
      name: "MBS EXPRESS",
      primaryColor: "#8b5cf6",
      secondaryColor: "#1e3a8a",
      tagline: "Livraison express dans toute la Tunisie"
    },
  ];

  // Detect when section becomes visible
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
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

  // Autoplay functionality
  useEffect(() => {
    if (isVisible) {
      const startAutoplay = () => {
        autoplayRef.current = setInterval(() => {
          setCurrentSlide((prev) => (prev + 1) % deliveryServices.length);
        }, 4000);
      };

      startAutoplay();

      return () => {
        if (autoplayRef.current) {
          clearInterval(autoplayRef.current);
        }
      };
    }
  }, [isVisible, deliveryServices.length]);

  // Manual navigation functions
  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    // Reset autoplay timer
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % deliveryServices.length);
      }, 4000);
    }
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + deliveryServices.length) % deliveryServices.length);
    // Reset autoplay timer
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % deliveryServices.length);
      }, 4000);
    }
  };

  const goToNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % deliveryServices.length);
    // Reset autoplay timer
    if (autoplayRef.current) {
      clearInterval(autoplayRef.current);
      autoplayRef.current = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % deliveryServices.length);
      }, 4000);
    }
  };

  const currentService = deliveryServices[currentSlide];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 max-w-3xl mx-auto">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">Intégration</span>

          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            Intégrez votre société de livraison
          </h2>
          <p className="text-xl text-gray-600">
            Connectez votre boutique avec les principaux services de livraison en Tunisie
          </p>
        </div>

        <div className="w-full mx-auto relative">
          {/* Main carousel container with 3D effect */}
          <div className="relative bg-white shadow-md rounded-xl overflow-hidden perspective-1000 transform-gpu py-12">
            {/* Background gradient that changes with carousel */}
            <div
              className="absolute inset-0 opacity-10 transition-colors duration-700"
              style={{ backgroundColor: currentService.primaryColor }}
            ></div>

            <div className="relative p-6 sm:p-10">

              <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-center">
                {/* Logo area */}
                <div className="col-span-1 md:col-span-2">
                  <div className={`flex flex-col items-center md:items-start transition-opacity duration-700 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="w-32 h-32 flex items-center justify-center mb-4 rounded-full bg-gray-50 relative shadow-inner">
                      <div className="absolute inset-0 rounded-full" style={{ backgroundColor: currentService.primaryColor, opacity: 0.1 }}></div>

                      {/* Logo text */}
                      <div className="text-center px-2 transform transition-transform duration-500" style={{ transform: `scale(${isVisible ? 1 : 0.7})` }}>
                        <div className="font-bold text-2xl" style={{ color: currentService.primaryColor }}>
                          {currentService.name.split(' ')[0]}
                        </div>
                        {currentService.name.split(' ')[1] && (
                          <div className="font-semibold text-lg" style={{ color: currentService.secondaryColor }}>
                            {currentService.name.split(' ')[1]}
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tagline */}
                    <p className="text-gray-600 text-center md:text-left">
                      {currentService.tagline}
                    </p>
                  </div>
                </div>

                {/* Content area */}
                <div className="col-span-1 md:col-span-3">
                  <div className={`transition-all duration-500 delay-200 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <h3 className="text-2xl font-bold mb-4" style={{ color: currentService.primaryColor }}>
                      Synchronisation automatique
                    </h3>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: currentService.primaryColor + '20' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={currentService.primaryColor}>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">Transfert automatique des commandes vers {currentService.name}</p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: currentService.primaryColor + '20' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={currentService.primaryColor}>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">Suivi en temps réel de l'état de vos livraisons</p>
                      </div>

                      <div className="flex items-start">
                        <div className="flex-shrink-0 h-6 w-6 rounded-full flex items-center justify-center mr-3" style={{ backgroundColor: currentService.primaryColor + '20' }}>
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill={currentService.primaryColor}>
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <p className="text-gray-700">Notification automatique à vos clients</p>
                      </div>
                    </div>

                    <div className="flex justify-center md:justify-start">
                      <Link href="#"
                        className="px-6 py-3 rounded-lg font-medium text-white shadow-lg transform transition hover:-translate-y-1 hover:shadow-xl"
                        style={{ backgroundColor: currentService.primaryColor }}>
                        Intégrer maintenant
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div>
            {/* Navigation arrows */}
            <div className="absolute bottom-0 right-2 -translate-y-1/2 -translate-x-1/2 md:-translate-x-6">
              <button
                onClick={goToPrevSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none transform transition hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
            </div>

            <div className="absolute bottom-0 right-0 -translate-y-1/2 translate-x-1/2 md:translate-x-6">
              <button
                onClick={goToNextSlide}
                className="w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center text-gray-700 hover:text-gray-900 focus:outline-none transform transition hover:scale-110">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>

            {/* Indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {deliveryServices.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none
                  ${currentSlide === index
                      ? `w-6 bg-orange-500`
                      : `bg-gray-300 hover:bg-gray-400`}`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}