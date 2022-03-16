import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";
import colors from "../../utils/Colors";
import { Typography } from "@mui/material";

const SocialButtonsStyle = styled(Button)({
  borderRadius: "4px",
  boxShadow: "none",
  minHeight: "20px",
  minWidth: "64px",
  //padding: "0.625rem 1.5rem",
  margin: "auto",
});

const style = {
  heading: {
    lineHeight: "1.375",
    opacity: "1",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
  },
  subheading: {
    margin: "0px",
    fontWeight: "400",
    lineHeight: "1.625",
    opacity: "1",
    textDecoration: "none",
    color: "#7B809A",
    letterSpacing: "-0.125px",
  },
  stackStyle: {
    paddingTop: "120px",
    paddingBottom: "48px",
    paddingLeft: "38px",
    paddingRight: "38px",
    maxWidth: "960px",
  },
};

const SocialButtons = () => {
  return (
    <Stack direction="row" style={style.stackStyle}>
      <Stack>
        <Typography variant="body2" style={style.heading}>
          Thank you for your support!
        </Typography>
        <Typography variant="h4" style={style.subheading}>
          We deliver the best web products
        </Typography>
      </Stack>
      <SocialButtonsStyle>
        <Button
          variant="contained"
          startIcon={<TwitterIcon />}
          sx={{
            backgroundColor: colors.twitter.main,
            color: colors.primary.main,
          }}
        >
          Tweet
        </Button>
        <Button
          variant="contained"
          startIcon={<FacebookOutlinedIcon />}
          sx={{
            backgroundColor: colors.facebook.main,
            color: colors.primary.main,
          }}
        >
          Share
        </Button>
        <Button
          variant="contained"
          startIcon={<PinterestIcon />}
          sx={{
            backgroundColor: colors.pinterest.main,
            color: colors.primary.main,
          }}
        >
          Pin It
        </Button>
      </SocialButtonsStyle>
    </Stack>
  );
};

export default SocialButtons;
