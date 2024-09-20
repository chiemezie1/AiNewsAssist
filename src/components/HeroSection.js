'use client'

import { motion } from 'framer-motion'

const HeroSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 3}
  }

  return (
    <section className="relative min-h-[60vh] flex items-center justify-center px-4 bg-gradient-to-br from-purple-700 to-indigo-900 text-white overflow-hidden">
      <div className="text-center z-10">
      <div>
        <motion.h2
          className="text-5xl md:text-7xl font-bold mb-4"
          {...fadeIn}
        >
          Stay Informed, Effortlessly
        </motion.h2>
        </div>
        <motion.p
          className="text-xl md:text-2xl mb-8 gooey-text"
          {...fadeIn}
          transition={{ delay: 0.1 }}
        >
          Your personal AI-powered news assistant
        </motion.p>
        <motion.div
          className="space-x-4"
          {...fadeIn}
          transition={{ delay: 0.4 }}
        >
          <motion.button
            className="bg-gradient-to-r from-pink-500 to-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:from-pink-600 hover:to-yellow-600 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get Started
          </motion.button>
          <motion.button
            className="bg-white text-purple-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Learn More
          </motion.button>
        </motion.div>
      </div>
      {/* Falling Balls */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="falling-balls">
          {Array.from({ length: 20 }).map((_, index) => (
            <div
              key={index}
              className="bouncing-ball"
              style={{
                width: `${Math.random() * 20 + 10}px`,
                height: `${Math.random() * 20 + 10}px`,
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 10}s`,
                animationDuration: `${Math.random() * 6 + 4}s`
              }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HeroSection
