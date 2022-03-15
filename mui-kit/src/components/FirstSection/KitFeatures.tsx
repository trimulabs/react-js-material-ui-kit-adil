import { Icon, Stack, Typography } from "@mui/material";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
import FlipToFrontRoundedIcon from "@mui/icons-material/FlipToFrontRounded";
import PriceChangeRoundedIcon from "@mui/icons-material/PriceChangeRounded";
import DevicesRoundedIcon from "@mui/icons-material/DevicesRounded";

const style = {
  icon: {
    color: "#1A73E8",
  },
  heading: {
    margin: "16px 0px 12px",
    display: "block",
    opacity: "1",
    textTransform: "none" as "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
    fontWeight: "700",
  },
  body: {
    margin: "0px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    fontWeight: "300",
    lineHeight: "1.6",
    display: "block",
    paddingRight: "48px",
    paddingLeft: "0px",
    opacity: "1",
    textTransform: "none" as "none",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(123, 128, 154)",
    letterSpacing: "-0.125px",
  },
  stackStyle: {
    paddingTop: "24px",
    paddingLeft: "24px",
  },
};
function KitFeatures() {
  return (
    <div>
      <Stack direction="row">
        <Stack style={style.stackStyle}>
          <Stack>
            <ContentCopyRoundedIcon style={style.icon} />
            <Typography style={style.heading}>Full Documentation</Typography>
            <Typography style={style.body}>
              Built by developers for developer. Check the foundation and you
              will find everything inside our documentation.
            </Typography>
          </Stack>
          <Stack>
            <PriceChangeRoundedIcon style={style.icon} />
            <Typography style={style.heading}>Save Time & Money</Typography>
            <Typography style={style.body}>
              Creating your design from scratch with dedicated designers can be
              very expensive. Start with our Design Systems.
            </Typography>
          </Stack>
        </Stack>
        <Stack style={style.stackStyle}>
          <Stack>
            <FlipToFrontRoundedIcon style={style.icon} />
            <Typography style={style.heading}>MUI Ready</Typography>
            <Typography style={style.body}>
              The world's most popular react components library for building
              user interfaces.
            </Typography>
          </Stack>
          <Stack>
            <DevicesRoundedIcon style={style.icon} />
            <Typography style={style.heading}>Fully Responsive</Typography>
            <Typography style={style.body}>
              Regardless of the screen size, the website content will naturally
              fit the given resolution.
            </Typography>
          </Stack>
        </Stack>
      </Stack>
    </div>
  );
}

export default KitFeatures;
