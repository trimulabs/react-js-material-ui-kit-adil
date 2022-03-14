import { Typography } from "@mui/material";
import HeaderBG from "./HeaderBG";
import NavBar from "./NavBar";
import styled from "@emotion/styled";
import theme from "../../utils/Theme";

const TextStyle = styled(Typography)({
  justifyContent: "center",
  verticalAlign: "center",
  alignItems: "center",
  textAlign: "center",
  marginRight: "auto",
  marginLeft: "auto",
  flexDirection: "row",
  flexWrap: "wrap",
});

const Header = () => {
  return (
    <div>
      <NavBar />
      <TextStyle>
        <Typography variant="h1" color={theme.palette.primary.main}>
          Material Kit 2 React
        </Typography>
        <Typography variant="h4" color={theme.palette.primary.main}>
          Free & Open Source Web UI Kit built over ReactJS & MUI. Join over 1.6
          million developers around the world.
        </Typography>
      </TextStyle>
      <HeaderBG />
    </div>
  );
};
export default Header;
