import { Box, Button, styled, Typography } from "@mui/material";
import background from "../../assets/rotating-card-bg-back.jpeg";
import theme from "../../utils/Theme";

const Container = styled("div")({
  backgroundImage: `url(${background})`,
  height: "466px",
  width: "266px",
  backgroundSize: "cover",
  borderRadius: "8px",
});

const TextStyle = styled(Box)({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  margin: "auto",
  height: "100%",
  letterSpacing: "-0.125px",
  color: theme.palette.primary.main,
  lineHeight: "1.5",
  padding: "20px",
});

interface Props {
  setIsFlipped: (isFlipped: boolean) => void;
}

function CardBack({ setIsFlipped }: Props) {
  return (
    <Container onMouseOut={() => setIsFlipped(false)}>
      <TextStyle>
        <Typography variant="h3" sx={{ marginBottom: "10px" }}>
          Discover More
        </Typography>
        <Typography
          variant="body1"
          sx={{ fontWeight: "300", marginBottom: "10px" }}
        >
          You will save a lot of time going from prototyping to full-functional
          code because all elements are implemented
        </Typography>
        <Button variant="contained">Start with header</Button>
      </TextStyle>
    </Container>
  );
}

export default CardBack;
