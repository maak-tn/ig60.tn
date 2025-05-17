export default function ComparisonSection() {
  const scoreData = [
    {
      title: "Score des ventes",
      percentage: 59,
      gradient: "from-yellow-400 to-green-500"
    },
    {
      title: "Score des visiteurs",
      percentage: 81,
      gradient: "from-yellow-400 to-green-500"
    },
    {
      title: "Score de conversion",
      percentage: 36,
      gradient: "from-red-400 to-yellow-500"
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold">Comparez vos performances</h2>
          <p className="text-gray-600 mt-2">Suivez votre progression par rapport aux autres boutiques</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {scoreData.map((score, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6">
              <h3 className="text-lg font-semibold mb-4 text-center">{score.title}</h3>
              <div className="relative pt-1">
                <div className="overflow-hidden h-4 mb-4 text-xs flex rounded-full bg-gray-200">
                  <div
                    style={{ width: `${score.percentage}%` }}
                    className={`shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-gradient-to-r ${score.gradient}`}
                  ></div>
                </div>
                <div className="text-center">
                  <span className="text-3xl font-bold">{score.percentage}%</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}