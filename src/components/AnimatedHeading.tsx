import { motion } from 'framer-motion';
import { useState } from 'react';

interface AnimatedHeadingProps {
  text: string;
  delay?: number;
  className?: string;
}

const AnimatedHeading: React.FC<AnimatedHeadingProps> = ({ 
  text, 
  delay = 0,
  className = '' 
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="inline-block cursor-default"
    >
      <motion.h2
        className={className}
        animate={{
          scale: isHovered ? 1.02 : 1,
          letterSpacing: isHovered ? '0.02em' : '0em',
        }}
        transition={{
          type: 'spring',
          stiffness: 400,
          damping: 25,
        }}
        style={{
          textShadow: isHovered
            ? '0 0 20px rgba(251, 146, 60, 0.3), 0 0 40px rgba(251, 146, 60, 0.2)'
            : 'none',
        }}
      >
        {text}
      </motion.h2>
    </motion.div>
  );
};

export default AnimatedHeading;
