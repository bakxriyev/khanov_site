"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"

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
]

export default function Home() {
  const [showCRMForm, setShowCRMForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // iframe ichidagi forma submit hodisasini kuzatish
  useEffect(() => {
    if (showCRMForm) {
      const handleMessage = (event) => {
        // amoCRM dan kelgan xabarlarni tinglash
        if (event.data) {
          const data = typeof event.data === 'string' ? event.data : JSON.stringify(event.data)
          
          // Forma yuborilganini aniqlash
          if (data.includes('success') || 
              data.includes('submitted') || 
              data.includes('form_sent') ||
              data.includes('thank') ||
              event.data.type === 'form_submit') {
            
            if (!formSubmitted) {
              setFormSubmitted(true)
              
              // Modal yopish va Telegram'ga yo'naltirish
              setTimeout(() => {
                setShowCRMForm(false)
                setFormSubmitted(false)
                
                // Telegram kanaliga yo'naltirish
                window.open('https://t.me/khanov_business', '_blank')
                
                // Tasdiq xabari
                setTimeout(() => {
                  alert('✅ Arizangiz qabul qilindi! Telegram kanalimizga yo\'naltirilmoqdasiz...')
                }, 300)
              }, 800)
            }
          }
        }
      }

      window.addEventListener('message', handleMessage)
      
      return () => {
        window.removeEventListener('message', handleMessage)
      }
    }
  }, [showCRMForm, formSubmitted])

  const doubledLogos = [...clientLogos, ...clientLogos]

  const rowTransition = (rowIdx) => ({
    x: rowIdx % 2 === 0 ? ["0%", "-50%"] : ["-50%", "0%"],
    transition: {
      repeat: Infinity,
      ease: "linear" as const,
      duration: 20 + rowIdx * 6,
    },
  })

  return (
    <main className="w-full">
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-gray-900 via-gray-800 to-transparent backdrop-blur-sm">
        <div className=" px-4 md:px-6 lg:px-0 py-4 md:py-5 flex justify-between items-center">
          <div className="text-white font-black text-xl md:text-2xl">KHANOV BEKZOD</div>
          <a
            href="tel:+998900681129"
            className="text-[12px] text-white font-bold text-base md:text-lg px-3.5 md:px-8 py-2 md:py-3 rounded-full bg-gradient-to-r from-blue-600 to-blue-500 transition-all duration-300 transform hover:shadow-lg hover:-translate-y-0.5"
          >
            📞 +998 (90) 068-11-29
          </a>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-b -mt-12 from-gray-800 via-gray-600 to-gray-800 flex items-center justify-center px-4 md:px-6 lg:px-8 pt-32 md:pt-40 pb-8 md:pb-12">
        <div className="flex flex-col items-center justify-center w-full gap-6 md:gap-8 max-w-4xl">
          <div className="text-center space-y-3 md:space-y-4 w-full">
            <h1 className="text-3xl bg-black rounded-[10px] uppercase sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
              Savdo bo'limini avtomatlashtirish, sotuvlarni oshirish
            </h1>
            <p className="text-[14px] rounded-[10px]  bg-white sm:text-xl md:text-2xl -mb-6 text-black font-semibold leading-relaxed">
              CRM + IP Telefoniya + AI, MoySklad + CRM, Target + CRM — tayyor kompleks yechimlar, bu siz kutmagan
              imkoniyat.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-5xl">
            <div className="flex flex-col items-center gap-4 flex-shrink-0 w-full md:w-auto">
              <img
                src="/photo.jpg"
                alt="CRM Dashboard"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md -mb-12 rounded-2xl transform -skew-y-3 hover:skew-y-0 transition-transform duration-300 "
              />
              <button
                onClick={() => setShowCRMForm(true)}
                className="bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-18 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 text-lg uppercase shadow-xl relative"
                style={{
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4), 0 4px 12px rgba(37, 99, 235, 0.3)",
                }}
              >
                <span className="relative z-10">Ariza qoldiring 
                  <ArrowLeft className="inline-block ml-2 mb-1" size={20} />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-700 to-blue-600 -z-10 translate-y-2 blur-sm opacity-75"></div>
              </button>
            </div>
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
            📊 Avval va keyin
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="bg-gradient-to-br from-red-900 to-red-800 border-2 border-red-500 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-4xl md:text-5xl mb-4">❌</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Avval</h3>
              <ul className="space-y-3 md:space-y-4 text-red-100 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✕</span>
                  <span className="font-medium">Excelda chalkashlik va tartibsizlik</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✕</span>
                  <span className="font-medium">Yo'qolgan qo'ng'iroqlar</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-red-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✕</span>
                  <span className="font-medium">Javobsiz mijozlar </span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-900 to-green-800 border-2 border-green-500 rounded-xl md:rounded-2xl p-6 md:p-8 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
              <div className="text-4xl md:text-5xl mb-4">✅</div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4 md:mb-6">Keyin</h3>
              <ul className="space-y-3 md:space-y-4 text-green-100 text-sm md:text-base">
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✓</span>
                  <span className="font-medium">CRM + IP + AI → toza hisobotlar</span>
                </li>
                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✓</span>
                  <span className="font-medium">24/7 arizalar</span>
                </li>

                <li className="flex items-start gap-2 md:gap-3">
                  <span className="text-green-300 font-bold text-lg md:text-xl mt-0 flex-shrink-0">✓</span>
                  <span className="font-medium">Sotuvlar sezilarli darajada o'sishi</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Cases Section */}
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
                  style={{ willChange: "transform" }}
                >
                  {doubledLogos.map((item, idx) => (
                    <div
                      key={`${rowIdx}-${idx}`}
                      className="bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center justify-center h-28 md:h-32 min-w-[140px] md:min-w-[180px] transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-gray-400 mx-2"
                    >
                      <span className="text-3xl md:text-4xl mb-2">{item.icon}</span>
                      <span className="text-xs md:text-sm font-semibold text-white text-center">{item.label}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CRM Form Modal */}
      {showCRMForm && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 max-w-3xl w-full my-8 border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ariza qoldiring</h2>
              <button onClick={() => setShowCRMForm(false)} className="text-gray-400 hover:text-white text-3xl font-bold">
                ✕
              </button>
            </div>

            {/* amoCRM iframe forma */}
            <div className="w-full bg-white rounded-lg overflow-hidden" style={{ minHeight: '650px' }}>
              <iframe 
                src="https://forms.amocrm.ru/rcvdlmc" 
                width="100%" 
                height="650"
                style={{ border: 'none', display: 'block' }}
                title="amoCRM Form"
                allow="payment"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
              ></iframe>
            </div>
            
            <div className="mt-4 space-y-2">
              <p className="text-gray-400 text-sm text-center">
                📋 Ma'lumotlar to'g'ridan CRM tizimimizga yuboriladi
              </p>
              <p className="text-gray-500 text-xs text-center">
                Forma yuborilgandan keyin avtomatik Telegram kanalimizga yo'naltirilasiz
              </p>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-gray-700 to-gray-800 py-12 md:py-20 px-4 md:px-6 lg:px-8 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight">
            🎁 20-noyabrgaqadar — 1+1 xizmatimizni harid qiling va Sotuvga sezilarli darajada ta'sir o'tqizing
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed">
            Ariza qoldiring, biz sizning biznesingiz uchun eng mos avtomatlashtirish yechimini va byudjet hisobini
            tayyorlaymiz
          </p>

           <button
                onClick={() => setShowCRMForm(true)}
                className="bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white font-bold py-4 px-18 rounded-xl transition-all duration-300 transform hover:-translate-y-2 hover:shadow-2xl active:translate-y-0 text-lg uppercase shadow-xl relative"
                style={{
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4), 0 4px 12px rgba(37, 99, 235, 0.3)",
                }}
              >
                <span className="relative z-10">Ariza qoldiring 
                  <ArrowLeft className="inline-block ml-2 mb-1" size={20} />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-700 to-blue-600 -z-10 translate-y-2 blur-sm opacity-75"></div>
              </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
            <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
              <div className="w-16 md:w-20 h-16 md:h-20 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg flex-shrink-0">
                <img src="/photo.jpg" alt="KHANOV BEKZOD" className="w-full h-full object-cover" />
              </div>
              <div className="text-center md:text-left">
                <h3 className="font-bold text-base md:text-lg">KHANOV BEKZOD</h3>
                <p className="text-gray-400 text-xs md:text-sm">CRM & Sales Expert</p>
              </div>
            </div>

            <div className="flex justify-center gap-6 md:gap-8">
              <a
                href="https://t.me/khanov_business"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors text-2xl hover:-translate-y-1 transform"
                title="Telegram"
              >
               <img src="./tg.svg" alt="telegram logo" width={30} />
              </a>
              <a
                href="https://instagram.com/khanov.bekzod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-400 transition-colors text-2xl hover:-translate-y-1 transform"
                title="Instagram"
              >
               <img src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg" alt="instagram logo" width={30} />
              </a>
              <a
                href="https://youtube.com/@KhanovBekzod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors text-2xl hover:-translate-y-1 transform"
                title="YouTube"
              >
                <img src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg" alt="youtube logo" width={40} />
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
  )
}