import { motion, useMotionValue, useTransform } from "motion/react";
import { Phone } from "lucide-react";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";
import { toast } from "sonner";

// AI Voice Agent Section with Premium Glass Design
export default function PremiumVoiceAgent() {
  return (
    <section 
      className="relative py-24 lg:py-32 bg-white overflow-hidden"
      style={{
        '--breathe-duration': '2200ms',
        '--wave-duration-1': '1800ms',
        '--wave-duration-2': '2600ms',
        '--bubble-timing': 'cubic-bezier(.2,.9,.3,1)',
      } as React.CSSProperties}
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-[600px] h-[600px] rounded-full"
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
          className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] rounded-full"
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
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl lg:text-6xl mb-6"
            style={{ fontFamily: "DM Sans, sans-serif" }}
          >
            AI Voice Agent — Handle Calls Automatically
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-lg lg:text-xl text-gray-600 max-w-2xl mx-auto"
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

// Voice Interaction Canvas Component with Glass Effect
function VoiceInteractionCanvas() {
  const [hasAnimated, setHasAnimated] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const rotateX = useTransform(mouseY, [-300, 300], [2, -2]);
  const rotateY = useTransform(mouseX, [-300, 300], [-3, 3]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8, delay: 0.2 }}
      onViewportEnter={() => setHasAnimated(true)}
      className="relative w-full max-w-[1100px] mx-auto"
      style={{ perspective: "2000px" }}
    >
      {/* Glass Container */}
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
        }}
        className="relative rounded-[32px] p-6 lg:p-12 overflow-visible backdrop-blur-sm"
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        {/* Glass background with gradient */}
        <div 
          className="absolute inset-0 rounded-[32px]"
          style={{
            background: 'linear-gradient(135deg, rgba(254, 202, 202, 0.3) 0%, rgba(252, 231, 243, 0.3) 25%, rgba(238, 242, 255, 0.3) 50%, rgba(224, 242, 254, 0.3) 75%, rgba(219, 234, 254, 0.3) 100%)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.08), 0 2px 8px rgba(0, 0, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.5)',
          }}
        />
        
        {/* Subtle animated border glow */}
        <motion.div
          className="absolute inset-0 rounded-[32px]"
          style={{
            background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1), rgba(59, 130, 246, 0.1))',
            opacity: 0.6,
          }}
          animate={{
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Content Container */}
        <div className="relative min-h-[200px]">
          {/* Ambient Glow Background */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-[32px]">
            <motion.div
              className="absolute w-[400px] h-[400px] rounded-full"
              style={{
                background: 'radial-gradient(circle, rgba(139, 92, 246, 0.15) 0%, transparent 70%)',
              }}
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.3, 0.5, 0.3],
              }}
              transition={{
                duration: 2.2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Background Waveforms */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Left Waveform */}
            <div className="absolute left-[8%] lg:left-[12%] top-1/2 -translate-y-1/2 hidden lg:block">
              <WaveformVisual side="left" isActive={hasAnimated} />
            </div>
            
            {/* Right Waveform */}
            <div className="absolute right-[8%] lg:right-[12%] top-1/2 -translate-y-1/2 hidden lg:block">
              <WaveformVisual side="right" isActive={hasAnimated} />
            </div>
          </div>

          {/* Animated Divider Line */}
          <motion.div
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[200px] w-[1px] hidden lg:block"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, rgba(139, 92, 246, 0.2) 50%, transparent 100%)',
            }}
            initial={{ scaleY: 0, opacity: 0 }}
            animate={hasAnimated ? { scaleY: 1, opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          />

          {/* Central Neon Microphone */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
            <NeonMicrophone isActive={hasAnimated} />
          </div>

          {/* Speech Bubbles with Depth */}
          <div className="relative z-20 flex flex-col items-stretch gap-4 px-4 lg:px-12 py-8">
            {/* Message 1: Customer initial request */}
            <ConversationMessage 
              type="customer"
              text="Hi, I'm calling to reschedule my appointment."
              delay={0.4}
              hasAnimated={hasAnimated}
            />
            
            {/* Message 2: AI response */}
            <ConversationMessage 
              type="ai"
              text="Of course! I can help with that. What time works best for you?"
              delay={0.4}
              hasAnimated={hasAnimated}
            />
            
            {/* Message 3: Customer time preference */}
            <ConversationMessage 
              type="customer"
              text="Can we do Thursday afternoon? 🤔"
              delay={0.4}
              hasAnimated={hasAnimated}
            />
            
            {/* Message 4: AI options */}
            <ConversationMessage 
              type="ai"
              text="I have 2:00 PM or 4:30 PM available on Thursday. Which would you prefer?"
              delay={0.4}
              hasAnimated={hasAnimated}
            />
            
            {/* Message 5: Customer confirms */}
            <ConversationMessage 
              type="customer"
              text="2:00 PM works perfect! ✨"
              delay={0.4}
              hasAnimated={hasAnimated}
            />
            
            {/* Message 6: AI finalizes */}
            <ConversationMessage 
              type="ai"
              text="Great! I've rescheduled your appointment to Thursday at 2:00 PM. You'll receive a confirmation email shortly. 📧"
              delay={0.4}
              hasAnimated={hasAnimated}
            />
            
            {/* Message 7: Customer feedback */}
            <ConversationMessage 
              type="customer"
              text="Thank you so much! 😊🙏"
              delay={0.4}
              hasAnimated={hasAnimated}
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Neon Microphone Icon with Enhanced Glow
function NeonMicrophone({ isActive }: { isActive: boolean }) {
  return (
    <div className="relative">
      {/* Multi-layer breathing glow */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(139, 92, 246, 0.4) 0%, rgba(139, 92, 246, 0.2) 40%, transparent 70%)',
          width: '240px',
          height: '240px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(20px)',
        }}
        animate={isActive ? {
          scale: [1, 1.3, 1],
          opacity: [0.5, 0.8, 0.5],
        } : {}}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      
      {/* Inner glow ring */}
      <motion.div
        className="absolute inset-0 rounded-full"
        style={{
          background: 'radial-gradient(circle, rgba(168, 85, 247, 0.3) 0%, transparent 60%)',
          width: '160px',
          height: '160px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          filter: 'blur(10px)',
        }}
        animate={isActive ? {
          scale: [1.1, 1.4, 1.1],
          opacity: [0.6, 1, 0.6],
        } : {}}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.3,
        }}
      />

      {/* Microphone SVG with bobbing animation */}
      <motion.div
        animate={isActive ? {
          y: [-4, 4, -4],
        } : {}}
        transition={{
          duration: 2.2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10"
      >
        <svg
          width="60"
          height="60"
          viewBox="0 0 90 90"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="drop-shadow-2xl"
          style={{ filter: 'drop-shadow(0 10px 30px rgba(139, 92, 246, 0.4))' }}
        >
          {/* Neon glow circle */}
          <circle cx="45" cy="45" r="38" fill="url(#neonGradient)" opacity="0.95" />
          
          {/* Outer ring */}
          <circle 
            cx="45" 
            cy="45" 
            r="40" 
            stroke="url(#ringGradient)" 
            strokeWidth="1.5" 
            fill="none"
            opacity="0.6"
          />
          
          {/* Microphone body */}
          <path
            d="M45 22C40.0294 22 36 26.0294 36 31V41C36 45.9706 40.0294 50 45 50C49.9706 50 54 45.9706 54 41V31C54 26.0294 49.9706 22 45 22Z"
            fill="white"
          />
          
          {/* Microphone details */}
          <rect x="42" y="28" width="2" height="10" rx="1" fill="#7D4DFF" />
          <rect x="46" y="28" width="2" height="10" rx="1" fill="#7D4DFF" />
          
          {/* Microphone stand arc - left */}
          <path
            d="M32 41C32 48.732 38.268 55 46 55"
            stroke="white"
            strokeWidth="2.5"
            strokeLinecap="round"
            fill="none"
          />
          {/* Microphone stand arc - right */}
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

      {/* Pulse rings */}
      <motion.div
        className="absolute inset-0 rounded-full border-2 border-purple-400"
        style={{
          width: '90px',
          height: '90px',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
        }}
        animate={isActive ? {
          scale: [1, 1.5, 1.8],
          opacity: [0.6, 0.3, 0],
        } : {}}
        transition={{
          duration: 2,
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
        animate={isActive ? {
          scale: [1, 1.5, 1.8],
          opacity: [0.6, 0.3, 0],
        } : {}}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeOut",
          delay: 1,
        }}
      />
    </div>
  );
}

// Waveform Visual with Natural Pulse
function WaveformVisual({ side, isActive }: { side: 'left' | 'right'; isActive: boolean }) {
  const bars = Array.from({ length: 10 });
  const heights = side === 'left' 
    ? [16, 28, 42, 35, 20, 38, 26, 18, 32, 22]
    : [20, 32, 24, 44, 30, 36, 22, 16, 28, 18];

  return (
    <div className="flex items-center gap-2">
      {bars.map((_, i) => (
        <motion.div
          key={i}
          className="w-1.5 rounded-full"
          style={{ 
            height: `${heights[i]}px`,
            background: 'linear-gradient(180deg, rgba(139, 92, 246, 0.8) 0%, rgba(59, 130, 246, 0.6) 100%)',
            boxShadow: '0 0 8px rgba(139, 92, 246, 0.4)',
          }}
          animate={isActive ? {
            scaleY: [1, 1.8, 0.9, 1.4, 1],
            opacity: [0.6, 1, 0.7, 0.9, 0.6],
          } : {}}
          transition={{
            duration: side === 'left' ? 1.8 : 2.6,
            repeat: Infinity,
            delay: i * 0.08,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

// Conversation Message Component
function ConversationMessage({ type, text, delay, hasAnimated, showTyping = false, typingDelay = 0 }: { type: 'customer' | 'ai'; text: string; delay: number; hasAnimated: boolean; showTyping?: boolean; typingDelay?: number }) {
  const [showTypingIndicator, setShowTypingIndicator] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const fullText = text;
  const prefersReducedMotion = typeof window !== 'undefined' 
    ? window.matchMedia('(prefers-reduced-motion: reduce)').matches 
    : false;

  useEffect(() => {
    if (!hasAnimated) return;
    
    // Show all text immediately, no typing animations
    setDisplayedText(fullText);
    setIsTypingComplete(true);
  }, [hasAnimated, fullText]);

  return (
    <motion.div
      initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: type === 'customer' ? -100 : 100, scale: 0.9 }}
      animate={hasAnimated ? { 
        opacity: 1, 
        x: 0,
        scale: 1,
      } : {}}
      transition={{
        duration: type === 'customer' ? 0.42 : 0.52,
        delay: delay,
        ease: [0.2, 0.9, 0.3, 1],
      }}
      className={`relative max-w-sm w-full ${type === 'customer' ? 'self-start' : 'self-end'}`}
    >
      {/* Glow behind bubble */}
      <motion.div
        className="absolute inset-0 rounded-[28px] blur-xl"
        style={{
          background: type === 'customer' 
            ? 'linear-gradient(135deg, rgba(46, 214, 182, 0.3), rgba(36, 198, 165, 0.3))'
            : 'linear-gradient(135deg, rgba(125, 77, 255, 0.4), rgba(94, 0, 255, 0.3))',
          transform: 'scale(1.05)',
        }}
        animate={hasAnimated ? {
          opacity: [0, 0.6, 0.4],
        } : {}}
        transition={{ duration: 0.6, delay: delay + 0.2 }}
      />
      
      <div
        className="relative rounded-[28px] px-4 py-3 lg:px-5 lg:py-4"
        style={{
          background: type === 'customer' 
            ? 'linear-gradient(135deg, #2ED6B6 0%, #24C6A5 100%)'
            : 'linear-gradient(135deg, #7D4DFF 0%, #5E00FF 100%)',
          boxShadow: type === 'customer' 
            ? '0 12px 32px rgba(46, 214, 182, 0.25), 0 4px 12px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.3)'
            : '0 12px 32px rgba(125, 77, 255, 0.35), 0 4px 12px rgba(0, 0, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
          minHeight: showTypingIndicator ? '60px' : 'auto',
        }}
      >
        {showTypingIndicator ? (
          <TypingIndicator />
        ) : (
          <motion.p
            className={type === 'customer' 
              ? "text-gray-900 text-sm lg:text-base leading-relaxed pr-8"
              : "text-white text-sm lg:text-base leading-relaxed pr-8"}
            style={{ 
              fontFamily: "Inter, sans-serif",
              textShadow: type === 'customer' 
                ? '0 1px 2px rgba(0, 0, 0, 0.05)'
                : '0 2px 4px rgba(0, 0, 0, 0.15)',
            }}
          >
            {displayedText}
            {!isTypingComplete && type === 'ai' && !showTypingIndicator && (
              <motion.span
                animate={{ opacity: [1, 0, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              >
                |
              </motion.span>
            )}
          </motion.p>
        )}
        
        {/* Small waveform indicator */}
        {isTypingComplete && displayedText && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute right-5 top-1/2 -translate-y-1/2"
          >
            <SmallWaveform color={type === 'customer' ? "#065F46" : "#E9D5FF"} isActive={hasAnimated} />
          </motion.div>
        )}
        
        {/* Highlight line */}
        <div 
          className="absolute top-0 left-0 right-0 h-[1px]"
          style={{
            background: type === 'customer' 
              ? 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.5) 50%, transparent 100%)'
              : 'linear-gradient(90deg, transparent 0%, rgba(255, 255, 255, 0.4) 50%, transparent 100%)',
          }}
        />
      </div>
      
      {/* AI Badge with pop animation */}
      {type === 'ai' && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={hasAnimated ? { scale: 1, opacity: 1 } : {}}
          transition={{ 
            type: "spring",
            stiffness: 500,
            damping: 15,
            delay: delay + 0.3,
          }}
          className="absolute -top-3 -right-3 bg-white rounded-full w-14 h-14 flex items-center justify-center border-2 border-purple-200"
          style={{
            boxShadow: '0 8px 20px rgba(125, 77, 255, 0.3), 0 2px 8px rgba(0, 0, 0, 0.1)',
          }}
        >
          <span 
            className="text-purple-600 text-sm"
            style={{ fontFamily: "DM Sans, sans-serif", fontWeight: 700 }}
          >
            AI
          </span>
        </motion.div>
      )}
    </motion.div>
  );
}

// Typing Indicator Component
function TypingIndicator() {
  return (
    <div className="flex items-center gap-2 py-3">
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="w-2.5 h-2.5 bg-white rounded-full"
          style={{
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.2)',
          }}
          animate={{
            y: [0, -10, 0],
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
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
  );
}

// Small Waveform Component
function SmallWaveform({ color, isActive }: { color: string; isActive: boolean }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
      {[0, 1, 2, 3, 4].map((i) => {
        const heights = [7, 11, 16, 11, 7];
        const yPos = (22 - heights[i]) / 2;
        
        return (
          <motion.rect
            key={i}
            x={i * 4.5 + 1}
            y={yPos}
            width="2.5"
            height={heights[i]}
            rx="1.25"
            fill={color}
            style={{
              filter: `drop-shadow(0 1px 2px ${color})`,
            }}
            animate={isActive ? {
              height: [heights[i], heights[i] * 1.5, heights[i]],
              y: [yPos, yPos - (heights[i] * 0.25), yPos],
            } : {}}
            transition={{
              duration: 0.6,
              repeat: Infinity,
              delay: i * 0.1,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </svg>
  );
}