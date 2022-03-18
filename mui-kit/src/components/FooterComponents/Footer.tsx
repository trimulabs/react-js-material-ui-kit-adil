import * as React from "react";
import FooterPageLinks from "./FooterPageLinks";
import FooterLogoSocials from "./FooterLogoSocials";
import Stack from "@mui/material/Stack";

export default function Footer() {
  return (
    <div>
      <Stack direction="row" spacing={5} sx={{ marginLeft: "100px" }}>
        <FooterLogoSocials />
        <FooterPageLinks />
      </Stack>
    </div>
  );
}
