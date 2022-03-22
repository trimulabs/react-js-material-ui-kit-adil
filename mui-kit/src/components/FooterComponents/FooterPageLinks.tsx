import * as React from "react";
import { Button, Link, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import theme from "../../utils/Theme";

const style = {
  stackStyle: {
    paddingTop: "24px",
    paddingLeft: "24px",
    lineHeight: "1.25",
    opacity: "1",
  },
  buttonStyle: {
    fontSize: "14px",
    color: "#344767",
    fontFamily: '"Roboto","Helvetica","Arial",sans-serif',
    lineHeight: "1.75",
    letterSpacing: "0.02857em",
  },
};

export default function FooterPageLinks() {
  return (
    <Stack direction="row" spacing={5}>
      <Stack style={style.stackStyle}>
        <Typography>Company</Typography>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"About Us"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Freebies"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Premium Tools"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Blog"}
        </Link>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Resources</Typography>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Illustrations"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Bits & Snippets"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Affiliate Program"}
        </Link>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Help & Support</Typography>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Contact Us"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Knowledge Center"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Custom Development"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Sponsorship"}
        </Link>
      </Stack>
      <Stack style={style.stackStyle}>
        <Typography>Legal</Typography>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Terms & Conditions"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Privacy Policy"}
        </Link>
        <Link href="#" underline="none" style={style.buttonStyle}>
          {"Licenses (EULA)"}
        </Link>
      </Stack>
    </Stack>
  );
}
