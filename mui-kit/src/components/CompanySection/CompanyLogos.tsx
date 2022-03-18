import Apple from "../../assets/logo-apple";
import Facebook from "../../assets/logo-facebook";
import Nasa from "../../assets/logo-nasa";
import Vodafone from "../../assets/logo-vodafone";
import Digitalocean from "../../assets/logo-digitalocean";
import { IconButton, Stack } from "@mui/material";

const style = {
  stackStyle: {
    paddingTop: "24px",
    paddingBottom: "194px",
    justifyContent: "center",
  },
};

function CompanyLogos() {
  return (
    <div>
      <Stack direction="row" spacing={2} style={style.stackStyle}>
        <Apple style={{ height: "34.5px", width: "132px" }} />
        <Facebook style={{ height: "34.5px", width: "132px" }} />
        <Nasa style={{ height: "34.5px", width: "132px" }} />
        <Vodafone style={{ height: "34.5px", width: "132px" }} />
        <Digitalocean style={{ height: "34.5px", width: "132px" }} />
      </Stack>
    </div>
  );
}

export default CompanyLogos;
