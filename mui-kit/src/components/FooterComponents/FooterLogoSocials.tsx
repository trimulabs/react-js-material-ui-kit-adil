import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import Logo from "../../assets/logo";
import { Typography } from "@mui/material";

const style = {
  stackStyle: {
    paddingTop: "24px",
    marginBottom: "24px",
  },
};

const FooterLogoSocials = () => {
  return (
    <Stack spacing={2} style={style.stackStyle}>
      <IconButton href="#">
        <Logo style={{ height: "32px", width: "32px" }} />
      </IconButton>
      <Typography align="center">Material Kit 2</Typography>
      <Stack direction="row" spacing={1}>
        <IconButton aria-label="facebook" href="www.facebook.com">
          <FacebookIcon />
        </IconButton>
        <IconButton aria-label="twitter" href="twitter.com">
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="github" href="github.com">
          <GitHubIcon />
        </IconButton>
        <IconButton aria-label="youtube" href="youtube.com">
          <YouTubeIcon />
        </IconButton>
      </Stack>
    </Stack>
  );
};

export default FooterLogoSocials;
