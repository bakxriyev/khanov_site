"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { ArrowLeft } from "lucide-react"
import CountdownTimer from "@/components/timer"
import VideoCarousel from "@/components/videoCarusel"

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
    description: "Joriy etish tajribasi yordamida sizga eng optimal yechim beramiz!",
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
  { icon: "/1.JPG", label: "Kompaniya 1" },
  { icon: "/2.JPG", label: "Kompaniya 2" },
  { icon: "/3.JPG", label: "Kompaniya 3" },
  { icon: "/4.JPG", label: "Kompaniya 4" },
  { icon: "/5.JPG", label: "Kompaniya 5" },
  { icon: "/6.JPG", label: "Kompaniya 6" },
  { icon: "/7.JPG", label: "Kompaniya 7" },
  { icon: "/8.JPG", label: "Kompaniya 8" },
  { icon: "/9.JPG", label: "Kompaniya 9" },
  { icon: "/9.JPG", label: "Kompaniya 9" },
  { icon: "/10.JPG", label: "Kompaniya 10" },
  { icon: "/11.JPG", label: "Kompaniya 11" },
  { icon: "/12.JPG", label: "Kompaniya 12" },
  { icon: "/13.JPG", label: "Kompaniya 13" },
  { icon: "/14.JPG", label: "Kompaniya 14" },
  { icon: "/15.JPG", label: "Kompaniya 15" },
  { icon: "/16.JPG", label: "Kompaniya 16" },
  { icon: "/17.JPG", label: "Kompaniya 17" },
  { icon: "/18.JPG", label: "Kompaniya 18" },
  { icon: "/19.JPG", label: "Kompaniya 19" },
  { icon: "/20.JPG", label: "Kompaniya 20" },
  { icon: "/21.JPG", label: "Kompaniya 21" },
  { icon: "/22.JPG", label: "Kompaniya 22" },
  { icon: "/24.JPG", label: "Kompaniya 24" },
  { icon: "/25.JPG", label: "Kompaniya 25" },
  { icon: "/26.JPG", label: "Kompaniya 26" },
  { icon: "/27.JPG", label: "Kompaniya 11" },
  { icon: "/28.JPG", label: "Kompaniya 12" },
  { icon: "/29.PNG", label: "Kompaniya 13" },
  { icon: "/30.JPG", label: "Kompaniya 14" },
  { icon: "/31.JPG", label: "Kompaniya 15" },
  { icon: "/32.JPG", label: "Kompaniya 16" },
  { icon: "/33.JPG", label: "Kompaniya 17" },
  { icon: "/34.JPG", label: "Kompaniya 18" },
  { icon: "/35.JPG", label: "Kompaniya 19" },
  { icon: "/36.JPG", label: "Kompaniya 20" },
  { icon: "/37.PNG", label: "Kompaniya 10" },
  { icon: "/38.JPG", label: "Kompaniya 11" },
  { icon: "/39.PNG", label: "Kompaniya 12" },
  { icon: "/40.JPG", label: "Kompaniya 13" },
  { icon: "/41.JPG", label: "Kompaniya 14" },
  { icon: "/42.JPG", label: "Kompaniya 15" },
  { icon: "/43.JPG", label: "Kompaniya 16" },
  { icon: "/44.JPG", label: "Kompaniya 17" },
  { icon: "/46.JPG", label: "Kompaniya 19" },
  { icon: "/47.JPG", label: "Kompaniya 20" },
  { icon: "/48.JPG", label: "Kompaniya 11" },
  { icon: "/49.JPG", label: "Kompaniya 12" },
  { icon: "/50.JPG", label: "Kompaniya 13" },
  { icon: "/51.JPG", label: "Kompaniya 14" },
  { icon: "/52.JPG", label: "Kompaniya 15" },
  { icon: "/53.JPG", label: "Kompaniya 16" },
  { icon: "/54.JPG", label: "Kompaniya 17" },
  { icon: "/55.JPG", label: "Kompaniya 18" },
  { icon: "/56.JPG", label: "Kompaniya 19" },
]

const bgImages = [
  { src: "./amo.png", top: "10%", left: "5%" },
  { src: "./crm.png", top: "15%", right: "15%" },
  { src: "./dars.png", top: "60%", left: "10%" },
  { src: "./bg4.png", bottom: "10%", right: "15%" },
  { src: "./amo.png", top: "75%", left: "50%" },
  { src: "./crm.png", top: "40%", right: "35%" },
  { src: "./dars.png", bottom: "15%", left: "25%" },
  { src: "./bg4.png", top: "25%", right: "45%" },
  { src: "./amo.png", bottom: "5%", right: "5%" },
  { src: "./crm.png", top: "50%", left: "70%" },
]

const shuffleArray = (array) => {
  return [...array].sort(() => Math.random() - 0.5)
}

export default function Home() {
  const [showCRMForm, setShowCRMForm] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)

  // iframe ichidagi forma submit hodisasini kuzatish
  useEffect(() => {
    if (showCRMForm) {
      const handleMessage = (event) => {
        // amoCRM dan kelgan xabarlarni tinglash
        if (event.data) {
          const data = typeof event.data === "string" ? event.data : JSON.stringify(event.data)

          // Forma yuborilganini aniqlash
          if (
            data.includes("success") ||
            data.includes("submitted") ||
            data.includes("form_sent") ||
            data.includes("thank") ||
            event.data.type === "form_submit"
          ) {
            if (!formSubmitted) {
              setFormSubmitted(true)

              // Modal yopish va Telegram'ga yo'naltirish
              setTimeout(() => {
                setShowCRMForm(false)
                setFormSubmitted(false)

                // Telegram kanaliga yo'naltirish
                window.open("https://t.me/khanov_business", "_blank")

                // Tasdiq xabari
                setTimeout(() => {
                  alert("✅ Arizangiz qabul qilindi! Telegram kanalimizga yo'naltirilmoqdasiz...")
                }, 300)
              }, 800)
            }
          }
        }
      }

      window.addEventListener("message", handleMessage)

      return () => {
        window.removeEventListener("message", handleMessage)
      }
    }
  }, [showCRMForm, formSubmitted])

  const rotationVariants = {
    rotate: {
      rotate: 360,
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 8,
        ease: "linear",
      },
    },
  }

  const generateLogoRows = () => {
    const rows: { logos: any[]; direction: number }[] = []
    for (let i = 0; i < 4; i++) {
      const shuffled = shuffleArray(clientLogos)
      rows.push({
        logos: [...shuffled, ...shuffled],
        direction: i % 2 === 0 ? 1 : -1,
      })
    }
    return rows
  }


  const logoRows = generateLogoRows()

  const scrollVariants = {
    animate: (direction) => ({
      x: direction === 1 ? [-0, -1152] : [-1152, -0],
      transition: {
        repeat: Number.POSITIVE_INFINITY,
        duration: 50,
        ease: "linear" as const,
      },
    }),
  }

  return (
    <main className="w-full">
      <header className="fixed top-0 w-full z-50 bg-gradient-to-b from-gray-900 via-gray-900 to-transparent backdrop-blur-lg">
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
      <section className="relative min-h-screen bg-gradient-to-b -mt-12 from-gray-800 via-gray-700 to-gray-900 flex items-center justify-center px-4 md:px-6 lg:px-8 pt-32 md:pt-40 pb-8 md:pb-12 overflow-hidden">
        {/* 🔹 BACKGROUND FLOATING IMAGES */}
        {[
          { src: "./amo.png", top: "27%", left: "5%", size: "w-24 md:w-32", delay: 0 },
          { src: "./crm.png", top: "53%", left: "1%", size: "w-20 md:w-28", delay: 1 },
          { src: "./dars.png", top: "30%", right: "2%", size: "w-28 md:w-36", delay: 2 },
          { src: "./raketa.png", bottom: "10%", right: "15%", size: "w-24 md:w-32", delay: 3 },
        ].map((img, index) => (
          <motion.img
            key={index}
            src={img.src}
            alt="background shape"
            className={`absolute  blur-[1.5px] ${img.size} pointer-events-none`}
            style={{ top: img.top, left: img.left, right: img.right, bottom: img.bottom }}
            animate={{ y: [0, -10, 0], rotate: [0, 5, -5, 0] }}
            transition={{ duration: 6, repeat: Number.POSITIVE_INFINITY, delay: img.delay }}
          />
        ))}

        {/* 🔹 MAIN CONTENT */}
        <div className="flex flex-col items-center justify-center w-full gap-6 md:gap-8 max-w-4xl relative z-10">
          <div className="text-center space-y-3 md:space-y-4 w-full">
            <h1
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl 
                font-medium text-white uppercase tracking-tight 
                leading-[1.4] sm:leading-[1.3] md:leading-[1.6] 
                py-4 sm:py-6 lg:py-8 rounded-[10px]  text-center"
            >
              Savdo bo'limini{" "}
              <span
                className="font-bold 
                bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 
                text-white px-2 py-1 rounded-md inline-block shadow-2xl 
                hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] mb-2 transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                avtomatlashtirish
              </span>{" "}
              sotuvlarni{" "}
              <span
                className="font-bold 
                bg-gradient-to-r from-blue-800 via-blue-700 to-blue-900 
                text-white px-2 py-1 rounded-md inline-block shadow-2xl 
                hover:shadow-[0_15px_30px_rgba(0,0,0,0.4)] transform hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                oshirish
              </span>
            </h1>

            {/* Taglar qatori */}
            <div className="flex flex-wrap justify-center items-center gap-3 -mt-5 sm:gap-4 md:gap-5 w-full max-w-[900px] mx-auto p-2 sm:p-3">
              {["🔗 CRM + IP Telefoniya ", "📦 MoySklad + CRM", "🎯 Target + CRM", "🤖 AI"].map((text, i) => (
                <div
                  key={i}
                  className="flex items-center justify-center rounded-xl 
                    bg-gradient-to-br from-blue-400 via-blue-900 to-blue-400 
                    text-white font-semibold px-4 sm:px-5 md:px-6 py-2 sm:py-2.5 
                    shadow-2xl hover:shadow-[0_15px_30px_rgba(0,0,0,0.3)] 
                    transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 
                    border border-transparent hover:border-white"
                >
                  <p className="text-[13px] sm:text-[14px] md:text-[15px] leading-none text-center whitespace-nowrap">
                    {text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* CRM photo & button */}
          <div className="flex flex-col -mt-5 md:flex-row items-center justify-center gap-8 md:gap-12 w-full max-w-5xl">
            <div className="flex flex-col items-center gap-4 flex-shrink-0 w-full md:w-auto">
              <img
                src="/photo.jpg"
                alt="CRM Dashboard"
                className="w-full max-w-xs sm:max-w-sm md:max-w-md -mb-12 rounded-2xl transform -skew-y-3 hover:skew-y-0 transition-transform duration-300 "
              />
              <button
                onClick={() => setShowCRMForm(true)}
                className="bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
                  text-white font-bold py-4 px-18 rounded-xl transition-all duration-300 transform hover:-translate-y-2 
                  hover:shadow-2xl active:translate-y-0 text-lg uppercase shadow-xl relative"
                style={{
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4), 0 4px 12px rgba(37, 99, 235, 0.3)",
                }}
              >
                <span className="relative z-10">
                  Ariza qoldiring
                  <ArrowLeft className="inline-block ml-2 mb-1" size={20} />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-700 to-blue-600 -z-10 translate-y-2 blur-sm opacity-75"></div>
              </button>
            </div>
          </div>

          {/* Aksiya bloki */}
          <div className="flex flex-col gap-3 md:gap-4 text-center w-full max-w-lg px-4 md:px-0">
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-4 md:p-6 lg:p-8 text-white shadow-lg relative overflow-hidden">
              <p className="text-base text-center uppercase text-white sm:text-lg md:text-xl font-bold">
                🎁 25-noyabrgacha 1+1 imkoniyati davom etadi.
              </p>
              <p className="text-xs sm:text-sm text-blue-100 mt-3 md:mt-4">
                Ariza qoldiring — bepul konsultatsiya qilamiz va eng mos yechimni tanlab beramiz.
              </p>

              {/* 🔹 COUNTDOWN TIMER */}
              <CountdownTimer targetDate="2025-11-25T00:00:00" />
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

      {/* Cases Section - Logo Carousel */}
   <section className="bg-gradient-to-b from-gray-800 to-gray-700 py-12 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 md:mb-12 text-center">
      🎯 Case va mijoz fikrlari
    </h2>

    {/* 🔹 Logolar harakatlanadigan qism */}
    <div className="space-y-4 md:space-y-6 mb-12">
      {logoRows.map((row, rowIdx) => (
        <div key={rowIdx} className="overflow-hidden">
          <motion.div
            className="flex gap-4 md:gap-6"
            animate="animate"
            custom={row.direction}
            variants={scrollVariants}
          >
            {row.logos.map((item, idx) => (
              <div
                key={idx}
                className="flex items-center justify-center p-4 md:p-6 rounded-xl h-20 md:h-28 w-20 md:w-28 flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(59,130,246,0.2) 0%, rgba(99,102,241,0.2) 100%)",
                }}
              >
                <img
                  src={item.icon || "/placeholder.svg"}
                  alt={item.label}
                  className="h-16 md:h-24 w-16 md:w-24 object-contain"
                />
              </div>
            ))}
          </motion.div>
        </div>
      ))}
    </div>

  

    <VideoCarousel
      videos={[
        "/video1.MP4",
        "/video2.MP4",
        "/video3.MP4",
        "/video5.MP4",
        "/video4.MP4",
      ]}
    />
  </div>
</section>





      {/* CRM Form Modal */}
      {showCRMForm && (
        <div className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 md:p-8 max-w-3xl w-full my-8 border border-gray-700 shadow-2xl">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold text-white">Ariza qoldiring</h2>
              <button
                onClick={() => setShowCRMForm(false)}
                className="text-gray-400 hover:text-white text-3xl font-bold"
              >
                ✕
              </button>
            </div>

            {/* amoCRM iframe forma */}
            <div className="w-full bg-white rounded-lg overflow-hidden" style={{ minHeight: "650px" }}>
              <iframe
                src="https://forms.amocrm.ru/rcvdlmc"
                width="100%"
                height="650"
                style={{ border: "none", display: "block" }}
                title="amoCRM Form"
                allow="payment"
                sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-top-navigation"
              ></iframe>
            </div>

            <div className="mt-4 space-y-2">
              <p className="text-gray-400 text-sm text-center">📋 Ma'lumotlar to'g'ridan CRM tizimimizga yuboriladi</p>
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
            🎁 25-noyabrga qadar — 1+1 xizmatimizni harid qiling va Sotuvga sezilarli darajada ta'sir o'tkazing
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
            <span className="relative z-10">
              Ariza qoldiring
              <ArrowLeft className="inline-block ml-2 mb-1" size={20} />
            </span>
            <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-700 to-blue-600 -z-10 translate-y-2 blur-sm opacity-75"></div>
          </button>
        </div>

        <div className="max-w-6xl mx-auto mt-5 md:mt-24 px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-gray-800/80 via-gray-900/80 to-gray-800/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 border border-blue-500/20 shadow-2xl">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Photo Section */}
              <div className="flex-shrink-0 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r  rounded-3xl blur opacity-75 group-hover:opacity-100 transition duration-500 animate-pulse"></div>
                <div className="relative">
                  <img
                    src="/photo.jpg"
                    alt="Bekzod Khanov"
                    className="w-36 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72  object-cover transform group-hover:scale-105 transition-all duration-500  "
                  />
                </div>
              </div>

              {/* Content Section */}
              <div className="flex-1 space-y-6 -mt-9 text-center md:text-left">
                {/* Name and Title */}
                <div className="space-y-3">
                  <h2 className="text-3xl sm:text-5xl md:text-6xl font-black bg-blue-600 py-2 px-2 text-white  bg-clip-text text-transparent leading-tight">
                    Bekzod Khanov
                  </h2>
                  <p className="text-xl sm:text-2xl md:text-3xl font-semibold text-white/90">
                    Sotuv va Avtomatizatsiya Mutaxassisi
                  </p>
                  <div className="h-1 w-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto md:mx-0"></div>
                </div>

                {/* Description */}
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed max-w-2xl">
                  O'zbekiston bo'ylab 150+ loyihani muvaffaqiyatli amalga oshirgan, bizneslarni raqamlashtirish va
                  sotuvlarni avtomatlashtirish bo'yicha tajribali mutaxasis.
                </p>

                {/* Achievement Badges */}
                <div className="flex flex-wrap gap-3 md:gap-4 justify-center md:justify-start">
                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-600 to-blue-400 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gradient-to-br from-blue-600 to-blue-700 text-white font-bold px-5 py-3 rounded-xl shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                      <div className="text-2xl font-black">150+</div>
                      <div className="text-xs uppercase tracking-wide opacity-90">Loyihalar</div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gradient-to-br from-purple-600 to-pink-600 text-white font-bold px-5 py-3 rounded-xl shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                      <div className="text-2xl font-black">250+</div>
                      <div className="text-xs uppercase tracking-wide opacity-90">O'qitilgan Xodimlar</div>
                    </div>
                  </div>

                  <div className="group relative">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-green-600 to-emerald-600 rounded-xl blur opacity-60 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-gradient-to-br from-green-600 to-emerald-600 text-white font-bold px-5 py-3 rounded-xl shadow-xl transform hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                      <div className="text-2xl font-black">20+</div>
                      <div className="text-xs uppercase tracking-wide opacity-90">Biznes Yo'nalishlar</div>
                    </div>
                  </div>
                </div>

                {/* Expertise Tags */}
                <div className="flex flex-wrap gap-2 justify-center md:justify-start pt-4">
                  {["CRM + IP Telefoniya", "MoySklad + CRM", "CRM + Proffesional Target xizmati", "Sotuv Avtomatizatsiya"].map((tag, i) => (
                    <span
                      key={i}
                      className="px-4 py-2 bg-gray-700/50 border border-blue-500/30 rounded-full text-sm font-medium text-blue-300 hover:bg-gray-700 hover:border-blue-500/60 transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-3 md:gap-4 text-center w-full max-w-lg px-4 md:px-0">
            <div className="bg-gradient-to-r from-gray-900 to-gray-700 rounded-2xl p-4 md:p-6 lg:p-8 text-white shadow-lg relative overflow-hidden">
              <p className="text-base text-center uppercase text-white sm:text-lg md:text-xl font-bold">
                🎁 25-noyabrgacha 1+1 imkoniyati davom etadi.
              </p>
              <p className="text-xs sm:text-sm text-blue-100 mt-3 md:mt-4">
                Ariza qoldiring — bepul konsultatsiya qilamiz va eng mos yechimni tanlab beramiz.
              </p>

              {/* 🔹 COUNTDOWN TIMER */}
              <CountdownTimer targetDate="2025-11-25T00:00:00" />
            </div>
          </div>
          <button
                onClick={() => setShowCRMForm(true)}
                className="bg-gradient-to-br from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 
                  text-white font-bold py-4 px-18 rounded-xl transition-all duration-300 transform hover:-translate-y-2 
                  hover:shadow-2xl active:translate-y-0 text-lg uppercase shadow-xl relative"
                style={{
                  boxShadow: "0 10px 30px rgba(37, 99, 235, 0.4), 0 4px 12px rgba(37, 99, 235, 0.3)",
                }}
              >
                <span className="relative z-10">
                  Ariza qoldiring
                  <ArrowLeft className="inline-block ml-2 mb-1" size={20} />
                </span>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-blue-700 to-blue-600 -z-10 translate-y-2 blur-sm opacity-75"></div>
              </button>

            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 md:py-12 px-4 md:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">

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
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg"
                  alt="instagram logo"
                  width={30}
                />
              </a>
              <a
                href="https://youtube.com/@KhanovBekzod"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-400 transition-colors text-2xl hover:-translate-y-1 transform"
                title="YouTube"
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/0/09/YouTube_full-color_icon_%282017%29.svg"
                  alt="youtube logo"
                  width={40}
                />
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
