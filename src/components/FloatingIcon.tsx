import { motion } from 'framer-motion';

interface FloatingIconProps {
  icon: React.ReactNode;
  className?: string;
}

const FloatingIcon: React.FC<FloatingIconProps> = ({ icon, className = '' }) => {
  return (
    <motion.div
      className={className}
      animate={{
        y: [0, -4, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: 'easeInOut',
      }}
    >
      {icon}
    </motion.div>
  );
};

export default FloatingIcon;
