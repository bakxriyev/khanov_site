"use client";

import { motion } from "framer-motion";

const solutions = [
  {
    icon: "📞",
    title: "CRM + IP-telefoniya",
    description:
      "Barcha murojaat va qo'ng'iroqlar nazoratda, analitika va hisobotlar. Hodimlar kontroli.",
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
    description:
      "Ombor va savdoni bir tizimda boshqarish — tartib va aniqlik.",
  },
  {
    icon: "🎯",
    title: "Target + CRM",
    description:
      "Reklama + CRM voronkasi = nazorat ostidagi barqaror lead oqimi. (Professional targetolog)",
  },
];

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
    description:
      "Har bir reklama natijasi CRMda ko'rinadi va raporti tayyor.",
  },
];

const clientLogos = [
  { icon: "🏢", label: "Kompaniya 1" },
  { icon: "🏪", label: "Do'kon" },
  { icon: "🏭", label: "Ishlab chiqarish" },
  { icon: "💼", label: "Xizmat" },
  { icon: "🛍️", label: "E-commerce" },
  { icon: "📱", label: "Digital" },
  { icon: "🌟", label: "Premium" },
  { icon: "⭐", label: "Elit" },
  { icon: "🏆", label: "Top" },
];

export default function Home() {
  // har bir qator uchun elementlarni ikki marta takrorlaymiz (smooth looping)
  const doubledLogos = [...clientLogos, ...clientLogos];

  // har bir qatordagi animatsiya sozlamalari (yo'nalish va tezlik)
  const rowTransition = (rowIdx) => ({
    x: rowIdx % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
    transition: {
      repeat: Infinity,
      ease: "linear",
      duration: 20 + rowIdx * 6, // qatorda ozgina farq bilan (1-qator tezroq)
    },
  });

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b from-gray-700 via-gray-600 to-gray-800 flex items-center justify-center px-4 md:px-6 lg:px-8 pt-8 md:pt-12 pb-8 md:pb-12">
        <div className="flex flex-col items-center justify-center w-full gap-6 md:gap-8 max-w-4xl">
          <div className="text-center space-y-3 md:space-y-4 w-full">
            <h1 className="text-3xl uppercase sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Savdo bo'limini avtomatlashtirish, sotuvlarni oshirish
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl -mb-12 text-gray-300 font-semibold leading-relaxed">
              CRM + IP Telefoniya + AI, MoySklad + CRM, Target + CRM — tayyor kompleks yechimlar, bu siz kutmagan
              imkoniyat.
            </p>
          </div>

          <div className="flex justify-center items-center w-full">
            <img
              src="/photo.jpg"
              alt="CRM Dashboard"
              className="w-full max-w-xs sm:max-w-sm -mb-12 md:max-w-md lg:max-w-lg rounded-2xl"
            />
          </div>

          <div className="space-y-2 md:space-y-4">
            <h2 className="text-xl bg-white text-center sm:text-3xl md:text-2xl lg:text-5xl font-black text-black px-6 py-3 rounded-xl leading-tight  uppercase">
              Call-markaz operatori va sotuv menedjeri
            </h2>
          </div>

          <div className="flex flex-col gap-3 md:gap-4 text-center w-full max-w-lg px-4 md:px-0">
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-4 md:p-6 lg:p-8 text-white shadow-lg">
              <p className="text-base text-center uppercase text-white sm:text-lg md:text-xl font-bold">
                🎁 20-noyabrgacha 1+1 aksiyasi davom etadi.
              </p>
              <p className="text-xs sm:text-sm text-blue-100 mt-3 md:mt-4">
                Ariza qoldiring — bepul konsultatsiya qilamiz va eng mos yechimni tanlab beramiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="bg-gradient-to-b from-gray-800 via-gray-700 to-gray-800 py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl uppercase sm:text-4xl md:text-5xl font-black text-white mb-8 md:mb-12 text-center">
            💼 Sizga nima taklif qilamiz?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-blue-500/30 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-blue-500/60"
              >
                <div className="text-4xl md:text-5xl mb-3 md:mb-4">{solution.icon}</div>
                <h3 className="text-lg md:text-2xl font-bold text-white mb-2 md:mb-3">{solution.title}</h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-700 py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-12 md:mb-16 text-center">
            ✅ Nega aynan biz?
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 border-2 border-green-500/30 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 hover:border-green-500/60"
              >
                <div className="text-5xl md:text-6xl mb-4 md:mb-6">{benefit.icon}</div>
                <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{benefit.title}</h3>
                <p className="text-gray-200 leading-relaxed text-sm md:text-base">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-green-500/30 pt-6 md:pt-8 text-center bg-gradient-to-r from-gray-800 to-gray-700 rounded-xl md:rounded-2xl p-6 md:p-8">
            <p className="text-white text-base md:text-lg leading-relaxed">
              <span className="font-bold block mb-2">
                🌐 Biz B2B, ishlab chiqarish, e-commerce (online, offlayn do'kon) va xizmat ko'rsatish sohalari bilan
                ishlaymiz.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* Before/After Section */}
      <section className="bg-gradient-to-b from-gray-700 to-gray-800 py-12 md:py-20 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 md:mb-16 text-center">
            📊 Avtomatlashtirishdan keyin farqi
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 border-2 border-red-500 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-4xl md:text-5xl mb-4">❌</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Oldin</h3>
              <ul className="space-y-3 md:space-y-4 text-red-100 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✕</span>
                  <span className="font-medium">Excelda chalkashlik va tartibsizlik</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✕</span>
                  <span className="font-medium">Yo'qolgan qo'ng'iroqlar va leadlar</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✕</span>
                  <span className="font-medium">Javobsiz mijozlar va taqoratsiz harakat</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✕</span>
                  <span className="font-medium">24/7 joylanmagan support</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-green-800 border-2 border-green-500 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-4xl md:text-5xl mb-4">✅</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Keyin</h3>
              <ul className="space-y-3 md:space-y-4 text-green-100 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✓</span>
                  <span className="font-medium">CRM + IP + AI → toza hisobotlar va analitika</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✓</span>
                  <span className="font-medium">24/7 avtomatik arizalar va leadlar jami</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✓</span>
                  <span className="font-medium">AI-yordamchi Telegram va Instagramda soatimada javob</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✓</span>
                  <span className="font-medium">Sotuvlar sezilarli darajada oshadi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section (marquee-like animated 3 rows) */}
      <section className="bg-gradient-to-b from-gray-800 to-gray-700 py-12 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 md:mb-12 text-center">
            🎯 Case va mijoz fikrlari
          </h2>

          <div className="space-y-6">
            {[0, 1, 2].map((rowIdx) => (
              <div key={rowIdx} className="w-full overflow-hidden">
                <motion.div
                  className="flex items-center"
                  animate={rowTransition(rowIdx)}
                  // make sure animation restarts cleanly on remount
                  style={{ willChange: "transform" }}
                >
                  {doubledLogos.map((item, idx) => (
                    <div
                      key={`${rowIdx}-${idx}`}
                      className="bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center justify-center h-28 md:h-32 min-w-[140px] md:min-w-[180px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-400 mx-2"
                    >
                      <span className="text-3xl md:text-4xl mb-2">{item.icon}</span>
                      <span className="text-xs md:text-sm font-semibold text-white text-center">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>

          <div className="text-center mt-10">
            <p className="text-base md:text-lg text-gray-300 font-medium">
              📝 Qo'shimcha case va mijoz fikrlari tez orada qo'shiladi
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 py-12 md:py-20 px-4 md:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight">
            🎁 20-noyabrgacha — 1+1 xizmatimizni harid qiling
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed">
            Sotuvga sezilarli darajada ta'sir o'tqizing. Ariza qoldiring, biz sizning biznesingiz uchun eng mos
            avtomatlashtirish yechimini va byudjet hisobini tayyorlaymiz.
          </p>

          <form className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 text-white shadow-2xl max-w-md mx-auto">
            <div className="space-y-3 md:space-y-4">
              <input
                type="text"
                placeholder="👤 Ismingiz"
                className="w-full px-4 py-2 md:py-3 border-2 border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 font-medium bg-gray-700 text-white placeholder-gray-400 text-sm md:text-base transition-all duration-300"
              />
              <input
                type="tel"
                placeholder="📞 Telefon raqamingiz"
                className="w-full px-4 py-2 md:py-3 border-2 border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 font-medium bg-gray-700 text-white placeholder-gray-400 text-sm md:text-base transition-all duration-300"
              />
              <input
                type="text"
                placeholder="🏢 Yo'nalish va korxona nomi"
                className="w-full px-4 py-2 md:py-3 border-2 border-blue-500/30 rounded-lg focus:outline-none focus:border-blue-500 font-medium bg-gray-700 text-white placeholder-gray-400 text-sm md:text-base transition-all duration-300"
              />

              <label className="flex items-center gap-2 md:gap-3 pt-1 md:pt-2 cursor-pointer">
                <input
                  type="checkbox"
                  className="w-4 md:w-5 h-4 md:h-5 rounded border-2 border-blue-500 accent-blue-500"
                />
                <span className="text-xs md:text-sm text-white font-medium">
                  🎁 1+1 olishni xohlayman (20-noyabrgacha)
                </span>
              </label>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-3 rounded-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg mt-4"
              >
                📤 Ariza qoldiring
              </button>
            </div>
          </form>

          <p className="text-white/80 mt-6 md:mt-8 text-xs md:text-sm font-medium">
            ✓ Rahmat! Biz siz bilan yaqin orada bog'lanamiz.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
              <div className="w-14 md:w-16 h-14 md:h-16  rounded-full flex items-center justify-center">
                <img src="/photo.jpg" alt="rasm" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-base md:text-lg">Bekzod Khanov</h3>
                <p className="text-gray-400 text-xs md:text-sm">CRM & Sales Expert</p>
              </div>
            </div>

            <div className="flex justify-center gap-4 md:gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors font-semibold text-sm md:text-base"
              >
                📱 Telegram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors font-semibold text-sm md:text-base"
              >
                📸 Instagram
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors font-semibold text-sm md:text-base"
              >
                ▶️ YouTube
              </a>
            </div>

            <div className="text-center md:text-right">
              <p className="text-gray-400 text-xs md:text-sm font-medium">© 2025 UzCRM Solutions</p>
              <p className="text-gray-600 text-xs mt-1">Barcha huquqlar himoyalangan</p>
            </div>
          </div>

          <div className="border-t border-gray-700 pt-6 md:pt-8 text-center">
            <p className="text-gray-500 text-xs md:text-sm">
              🎯 Savdo avtomatlashtirish bo'yicha eng yaxshi yechimlar sifatida xizmat ko'rsatamiz
            </p>
          </div>
        </div>
      </footer>
    </main>
  );
}
