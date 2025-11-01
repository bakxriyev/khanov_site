export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white py-8 md:py-12 px-4 md:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {/* Left: Author Info */}
          <div className="flex flex-col items-center md:items-start gap-3 md:gap-4">
            <div className="w-14 md:w-16 h-14 md:h-16 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <span className="text-xl md:text-2xl">👨‍💼</span>
            </div>
            <div className="text-center md:text-left">
              <h3 className="font-bold text-base md:text-lg">Bekzod Khanov</h3>
              <p className="text-gray-400 text-xs md:text-sm">CRM & Sales Expert</p>
            </div>
          </div>

          {/* Center: Links */}
          <div className="flex justify-center gap-4 md:gap-6">
            <a href="#" className="text-gray-400 hover:text-primary transition font-semibold text-sm md:text-base">
              📱 Telegram
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition font-semibold text-sm md:text-base">
              📸 Instagram
            </a>
            <a href="#" className="text-gray-400 hover:text-primary transition font-semibold text-sm md:text-base">
              ▶️ YouTube
            </a>
          </div>

          {/* Right: Copyright */}
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
  )
}
