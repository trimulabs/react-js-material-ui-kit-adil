import { Typography } from "@mui/material";
import { Stack } from "@mui/material";

const style = {
  heading: {
    justifyContent: "center",
    textAlign: "center" as "center",
    lineHeight: "1.3",
    opacity: "1",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
  },
  subheading: {
    justifyContent: "center",
    textAlign: "center" as "center",
    lineHeight: "1.3",
    opacity: "1",
    verticalAlign: "unset",
    color: "rgb(26, 115, 232)",
    letterSpacing: "-0.125px",
    backgroundClip: "text",
    margin: "0px 0px 16px",
    textDecoration: "none",
  },
  body: {
    margin: "0px 0px 16px",

    fontWeight: "400",
    lineHeight: "1.625",
    opacity: "1",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(123, 128, 154)",
    letterSpacing: "-0.125px",
    justifyContent: "center",
    textAlign: "center" as "center",
    width: "45%",
    marginRight: "auto",
    marginLeft: "auto",
  },
  stackStyle: {
    marginTop: "96px",
    marginBottom: "96px",
  },
};

function Trusted() {
  return (
    <div>
      <Stack style={style.stackStyle}>
        <Typography variant="h2" style={style.heading}>
          Trusted by over
        </Typography>
        <Typography variant="h2" style={style.subheading}>
          1,679,477+ web developers
        </Typography>
        <Typography variant="h4" style={style.body}>
          Many Fortune 500 companies, startups, universities and governmental
          institutions love Creative Tim's products.
        </Typography>
      </Stack>
    </div>
  );
}

export default Trusted;
