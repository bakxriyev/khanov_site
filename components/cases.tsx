export default function Cases() {
  const clientLogos = [
    { icon: "🏢", label: "Kompaniya 1" },
    { icon: "🏪", label: "Do'kon" },
    { icon: "🏭", label: "Ishlab chiqarish" },
    { icon: "💼", label: "Xizmat" },
    { icon: "🛍️", label: "E-commerce" },
    { icon: "📱", label: "Digital" },
    { icon: "🌟", label: "Premium" },
    { icon: "⭐", label: "Elit" },
  ]

  const row1 = clientLogos.slice(0, 3)
  const row2 = clientLogos.slice(3, 6)
  const row3 = clientLogos.slice(6, 9)

  const RotatingRow = ({ items, delay }: { items: typeof clientLogos; delay: string }) => (
    <div className="relative w-full overflow-hidden mb-6">
      <div className={`flex gap-4 animate-scroll`} style={{ animationDelay: delay }}>
        {/* First set */}
        {items.map((item, idx) => (
          <div key={idx} className="flex-shrink-0 w-1/3 md:w-1/3">
            <div className="bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center justify-center h-28 md:h-32 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="text-3xl md:text-4xl mb-2">{item.icon}</span>
              <span className="text-xs md:text-sm font-semibold text-white text-center line-clamp-2">{item.label}</span>
            </div>
          </div>
        ))}

        {/* Duplicate set for seamless loop */}
        {items.map((item, idx) => (
          <div key={`duplicate-${idx}`} className="flex-shrink-0 w-1/3 md:w-1/3">
            <div className="bg-gradient-to-br from-gray-600 to-gray-800 border-2 border-gray-500 rounded-lg md:rounded-xl p-4 md:p-6 flex flex-col items-center justify-center h-28 md:h-32 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <span className="text-3xl md:text-4xl mb-2">{item.icon}</span>
              <span className="text-xs md:text-sm font-semibold text-white text-center line-clamp-2">{item.label}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )

  return (
    <section className="bg-gradient-to-b from-background to-gray-600 py-0 md:py-20 px-4 md:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-black mb-8 md:mb-12 text-center">
          🎯 Case va mijoz fikrlari
        </h2>

        <RotatingRow items={row1} delay="0s" />
        <RotatingRow items={row2} delay="-0.5s" />
        <RotatingRow items={row3} delay="-1s" />

        <div className="mt-8 md:mt-12 text-center">
          <p className="text-base md:text-lg text-gray-300 font-medium">
            📝 Qo'shimcha case va mijoz fikrlari tez orada qo'shiladi
          </p>
        </div>
      </div>
    </section>
  )
}
