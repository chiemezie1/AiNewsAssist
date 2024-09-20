'use client'

import { motion } from 'framer-motion'
import { X } from 'lucide-react'

const MobileMenu = ({ isMenuOpen, setIsMenuOpen }) => {
  return isMenuOpen ? (
    <motion.div
      className="fixed inset-0 bg-black bg-opacity-50 z-40"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="fixed right-0 top-0 h-full w-64 bg-white shadow-lg"
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        exit={{ x: '100%' }}
        transition={{ type: 'tween' }}
      >
        <div className="p-4">
          <button
            className="text-gray-800 mb-4"
            onClick={() => setIsMenuOpen(false)}
          >
            <X />
          </button>
          {['Home', 'Features', 'Pricing', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="block py-2 text-gray-800 hover:text-purple-600 transition-colors duration-300"
              onClick={() => setIsMenuOpen(false)}
            >
              {item}
            </a>
          ))}
        </div>
      </motion.div>
    </motion.div>
  ) : null
}

export default MobileMenu
