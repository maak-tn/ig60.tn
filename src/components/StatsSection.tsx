export default function StatsSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-sm stat-card">
            <p className="text-gray-500 text-sm">Boutiques créées</p>
            <p className="text-3xl font-bold text-gray-800">2745+</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm stat-card">
            <p className="text-gray-500 text-sm">Ventes totales</p>
            <p className="text-3xl font-bold text-gray-800">10,811 DT</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm stat-card">
            <p className="text-gray-500 text-sm">Visiteurs</p>
            <p className="text-3xl font-bold text-gray-800">8877+</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm stat-card">
            <p className="text-gray-500 text-sm">Taux de conversion</p>
            <p className="text-3xl font-bold text-gray-800">2.6%</p>
          </div>
        </div>
      </div>
    </section>
  );
}