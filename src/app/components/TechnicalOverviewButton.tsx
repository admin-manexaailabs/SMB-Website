import { motion } from "motion/react";
import { Link } from "react-router";
import { Layers } from "lucide-react";

export default function TechnicalOverviewButton() {
  return (
    <Link to="/technical-overview">
      <motion.button
        className="fixed bottom-6 left-6 z-50 w-16 h-16 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-full shadow-2xl flex items-center justify-center hover:scale-110 transition-transform"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1 }}
        aria-label="Technical Overview"
      >
        <Layers className="w-6 h-6 text-white" />
      </motion.button>
    </Link>
  );
}