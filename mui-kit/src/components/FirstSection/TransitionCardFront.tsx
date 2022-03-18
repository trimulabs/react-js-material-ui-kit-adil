import TouchAppIcon from "@mui/icons-material/TouchApp";
import { Box, Paper, Stack, styled, Typography } from "@mui/material";
import background from "../../assets/rotating-card-bg-front.jpeg";
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

const style = {
  icon: {
    color: "#FFFFFF",
    margin: "16px 0 24px 0",
  },
};

interface Props {
  setIsFlipped: (isFlipped: boolean) => void;
}

const CardFront = ({ setIsFlipped }: Props) => {
  return (
    <Container onMouseOver={() => setIsFlipped(true)}>
      <TextStyle>
        <TouchAppIcon style={style.icon} />

        <Typography variant="h3" sx={{ marginBottom: "10px" }}>
          Feel the Material Kit
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "300" }}>
          All the MUI components that you need in a development have been
          re-design with the new look.
        </Typography>
      </TextStyle>
    </Container>
  );
};

export default CardFront;
