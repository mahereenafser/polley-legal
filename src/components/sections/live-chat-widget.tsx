"use client";

import { useState } from "react";
import { MessageCircle, X, Phone } from "lucide-react";

export default function LiveChatWidget() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Call Button - Positioned above chat */}
      <a
        href="/contact#contact-form"
        className="fixed bottom-24 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F4D9C3]"
        style={{ backgroundColor: '#1E3432' }}
        aria-label="Call us"
      >
        <Phone className="h-6 w-6 text-white" />
      </a>

      {/* Chat Widget Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center w-14 h-14 rounded-full shadow-lg transition-all hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#F4D9C3]"
        style={{ backgroundColor: '#1E3432' }}
        aria-label="Open chat"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <MessageCircle className="h-6 w-6 text-white" />
        )}
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div
          className="fixed bottom-24 right-20 z-50 w-80 rounded-lg shadow-2xl overflow-hidden"
          style={{ backgroundColor: '#1E3432' }}
        >
          <div className="p-4 border-b border-white/10">
            <h3 className="font-display text-xl text-white">Chat with Us</h3>
            <p className="text-white/70 text-sm mt-1">We're here to help!</p>
          </div>

          <div className="p-4 h-64 overflow-y-auto bg-[#1E3432]/50">
            <div className="flex flex-col gap-3">
              <div className="bg-white/10 rounded-lg p-3 max-w-[85%]">
                <p className="text-white text-sm">
                  Hello! How can we help you with your intellectual property needs today?
                </p>
              </div>
            </div>
          </div>

          <div className="p-4 border-t border-white/10">
            <div className="flex gap-2">
              <input
                type="text"
                placeholder="Type your message..."
                className="flex-1 px-3 py-2 rounded text-white placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-[#F4D9C3] text-sm"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.14)',
                  border: '1px solid rgba(255, 255, 255, 0.2)'
                }}
              />
              <button
                className="px-4 py-2 rounded font-medium text-sm transition-all hover:opacity-90"
                style={{
                  backgroundColor: '#F4D9C3',
                  color: '#1E3432'
                }}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

