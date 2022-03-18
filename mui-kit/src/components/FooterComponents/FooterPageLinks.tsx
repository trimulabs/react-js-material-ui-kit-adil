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
  buttonStyle: {
    textColor: "black",
    backgroundColor: "transparent",
    outline: "0",
    border: "0",
    margin: "0",
    borderRadius: "0",
    padding: "0px",
    verticalAlign: "middle",
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
    transition:
      "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
  },
};

export default function FooterPageLinks() {
  return (
    <Stack direction="row" spacing={5}>
      <Stack style={style.stackStyle}>
        <Typography>Company</Typography>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          About Us
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Freebies
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Premium Tools
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Blog
        </Button>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Resources</Typography>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Illustrations
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Bits & Snippets
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Affiliate Program
        </Button>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Help & Support</Typography>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Contact Us
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Knowledge Center
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Custom Development
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Sponsorship
        </Button>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Legal</Typography>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Terms & Conditions
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Privacy Policy
        </Button>
        <Button variant="text" color="secondary" style={style.buttonStyle}>
          Licenses (EULA)
        </Button>
      </Stack>
    </Stack>
  );
}
