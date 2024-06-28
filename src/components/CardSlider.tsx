import React, { useState } from "react";
import Carousel from "react-spring-3d-carousel";
import { config } from "react-spring";
import Card from "./Card";
import Button from "./Button";
import { CardProps } from "../types/index";

export interface CardSliderProps {
  cards: CardProps[];
}

const CardSlider: React.FC<CardSliderProps> = ({ cards }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const slides = cards.map((card, index) => ({
    key: index,
    content: <Card {...card} />,
  }));

  const nextCard = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  };

  const prevCard = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + cards.length) % cards.length
    );
  };

  if (cards.length === 0) {
    return <p>No available cards</p>;
  }

  return (
    <div className="relative w-full max-w-lg mx-auto">
      <Carousel
        slides={slides}
        goToSlide={currentIndex}
        offsetRadius={2}
        showNavigation={false}
        animationConfig={config.gentle}
      />
      {cards.length > 1 && (
        <>
          <div className="absolute top-1/2 transform -translate-y-1/2 left-0">
            <Button onClick={prevCard} direction="left" />
          </div>
          <div className="absolute top-1/2 transform -translate-y-1/2 right-0">
            <Button onClick={nextCard} direction="right" />
          </div>
        </>
      )}
    </div>
  );
};

export default CardSlider;
