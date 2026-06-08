import { motion, AnimatePresence } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send, Home, MessageSquare, MoreVertical, Sparkles, Zap, ArrowRight, User, Clock } from "lucide-react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<"home" | "chat" | "history">("home");
  const [messages, setMessages] = useState<Array<{ type: string; text: string }>>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [selectedHistoryIndex, setSelectedHistoryIndex] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Mock chat history data
  const [chatHistory] = useState([
    {
      id: 1,
      date: "Feb 25, 2026",
      time: "2:30 PM",
      status: "Closed",
      messages: [
        { type: "user", text: "I need help with IPO procedures" },
        { type: "bot", text: "I'd be happy to help you with IPO procedures! What specific information are you looking for?" },
        { type: "user", text: "What documents do I need to submit?" },
        { type: "bot", text: "For IPO procedures, you'll need to submit: 1) DRHP (Draft Red Herring Prospectus), 2) Due diligence certificate, 3) Board resolutions, and 4) Other regulatory compliance documents. Would you like more details on any of these?" },
      ],
    },
    {
      id: 2,
      date: "Feb 24, 2026",
      time: "10:15 AM",
      status: "Closed",
      messages: [
        { type: "user", text: "What's the status of my transaction?" },
        { type: "bot", text: "Let me check that for you! Could you please provide your transaction ID?" },
        { type: "user", text: "TRX-2024-00123" },
        { type: "bot", text: "Thank you! Your transaction TRX-2024-00123 has been successfully processed and completed on Feb 23, 2026. You should receive a confirmation email shortly." },
      ],
    },
    {
      id: 3,
      date: "Feb 23, 2026",
      time: "4:45 PM",
      status: "Closed",
      messages: [
        { type: "user", text: "Tell me about buyback offers" },
        { type: "bot", text: "A buyback offer is when a company repurchases its own shares from existing shareholders. This can be done through: 1) Open market purchases, 2) Tender offer, or 3) Dutch auction. Would you like to know more about any specific type?" },
        { type: "user", text: "How does a tender offer work?" },
        { type: "bot", text: "In a tender offer buyback, the company announces a price (usually at a premium) and shareholders can choose to tender their shares. The company sets a maximum number of shares to buy back. If oversubscribed, shares are accepted on a proportional basis." },
      ],
    },
  ]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { type: "user", text: inputValue }]);
    setInputValue("");
    setIsTyping(true);

    setTimeout(() => {
      setIsTyping(false);
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Thanks for reaching out! 🎉 Our team will get back to you shortly. Feel free to explore our pricing or book a demo!",
        },
      ]);
    }, 1500);
  };

  const serviceTopics = [
    "Forms & Procedures",
    "Status of your Transaction",
    "IPO's?",
    "Open offer?",
    "Delisting/Exit offer?",
    "Buyback offer?",
    "Rights Issue?",
  ];

  const handleToggle = () => {
    if (isOpen) {
      setActiveTab("home");
    }
    setIsOpen(!isOpen);
  };

  return (
    <>
      {/* Floating Chat Button with Pulse */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: "spring", stiffness: 200 }}
      >
        {/* Pulse Ring */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}
        
        <motion.button
          onClick={handleToggle}
          className="relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center overflow-hidden"
          style={{
            background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
          }}
          whileHover={{ scale: 1.1, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
        >
          {/* Animated gradient overlay */}
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.2) 0%, rgba(255,255,255,0) 100%)",
            }}
            animate={{
              opacity: [0.3, 0.6, 0.3],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
            }}
          />
          
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="w-6 h-6 text-white relative z-10" />
              </motion.div>
            ) : (
              <motion.div
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="w-6 h-6 text-white relative z-10" />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-24 right-6 z-50 w-[320px] h-[460px] rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-xl"
            style={{
              background: "linear-gradient(to bottom, #ffffff 0%, #f8f9fc 100%)",
              border: "1px solid rgba(47, 128, 237, 0.1)",
            }}
          >
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <motion.div
                className="absolute -top-20 -right-20 w-32 h-32 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, #9B51E0 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <motion.div
                className="absolute -bottom-10 -left-10 w-24 h-24 rounded-full opacity-20"
                style={{
                  background: "radial-gradient(circle, #2F80ED 0%, transparent 70%)",
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  delay: 1,
                }}
              />
            </div>

            {/* Content */}
            {activeTab === "home" ? (
              <div className="relative flex flex-col flex-1 min-h-0">
                {/* Header with Glassmorphism */}
                <div className="relative px-3 pt-3 pb-3">
                  <div className="flex items-center justify-between mb-3">
                    <motion.div
                      className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                      }}
                      whileHover={{ scale: 1.05, rotate: 5 }}
                    >
                      <Sparkles className="w-4 h-4 text-white relative z-10" />
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
                        }}
                        animate={{
                          opacity: [0.5, 1, 0.5],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                        }}
                      />
                    </motion.div>
                    
                    <motion.button
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowMenu(!showMenu);
                      }}
                    >
                      <MoreVertical className="w-3.5 h-3.5 text-gray-600" />
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {showMenu && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowMenu(false);
                                setActiveTab("history");
                                setSelectedHistoryIndex(null);
                              }}
                              className="w-full px-4 py-2.5 text-left text-xs text-gray-700 hover:bg-blue-50 transition-colors flex items-center gap-2"
                            >
                              <Clock className="w-3.5 h-3.5 text-[#2F80ED]" />
                              <span>Chat History</span>
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>

                  {/* Animated Welcome Text */}
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <h2 className="text-lg font-bold mb-1.5 leading-tight">
                      <span
                        className="bg-clip-text text-transparent"
                        style={{
                          backgroundImage: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                        }}
                      >
                        Hey there!
                      </span>{" "}
                      <motion.span
                        className="inline-block"
                        animate={{
                          rotate: [0, 20, -20, 0],
                        }}
                        transition={{
                          duration: 1.5,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      >
                        👋
                      </motion.span>
                    </h2>
                    <p className="text-gray-600 text-xs leading-relaxed">
                      Welcome to <span className="font-semibold text-gray-900">SMB Flow</span>.
                      <br />
                      How can we help you today?
                    </p>
                  </motion.div>
                </div>

                {/* Scrollable Content */}
                <div className="flex-1 overflow-y-auto px-3 relative z-10">
                  {/* Main Chat Card with 3D Effect */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="mb-2"
                  >
                    <motion.button
                      onClick={() => setActiveTab("chat")}
                      className="w-full p-3 rounded-xl text-left group relative overflow-hidden"
                      style={{
                        background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                        boxShadow: "0 8px 20px -5px rgba(47, 128, 237, 0.4)",
                      }}
                      whileHover={{ scale: 1.02, y: -4 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {/* Animated shine effect */}
                      <motion.div
                        className="absolute inset-0"
                        style={{
                          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.3) 50%, transparent 100%)",
                        }}
                        animate={{
                          x: ["-200%", "200%"],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          repeatDelay: 3,
                        }}
                      />
                      
                      <div className="relative z-10 flex items-center justify-between">
                        <div className="flex-1">
                          <div className="flex items-center gap-1.5 mb-0.5">
                            <Zap className="w-3.5 h-3.5 text-yellow-300" />
                            <span className="text-white font-bold text-xs">
                              Start a Conversation
                            </span>
                          </div>
                          <p className="text-white/90 text-[10px] leading-snug">
                            Our AI-powered support team is ready to assist you
                          </p>
                        </div>
                        <motion.div
                          className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center ml-2"
                          animate={{
                            x: [0, 5, 0],
                          }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                          }}
                        >
                          <ArrowRight className="w-3.5 h-3.5 text-white" />
                        </motion.div>
                      </div>
                    </motion.button>
                  </motion.div>

                  {/* Quick Actions Grid */}
                  <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    className="pb-0"
                  >
                    <h3 className="text-[9px] font-semibold text-gray-500 mb-1.5 uppercase tracking-wider">
                      I can help you with...
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {serviceTopics.map((topic, index) => (
                        <motion.button
                          key={index}
                          onClick={() => setActiveTab("chat")}
                          className="px-2.5 py-1.5 rounded-full bg-white border-2 border-[#2F80ED]/40 hover:border-[#2F80ED] hover:bg-blue-50 transition-all"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.4 + index * 0.08 }}
                        >
                          <span className="text-[9px] font-medium text-[#2F80ED]">
                            {topic}
                          </span>
                        </motion.button>
                      ))}
                    </div>
                    <motion.p
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.9 }}
                      className="text-[9px] text-gray-400 mt-1 text-center italic"
                    >
                      ...and many more!
                    </motion.p>
                  </motion.div>

                  {/* Info Cards */}
                  
                </div>
              </div>
            ) : activeTab === "history" ? (
              <div className="flex flex-col h-full">
                {/* Chat Header */}
                <div className="relative px-4 py-3 border-b border-gray-200 backdrop-blur-sm bg-white/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-white relative z-10" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xs text-gray-900">SMB Flow AI</h3>
                        <div className="flex items-center gap-1.5">
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-green-400"
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(74, 222, 128, 0.7)",
                                "0 0 0 4px rgba(74, 222, 128, 0)",
                                "0 0 0 0 rgba(74, 222, 128, 0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                          <span className="text-[9px] text-gray-600">Online now</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <MoreVertical className="w-3.5 h-3.5 text-gray-600" />
                    </motion.button>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2.5 relative">
                  {selectedHistoryIndex !== null ? (
                    <>
                      {chatHistory[selectedHistoryIndex].messages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          {message.type === "bot" && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2F80ED] to-[#9B51E0] flex items-center justify-center mr-2 flex-shrink-0">
                              <Sparkles className="w-4 h-4 text-white" />
                            </div>
                          )}
                          <motion.div
                            className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                              message.type === "user"
                                ? "text-white shadow-lg"
                                : "bg-white text-gray-900 shadow-md border border-gray-100"
                            }`}
                            style={
                              message.type === "user"
                                ? {
                                    background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                                  }
                                : undefined
                            }
                            whileHover={{ scale: 1.02 }}
                          >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                          </motion.div>
                          {message.type === "user" && (
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                      <div ref={messagesEndRef} />
                    </>
                  ) : (
                    <div className="space-y-3">
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="mb-3"
                      >
                        <h4 className="text-xs font-semibold text-gray-700 mb-2">Previous Conversations</h4>
                        <p className="text-[10px] text-gray-500">All tickets below are closed and read-only</p>
                      </motion.div>
                      
                      {chatHistory.map((chat, index) => (
                        <motion.button
                          key={chat.id}
                          onClick={() => setSelectedHistoryIndex(index)}
                          className="w-full p-3 rounded-xl bg-white border border-gray-200 hover:border-[#2F80ED] hover:shadow-md transition-all text-left"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.1 }}
                          whileHover={{ scale: 1.02, y: -2 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className="flex items-start justify-between mb-2">
                            <div className="flex items-center gap-2">
                              <Clock className="w-3.5 h-3.5 text-gray-400" />
                              <span className="text-[10px] font-medium text-gray-900">{chat.date}</span>
                              <span className="text-[10px] text-gray-500">{chat.time}</span>
                            </div>
                            <span className="px-2 py-0.5 rounded-full bg-gray-100 text-[9px] font-medium text-gray-600">
                              {chat.status}
                            </span>
                          </div>
                          <p className="text-xs text-gray-600 line-clamp-2">
                            {chat.messages[0].text}
                          </p>
                        </motion.button>
                      ))}
                    </div>
                  )}
                </div>

                {/* Read-only notice - No Input Area for closed tickets */}
                {selectedHistoryIndex !== null && (
                  <div className="p-3 border-t border-gray-200 backdrop-blur-sm bg-gray-50/80 relative z-10">
                    <div className="flex items-center justify-center gap-2 text-gray-500">
                      <Clock className="w-3.5 h-3.5" />
                      <span className="text-[10px] font-medium">This ticket is closed - View only</span>
                    </div>
                    <button
                      onClick={() => setSelectedHistoryIndex(null)}
                      className="w-full mt-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-[#2F80ED] hover:bg-blue-50 transition-colors text-[10px] font-medium text-gray-700"
                    >
                      ← Back to History List
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex flex-col h-full">
                {/* Chat Header */}
                <div className="relative px-4 py-3 border-b border-gray-200 backdrop-blur-sm bg-white/80">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div
                        className="w-9 h-9 rounded-xl flex items-center justify-center shadow-lg relative overflow-hidden"
                        style={{
                          background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                        }}
                      >
                        <Sparkles className="w-4 h-4 text-white relative z-10" />
                      </div>
                      <div>
                        <h3 className="font-bold text-xs text-gray-900">SMB Flow AI</h3>
                        <div className="flex items-center gap-1.5">
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full bg-green-400"
                            animate={{
                              scale: [1, 1.2, 1],
                              boxShadow: [
                                "0 0 0 0 rgba(74, 222, 128, 0.7)",
                                "0 0 0 4px rgba(74, 222, 128, 0)",
                                "0 0 0 0 rgba(74, 222, 128, 0)",
                              ],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                          <span className="text-[9px] text-gray-600">Online now</span>
                        </div>
                      </div>
                    </div>
                    <motion.button
                      className="w-8 h-8 rounded-lg bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-colors relative"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowMenu(!showMenu);
                      }}
                    >
                      <MoreVertical className="w-3.5 h-3.5 text-gray-600" />
                      
                      {/* Dropdown Menu */}
                      <AnimatePresence>
                        {showMenu && (
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: -10 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: -10 }}
                            transition={{ duration: 0.2 }}
                            className="absolute top-full right-0 mt-2 w-40 bg-white rounded-lg shadow-xl border border-gray-200 overflow-hidden z-50"
                            onClick={(e) => e.stopPropagation()}
                          >
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                setShowMenu(false);
                                setActiveTab("history");
                                setSelectedHistoryIndex(null);
                              }}
                              className="w-full px-4 py-2.5 text-left text-xs text-gray-700 hover:bg-blue-50 transition-colors flex items-center gap-2"
                            >
                              <Clock className="w-3.5 h-3.5 text-[#2F80ED]" />
                              <span>Chat History</span>
                            </button>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  </div>
                </div>

                {/* Messages Area */}
                <div className="flex-1 overflow-y-auto p-4 space-y-2.5 relative">
                  {messages.length === 0 ? (
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="flex items-center justify-center h-full"
                    >
                      <div className="text-center">
                        <motion.div
                          className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 relative overflow-hidden"
                          style={{
                            background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                          }}
                          animate={{
                            rotate: [0, 5, -5, 0],
                          }}
                          transition={{
                            duration: 4,
                            repeat: Infinity,
                          }}
                        >
                          <Sparkles className="w-8 h-8 text-white relative z-10" />
                          <motion.div
                            className="absolute inset-0"
                            style={{
                              background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
                            }}
                            animate={{
                              opacity: [0.5, 1, 0.5],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                            }}
                          />
                        </motion.div>
                        <p className="text-base font-bold text-gray-900 mb-1">
                          Ready to chat?
                        </p>
                        <p className="text-[10px] text-gray-500">
                          Send us a message and we'll respond right away
                        </p>
                      </div>
                    </motion.div>
                  ) : (
                    <>
                      {messages.map((message, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20, scale: 0.9 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                        >
                          {message.type === "bot" && (
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2F80ED] to-[#9B51E0] flex items-center justify-center mr-2 flex-shrink-0">
                              <Sparkles className="w-4 h-4 text-white" />
                            </div>
                          )}
                          <motion.div
                            className={`max-w-[75%] rounded-2xl px-5 py-4 ${
                              message.type === "user"
                                ? "text-white shadow-lg"
                                : "bg-white text-gray-900 shadow-md border border-gray-100"
                            }`}
                            style={
                              message.type === "user"
                                ? {
                                    background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                                  }
                                : undefined
                            }
                            whileHover={{ scale: 1.02 }}
                          >
                            <p className="text-sm leading-relaxed">{message.text}</p>
                          </motion.div>
                          {message.type === "user" && (
                            <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center ml-2 flex-shrink-0">
                              <User className="w-4 h-4 text-gray-600" />
                            </div>
                          )}
                        </motion.div>
                      ))}
                      
                      {isTyping && (
                        <motion.div
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="flex justify-start"
                        >
                          <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#2F80ED] to-[#9B51E0] flex items-center justify-center mr-2">
                            <Sparkles className="w-4 h-4 text-white" />
                          </div>
                          <div className="bg-white rounded-2xl px-5 py-4 shadow-md border border-gray-100">
                            <div className="flex gap-1">
                              {[0, 1, 2].map((i) => (
                                <motion.div
                                  key={i}
                                  className="w-2 h-2 bg-gray-400 rounded-full"
                                  animate={{
                                    y: [0, -8, 0],
                                  }}
                                  transition={{
                                    duration: 0.6,
                                    repeat: Infinity,
                                    delay: i * 0.15,
                                  }}
                                />
                              ))}
                            </div>
                          </div>
                        </motion.div>
                      )}
                      <div ref={messagesEndRef} />
                    </>
                  )}
                </div>

                {/* Input Area */}
                <div className="p-3 border-t border-gray-200 backdrop-blur-sm bg-white/80 relative z-10">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={(e) => e.key === "Enter" && handleSend()}
                      placeholder="Type your message..."
                      className="flex-1 px-3 py-2.5 border border-gray-200 rounded-xl focus:outline-none focus:border-[#2F80ED] focus:ring-2 focus:ring-[#2F80ED]/20 text-xs transition-all bg-white"
                    />
                    <motion.button
                      onClick={handleSend}
                      disabled={!inputValue.trim()}
                      className="w-10 h-10 rounded-xl flex items-center justify-center transition-all disabled:opacity-40 disabled:cursor-not-allowed relative overflow-hidden"
                      style={{
                        background: inputValue.trim()
                          ? "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)"
                          : "#E5E7EB",
                        boxShadow: inputValue.trim() ? "0 4px 15px -3px rgba(47, 128, 237, 0.4)" : "none",
                      }}
                      whileHover={inputValue.trim() ? { scale: 1.05 } : {}}
                      whileTap={inputValue.trim() ? { scale: 0.95 } : {}}
                    >
                      {inputValue.trim() && (
                        <motion.div
                          className="absolute inset-0"
                          style={{
                            background: "linear-gradient(135deg, rgba(255,255,255,0.3) 0%, rgba(255,255,255,0) 100%)",
                          }}
                          animate={{
                            opacity: [0.5, 1, 0.5],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        />
                      )}
                      <Send className="w-4 h-4 text-white relative z-10" />
                    </motion.button>
                  </div>
                </div>
              </div>
            )}

            {/* Bottom Navigation */}
            <motion.div
              className="border-t border-gray-200 backdrop-blur-sm bg-white/90"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="flex items-center">
                <button
                  onClick={() => setActiveTab("home")}
                  className="flex-1 py-2 flex flex-col items-center justify-center gap-0.5 transition-all relative group"
                >
                  <Home
                    className={`w-4 h-4 transition-all ${
                      activeTab === "home" ? "text-[#2F80ED]" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                    strokeWidth={activeTab === "home" ? 2.5 : 2}
                  />
                  <span
                    className={`text-[9px] font-medium transition-all ${
                      activeTab === "home" ? "text-[#2F80ED]" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    Home
                  </span>
                  {activeTab === "home" && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                      }}
                      layoutId="activeTab"
                    />
                  )}
                </button>
                <button
                  onClick={() => setActiveTab("chat")}
                  className="flex-1 py-2 flex flex-col items-center justify-center gap-0.5 transition-all relative group"
                >
                  <MessageSquare
                    className={`w-4 h-4 transition-all ${
                      activeTab === "chat" ? "text-[#2F80ED]" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                    strokeWidth={activeTab === "chat" ? 2.5 : 2}
                  />
                  <span
                    className={`text-[9px] font-medium transition-all ${
                      activeTab === "chat" ? "text-[#2F80ED]" : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    Chat
                  </span>
                  {activeTab === "chat" && (
                    <motion.div
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-10 h-0.5 rounded-full"
                      style={{
                        background: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                      }}
                      layoutId="activeTab"
                    />
                  )}
                </button>
              </div>
            </motion.div>

            {/* Footer Branding */}
            <motion.div
              className="bg-gradient-to-r from-gray-50 to-gray-100 py-1.5 px-3 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-[9px] text-gray-400 tracking-wider">
                POWERED BY{" "}
                <span
                  className="font-bold bg-clip-text text-transparent"
                  style={{
                    backgroundImage: "linear-gradient(135deg, #2F80ED 0%, #9B51E0 100%)",
                  }}
                >
                  SMB FLOW
                </span>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}