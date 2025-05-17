import Link from 'next/link';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-primary to-blue-400 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Prêt à lancer votre boutique en ligne?</h2>
        <p className="text-xl mb-8 max-w-xl mx-auto">Rejoignez plus de 2,700 entrepreneurs tunisiens qui ont déjà commencé leur aventure e-commerce avec IG60.</p>
        <Link href="https://dashboard.ig60.com/register" className="bg-white text-primary px-8 py-3 rounded-md font-medium text-lg hover:bg-gray-100 transition-colors">
          Commencer Gratuitement
        </Link>
      </div>
    </section>
  );
}