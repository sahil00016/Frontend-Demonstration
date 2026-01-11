import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  position: 'left' | 'center' | 'right';
  index: number;
  onClick?: () => void;
}

const AnimatedCard: React.FC<AnimatedCardProps> = ({
  title,
  subtitle,
  icon,
  position,
  index,
  onClick,
}) => {
  const isCenter = position === 'center';

  // Base z-index by position, then add index offset for proper stacking
  // Left position gets higher base to ensure cards moving from center stay above right cards
  // Right position gets slightly higher base to ensure cards moving from center stay above
  const baseZIndex = {
    left: 20,
    center: 30,
    right: 15,
  };

  const cardVariants = {
    left: {
      x: -280,
      scale: 1.0,
      zIndex: baseZIndex.left + index,
    },
    center: {
      x: 0,
      scale: 1.06,
      zIndex: baseZIndex.center + index,
    },
    right: {
      x: 280,
      scale: 1.0,
      zIndex: baseZIndex.right + index,
    },
  };

  const shadowVariants = {
    left: '0 10px 30px rgba(0, 0, 0, 0.1)',
    center: '0 25px 50px rgba(0, 0, 0, 0.2), 0 0 0 1px rgba(251, 146, 60, 0.1)',
    right: '0 10px 30px rgba(0, 0, 0, 0.1)',
  };

  const transition = {
    type: 'spring' as const,
    stiffness: 280,
    damping: 35,
    mass: 0.8,
  };

  return (
    <motion.div
      className="absolute w-80"
      variants={cardVariants}
      animate={position}
      transition={transition}
      whileHover={{
        y: position === 'center' ? -10 : position === 'left' ? -5 : -5,
        x: position === 'left' ? -260 : position === 'right' ? 260 : 0,
        rotateX: position === 'center' ? -2 : 0,
      }}
      style={{ perspective: 1000 }}
    >
      <motion.div
        className="h-[400px] w-full rounded-2xl bg-white p-8 overflow-hidden cursor-pointer"
        animate={{
          boxShadow: shadowVariants[position],
        }}
        transition={transition}
        onClick={onClick}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-start justify-between mb-4">
            <motion.h3
              className="text-2xl font-bold"
              animate={{
                color: isCenter ? 'rgb(251, 146, 60)' : 'rgb(30, 41, 59)',
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {title}
            </motion.h3>
            <motion.div
              className="ml-4 text-4xl flex-shrink-0"
              animate={{
                scale: isCenter ? 1.15 : 1,
                opacity: isCenter ? 1 : 0.7,
              }}
              transition={{
                type: 'spring',
                stiffness: 400,
                damping: 20,
              }}
            >
              {icon}
            </motion.div>
          </div>
          <div className="flex-1 relative">
            <motion.p
              className="text-gray-600"
              animate={{
                opacity: isCenter ? 1 : 0.6,
              }}
              transition={{ duration: 0.3, ease: 'easeInOut' }}
            >
              {subtitle}
            </motion.p>
            {!isCenter && (
              <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent pointer-events-none" />
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default AnimatedCard;
