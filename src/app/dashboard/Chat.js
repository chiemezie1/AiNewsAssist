'use client'

import { useState, useEffect, useRef } from 'react'
import { GoogleGenerativeAI } from '@google/generative-ai'

const genAI = new GoogleGenerativeAI(process.env.NEXT_PUBLIC_GOOGLE_API_KEY)

export default function Chat() {
  const [userPrompt, setUserPrompt] = useState('')
  const [loading, setLoading] = useState(false)
  const [messages, setMessages] = useState([])
  const [chat, setChat] = useState(null)
  const scrollAreaRef = useRef(null)
  const textareaRef = useRef(null)

  const initializeChat = async () => {
    const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' })
    const chatSession = model.startChat({
      history: [],
      generationConfig: {
        maxOutputTokens: 100,
      },
    })
    setChat(chatSession)
  }

  useEffect(() => {
    initializeChat()
  }, [])

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight
    }
  }, [messages])

  const handleInputChange = (event) => {
    setUserPrompt(event.target.value)
    adjustTextareaHeight()
  }

  const adjustTextareaHeight = () => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'
      textareaRef.current.style.height = `${Math.min(textareaRef.current.scrollHeight, 80)}px`
    }
  }

  const handleSend = async () => {
    if (!chat || !userPrompt.trim()) return

    setLoading(true)
    setMessages([...messages, { role: 'user', text: userPrompt }])

    try {
      const result = await chat.sendMessage(userPrompt)
      const response = await result.response
      const text = await response.text()

      setMessages((prevMessages) => [...prevMessages, { role: 'model', text }])
      setUserPrompt('')
      adjustTextareaHeight()
    } catch (error) {
      console.error('Error sending message:', error)
      setMessages((prevMessages) => [...prevMessages, { role: 'error', text: 'An error occurred. Please try again.' }])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="flex flex-col justify-center bg-gray-100 rounded-lg overflow-hidden shadow-xl">
      <div className="flex-grow overflow-hidden h-[500px]">
        <div className="h-full bg-gradient-to-br from-gray-900 to-gray-800 text-white flex flex-col">
          <div className="border-b border-gray-700 p-2 flex items-center justify-between">
            <h2 className="text-lg font-bold text-primary">Chat with AI</h2>
            <span className="text-xs text-gray-400">{messages.length} messages</span>
          </div>
          <div className="flex-grow overflow-y-auto p-3" ref={scrollAreaRef}>
            {messages.map((msg, index) => (
              <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                <div className={`flex items-start gap-1 max-w-[80%] ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}>
                  <div className={`w-5 h-4 rounded-sm flex items-center justify-center text-xs ${
                    msg.role === 'user' ? 'bg-yellow-700' : msg.role === 'error' ? 'bg-red-500' : 'bg-green-500'
                  }`}>
                    {msg.role === 'user' ? 'me' : msg.role === 'error' ? '!' : 'AI'}
                  </div>
                  <div className={`rounded-lg p-2 text-sm ${
                    msg.role === 'user' 
                      ? 'bg-blue-600 text-white' 
                      : msg.role === 'error'
                      ? 'bg-red-600 text-white'
                      : 'bg-gray-700 text-white'
                  }`}>
                    <p className="text-xs whitespace-pre-wrap">{msg.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gray-900 p-2">
        <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex items-end space-x-2">
          <textarea
            ref={textareaRef}
            className="flex-grow bg-gray-800 text-white border border-gray-700 rounded-md p-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            placeholder="Type your message here..."
            value={userPrompt}
            onChange={handleInputChange}
            rows={1}
            style={{ minHeight: '32px', maxHeight: '80px' }}
          />
          <button
            type="submit"
            className={`p-2 rounded-md text-sm ${
              loading 
                ? 'bg-gray-600 cursor-not-allowed' 
                : 'bg-blue-500 hover:bg-blue-600'
            } transition-colors duration-200 min-w-[60px]`}
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send'}
          </button>
        </form>
      </div>
    </div>
  )
}