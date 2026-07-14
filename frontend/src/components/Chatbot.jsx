import React, { useEffect, useRef, useState } from 'react'
import ReactMarkdown from 'react-markdown'

const STARTER_PROMPTS = {
  en: [
    'Why do my gums bleed?',
    'How long should I brush?',
    'Is gutka bad for my teeth?',
  ],
  ur: [
    'مسوڑھوں سے خون کیوں آتا ہے؟',
    'مجھے کتنی دیر برش کرنا چاہیے؟',
    'کیا گٹکا دانتوں کے لیے نقصان دہ ہے؟',
  ]
}

export default function Chatbot({ lang }) {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { 
      from: 'bot', 
      text: lang === 'ur' 
        ? "السلام علیکم! میں مسکراہٹ کی اے آئی اسسٹنٹ ہوں۔ مجھ سے دانتوں کی صحت کے بارے میں کچھ بھی پوچھیں، یا نیچے دیے گئے سوالات پر کلک کریں۔" 
        : "Assalam-o-Alaikum! I'm Muskurahat's AI assistant. Ask me anything about oral hygiene, or tap a suggestion below." 
    },
  ])
  const [input, setInput] = useState('')
  const [typing, setTyping] = useState(false)
  const scrollRef = useRef(null)

  // Auto-scroll to the latest message
  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, typing])

  // Sync starter welcome message if user changes language while chat is open
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].from === 'bot') {
        return [{
          from: 'bot',
          text: lang === 'ur'
            ? "السلام علیکم! میں مسکراہٹ کی اے آئی اسسٹنٹ ہوں۔ مجھ سے دانتوں کی صحت کے بارے میں کچھ بھی پوچھیں، یا نیچے دیے گئے سوالات پر کلک کریں۔"
            : "Assalam-o-Alaikum! I'm Muskurahat's AI assistant. Ask me anything about oral hygiene, or tap a suggestion below."
        }]
      }
      return prev
    })
  }, [lang])

  const send = async (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    
    // 1. Add user's message to the screen
    setMessages((m) => [...m, { from: 'user', text: trimmed }])
    setInput('')
    setTyping(true)

    // 2. Query our Flask Backend Real-Time AI endpoint
    try {
      const response = await fetch('http://localhost:5000/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: trimmed }),
      });

      if (!response.ok) {
        throw new Error(`Server returned status code ${response.status}`);
      }

      const data = await response.json();
      
      // 3. Add AI's response to the screen
      setMessages((m) => [...m, { from: 'bot', text: data.reply }])

    } catch (error) {
      console.error("Chatbot Fetch Error:", error);
      
      // Dynamic local fallback message in case server is offline
      const errorText = lang === 'ur'
        ? "⚠️ سرور سے رابطہ نہیں ہو سکا۔ پکی بات کر لیں کہ پائتھون کا بیک اینڈ پورٹ 5000 پر چل رہا ہے!"
        : "⚠️ Could not connect to the AI server. Make sure your Python Flask backend is running on port 5000!";
        
      setMessages((m) => [...m, { from: 'bot', text: errorText }])
    } finally {
      setTyping(false)
    }
  }

  // Get current language starter prompts
  const activePrompts = lang === 'ur' ? STARTER_PROMPTS.ur : STARTER_PROMPTS.en

  return (
    <>
      {/* Floating toggle bubble */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed bottom-5 right-5 z-50 w-16 h-16 rounded-full bg-dusty text-cream shadow-xl shadow-navy/20 flex items-center justify-center text-2xl hover:bg-navy transition-all hover:scale-105"
        aria-label="Open Muskurahat AI assistant"
      >
        {open ? '✕' : '💬'}
      </button>

      {open && (
        <div className="fixed bottom-24 right-5 z-50 w-[92vw] max-w-sm h-[70vh] max-h-[560px] bg-cream border border-lilac rounded-3xl shadow-2xl shadow-navy/20 flex flex-col overflow-hidden">
          {/* Header */}
          <div className="bg-dusty text-cream px-5 py-4 flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-cream/20 flex items-center justify-center text-lg">🦷</div>
            <div>
              <p className="font-display font-600 leading-tight">
                {lang === 'ur' ? <span className="urdu text-base">مسکراہٹ اسسٹنٹ</span> : 'Muskurahat Assistant'}
              </p>
              <p className="text-xs text-cream/80">
                {lang === 'ur' ? <span className="urdu text-xs">رہنمائی، علاج نہیں</span> : 'Guidance, not a diagnosis'}
              </p>
            </div>
          </div>

          {/* Messages Feed */}
          <div ref={scrollRef} className="chat-scroll flex-1 overflow-y-auto px-4 py-4 space-y-3">
            {messages.map((m, i) => {
              // Automatically check if message is written in Urdu script to adjust layout direction
              const isUrduText = /[\u0600-\u06FF]/.test(m.text);

              return (
                <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div
                    className={`max-w-[80%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed markdown-content ${
                      m.from === 'user'
                        ? 'bg-navy text-cream rounded-br-sm'
                        : 'bg-lilac/50 text-navy rounded-bl-sm'
                    } ${isUrduText ? 'urdu text-right leading-relaxed' : ''}`}
                  >
                    {/* ReactMarkdown processes asterisks (**), bullets (*), and spacing cleanly */}
                    <ReactMarkdown>{m.text}</ReactMarkdown>
                  </div>
                </div>
              );
            })}

            {/* Loading typing bubble */}
            {typing && (
              <div className="flex justify-start">
                <div className="bg-lilac/50 px-4 py-3 rounded-2xl rounded-bl-sm flex gap-1">
                  <span className="w-1.5 h-1.5 bg-dusty rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                  <span className="w-1.5 h-1.5 bg-dusty rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                  <span className="w-1.5 h-1.5 bg-dusty rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                </div>
              </div>
            )}
          </div>

          {/* Starter prompts */}
          {messages.length < 2 && (
            <div className="px-4 pb-2 flex flex-wrap gap-2">
              {activePrompts.map((p) => (
                <button
                  key={p}
                  onClick={() => send(p)}
                  className={`text-xs bg-lilac/40 hover:bg-lilac/70 text-navy px-3 py-1.5 rounded-full transition-colors ${lang === 'ur' ? 'urdu' : ''}`}
                >
                  {p}
                </button>
              ))}
            </div>
          )}

          {/* Chat input form */}
          <form
            onSubmit={(e) => { e.preventDefault(); send(input) }}
            className="border-t border-lilac p-3 flex items-center gap-2"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={lang === 'ur' ? "سوال پوچھیں..." : "Type your question..."}
              className={`flex-1 bg-lilac/20 focus:bg-lilac/40 rounded-full px-4 py-2.5 text-sm text-navy outline-none placeholder:text-navy/40 ${lang === 'ur' ? 'urdu text-right' : ''}`}
            />
            <button
              type="submit"
              className="w-10 h-10 shrink-0 rounded-full bg-dusty hover:bg-navy text-cream flex items-center justify-center transition-colors"
              aria-label="Send message"
            >
              ➤
            </button>
          </form>
        </div>
      )}
    </>
  )
}