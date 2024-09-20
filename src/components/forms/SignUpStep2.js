import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const categories = [
  'Technology',
  'Health',
  'Environment',
  'Politics',
  'Business',
  'Entertainment',
  'Sports',
  'Science'
]

export default function Step2({ formData, updateFormData, nextStep, prevStep }) {
  const toggleCategory = (category) => {
    const newCategories = formData.selectedCategories.includes(category)
      ? formData.selectedCategories.filter(c => c !== category)
      : [...formData.selectedCategories, category]
    updateFormData({ selectedCategories: newCategories })
  }

  return (
    <motion.div
      key="step2"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg font-medium text-gray-900 mb-4">Select your preferred news categories</h3>
      <div className="grid grid-cols-2 gap-4">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => toggleCategory(category)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              formData.selectedCategories.includes(category)
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {category}
          </motion.button>
        ))}
      </div>
      <div className="mt-8 flex justify-between">
        <button
          onClick={prevStep}
          className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-indigo-600 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <ChevronLeft className="mr-2 h-5 w-5" aria-hidden="true" />
          Previous
        </button>
        <button
          onClick={nextStep}
          className="flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          Next
          <ChevronRight className="ml-2 h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </motion.div>
  )
}
