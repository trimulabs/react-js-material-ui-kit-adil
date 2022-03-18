import { Box, Button, styled, Typography } from "@mui/material";
import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import theme from "../../utils/Theme";
import desk from "../../assets/desktop.jpeg";

const TextStyle = styled(Box)({
  color: theme.palette.primary.main,
  margin: "0 0 16px 0",
  width: "50%",
  padding: "0 24px 0 24px",
});
const Container = styled("div")({
  backgroundImage: `url(${desk})`,
  backgroundSize: "cover",
  height: "380px",
  padding: "48px 0 48px 0",
  borderRadius: "15px",
  margin: "0 24px 0 24px",
});

const DocumentationBG = () => {
  return (
    <Container>
      <TextStyle>
        <Typography variant="body2">Built by developers</Typography>
        <Typography variant="h1" sx={{ marginBottom: "8px" }}>
          Complex Documentation
        </Typography>
        <Typography variant="h4" sx={{ opacity: "0.8" }}>
          From colors, cards, typography to complex elements, you will find the
          full documentation. Play with the utility classes and you will create
          unlimited combinations for our components.
        </Typography>
        <Button
          variant="text"
          endIcon={<ArrowForwardRoundedIcon />}
          sx={{ paddingLeft: "0px" }}
        >
          Read docs
        </Button>
      </TextStyle>
    </Container>
  );
};

export default DocumentationBG;
