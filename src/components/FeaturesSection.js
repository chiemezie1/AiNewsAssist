'use client'

import { motion } from 'framer-motion'

const FeaturesSection = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <motion.h3
          className="text-4xl font-bold text-center text-gray-800 mb-12"
          {...fadeIn}
        >
          Key Features
        </motion.h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: 'AI-Powered Summaries', icon: '🤖', description: 'Get concise and insightful summaries of the latest news, powered by cutting-edge AI technology.' },
            { title: 'Personalized News Feed', icon: '📰', description: 'Receive news tailored to your interests and preferences, ensuring you stay informed about what matters most to you.' },
            { title: 'Real-time Updates', icon: '⚡', description: 'Stay up-to-date with breaking news and real-time updates delivered directly to your feed.' }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <motion.div
                className="text-4xl mb-4"
                whileHover={{ scale: 1.2, rotate: 360 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                {feature.icon}
              </motion.div>
              <h4 className="text-xl font-semibold mb-2 text-gray-800">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-center text-gray-800 mb-8">Supported News Sources</h3>
          <div className="relative overflow-hidden">
            <div className="flex items-center space-x-4 animate-slide">
              {[
                { name: 'X', image: '/images/x.png' },
                { name: 'Reddit', image: '/images/reddit.png' },
                { name: 'Google News', image: '/images/google.png' }
              ].map(source => (
                <div key={source.name} className="w-24 h-20 bg-white shadow-md rounded-lg flex items-center justify-center">
                  <img src={source.image} alt={source.name} className="max-w-full max-h-full object-contain" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(0); }
          100% { transform: translateX(-100%); }
        }
        .animate-slide {
          display: flex;
          width: 300%;
          animation: slide 20s linear infinite; /* Adjust the duration as needed */
        }
        .animate-slide > div {
          flex: 1;
          min-width: 33.333%;
        }
      `}</style>
    </section>
  )
}

export default FeaturesSection
