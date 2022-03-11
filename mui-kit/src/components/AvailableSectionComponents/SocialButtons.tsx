import React from "react";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import styled from "@emotion/styled";

const SocialButtonsStyle = styled(Button)({
  borderRadius: "4px",
  boxShadow: "none",
  minHeight: "20px",
  minWidth: "64px",
});

const SocialButtons = () => {
  return (
    <Stack direction="row" spacing={5}>
      <SocialButtonsStyle>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<TwitterIcon />}
        >
          Tweet
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<FacebookOutlinedIcon />}
        >
          Share
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<PinterestIcon />}
        >
          Pin It
        </Button>
      </SocialButtonsStyle>
    </Stack>
  );
};

export default SocialButtons;
