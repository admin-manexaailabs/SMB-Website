import { motion } from 'motion/react';
import { Sparkles } from 'lucide-react';
import { Button } from './ui/button';

export default function Header() {
  return (
    <header className="border-b border-gray-200 bg-white sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.div
              className="w-10 h-10 bg-gradient-to-br from-[#7D4DFF] to-[#5E00FF] rounded-xl flex items-center justify-center"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="w-6 h-6 text-white" />
            </motion.div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-xl text-gray-900">OmniAgent</h1>
                <span className="px-2 py-1 bg-purple-100 text-purple-700 rounded-full text-xs">
                  Built for SMBs
                </span>
              </div>
              <p className="text-xs text-gray-600">Multi-Channel Agentic AI Platform for Small Business</p>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8">
            <a href="#" className="text-gray-700 hover:text-[#7D4DFF] transition-colors">
              Product
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7D4DFF] transition-colors">
              Solutions
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7D4DFF] transition-colors">
              Pricing
            </a>
            <a href="#" className="text-gray-700 hover:text-[#7D4DFF] transition-colors">
              Resources
            </a>
            <Button variant="outline" className="border-gray-300">
              Sign In
            </Button>
            <Button className="bg-gradient-to-r from-[#7D4DFF] to-[#5E00FF] hover:opacity-90">
              Get Started Free
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}
