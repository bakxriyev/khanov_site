export default function Hero() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-600 via-gray-500 to-gray-700 flex items-center justify-center px-4 -gap-2 md:px-6 lg:px-8 pt-8 md:pt-12 pb-8 md:pb-12">
      <div className="flex flex-col items-center justify-center w-full gap-6 md:gap-8 max-w-4xl">
        <div className="text-center space-y-3 md:space-y-4 w-full">
          <h1 className="text-3xl uppercase sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight tracking-tight">
            Savdo bo'limini avtomatlashtirish, sotuvlarni oshirish
          </h1>
          <p className="text-lg -mb-12 sm:text-xl md:text-2xl text-gray-300 font-semibold leading-relaxed">
            Savdo bo'limini avtomatlashtirish, sotuvlarni oshirish
          </p>
        </div>

        <div className="flex justify-center items-center w-full">
          <img
            src="./photo.jpg"
            alt="Bekzod Khanov - CRM Expert"
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg -mb-14 rounded-2xl object-cover"
          />
        </div>
        <div className="space-y-2 md:space-y-4 ">
            <h1 className="text-3xl bg-white  text-center sm:text-4xl md:text-5xl lg:text-6xl font-black text-black leading-tight tracking-tight uppercase">
              Call-markaz operatori va sotiv menedjeri
            </h1>
            
          <div className="space-y-2 md:space-y-3 bg-gradient-to-r from-gray-900 to-gray-600 rounded-2xl p-4 md:p-6 lg:p-8">
            <p className="text-[18px] font-bold uppercase text-center sm:text-base md:text-lg text-white">
              💻 CRM + IP Telefoniya + AI, MoySklad + CRM, Target + CRM — tayyor kompleks yechimlar
            </p>
          </div>
          <p className="text-[15px] text-center uppercase text-white sm:text-lg md:text-xl text-accent font-bold">
              🎁 20-noyabrgacha 1+1 aksiyasi davom etadi.
            </p>
          </div>

        <div className="flex flex-col gap-4 md:gap-6 text-center order-2 max-w-2xl mx-auto">
          

        </div>

        <div className="flex flex-col gap-3 md:gap-4 text-center w-full max-w-lg order-3 px-4 md:px-0">
          <div className="bg-gradient-to-r from-gray-900 to-gray-500 to-gray-900 rounded-2xl p-4 md:p-6 lg:p-8 text-white shadow-lg">
            <p className="text-base sm:text-lg font-bold mb-2 md:mb-3">⏰ Aksiya 20-noyabrgacha amal qiladi</p>
            
            <p className="text-xs sm:text-sm text-blue-100 mt-3 md:mt-4">
              Ariza qoldiring — bepul konsultatsiya qilamiz va eng mos yechimni tanlab beramiz.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
