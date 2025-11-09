"use client"
import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { ChevronLeft, ChevronRight, Volume2, VolumeX } from "lucide-react"

export default function VideoCarousel({ videos }: { videos: string[] }) {
    const [current, setCurrent] = useState(0)
    const [muted, setMuted] = useState(true)
    const videoRefs = useRef<(HTMLVideoElement | null)[]>([])

    useEffect(() => {
        videoRefs.current.forEach((v, idx) => {
            if (v) {
                v.muted = muted || idx !== current
                if (idx === current) v.play()
                else v.pause()
            }
        })
    }, [current, muted])

    const next = () => setCurrent((prev) => (prev + 1) % videos.length)
    const prev = () => setCurrent((prev) => (prev - 1 + videos.length) % videos.length)

    // Keyboard navigation
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") prev()
            if (e.key === "ArrowRight") next()
        }
        window.addEventListener("keydown", handleKeyDown)
        return () => window.removeEventListener("keydown", handleKeyDown)
    }, [current])

    return (
        <div className="relative w-full mt-12">
            {/* Chap tugma */}
            <button
                onClick={prev}
                className="absolute left-2 md:left-8 top-1/2 -translate-y-1/2 z-30 bg-gray-900/80 hover:bg-gray-700/90 p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
                aria-label="Oldingi video"
            >
                <ChevronLeft className="text-white w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Video container - ASOSIY QISM */}
            <div className="relative w-full overflow-visible">
                <div className="flex justify-center items-center h-[500px] md:h-[600px]">
                    {videos.map((src, i) => {
                        const isActive = i === current
                        const offset = (i - current) * 100

                        return (
                            <motion.div
                                key={i}
                                className="absolute"
                                animate={{
                                    x: `${offset}%`,
                                    scale: isActive ? 1 : 0.75,
                                    opacity: isActive ? 1 : 0.3,
                                    zIndex: isActive ? 20 : 10,
                                }}
                                transition={{
                                    type: "spring",
                                    stiffness: 260,
                                    damping: 25,
                                    mass: 0.8
                                }}
                                style={{
                                    width: "280px",
                                    maxWidth: "90vw",
                                }}
                            >
                                <div className="relative w-full aspect-[9/16] rounded-2xl overflow-hidden border-2 border-gray-700 shadow-2xl bg-black">
                                    <video
                                        ref={(el) => { videoRefs.current[i] = el }}
                                        src={src}
                                        autoPlay
                                        loop
                                        playsInline
                                        muted={i !== current || muted}
                                        className="w-full h-full object-cover"
                                    />


                                    {/* Nofaol videolar uchun overlay */}
                                    {!isActive && (
                                        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
                                    )}

                                    {/* Active badge */}
                                    {isActive && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            className="absolute top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg"
                                        >

                                        </motion.div>
                                    )}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Progress dots */}
                <div className="flex justify-center gap-2 mt-8">
                    {videos.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => setCurrent(i)}
                            className="group relative"
                            aria-label={`Video ${i + 1}`}
                        >
                            <motion.div
                                className={`h-2 rounded-full transition-all duration-300 ${i === current
                                        ? "w-12 bg-gradient-to-r from-blue-500 to-purple-500"
                                        : "w-2 bg-gray-500 group-hover:bg-gray-400"
                                    }`}
                                whileHover={{ scale: 1.2 }}
                                whileTap={{ scale: 0.9 }}
                            />
                        </button>
                    ))}
                </div>

                {/* Video counter */}
                <div className="text-center mt-4 text-gray-400 text-sm font-medium">
                    {current + 1} / {videos.length}
                </div>
            </div>

            {/* O'ng tugma */}
            <button
                onClick={next}
                className="absolute right-2 md:right-8 top-1/2 -translate-y-1/2 z-30 bg-gray-900/80 hover:bg-gray-700/90 p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110"
                aria-label="Keyingi video"
            >
                <ChevronRight className="text-white w-6 h-6 md:w-8 md:h-8" />
            </button>

            {/* Ovoz tugmasi - pastda markazda */}
            <motion.button
                onClick={() => setMuted((prev) => !prev)}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 bg-gray-900/90 hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 p-3 md:p-4 rounded-full shadow-2xl transition-all duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label={muted ? "Ovozni yoqish" : "Ovozni o'chirish"}
            >
                {muted ? (
                    <VolumeX className="text-white w-5 h-5 md:w-6 md:h-6" />
                ) : (
                    <Volume2 className="text-white w-5 h-5 md:w-6 md:h-6" />
                )}
            </motion.button>
        </div>
    )
}