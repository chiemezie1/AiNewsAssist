import { motion } from 'framer-motion'
import { ChevronLeft } from 'lucide-react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const sources = ['X', 'Reddit', 'Google News']

export default function Step3({ formData, updateFormData, prevStep }) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const router = useRouter()
  const [error, setError] = useState(null);

  const toggleSource = (source) => {
    const newSources = formData.selectedSources.includes(source)
      ? formData.selectedSources.filter(s => s !== source)
      : [...formData.selectedSources, source]
    updateFormData({ selectedSources: newSources })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)  // Clear previous errors

    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json();
        setError(data.error || 'Failed to submit form');
        return;
      }

      // If successful, redirect to login
      router.push('/auth/signin')
    } catch (error) {
      setError('An unexpected error occurred. Please try again.');
      console.error('Error submitting the form:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <motion.div
      key="step3"
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg font-medium text-gray-900 mb-4">Select your preferred news sources</h3>
      <div className="flex justify-between space-x-4">
        {sources.map((source) => (
          <motion.button
            key={source}
            onClick={() => toggleSource(source)}
            className={`px-4 py-2 rounded-md text-sm font-medium ${
              formData.selectedSources.includes(source)
                ? 'bg-indigo-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {source}
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
          onClick={handleSubmit}
          disabled={isSubmitting}
          className={`flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          {isSubmitting ? 'Submitting...' : 'Save and Start Reading'}
        </button>
      </div>

      {/* Display the error message */}
      {error && <p className="mt-4 text-red-500 text-center">{error}</p>}
    </motion.div>
  )
}
