'use client'

import { useState } from 'react'
import { AnimatePresence } from 'framer-motion'
import Navigation from '@/components/Navigation'
import { signIn } from "next-auth/react";
import Step1 from './SignUpStep1'
import Step2 from './SignUpStep2'
import Step3 from './SignUpStep3'


export default function SignUp() {
  const [step, setStep] = useState(1)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    selectedCategories: [],
    selectedSources: []
  })

  const nextStep = () => setStep(prev => Math.min(prev + 1, 3))
  const prevStep = () => setStep(prev => Math.max(prev - 1, 1))

  const updateFormData = (newData) => {
    setFormData(prev => ({ ...prev, ...newData }))
  }

  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center py-2 px-4 sm:px-6 lg:px-8">
        <div className="max-w-md w-full space-y-8 bg-white p-10 rounded-xl shadow-2xl">
          <div>
            <h2 className="text-center text-3xl font-extrabold text-gray-900">
              Sign up for NewsAssist
            </h2>
            <p className="text-center text-sm text-gray-600 mt-2">
              Get personalized news updates tailored to your interests
            </p>
          </div>

          {/* Step indicator */}
          <div className="flex justify-between items-center mb-8">
            {[1, 2, 3].map((s) => (
              <div
                key={s}
                className={`w-8 h-8 rounded-full flex items-center justify-center ${s === step ? 'bg-indigo-600 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
              >
                {s}
              </div>
            ))}
          </div>

          <AnimatePresence mode="wait">
            {step === 1 && (
              <Step1
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
              />
            )}
            {step === 2 && (
              <Step2
                formData={formData}
                updateFormData={updateFormData}
                nextStep={nextStep}
                prevStep={prevStep}
              />
            )}
            {step === 3 && (
              <Step3
                formData={formData}
                updateFormData={updateFormData}
                prevStep={prevStep}
              />
            )}
          </AnimatePresence>
          <div className="mt-4 text-center">
          <h2 className="text-lg font-medium text-gray-900 mb-4">Or sign up with Google</h2>
          <button 
            onClick={() => signIn('google')} 
            className="w-full bg-red-500 text-white py-2 px-4 border border-transparent rounded-md shadow-sm hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Sign Up with Google
          </button>
        </div>
          <div className="text-center mt-2">
            <p className="text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/auth/signin" className="font-medium text-indigo-600 hover:text-indigo-500">Log In</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
