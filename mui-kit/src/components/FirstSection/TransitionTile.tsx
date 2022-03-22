import { useState } from "react";
import ReactCardFlip from "react-card-flip";
import CardBack from "./TransitionCardBack";
import CardFront from "./TransitionCardFront";
import { styled } from "@mui/material";

const CardStyle = styled("div")({
  width: "30%",
  display: "flex",
  flexDirection: "row",
});

const CardFlip = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <CardStyle>
      <ReactCardFlip
        isFlipped={isFlipped}
        flipDirection="horizontal"
        flipSpeedBackToFront={1}
        flipSpeedFrontToBack={1}
      >
        <CardFront setIsFlipped={setIsFlipped} />
        <CardBack setIsFlipped={setIsFlipped} />
      </ReactCardFlip>
    </CardStyle>
  );
};

export default CardFlip;
