import { useState } from 'react';
import InteractiveCard from './InteractiveCard';

interface CardData {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

interface CardStackProps {
  cards: CardData[];
}

const CardStack: React.FC<CardStackProps> = ({ cards }) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="relative h-[500px] w-full max-w-md">
      {cards.map((card, index) => (
        <InteractiveCard
          key={index}
          title={card.title}
          subtitle={card.subtitle}
          icon={card.icon}
          index={index}
          isHovered={hoveredIndex === index}
          hoveredIndex={hoveredIndex}
          onHover={setHoveredIndex}
          delay={0.3}
        />
      ))}
    </div>
  );
};

export default CardStack;
