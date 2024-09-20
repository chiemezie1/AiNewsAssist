'use client';

import React from 'react'
import { motion } from 'framer-motion'
import { Newspaper, Zap, Globe, Users, Shield, Award } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer'

const features = [
  {
    name: 'Personalized News Feed',
    description: 'Get news tailored to your interests and preferences.',
    icon: Newspaper,
  },
  {
    name: 'AI-Powered Summaries',
    description: 'Quick, accurate summaries of complex news articles.',
    icon: Zap,
  },
  {
    name: 'Multi-Source Integration',
    description: 'Access news from various trusted sources in one place.',
    icon: Globe,
  },
  {
    name: 'Community Insights',
    description: 'Engage with a community of informed readers.',
    icon: Users,
  },
  {
    name: 'Fact-Checking Tools',
    description: 'Verify information with our built-in fact-checking features.',
    icon: Shield,
  },
  {
    name: 'Customizable Experience',
    description: 'Tailor your news consumption experience to your preferences.',
    icon: Award,
  },
]

const teamMembers = [
  { name: 'Agbo Chiemezie', role: 'CEO & Co-founder', image: '/images/Agbo_chiemezie.png?height=200&width=200' },
  { name: 'Bob Smith', role: 'CTO & Co-founder', image: '/placeholder.svg?height=200&width=200' },
  { name: 'Carol Williams', role: 'Head of AI Research', image: '/images/Bob_Smith.jpg?height=200&width=200' },
  { name: 'David Brown', role: 'Lead UX Designer', image: '/placeholder.svg?height=200&width=200' },
]

export default function AboutUs() {
  return (
    <div>
      <Navigation />
      <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="relative h-96 bg-cover bg-center" style={{ backgroundImage: "url('/images/aboutUsImage.jpg?height=500&width=1200')" }}>
          <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center text-white"
            >
              <h1 className="text-5xl font-extrabold sm:text-6xl sm:tracking-tight lg:text-7xl">
                About NewsAssist
              </h1>
              <p className="mt-6 max-w-xl mx-auto text-xl sm:text-2xl">
                Empowering readers with intelligent news curation and analysis
              </p>
            </motion.div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-24">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-500 mb-8">
                At NewsAssist, we're on a mission to revolutionize the way people consume news. In an era of information overload, we believe that everyone deserves access to accurate, relevant, and easily digestible news content. Our AI-powered platform is designed to cut through the noise, providing you with personalized news experiences that inform, engage, and empower.
              </p>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">What We Offer</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {features.map((feature) => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-gray-900">{feature.name}</p>
                    </dt>
                    <dd className="mt-2 ml-16 text-base text-gray-500">{feature.description}</dd>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-16 bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Our Story</h2>
              <p className="text-lg text-gray-500 mb-6">
                NewsAssist was born out of a simple yet powerful idea: to make quality news accessible and understandable to everyone. Founded by a team of journalists, data scientists, and AI experts, we set out to create a platform that combines the best of human expertise with cutting-edge technology.
              </p>
              <p className="text-lg text-gray-500 mb-6">
                Since our inception, we've been dedicated to developing innovative solutions that address the challenges of modern news consumption. Our AI algorithms are constantly learning and evolving, ensuring that we stay ahead of the curve in delivering the most relevant and impactful news to our users.
              </p>
              <p className="text-lg text-gray-500">
                Today, NewsAssist serves thousands of readers worldwide, helping them stay informed, save time, and gain deeper insights into the stories that matter most. We're proud of how far we've come, but we're even more excited about the future of news consumption that we're helping to shape.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 bg-white rounded-3xl shadow-xl overflow-hidden"
          >
            <div className="p-8 sm:p-12">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                {teamMembers.map((member) => (
                  <Card key={member.name}>
                    <CardContent className="p-6 flex flex-col items-center text-center">
                      <Avatar className="w-24 h-24 mb-4">
                        <AvatarImage src={member.image} alt={member.name} />
                        <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                      </Avatar>
                      <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                      <p className="text-sm text-gray-500">{member.role}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-16 text-center"
          >
            <h2 className="text-3xl font-extrabold text-gray-900 mb-6">Join Us in Shaping the Future of News</h2>
            <p className="text-xl text-gray-500 mb-8">
              Experience the power of intelligent news curation. Sign up for NewsAssist today and transform the way you consume information.
            </p>
            <a
              href="/auth/signin"
              className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Get Started
            </a>
          </motion.div>
        </div>
      </div>
      <Footer />
    </div>
  )
}