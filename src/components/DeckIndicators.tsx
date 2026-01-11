import { motion } from 'framer-motion';

interface DeckIndicatorsProps {
  activeIndex: number;
  totalCards: number;
}

const DeckIndicators: React.FC<DeckIndicatorsProps> = ({ activeIndex, totalCards }) => {
  return (
    <div className="flex items-center justify-center gap-2 mt-8">
      {Array.from({ length: totalCards }).map((_, index) => {
        const isActive = index === activeIndex;
        return (
          <motion.div
            key={index}
            className="rounded-full border-2 border-black"
            animate={{
              scale: isActive ? 1.2 : 1,
              backgroundColor: isActive ? 'rgb(251, 146, 60)' : 'transparent',
            }}
            transition={{
              duration: 0.3,
              ease: 'easeInOut',
            }}
            style={{
              width: isActive ? 10 : 8,
              height: isActive ? 10 : 8,
            }}
          />
        );
      })}
    </div>
  );
};

export default DeckIndicators;
