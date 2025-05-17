'use client';
import { useState, useEffect, useRef } from 'react';

export default function ComparisonSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedValues, setAnimatedValues] = useState([0, 0, 0]);
  const sectionRef = useRef(null);

  const scoreData = [
    {
      title: "Score des ventes",
      percentage: 59,
      icon: "fa-chart-line",
      description: "Par rapport à des boutiques similaires",
      gradient: "from-emerald-400 to-teal-500",
      shadowColor: "shadow-emerald-200",
      bgColor: "bg-emerald-50",
      badgeColor: "bg-emerald-100 text-emerald-800",
      borderColor: "border-teal-500"
    },
    {
      title: "Score des visiteurs",
      percentage: 81,
      icon: "fa-users",
      description: "Classement supérieur à 81% des boutiques",
      gradient: "from-blue-400 to-indigo-500",
      shadowColor: "shadow-blue-200",
      bgColor: "bg-blue-50",
      badgeColor: "bg-blue-100 text-blue-800",
      borderColor: "border-indigo-500"
    },
    {
      title: "Score de conversion",
      percentage: 36,
      icon: "fa-percentage",
      description: "Potentiel d'amélioration élevé",
      gradient: "from-amber-400 to-orange-500",
      shadowColor: "shadow-amber-200",
      bgColor: "bg-amber-50",
      badgeColor: "bg-amber-100 text-amber-800",
      borderColor: "border-orange-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
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

  // Animate the percentages when section becomes visible
  useEffect(() => {
    if (isVisible) {
      // Start with zeros
      setAnimatedValues([0, 0, 0]);

      // Animate each percentage separately with different durations
      const timers = scoreData.map((score, index) => {
        const duration = 2000 + (index * 300); // Stagger the animations
        const steps = 60; // Total animation steps
        const increment = score.percentage / steps;
        const stepTime = duration / steps;

        let currentStep = 0;
        const timer = setInterval(() => {
          if (currentStep < steps) {
            setAnimatedValues(prev => {
              const newValues = [...prev];
              newValues[index] = Math.min(Math.round(increment * currentStep), score.percentage);
              return newValues;
            });
            currentStep++;
          } else {
            clearInterval(timer);
          }
        }, stepTime);

        return timer;
      });

      // Clean up all timers when component unmounts or when dependencies change
      return () => {
        timers.forEach(timer => clearInterval(timer));
      };
    }
  }, [isVisible]);

  // Get the appropriate text and background color based on the score percentage
  const getScoreIndicator = (percentage: number) => {
    if (percentage >= 70) {
      return { text: 'Excellent', color: 'text-emerald-600', bgColor: 'bg-emerald-100' };
    } else if (percentage >= 50) {
      return { text: 'Bon', color: 'text-blue-600', bgColor: 'bg-blue-100' };
    } else {
      return { text: 'À améliorer', color: 'text-amber-600', bgColor: 'bg-amber-100' };
    }
  };

  return (
    <section ref={sectionRef} className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1 px-3 rounded-full text-sm font-medium bg-blue-100 text-blue-800 mb-3">
            Performance
          </span>
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Comparez vos performances
          </h2>
          <p className="text-xl text-gray-600">
            Suivez votre progression par rapport aux autres boutiques et identifiez vos points forts
          </p>
        </div>

        {/* Score Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-12">
          {scoreData.map((score, index) => {
            const scoreIndicator = getScoreIndicator(score.percentage);

            return (
              <div key={index} className={`relative transform transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`} style={{ transitionDelay: `${index * 150}ms` }}>
                {/* Card */}
                <div className={`rounded-xl overflow-hidden ${score.bgColor} ${score.shadowColor} shadow-lg relative`}>
                  {/* Top Gradient Bar */}
                  <div className={`h-2 w-full bg-gradient-to-r ${score.gradient}`}></div>

                  {/* Percentage display */}
                  <div className="px-6 pt-6 pb-8">
                    <div className="flex justify-between items-center mb-3">
                      <h3 className="text-xl font-bold text-gray-800">{score.title}</h3>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${score.badgeColor}`}>
                        <i className={`fas ${score.icon}`}></i>
                      </div>
                    </div>

                    {/* Main metric display */}
                    <div className="relative mt-6 mb-6">
                      <div className="mb-2 flex justify-between items-center">
                        <span className="text-sm text-gray-500">{score.description}</span>
                        <span className={`text-sm font-medium px-2 py-1 rounded-full ${scoreIndicator.bgColor} ${scoreIndicator.color}`}>
                          {scoreIndicator.text}
                        </span>
                      </div>

                      {/* Percentage bar */}
                      <div className="relative h-5 w-full bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${score.gradient} rounded-full transition-all duration-1000 ease-out flex items-center justify-end pr-2`}
                          style={{ width: `${isVisible ? animatedValues[index] : 0}%` }}
                        >
                          <span className="text-xs font-medium text-white">
                            {animatedValues[index]}%
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Visualizing user position */}
                    <div className="mt-8">
                      <div className="relative h-3 bg-gray-200 rounded-full mb-4">
                        {/* Dots representing other users */}
                        {Array.from({ length: 8 }).map((_, i) => {
                          const position = (i + 1) * 11;
                          return (
                            <div
                              key={i}
                              className={`absolute w-2 h-2 rounded-full bg-gray-400 transform -translate-y-1/2 top-1/2`}
                              style={{
                                left: `${position}%`,
                                opacity: position < score.percentage ? 0.3 : 0.6
                              }}
                            ></div>
                          );
                        })}

                        {/* User's position */}
                        <div
                          className={`absolute w-4 h-4 rounded-full bg-white border-2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 shadow-md animate-pulse transition-all duration-1000 ${score.borderColor}`}
                          style={{
                            left: `${isVisible ? animatedValues[index] : 0}%`
                          }}
                        ></div>
                      </div>

                      <div className="flex justify-between text-sm text-gray-500">
                        <span>0%</span>
                        <span>50%</span>
                        <span>100%</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Floating info box (desktop only) */}
                <div className={`absolute -bottom-6 right-6 bg-white rounded-lg shadow-lg p-3 transform transition-all duration-500 hidden md:block ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  }`} style={{ transitionDelay: `${(index * 150) + 400}ms` }}>
                  <div className="flex items-center space-x-2">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center ${score.badgeColor}`}>
                      <i className="fas fa-arrow-trend-up text-sm"></i>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-800">
                        {score.percentage > 50 ? '+' : ''}{score.percentage - 50}%
                        <span className="text-gray-500 font-normal ml-1">vs moyenne</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}