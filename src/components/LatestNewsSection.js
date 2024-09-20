// LatestNewsSection.js
'use client'

import { motion } from 'framer-motion'

const LatestNewsSection = () => {
  const news = [
    {
      title: 'Breaking: Major Tech Breakthrough Announced',
      description: 'Tech company X has announced a major breakthrough in AI technology...',
      link: '/news/tech-breakthrough'
    },
    {
      title: 'Global Markets Rally Amid Economic Optimism',
      description: 'Global stock markets have rallied today as economic optimism boosts investor confidence...',
      link: '/news/markets-rally'
    }
  ]

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
              {...fadeIn}
              transition={{ delay: index * 0.2 }}
            >
              <h4 className="text-2xl font-semibold mb-2 text-gray-800">{item.title}</h4>
              <p className="text-gray-600 mb-4">{item.description}</p>
              <a
                href={item.link}
                className="text-indigo-600 font-semibold hover:text-indigo-800 transition-all duration-300"
              >
                Read More
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default LatestNewsSection
