import Link from 'next/link';

export default function IntegrationSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Intégrez votre société de livraison</h2>
          <p className="text-gray-600 mt-2">Connectez votre boutique avec les services de livraison locaux</p>
        </div>

        <div className="flex justify-center">
          <div className="bg-white rounded-lg shadow-md p-8 max-w-2xl w-full">
            <div className="text-center mb-8">
              <svg width="300" height="100" viewBox="0 0 300 100" xmlns="http://www.w3.org/2000/svg">
                {/* Background shape */}
                <rect x="0" y="0" width="300" height="100" rx="5" fill="#f8fafc" />

                {/* "FIRST DELIVERY" Logo */}
                <text x="150" y="45" fontFamily="Arial, sans-serif" fontSize="32" fontWeight="bold" textAnchor="middle" fill="#4ade80">FIRST</text>
                <text x="150" y="75" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="bold" textAnchor="middle" fill="#1e293b">DELIVERY</text>

                {/* Decorative Elements */}
                <path d="M50,50 L80,50" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />
                <path d="M220,50 L250,50" stroke="#4ade80" strokeWidth="4" strokeLinecap="round" />

                {/* Truck Icon */}
                <rect x="100" y="30" width="35" height="20" rx="3" fill="#4ade80" />
                <rect x="135" y="35" width="15" height="15" rx="2" fill="#4ade80" />
                <circle cx="110" cy="55" r="5" fill="#1e293b" />
                <circle cx="130" cy="55" r="5" fill="#1e293b" />

                {/* Package Icon */}
                <rect x="165" y="35" width="20" height="20" rx="2" fill="#fbbf24" />
                <line x1="165" y1="45" x2="185" y2="45" stroke="#1e293b" strokeWidth="1" />
                <line x1="175" y1="35" x2="175" y2="55" stroke="#1e293b" strokeWidth="1" />
              </svg>
            </div>
            <p className="text-center text-gray-600 mb-6">
              Synchronisez automatiquement vos commandes avec les principaux services de livraison en Tunisie pour une gestion sans effort
            </p>
            <div className="text-center">
              <Link href="#" className="btn-primary px-6 py-2 rounded-md font-medium">
                En savoir plus
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}