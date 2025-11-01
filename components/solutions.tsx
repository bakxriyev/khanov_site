export default function Solutions() {
  const solutions = [
    {
      icon: "📞",
      title: "CRM + IP-telefoniya",
      description: "Barcha murojaat va qo'ng'iroqlar nazoratda, analitika va hisobotlar. Hodimlar kontroli.",
    },
    {
      icon: "🤖",
      title: "CRM + AI (sun'iy intellekt)",
      description:
        "AI-yordamchi 24/7 mijozlarga Instagram va telegram orqali javob beradi, kechasi ham lead yo'qolmaydi.",
    },
    {
      icon: "📦",
      title: "MoySklad + CRM",
      description: "Ombor va savdoni bir tizimda boshqarish — tartib va aniqlik.",
    },
    {
      icon: "🎯",
      title: "Target + CRM",
      description: "Reklama + CRM voronkasi = nazorat ostidagi barqaror lead oqimi. (Professional targetolog)",
    },
  ]

  return (
    <section className=" bg-gradient-to-b from-gray-600 via-gray-400 to-gray-480  py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl uppercase sm:text-4xl md:text-5xl font-black text-white mb-8 md:mb-12 text-center">
          💼 Sizga nima taklif qilamiz?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {solutions.map((solution, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-600 to-gray-700 border-2 border-primary/40 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl md:text-5xl mb-3 md:mb-4">{solution.icon}</div>
              <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">{solution.title}</h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">{solution.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
