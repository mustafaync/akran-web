'use client'

import { useEffect, useState } from 'react'

export function LiveChat() {
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState([
    { type: 'bot', text: 'Hi! How can we help you today?' }
  ])
  const [input, setInput] = useState('')

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { type: 'user', text: input }])
      setInput('')
      setTimeout(() => {
        setMessages(prev => [...prev, { type: 'bot', text: 'Thanks for your message. We\'ll get back to you soon!' }])
      }, 500)
    }
  }

  return (
    <>
      {/* Chat Button */}
      <button
        onClick={() => setShowChat(!showChat)}
        className="fixed bottom-4 left-4 bg-akran-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-akran-700 transition z-40"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 5a2 2 0 012-2h12a2 2 0 012 2v10a2 2 0 01-2 2H4a2 2 0 01-2-2V5z" />
          <path d="M5 7a1 1 0 011-1h8a1 1 0 011 1v4a1 1 0 01-1 1H6a1 1 0 01-1-1V7z" />
        </svg>
      </button>

      {/* Chat Window */}
      {showChat && (
        <div className="fixed bottom-20 left-4 bg-white rounded-2xl shadow-2xl w-96 max-h-96 flex flex-col border border-gray-200 z-40">
          {/* Header */}
          <div className="bg-gradient-to-r from-akran-500 to-akran-600 text-white p-4 rounded-t-2xl flex items-center justify-between">
            <h3 className="font-semibold">Support</h3>
            <button onClick={() => setShowChat(false)} className="hover:opacity-80">
              ✕
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, idx) => (
              <div key={idx} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`rounded-lg px-4 py-2 max-w-xs ${
                    msg.type === 'user'
                      ? 'bg-akran-100 text-gray-900'
                      : 'bg-gray-100 text-gray-700'
                  }`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
          </div>

          {/* Input */}
          <div className="border-t border-gray-200 p-4 flex gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Type a message..."
              className="flex-1 border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-akran-500"
            />
            <button
              onClick={handleSend}
              className="bg-akran-600 text-white rounded-lg px-4 py-2 hover:bg-akran-700 transition"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  )
}
