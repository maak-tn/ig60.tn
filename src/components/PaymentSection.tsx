export default function PaymentsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Acceptez les paiements électroniques</h2>
          <p className="text-gray-600 mt-2">Plusieurs options de paiement pour vos clients</p>
        </div>

        <div className="flex justify-center space-x-8">
          <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="100" height="40" rx="4" fill="#0066b2" />
            <rect x="30" y="25" width="60" height="30" rx="2" fill="#fff" />
            <path d="M45,40 L55,40 L57,35 L59,45 L61,35 L63,45 L65,35 L67,40 L75,40" stroke="#0066b2" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>

          <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <circle cx="45" cy="40" r="20" fill="#eb001b" />
            <circle cx="75" cy="40" r="20" fill="#f79e1b" />
            <path d="M60,25 A20,20 0 0,0 60,55 A20,20 0 0,0 60,25" fill="#ff5f00" />
          </svg>

          <svg width="120" height="80" viewBox="0 0 120 80" xmlns="http://www.w3.org/2000/svg">
            <rect x="10" y="20" width="100" height="40" rx="4" fill="#ffaa33" />
            <text x="60" y="48" fontFamily="Arial, sans-serif" fontSize="18" fontWeight="bold" textAnchor="middle" fill="#fff">E-DINAR</text>
          </svg>
        </div>
      </div>
    </section>
  );
}