import FooterPageLinks from "./FooterPageLinks";
import FooterLogoSocials from "./FooterLogoSocials";
import Stack from "@mui/material/Stack";
import theme from "../../utils/Theme";
import { styled } from "@mui/material";

const stackStyle = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {
    marginLeft: "0",
  },
  [theme.breakpoints.up("md")]: {
    marginLeft: "100px",
  },
}));

export default function Footer() {
  return (
    <div>
      <Stack direction={{ sm: "row", lg: "column" }} spacing={{ xs: 0, sm: 5 }}>
        <FooterLogoSocials />
        <FooterPageLinks />
      </Stack>
    </div>
  );
}
