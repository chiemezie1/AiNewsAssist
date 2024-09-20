"use client"

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { User, Camera, Twitter, Share2 } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import  Button  from "@/components/ui/button"
import Navigation from '@/components/Navigation'

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

const sources = ['X', 'Reddit', 'Google News']

export default function Settings() {
  const [profileImage, setProfileImage] = useState('/placeholder.svg?height=100&width=100')
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedSources, setSelectedSources] = useState([])

  useEffect(() => {
    // Simulating fetching initial data
    setSelectedCategories(['Technology', 'Health'])
    setSelectedSources(['X', 'Google News'])
  }, [])

  const handleImageUpload = (event) => {
    const file = event.target.files?.[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const toggleCategory = (category) => {
    const updatedCategories = selectedCategories.includes(category)
      ? selectedCategories.filter(c => c !== category)
      : [...selectedCategories, category]
    setSelectedCategories(updatedCategories)
  }

  const toggleSource = (source) => {
    const updatedSources = selectedSources.includes(source)
      ? selectedSources.filter(s => s !== source)
      : [...selectedSources, source]
    setSelectedSources(updatedSources)
  }

  const saveChanges = () => {
    // Simulating API call to save changes
    console.log('Saving changes', { profileImage, selectedCategories, selectedSources })
    // Add your save logic here
  }

  return (
  <div>
  <Navigation />
    <div className="min-h-screen bg-background py-12 px-4 sm:px-6 lg:px-8">
      <Card className="max-w-3xl mx-auto shadow-lg rounded-lg border border-gray-200">
        <CardHeader>
          <CardTitle className="text-center text-2xl font-bold text-primary">Settings</CardTitle>
        </CardHeader>
        <CardContent>
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Profile Image Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">Profile Image</h2>
              <div className="flex items-center space-x-6">
                <div className="relative">
                  <Avatar className="w-24 h-24 border border-gray-300 rounded-full shadow-sm">
                    <AvatarImage src={profileImage} alt="Profile" />
                    <AvatarFallback><User className="w-12 h-12" /></AvatarFallback>
                  </Avatar>
                  <label htmlFor="profile-image-upload" className="absolute bottom-0 right-0 bg-primary rounded-full p-2 cursor-pointer hover:bg-primary-dark transition">
                    <Camera className="w-4 h-4 text-white" />
                  </label>
                  <input
                    id="profile-image-upload"
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </div>
                <div>
                  <h3 className="font-medium text-gray-600">Change profile photo</h3>
                  <p className="text-sm text-gray-500">Click the camera icon to upload a new image</p>
                </div>
              </div>
            </div>

            {/* News Categories Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">News Categories</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {categories.map((category) => (
                  <div 
                    key={category} 
                    className="flex items-center space-x-2 p-2 border border-gray-200 rounded-md hover:bg-gray-50 transition"
                  >
                    <Checkbox
                      id={`category-${category}`}
                      checked={selectedCategories.includes(category)}
                      onCheckedChange={() => toggleCategory(category)}
                    />
                    <Label htmlFor={`category-${category}`} className="text-gray-600">{category}</Label>
                  </div>
                ))}
              </div>
            </div>

            {/* News Sources Section */}
            <div className="mb-8">
              <h2 className="text-lg font-semibold mb-4 text-gray-700">News Sources</h2>
              <div className="flex flex-wrap gap-4">
                {sources.map((source) => (
                  <Badge
                    key={source}
                    variant={selectedSources.includes(source) ? "default" : "outline"}
                    className={`cursor-pointer hover:bg-primary hover:text-white transition ${
                      selectedSources.includes(source) ? 'bg-primary text-white' : 'bg-gray-200 text-gray-600'
                    }`}
                    onClick={() => toggleSource(source)}
                  >
                    {source === 'X' && <Twitter className="w-4 h-4 mr-1" />}
                    {source === 'Reddit' && <Share2 className="w-4 h-4 mr-1" />}
                    {source}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Save Button */}
            <div className="flex justify-end">
              <Button variant="primary" className="px-6 py-2 text-white bg-primary hover:bg-primary-dark transition" onClick={saveChanges}>
                Save Changes
              </Button>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </div>
  </div>
  )
}
