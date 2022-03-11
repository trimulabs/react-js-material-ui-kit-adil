import * as React from "react";
import { Button, Stack } from "@mui/material";
import { Typography } from "@mui/material";
import theme from "../../utils/Theme";

export default function FooterPageLinks() {
  return (
    <Stack direction="row" spacing={10}>
      <Stack>
        <Typography>Company</Typography>
        <Button variant="text" color="secondary">
          About Us
        </Button>
        <Button variant="text" color="secondary">
          Freebies
        </Button>
        <Button variant="text" color="secondary">
          Premium
        </Button>
        <Button variant="text" color="secondary">
          Tools
        </Button>
        <Button variant="text" color="secondary">
          Blog
        </Button>
      </Stack>
      <Stack>
        <Typography>Resources</Typography>
        <Button variant="text" color="secondary">
          Illustrations
        </Button>
        <Button variant="text" color="secondary">
          Bits
        </Button>
        <Button variant="text" color="secondary">
          Snippets
        </Button>
        <Button variant="text" color="secondary">
          Affiliate
        </Button>
        <Button variant="text" color="secondary">
          Program
        </Button>
      </Stack>
      <Stack>
        <Typography>Help & Support</Typography>
        <Button variant="text" color="secondary">
          Contact Us
        </Button>
        <Button variant="text" color="secondary">
          Knowledge
        </Button>
        <Button variant="text" color="secondary">
          Center
        </Button>
        <Button variant="text" color="secondary">
          Custom
        </Button>
        <Button variant="text" color="secondary">
          Development
        </Button>
        <Button variant="text" color="secondary">
          Sponsorship
        </Button>
      </Stack>
      <Stack>
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
