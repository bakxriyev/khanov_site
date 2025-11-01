export default function Benefits() {
  const benefits = [
    {
      icon: "🏆",
      title: "O'zbekiston bo'ylab 150+ loyiha",
      description: "Joriy etish tajribasi bilan biz sizni eng yaxshi natija olamiz.",
    },
    {
      icon: "⚙️",
      title: "Kompleks yechimlar",
      description: "Targetdan AI gacha — biz barcha sohani qamrab olamiz.",
    },
    {
      icon: "📈",
      title: "Natija kafolati",
      description: "Har bir reklama natijasi CRMda ko'rinadi va raporti tayyor.",
    },
  ]

  return (
    <section className="bg-gradient-to-b  to-gray-600 py-4 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl text-black md:text-5xl font-black  mb-12 md:mb-16 text-center">
          ✅ Nega aynan biz?
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
          {benefits.map((benefit, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-gray-600 to-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-accent/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="text-5xl md:text-6xl mb-4 md:mb-6">{benefit.icon}</div>
              <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{benefit.title}</h3>
              <p className="text-gray-200 leading-relaxed text-sm md:text-base">{benefit.description}</p>
            </div>
          ))}
        </div>

        <div className="border-t-2  border-primary/30 pt-6 md:pt-8 text-center bg-gradient-to-r from-gray-900 to-grag-600 rounded-xl md:rounded-2xl p-6 md:p-8">
          <p className="text-white text-base md:text-lg leading-relaxed">
            <span className="font-bold block mb-2">
              🌐 Biz B2B, ishlab chiqarish, e-commerce (online, offlayn do'kon) va xizmat ko'rsatish sohalari bilan
              ishlaymiz.
            </span>
          </p>
        </div>
      </div>
    </section>
  )
}
