import * as React from "react";
import { Button, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import theme from "../../utils/Theme";

const style = {
  stackStyle: {
    paddingTop: "24px",
    paddingLeft: "24px",
    lineHeight: "1.25",
    opacity: "1",
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
    textTransform: "none" as "none",
    fontSize: "14px",
  },
};

export default function FooterPageLinks() {
  return (
    <Stack direction="row" spacing={10}>
      <Stack style={style.stackStyle}>
        <Typography>Company</Typography>
        <Button variant="text" color="secondary">
          About Us
        </Button>
        <Button variant="text" color="secondary">
          Freebies
        </Button>
        <Button variant="text" color="secondary">
          Premium Tools
        </Button>
        <Button variant="text" color="secondary">
          Blog
        </Button>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Resources</Typography>
        <Button variant="text" color="secondary">
          Illustrations
        </Button>
        <Button variant="text" color="secondary">
          Bits & Snippets
        </Button>
        <Button variant="text" color="secondary">
          Affiliate Program
        </Button>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Help & Support</Typography>
        <Button variant="text" color="secondary">
          Contact Us
        </Button>
        <Button variant="text" color="secondary">
          Knowledge Center
        </Button>
        <Button variant="text" color="secondary">
          Custom Development
        </Button>
        <Button variant="text" color="secondary">
          Sponsorship
        </Button>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Legal</Typography>
        <Button variant="text" color="secondary">
          Terms & Conditions
        </Button>
        <Button variant="text" color="secondary">
          Privacy Policy
        </Button>
        <Button variant="text" color="secondary">
          Licenses (EULA)
        </Button>
      </Stack>
    </Stack>
  );
}
