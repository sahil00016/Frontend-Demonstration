import { useEffect, useState, useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import AnimatedCard from './AnimatedCard';
import DeckIndicators from './DeckIndicators';

interface CardData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

interface CardDeckProps {
  cards: CardData[];
  onSelect?: (index: number) => void;
}

type Position = 'left' | 'center' | 'right';

const CardDeck: React.FC<CardDeckProps> = ({ cards, onSelect }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<'forward' | 'backward'>('forward');
  const [isPaused, setIsPaused] = useState(false);
  const intervalRef = useRef<number | null>(null);

  useEffect(() => {
    if (isPaused) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      return;
    }

    intervalRef.current = setInterval(() => {
      setActiveIndex((prev) => {
        if (direction === 'forward') {
          if (prev === cards.length - 1) {
            setDirection('backward');
            return prev - 1;
          }
          return prev + 1;
        } else {
          if (prev === 0) {
            setDirection('forward');
            return prev + 1;
          }
          return prev - 1;
        }
      });
    }, 1900);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [direction, cards.length, isPaused]);

  const getPosition = useCallback((index: number): Position => {
    if (index === activeIndex) return 'center';
    if (index < activeIndex) return 'left';
    return 'right';
  }, [activeIndex]);

  return (
    <div className="flex flex-col items-center">
      <motion.div
        className="relative w-full max-w-4xl h-[400px] overflow-visible flex items-center justify-center"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        {cards.map((card, index) => (
          <AnimatedCard
            key={index}
            title={card.title}
            subtitle={card.subtitle}
            icon={card.icon}
            position={getPosition(index)}
            index={index}
            onClick={getPosition(index) === 'center' ? () => onSelect?.(index) : undefined}
          />
        ))}
      </motion.div>
      <DeckIndicators activeIndex={activeIndex} totalCards={cards.length} />
    </div>
  );
};

export default CardDeck;
