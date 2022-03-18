import { Box, Typography } from "@mui/material";
import NavBar from "./NavBar";
import styled from "@emotion/styled";
import theme from "../../utils/Theme";
import bg from "../../assets/bg.jpeg";

const TextStyle = styled(Box)({
  justifyContent: "center",
  display: "flex",
  alignItems: "center",
  flexDirection: "column",
  margin: "auto",
  height: "100%",
});

const Container = styled("div")({
  backgroundImage: `url(${bg})`,
  backgroundSize: "cover",
  width: "100%",
  minHeight: "75vh",
  display: "grid",
  placeItems: "center",
  alignItems: "center",
  justifyItems: "center",
});

const Header = () => {
  return (
    <Container>
      <NavBar />
      <TextStyle>
        <Typography
          variant="h1"
          color={theme.palette.primary.main}
          sx={{ marginBottom: "16px" }}
        >
          Material Kit 2 React
        </Typography>
        <Typography
          variant="h4"
          color={theme.palette.primary.main}
          sx={{ width: "40%" }}
        >
          Free & Open Source Web UI Kit built over ReactJS & MUI. Join over 1.6
          million developers around the world.
        </Typography>
      </TextStyle>
    </Container>
  );
};
export default Header;
