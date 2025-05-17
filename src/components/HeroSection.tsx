import Link from 'next/link';

export default function HeroSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center">
        <div className="flex flex-col w-full md:w-1/2 justify-center items-start py-8">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            <span className="text-gradient">Créez votre boutique</span> en ligne sans coder
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Démarrez votre activité de vente en ligne sans connaissances en programmation ou en design en créant votre propre site e-Commerce professionnel.
          </p>
          <Link href="https://dashboard.ig60.com/register" className="btn-primary px-8 py-3 rounded-md font-medium text-lg">
            Commencer Gratuitement
          </Link>
        </div>
        <div className="w-full md:w-1/2 py-8 text-center">
          <svg className="hero-image mx-auto" width="600" height="420" viewBox="0 0 600 420" xmlns="http://www.w3.org/2000/svg">
            {/* Background */}
            <rect x="0" y="0" width="600" height="420" rx="8" fill="#f8fafc" />

            {/* Computer Screen */}
            <rect x="50" y="60" width="320" height="240" rx="5" fill="#fff" stroke="#e2e8f0" strokeWidth="2" />
            <rect x="70" y="90" width="280" height="180" rx="2" fill="#f1f5f9" />

            {/* Dashboard Elements */}
            <rect x="90" y="110" width="100" height="20" rx="3" fill="#0d8aff" opacity="0.8" />
            <rect x="90" y="140" width="240" height="8" rx="2" fill="#cbd5e1" />
            <rect x="90" y="160" width="160" height="8" rx="2" fill="#cbd5e1" />
            <rect x="90" y="180" width="200" height="8" rx="2" fill="#cbd5e1" />
            <rect x="90" y="200" width="180" height="8" rx="2" fill="#cbd5e1" />
            <rect x="90" y="220" width="220" height="8" rx="2" fill="#cbd5e1" />

            {/* Chart Elements */}
            <rect x="260" y="160" width="70" height="60" rx="3" fill="#0d8aff" opacity="0.7" />
            <rect x="230" y="180" width="20" height="40" rx="3" fill="#0d8aff" opacity="0.5" />
            <rect x="200" y="200" width="20" height="20" rx="3" fill="#0d8aff" opacity="0.3" />

            {/* Keyboard */}
            <rect x="100" y="310" width="220" height="20" rx="5" fill="#e2e8f0" />

            {/* Computer Stand */}
            <rect x="195" y="300" width="30" height="10" rx="1" fill="#cbd5e1" />
            <rect x="200" y="310" width="20" height="30" rx="1" fill="#94a3b8" />

            {/* Person */}
            <circle cx="450" cy="120" r="40" fill="#fde68a" />
            <rect x="410" y="170" width="80" height="120" rx="10" fill="#d97706" />
            <rect x="390" y="180" width="20" height="80" rx="10" fill="#fde68a" />
            <rect x="490" y="180" width="20" height="80" rx="10" fill="#fde68a" />

            {/* Shopping Boxes */}
            <rect x="400" y="300" width="60" height="60" rx="5" fill="#fecaca" />
            <rect x="410" y="310" width="40" height="40" rx="3" fill="#ef4444" />
            <rect x="470" y="280" width="50" height="50" rx="5" fill="#bfdbfe" />
            <rect x="480" y="290" width="30" height="30" rx="3" fill="#3b82f6" />
            <rect x="530" y="320" width="40" height="40" rx="5" fill="#d8b4fe" />
            <rect x="535" y="325" width="30" height="30" rx="3" fill="#8b5cf6" />
          </svg>
        </div>
      </div>
    </section>
  );
}