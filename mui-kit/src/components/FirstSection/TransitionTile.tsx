import React, { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardBack from "./TransitionCardBack";
import CardFront from "./TransitionCardFront";

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <ReactCardFlip
      isFlipped={isFlipped}
      flipDirection="horizontal"
      flipSpeedBackToFront={1}
      flipSpeedFrontToBack={1}
    >
      <CardFront setIsFlipped={setIsFlipped} />
      <CardBack setIsFlipped={setIsFlipped} />
    </ReactCardFlip>
  );
};

export default CardFlip;
