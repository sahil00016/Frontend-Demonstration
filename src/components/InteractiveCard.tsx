import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface InteractiveCardProps {
  title: string;
  subtitle: string;
  icon: ReactNode;
  index: number;
  isHovered: boolean;
  hoveredIndex: number | null;
  onHover: (index: number | null) => void;
  delay?: number;
}

const InteractiveCard: React.FC<InteractiveCardProps> = ({
  title,
  subtitle,
  icon,
  index,
  isHovered,
  hoveredIndex,
  onHover,
  delay = 0,
}) => {
  const baseScale = 1 - index * 0.08;
  const baseBlur = index * 2;
  
  // Calculate Y position: base offset + extra offset if another card is hovered
  const yPosition = isHovered 
    ? -20 
    : hoveredIndex !== null && hoveredIndex < index
    ? index * 12 + 8
    : index * 12;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: delay + index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      onHoverStart={() => onHover(index)}
      onHoverEnd={() => onHover(null)}
      className="absolute inset-0 cursor-pointer"
      style={{ zIndex: isHovered ? 30 - index : 10 - index }}
    >
      <motion.div
        className="h-full w-full rounded-2xl bg-white p-8 shadow-xl"
        animate={{
          scale: isHovered ? 1.05 : baseScale,
          y: yPosition,
          filter: isHovered ? 'blur(0px)' : `blur(${baseBlur}px)`,
          boxShadow: isHovered
            ? '0 25px 50px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(139, 92, 246, 0.1)'
            : '0 10px 30px rgba(0, 0, 0, 0.15)',
        }}
        transition={{
          type: 'spring',
          stiffness: 300,
          damping: 30,
        }}
      >
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <motion.h3
              className="mb-2 text-2xl font-bold text-gray-900"
              animate={{
                color: isHovered ? 'rgb(139, 92, 246)' : 'rgb(17, 24, 39)',
              }}
              transition={{ duration: 0.3 }}
            >
              {title}
            </motion.h3>
            <motion.p
              className="text-gray-600"
              initial={{ opacity: 0, height: 0 }}
              animate={{
                opacity: isHovered ? 1 : 0.6,
                height: isHovered ? 'auto' : 'auto',
              }}
              transition={{ duration: 0.4 }}
            >
              {subtitle}
            </motion.p>
          </div>
          <motion.div
            className="ml-4 text-4xl"
            animate={{
              scale: isHovered ? 1.2 : 1,
              rotate: isHovered ? 5 : 0,
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
      </motion.div>
    </motion.div>
  );
};

export default InteractiveCard;
