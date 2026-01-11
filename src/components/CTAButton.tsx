import { motion } from 'framer-motion';
import { useState } from 'react';

interface CTAButtonProps {
  text: string;
  onClick?: () => void;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  return (
    <motion.button
      className="relative overflow-hidden rounded-full bg-gradient-to-r from-orange-500 to-orange-600 px-8 py-4 text-lg font-semibold text-white shadow-lg"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onClick={onClick}
      animate={{
        scale: isPressed ? 0.98 : isHovered ? 1.05 : 1,
        boxShadow: isHovered
          ? '0 20px 40px rgba(251, 146, 60, 0.4), 0 0 0 0 rgba(251, 146, 60, 0)'
          : '0 10px 25px rgba(251, 146, 60, 0.3)',
      }}
      transition={{
        type: 'spring',
        stiffness: 400,
        damping: 25,
      }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800"
        initial={{ x: '100%' }}
        animate={{ x: isHovered ? '-100%' : '100%' }}
        transition={{
          duration: 0.6,
          ease: 'easeInOut',
        }}
      />
      <span className="relative z-10">{text}</span>
    </motion.button>
  );
};

export default CTAButton;
