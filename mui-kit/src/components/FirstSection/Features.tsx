import { Stack, Typography } from "@mui/material";
import theme from "../../utils/Theme";
import styled from "@emotion/styled";
import { Box } from "@mui/material";

const TextStyle = styled(Box)({
  justifyContent: "center",
  textAlign: "center" as "center",
});

const style = {
  number: {
    fontSize: "3rem",
    lineHeight: "1.25",
    fontWeight: "700",
    opacity: "1",
    verticalAlign: "unset",
    color: "rgb(26, 115, 232)",
    letterSpacing: "-0.125px",
    zIndex: "1",
    margin: "0px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  title: {
    margin: "16px 0px 8px",
    fontSize: "1.25rem",
    lineHeight: "1.375",
    fontWeight: "700",
    opacity: "1",
    verticalAlign: "unset",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
    marginRight: "auto",
    marginLeft: "auto",
  },
  body: {
    margin: "0px",
    fontSize: "1rem",
    fontWeight: "300",
    lineHeight: "1.6",
    opacity: "1",
    color: "rgb(123, 128, 154)",
    width: "70%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  stackStyle: {
    display: "flex",
    paddingTop: "16px",
    paddingBottom: "16px",
    [theme.breakpoints.down("sm")]: {
      flexDirection: "column",
    },
  },
};

function Features() {
  return (
    <Stack direction="row" style={style.stackStyle}>
      <Stack sx={{ padding: "16px" }}>
        <Typography style={style.number}>70+</Typography>
        <Typography style={style.title}>Coded Elements</Typography>
        <Typography style={style.body}>
          From buttons, to inputs, navbars, alerts or cards, you are covered
        </Typography>
      </Stack>
      <Stack sx={{ padding: "16px" }}>
        <Typography style={style.number}>15+</Typography>
        <Typography style={style.title}>Design Blocks</Typography>
        <Typography style={style.body}>
          Mix the sections, change the colors and unleash your creativity
        </Typography>
      </Stack>
      <Stack sx={{ padding: "16px" }}>
        <Typography style={style.number}>4</Typography>
        <Typography style={style.title}>Pages</Typography>
        <Typography style={style.body}>
          Save 3-4 weeks of work when you use our pre-made pages for your
          website
        </Typography>
      </Stack>
    </Stack>
  );
}

export default Features;
