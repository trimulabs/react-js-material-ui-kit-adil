import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const DownloaadButtonStyle = styled(Button)({
  borderRadius: "4px",
  boxShadow: "none",
  minHeight: "20px",
  minWidth: "64px",
});

const DownloadButton = () => {
  return (
    <DownloaadButtonStyle>
      <Button variant="contained" color="secondary">
        Download Now
      </Button>
    </DownloaadButtonStyle>
  );
};

export default DownloadButton;
