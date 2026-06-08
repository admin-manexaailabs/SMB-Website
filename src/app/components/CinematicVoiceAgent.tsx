import { motion, AnimatePresence } from "motion/react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner@2.0.3";

// Cinematic AI Voice Agent Section
export default function CinematicVoiceAgent() {
  return (
    <section 
      className="relative py-20 lg:py-24 bg-white overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(168, 85, 247, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full"
          style={{
            background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)',
          }}
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4,
          }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 lg:mb-14">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-5xl mb-5"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            AI Voice Agent — Handle Calls Automatically
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-base lg:text-lg text-gray-600 max-w-2xl mx-auto"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            Natural voice conversations that handle appointments, orders, and support—24/7
          </motion.p>
        </div>

        {/* Main Voice Demo Canvas */}
        <VoiceInteractionCanvas />

        {/* Bottom Caption & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-6 text-base lg:text-lg" style={{ fontFamily: "Inter, sans-serif" }}>
            Let customers reschedule, confirm bookings, or check order status by talking naturally.
          </p>
          
          <Button 
            className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90 text-white shadow-lg shadow-purple-500/30 rounded-full px-8 py-6 text-base transition-all hover:scale-105"
            style={{ fontFamily: "Inter, sans-serif" }}
            onClick={() => toast.info("Coming soon!")}
          >
            <Phone className="w-5 h-5 mr-2" />
            Try Voice Demo
          </Button>
        </motion.div>
      </div>
    </section>
  );
}

// Conversation pairs data
const conversationPairs = [
  {
    human: { text: "Hello?", emoji: "📞" },
    ai: { text: "Hi! This is the AI assistant from Urban Salon. We're offering 20% off hair and spa services this weekend. Would you like to book an appointment now?", emoji: "💇‍♀️✨" },
  },
  {
    human: { text: "Maybe. What slots are available?", emoji: "🤔" },
    ai: { text: "I have availability on Saturday at 11 AM and Sunday at 3 PM. Which works for you?", emoji: "📅" },
  },
  {
    human: { text: "Saturday.", emoji: "✓" },
    ai: { text: "Great choice. Your appointment is booked for Saturday at 11 AM. We'll send you a confirmation message shortly.", emoji: "✅📩" },
  },
];

// Voice Interaction Canvas Component
function VoiceInteractionCanvas() {
  const [currentPairIndex, setCurrentPairIndex] = useState(0);
  const [showHuman, setShowHuman] = useState(false);
  const [showAI, setShowAI] = useState(false);
  const [showTyping, setShowTyping] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [isAISpeaking, setIsAISpeaking] = useState(false);

  useEffect(() => {
    if (!hasStarted) return;

    const sequence = async () => {
      // Reset states
      setShowHuman(false);
      setShowAI(false);
      setShowTyping(false);
      setIsAISpeaking(false);

      // Wait a bit before starting new pair
      await new Promise(resolve => setTimeout(resolve, 500));

      // Show human message
      setShowHuman(true);
      await new Promise(resolve => setTimeout(resolve, 1800));

      // Show typing indicator
      setShowTyping(true);
      setIsAISpeaking(true);
      await new Promise(resolve => setTimeout(resolve, 1200));

      // Hide typing, show AI message
      setShowTyping(false);
      setShowAI(true);
      await new Promise(resolve => setTimeout(resolve, 2500));

      // Move to next pair or loop
      setIsAISpeaking(false);
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setCurrentPairIndex((prev) => (prev + 1) % conversationPairs.length);
    };

    sequence();
  }, [currentPairIndex, hasStarted]);

  const currentPair = conversationPairs[currentPairIndex];

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onViewportEnter={() => setHasStarted(true)}
      className="relative w-full max-w-[820px] mx-auto"
    >
      {/* Scaling wrapper for desktop only */}
      <div className="lg:scale-[0.88] lg:origin-center">
        {/* Main Glass Container */}
        <div 
          className="relative rounded-[40px] p-6 lg:p-12 overflow-hidden"
          style={{
            background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 250, 252, 0.95) 100%)',
            boxShadow: '0 20px 60px rgba(0, 0, 0, 0.08), 0 8px 24px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 1)',
            backdropFilter: 'blur(20px)',
          }}
        >
          {/* Tag */}
          <div className="absolute top-6 left-6 px-3 py-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full shadow-lg z-50">
            Voice Campaign
          </div>
          
          {/* Subtle gradient overlay */}
          <div 
            className="absolute inset-0 rounded-[40px] opacity-40"
            style={{
              background: 'linear-gradient(135deg, rgba(168, 85, 247, 0.03) 0%, rgba(59, 130, 246, 0.03) 100%)',
            }}
          />

          {/* Content Container */}
          <div className="relative min-h-[340px] lg:min-h-[360px] flex items-center justify-center">
            {/* Ambient center glow */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <motion.div
                className="absolute w-[420px] h-[420px] rounded-full"
                style={{
                  background: 'radial-gradient(circle, rgba(139, 92, 246, 0.12) 0%, transparent 70%)',
                }}
                animate={{
                  scale: [1, 1.3, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </div>

            {/* Central Floating Microphone */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
              <NeonMicrophone isActive={hasStarted} isSpeaking={isAISpeaking} />
            </div>

            {/* Waveforms on sides */}
            <div className="absolute left-[6%] top-1/2 -translate-y-1/2 hidden lg:block z-0">
              <Waveform isActive={isAISpeaking} side="left" />
            </div>
            <div className="absolute right-[6%] top-1/2 -translate-y-1/2 hidden lg:block z-0">
              <Waveform isActive={isAISpeaking} side="right" />
            </div>

            {/* Message Bubbles Container */}
            <div className="relative w-full min-h-[240px] flex items-center justify-between px-3 lg:px-10 z-40">
              {/* Human Bubble (Left) */}
              <div className="w-[45%] flex justify-start items-center min-h-[120px]">
                <AnimatePresence mode="wait">
                  {showHuman && (
                    <MessageBubble
                      key={`human-${currentPairIndex}`}
                      type="human"
                      text={currentPair.human.text}
                      emoji={currentPair.human.emoji}
                    />
                  )}
                </AnimatePresence>
              </div>

              {/* AI Bubble (Right) */}
              <div className="w-[45%] flex justify-end items-center min-h-[120px]">
                <AnimatePresence mode="wait">
                  {showTyping && (
                    <TypingIndicatorBubble key={`typing-${currentPairIndex}`} />
                  )}
                  {showAI && !showTyping && (
                    <MessageBubble
                      key={`ai-${currentPairIndex}`}
                      type="ai"
                      text={currentPair.ai.text}
                      emoji={currentPair.ai.emoji}
                    />
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>

          {/* Progress Dots */}
          <div className="relative flex justify-center gap-2 mt-8">
            {conversationPairs.map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full"
                style={{
                  background: index === currentPairIndex 
                    ? 'linear-gradient(135deg, #7D4DFF, #5E00FF)'
                    : '#E5E7EB',
                }}
                animate={{
                  scale: index === currentPairIndex ? 1.3 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

// Neon Microphone Component
function NeonMicrophone({ isActive, isSpeaking }: { isActive: boolean; isSpeaking: boolean }) {
  return (
    <div className="relative scale-90">
      {/* Multi-layer breathing glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.5) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
          width: '180px',
          height: '180px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(22px)',
        }}
        animate={isActive ? {
          scale: isSpeaking ? [1, 1.4, 1] : [1, 1.2, 1],
          opacity: isSpeaking ? [0.6, 0.9, 0.6] : [0.4, 0.6, 0.4],
        } : {}}
        transition={{
          duration: isSpeaking ? 1.5 : 2.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Inner glow pulse */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.4) 0%, transparent 60%)',
          width: '125px',
          height: '125px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(13px)',
        }}
        animate={isActive ? {
          scale: [1.1, 1.5, 1.1],
          opacity: [0.5, 1, 0.5],
        } : {}}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Microphone SVG with float animation */}
      <motion.div
        animate={isActive ? {
          y: [-4, 4, -4],
          scale: isSpeaking ? [1, 1.05, 1] : 1,
        } : {}}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <svg
          width="62"
          height="62"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 10px 35px rgba(139, 92, 246, 0.5))' }}
        >
          {/* Gradient circle background */}
          <circle cx="45" cy="45" r="38" fill="url(#neonGradient)" opacity="0.98" />
          
          {/* Outer glow ring */}
          <circle 
            cx="45" 
            cy="45" 
            r="40" 
            stroke="url(#ringGradient)" 
            strokeWidth="2" 
            fill="none"
            opacity="0.7"
          />
          
          {/* Microphone body */}
          <path
            d="M45 22C40.0294 22 36 26.0294 36 31V41C36 45.9706 40.0294 50 45 50C49.9706 50 54 45.9706 54 41V31C54 26.0294 49.9706 22 45 22Z"
            fill="white"
          />
          
          {/* Microphone details */}
          <rect x="42" y="28" width="2" height="10" rx="1" fill="#7D4DFF" />
          <rect x="46" y="28" width="2" height="10" rx="1" fill="#7D4DFF" />
          
          {/* Microphone stand arcs */}
          <path
            d="M32 41C32 48.732 38.268 55 46 55"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          <path
            d="M58 41C58 48.732 51.732 55 44 55"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          
          {/* Microphone stand vertical */}
          <line x1="45" y1="55" x2="45" y2="64" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          
          {/* Microphone base */}
          <line x1="38" y1="64" x2="52" y2="64" stroke="white" strokeWidth="2.5" strokeLinecap="round" />
          
          <defs>
            <radialGradient id="neonGradient" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(45 45) rotate(90) scale(38)">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#7C3AED" />
            </radialGradient>
            <linearGradient id="ringGradient" x1="5" y1="5" x2="85" y2="85" gradientUnits="userSpaceOnUse">
              <stop offset="0%" stopColor="#A855F7" />
              <stop offset="100%" stopColor="#3B82F6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Pulse rings on speaking */}
      {isSpeaking && (
        <>
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400"
            style={{
              width: '90px',
              height: '90px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.6, 2],
              opacity: [0.7, 0.4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
            }}
          />
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-purple-400"
            style={{
              width: '90px',
              height: '90px',
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [1, 1.6, 2],
              opacity: [0.7, 0.4, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeOut",
              delay: 0.75,
            }}
          />
        </>
      )}
    </div>
  );
}

// Message Bubble Component
function MessageBubble({ type, text, emoji }: { type: 'human' | 'ai'; text: string; emoji: string }) {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 40, 
        scale: 0.85,
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
      }}
      exit={{ 
        opacity: 0, 
        y: -40,
        scale: 0.85,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative max-w-xs"
    >
      {/* Speaker Label */}
      <div className="mb-2 px-2">
        <p 
          className="text-xs tracking-wide"
          style={{ 
            fontFamily: "Inter, sans-serif",
            color: type === 'human' ? '#059669' : '#7D4DFF',
            fontWeight: 600,
          }}
        >
          {type === 'human' ? 'Sarah' : 'AI Agent'}
        </p>
      </div>

      {/* Glow behind bubble */}
      <div
        className="absolute inset-0 rounded-[28px] blur-lg"
        style={{
          background: type === 'human' 
            ? 'linear-gradient(135deg, rgba(16, 185, 129, 0.25), rgba(5, 150, 105, 0.25))'
            : 'linear-gradient(135deg, rgba(125, 77, 255, 0.3), rgba(94, 0, 255, 0.25))',
          transform: 'scale(1.05)',
          top: '28px',
        }}
      />
      
      <div
        className="relative rounded-[28px] px-6 py-4 shadow-lg"
        style={{
          background: type === 'human' 
            ? 'linear-gradient(135deg, #10B981 0%, #059669 100%)'
            : 'linear-gradient(135deg, #7D4DFF 0%, #5E00FF 100%)',
          boxShadow: type === 'human' 
            ? '0 10px 30px rgba(16, 185, 129, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
            : '0 10px 30px rgba(125, 77, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
        }}
      >
        <p 
          className="text-white leading-relaxed"
          style={{ 
            fontFamily: "Inter, sans-serif",
            textShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
          }}
        >
          {text} {emoji}
        </p>
        
        {/* Highlight shine */}
        <div 
          className="absolute top-0 left-0 right-0 h-[2px] rounded-t-[28px]"
          style={{
            background: 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.6) 50%, transparent 100%)',
          }}
        />
      </div>
    </motion.div>
  );
}

// Typing Indicator Bubble
function TypingIndicatorBubble() {
  return (
    <motion.div
      initial={{ 
        opacity: 0, 
        y: 40, 
        scale: 0.85,
      }}
      animate={{ 
        opacity: 1, 
        y: 0,
        scale: 1,
      }}
      exit={{ 
        opacity: 0, 
        y: -40,
        scale: 0.85,
      }}
      transition={{
        duration: 0.5,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="relative"
    >
      {/* Glow */}
      <div
        className="absolute inset-0 rounded-[28px] blur-lg"
        style={{
          background: 'linear-gradient(135deg, rgba(125, 77, 255, 0.3), rgba(94, 0, 255, 0.25))',
          transform: 'scale(1.05)',
        }}
      />
      
      <div
        className="relative rounded-[28px] px-8 py-6 shadow-lg"
        style={{
          background: 'linear-gradient(135deg, #7D4DFF 0%, #5E00FF 100%)',
          boxShadow: '0 10px 30px rgba(125, 77, 255, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
        }}
      >
        <div className="flex items-center gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2.5 h-2.5 bg-white rounded-full shadow-sm"
              animate={{
                y: [-3, -8, -3],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.15,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}

// Waveform Component
function Waveform({ isActive, side }: { isActive: boolean; side: 'left' | 'right' }) {
  const bars = Array.from({ length: 8 });
  const heights = side === 'left' 
    ? [18, 30, 42, 28, 36, 24, 32, 20]
    : [24, 38, 26, 44, 30, 22, 34, 18];

  return (
    <div className="flex items-center gap-2">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 rounded-full"
          style={{ 
            height: `${heights[i]}px`,
            background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.7) 0%, rgba(59, 130, 246, 0.5) 100%)',
            boxShadow: '0 0 8px rgba(139, 92, 246, 0.3)',
          }}
          animate={isActive ? {
            scaleY: [1, 1.8, 1.2, 1.5, 1],
            opacity: [0.5, 1, 0.6, 0.9, 0.5],
          } : {
            scaleY: 1,
            opacity: 0.3,
          }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            delay: i * 0.1,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}