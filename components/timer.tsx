"use client"
import { useEffect, useState } from "react"

export default function CountdownTimer({ targetDate }: { targetDate: string }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    if (difference <= 0) return null

    return {
      kun: Math.floor(difference / (1000 * 60 * 60 * 24)),
      soat: Math.floor((difference / (1000 * 60 * 60)) % 24),
      daqiqa: Math.floor((difference / 1000 / 60) % 60),
      soniya: Math.floor((difference / 1000) % 60),
    }
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)
    return () => clearInterval(timer)
  }, [targetDate])

  if (!timeLeft)
    return (
      <p className="mt-5 text-sm md:text-base text-gray-300 font-semibold">
        ⏰ Aksiya muddati tugadi!
      </p>
    )

  return (
    <div className="mt-6 md:mt-8 text-center">
      <p className="text-sm md:text-base font-semibold text-gray-200 uppercase mb-2">
        Aksiya tugashiga:
      </p>
      <div className="flex justify-center gap-2 sm:gap-4">
        {Object.entries(timeLeft).map(([label, value]) => (
          <div
            key={label}
            className="bg-gray-800/70 border border-gray-600 rounded-xl px-3 sm:px-4 py-2 shadow-md"
          >
            <p className="text-lg sm:text-2xl font-bold text-white">{value}</p>
            <p className="text-[10px] sm:text-xs uppercase text-gray-400">
              {label}
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
