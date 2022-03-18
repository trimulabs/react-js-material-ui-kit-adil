import { Stack, Typography } from "@mui/material";
import theme from "../../utils/Theme";
const style = {
  number: {
    justifyContent: "center",
    textAlign: "center" as "center",
    fontSize: "3rem",
    lineHeight: "1.25",
    fontWeight: "700",
    opacity: "1",
    verticalAlign: "unset",
    color: "rgb(26, 115, 232)",
    letterSpacing: "-0.125px",
    zIndex: "1",
    margin: "0px",
  },
  title: {
    justifyContent: "center",
    textAlign: "center" as "center",
    margin: "16px 0px 8px",
    fontSize: "1.25rem",
    lineHeight: "1.375",
    fontWeight: "700",
    opacity: "1",
    verticalAlign: "unset",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
  },
  body: {
    justifyContent: "center",
    textAlign: "center" as "center",
    margin: "0px",
    fontSize: "1rem",
    fontWeight: "300",
    lineHeight: "1.6",
    opacity: "1",
    verticalAlign: "unset",
    color: "rgb(123, 128, 154)",
    letterSpacing: "-0.125px",
    width: "60%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  stackStyle: {
    display: "flex",
    paddingTop: "16px",
    paddingBottom: "16px",
    marginLeft: "100px",
    marginRight: "100px",
    [theme.breakpoints.down("md")]: {
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
