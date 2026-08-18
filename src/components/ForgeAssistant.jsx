import { useState } from "react"
import {
  Bot,
  MessageCircle,
  Send,
  Sparkles,
  X,
} from "lucide-react"
import chatbotResponses from "../data/chatbotResponses"

function ForgeAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "bot",
      text: "Hi! I'm Forge. I can help you understand your SkillForge roadmap. What do you want to learn?",
    },
  ])

  const [input, setInput] = useState("")

  const getResponse = (text) => {
    const lowerText = text.toLowerCase().trim()

    let bestMatch = null
    let bestScore = 0

    chatbotResponses.forEach((item) => {
      let score = 0

      item.keywords.forEach((keyword) => {
        if (lowerText.includes(keyword)) {
          if (keyword.length > 8) {
            score += 3
          } else {
            score += 1
          }
        }
      })

      if (score > bestScore) {
        bestScore = score
        bestMatch = item
      }
    })

    return (
      bestMatch?.response ||
      chatbotResponses[chatbotResponses.length - 1].response
    )
  }

  const sendMessage = (text = input) => {
    const trimmedText = text.trim()

    if (!trimmedText) return

    const userMessage = {
      id: Date.now(),
      sender: "user",
      text: trimmedText,
    }

    const botMessage = {
      id: Date.now() + 1,
      sender: "bot",
      text: getResponse(trimmedText),
    }

    setMessages((current) => [
      ...current,
      userMessage,
      botMessage,
    ])

    setInput("")
  }

  const quickQuestions = [
    "What should I learn next?",
    "Show me the roadmap",
    "I want to learn JavaScript",
  ]

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-24 right-4 z-[60] w-[calc(100vw-2rem)] max-w-sm overflow-hidden rounded-3xl border border-white/10 bg-[#111113] shadow-2xl sm:right-6">

          <div className="flex items-center justify-between border-b border-white/10 px-5 py-4">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white text-black">
                <Sparkles size={17} />
              </div>

              <div>
                <p className="text-sm font-medium">
                  Forge Assistant
                </p>

                <p className="text-xs text-white/35">
                  SkillForge learning guide
                </p>
              </div>

            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full text-white/40 transition hover:bg-white/10 hover:text-white"
              aria-label="Close assistant"
            >
              <X size={17} />
            </button>

          </div>

          <div className="max-h-[360px] space-y-4 overflow-y-auto p-4">

            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.sender === "user"
                    ? "justify-end"
                    : "justify-start"
                }`}
              >

                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-3 text-sm leading-6 ${
                    message.sender === "user"
                      ? "bg-white text-black"
                      : "bg-white/[0.06] text-white/70"
                  }`}
                >
                  {message.text}
                </div>

              </div>
            ))}

            {messages.length === 1 && (
              <div className="space-y-2 pt-1">

                {quickQuestions.map((question) => (
                  <button
                    key={question}
                    onClick={() => sendMessage(question)}
                    className="flex w-full items-center gap-2 rounded-xl border border-white/10 px-3 py-2.5 text-left text-xs text-white/45 transition hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                  >
                    <Bot size={14} />
                    {question}
                  </button>
                ))}

              </div>
            )}

          </div>

          <div className="border-t border-white/10 p-3">

            <form
              onSubmit={(event) => {
                event.preventDefault()
                sendMessage()
              }}
              className="flex items-center gap-2 rounded-2xl border border-white/10 bg-white/[0.03] px-3 py-2"
            >

              <input
                value={input}
                onChange={(event) => setInput(event.target.value)}
                placeholder="Ask Forge anything..."
                className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-white/25"
              />

              <button
                type="submit"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-white text-black transition hover:bg-white/90"
                aria-label="Send message"
              >
                <Send size={14} />
              </button>

            </form>

          </div>

        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-white text-black shadow-2xl transition hover:scale-105 sm:right-6"
        aria-label="Open Forge Assistant"
      >
        {isOpen ? (
          <X size={21} />
        ) : (
          <MessageCircle size={21} />
        )}
      </button>
    </>
  )
}

export default ForgeAssistant