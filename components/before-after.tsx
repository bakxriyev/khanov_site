export default function BeforeAfter() {
  return (
    <section className="bg-gradient-to-b from-gray-600 to-background py-12 md:py-20 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-8 md:mb-16 text-center">
          📊 Avtomatlashtirishdan keyin farqi
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Before */}
          <div className="bg-gradient-to-br from-red-900 to-red-800 border-2 border-red-600 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all">
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

          {/* After */}
          <div className="bg-gradient-to-br from-green-900 to-green-800 border-2 border-green-600 rounded-xl md:rounded-2xl p-6 md:p-8 hover:shadow-lg transition-all">
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
  )
}
