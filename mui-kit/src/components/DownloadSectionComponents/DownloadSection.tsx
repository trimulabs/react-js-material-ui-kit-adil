import DownloadButton from "./DownloadNowButton";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import styled from "@emotion/styled";

const StackStyle = styled(Stack)({
  justifyContent: "center",
  textAlign: "center",
  marginRight: "auto",
  marginLeft: "auto",
  flexDirection: "row",
  flexWrap: "wrap",
});

export default function DownloadSection() {
  return (
    <div>
      <StackStyle>
        <Stack>
          <Typography variant="h3">
            Do you love this awesome UI Kit for ReactJS & MUI?
          </Typography>
          <Typography variant="body1">
            Cause if you do, it can be yours for FREE. Hit the button below to
            navigate to Creative Tim where you can find the Design System in
            HTML. Start a new project or give an old Bootstrap project a new
            look!
          </Typography>
          <DownloadButton />
        </Stack>
      </StackStyle>
    </div>
  );
}
