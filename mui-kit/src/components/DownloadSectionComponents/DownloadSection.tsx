import DownloadButton from "./DownloadNowButton";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";
import Wave from "../../assets/waves.jpg";

const StackStyle = styled(Stack)({
  justifyContent: "center",
  textAlign: "center",
  marginRight: "auto",
  marginLeft: "auto",
  flexDirection: "row",
  flexWrap: "wrap",
  width: "50%",
  paddingTop: "96px",
  paddingBottom: "96px",
});

const Container = styled("div")({
  backgroundImage: `url(${Wave})`,
  backgroundSize: "cover",
  width: "100%",
  height: "400px",
  borderRadius: "15px",
});

export default function DownloadSection() {
  return (
    <Container>
      <StackStyle>
        <Stack>
          <Typography variant="h3">Do you love this awesome</Typography>
          <Typography variant="h3" sx={{ marginBottom: "8px" }}>
            UI Kit for ReactJS & MUI?
          </Typography>
          <Typography variant="body1" sx={{ marginBottom: "48px" }}>
            Cause if you do, it can be yours for FREE. Hit the button below to
            navigate to Creative Tim where you can find the Design System in
            HTML. Start a new project or give an old Bootstrap project a new
            look!
          </Typography>
          <DownloadButton />
        </Stack>
      </StackStyle>
    </Container>
  );
}
