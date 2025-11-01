
export default function CTA() {
  return (
    <section className="bg-gradient-to-r from-gray-900 via-gray-450 to-gray-500 py-12 md:py-20 px-4 md:px-6 lg:px-8 text-white relative overflow-hidden">
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-white/10 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black mb-4 md:mb-6 leading-tight">
          🎁 20-noyabrgacha — 1+1 xizmatimizni harid qiling
        </h2>
        <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 md:mb-12 leading-relaxed">
          Sotuvga sezilarli darajada ta'sir o'tqizing. Ariza qoldiring, biz sizning biznesingiz uchun eng mos
          avtomatlashtirish yechimini va byudjet hisobini tayyorlaymiz.
        </p>

        <form className="bg-gradient-to-br from-gray-700 to-gray-800 rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-10 text-white shadow-2xl max-w-md mx-auto">
          <div className="space-y-3 md:space-y-4">
            <input
              type="text"
              placeholder="👤 Ismingiz"
              className="w-full px-4 py-2 md:py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary font-medium bg-gray-600 text-white placeholder-gray-300 text-sm md:text-base"
            />
            <input
              type="tel"
              placeholder="📞 Telefon raqamingiz"
              className="w-full px-4 py-2 md:py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary font-medium bg-gray-600 text-white placeholder-gray-300 text-sm md:text-base"
            />
            <input
              type="text"
              placeholder="🏢 Yo'nalish va korxona nomi"
              className="w-full px-4 py-2 md:py-3 border-2 border-primary/30 rounded-lg focus:outline-none focus:border-primary font-medium bg-gray-600 text-white placeholder-gray-300 text-sm md:text-base"
            />

            <label className="flex items-center gap-2 md:gap-3 pt-1 md:pt-2 cursor-pointer">
              <input type="checkbox" className="w-4 md:w-5 h-4 md:h-5 rounded border-2 border-primary" />
              <span className="text-xs md:text-sm text-white font-medium">
                🎁 1+1 olishni xohlayman (20-noyabrgacha)
              </span>
            </label>

          
          </div>
        </form>

        <p className="text-white/80 mt-6 md:mt-8 text-xs md:text-sm font-medium">
          ✓ Rahmat! Biz siz bilan yaqin orada bog'lanamiz.
        </p>
      </div>
    </section>
  )
}
