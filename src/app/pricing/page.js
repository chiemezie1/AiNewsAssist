'use client';

// pricing page, not functing yet

import React from 'react'
import { motion } from 'framer-motion'
import { Check, X } from 'lucide-react'
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer'

const tiers = [
    {
        name: 'Basic',
        price: 'Free',
        frequency: 'month',
        description: 'Perfect for casual news readers',
        features: [
            'Personalized news feed',
            'Access to top news sources',
            'Basic AI summaries',
            'Mobile app access',
        ],
        notIncluded: [
            'Ad-free experience',
            'Exclusive content',
            'Priority customer support',
        ],
        cta: 'Start Basic',
        mostPopular: false,
    },
    {
        name: 'Pro',
        price: 19.99,
        frequency: 'month',
        description: 'Ideal for news enthusiasts and professionals',
        features: [
            'All Basic features',
            'Ad-free experience',
            'Exclusive content',
            'Custom news alerts',
            'Priority customer support',
        ],
        notIncluded: [
            'API access',
        ],
        cta: 'Go Pro',
        mostPopular: true,
    },
    {
        name: 'Enterprise',
        price: 49.99,
        frequency: 'month',
        description: 'For organizations and large teams',
        features: [
            'All Pro features',
            'API access',
            'Dedicated account manager',

        ],
        notIncluded: [],
        cta: 'Contact Sales',
        mostPopular: false,
    },
]

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Pricing() {
    return (
        <div>
            <Navigation />
            <div className="bg-gradient-to-b from-indigo-50 to-white min-h-screen flex items-center justify-center p-8">
                <div className="max-w-5xl mx-auto p-8 border border-gray-300 rounded-lg shadow-lg">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center"
                    >
                        <h1 className="text-4xl font-extrabold text-gray-900">Pricing Plans</h1>
                        <p className="mt-5 text-lg text-gray-500">
                            Choose the perfect plan for your news consumption needs
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-6"
                    >
                        {tiers.map((tier) => (
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                key={tier.name}
                                className={classNames(
                                    tier.mostPopular ? 'border-2 border-indigo-500 shadow-lg relative' : 'border border-gray-200',
                                    'rounded-lg shadow-sm bg-white transition-all p-4'
                                )}
                            >
                                {tier.mostPopular && (
                                    <motion.p
                                        className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-1.5 px-4 bg-indigo-500 rounded-full text-xs font-semibold uppercase tracking-wide text-white"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: 0.3 }}
                                    >
                                        Most popular
                                    </motion.p>
                                )}
                                <div className="p-4">
                                    <h2 className="text-2xl leading-6 font-semibold text-gray-900">{tier.name}</h2>
                                    <p className="mt-4 text-sm text-gray-500">{tier.description}</p>
                                    <p className="mt-6">
                                        <span className="text-3xl font-extrabold text-gray-900">${tier.price}</span>
                                        <span className="text-base font-medium text-gray-500">/mo</span>
                                    </p>
                                    <a
                                        href="#"
                                        className={classNames(
                                            tier.mostPopular
                                                ? 'bg-indigo-500 text-white hover:bg-indigo-600'
                                                : 'bg-indigo-50 text-indigo-700 hover:bg-indigo-100',
                                            'mt-6 block w-full py-3 px-6 border border-transparent rounded-md text-center font-medium'
                                        )}
                                    >
                                        {tier.cta}
                                    </a>
                                </div>
                                <div className="pt-4 pb-6 px-4">
                                    <h3 className="text-xs font-medium text-gray-900 tracking-wide uppercase">What's included</h3>
                                    <ul role="list" className="mt-4 space-y-3">
                                        {tier.features.map((feature) => (
                                            <li key={feature} className="flex space-x-3">
                                                <Check className="flex-shrink-0 h-5 w-5 text-green-500" aria-hidden="true" />
                                                <span className="text-sm text-gray-500">{feature}</span>
                                            </li>
                                        ))}
                                    </ul>
                                    {tier.notIncluded.length > 0 && (
                                        <>
                                            <h3 className="mt-6 text-xs font-medium text-gray-900 tracking-wide uppercase">Not included</h3>
                                            <ul role="list" className="mt-4 space-y-3 bg-gray-50 p-4 rounded-md">
                                                {tier.notIncluded.map((feature) => (
                                                    <li key={feature} className="flex space-x-3">
                                                        <X className="flex-shrink-0 h-5 w-5 text-gray-400" aria-hidden="true" />
                                                        <span className="text-sm text-gray-500">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
