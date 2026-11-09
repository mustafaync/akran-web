'use client'

import { useEffect, useState } from 'react'

export function CookieConsent() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem('cookie-consent')
    if (!cookieConsent) {
      setShow(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted')
    setShow(false)
  }

  if (!show) return null

  return (
    <div className="fixed bottom-4 right-4 bg-white rounded-xl p-4 shadow-lg border border-gray-200 max-w-sm z-40">
      <p className="text-sm text-gray-600 mb-4">
        We use cookies to enhance your experience and analyze site usage.
      </p>
      <div className="flex gap-3">
        <button
          onClick={handleAccept}
          className="flex-1 bg-akran-600 text-white px-3 py-2 rounded-lg text-sm font-semibold hover:bg-akran-700 transition"
        >
          Accept
        </button>
        <button
          onClick={() => setShow(false)}
          className="flex-1 border border-gray-300 text-gray-700 px-3 py-2 rounded-lg text-sm font-semibold hover:bg-gray-50 transition"
        >
          Decline
        </button>
      </div>
    </div>
  )
}
