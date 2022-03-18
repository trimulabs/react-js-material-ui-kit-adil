import Button from "@mui/material/Button";
import styled from "@emotion/styled";

const DownloaadButtonStyle = styled(Button)({
  margin: "0px 0px 16px",
  fontFamily: "Roboto, Helvetica, Arial, sans-serif",
  alignItems: "center",
  fontWeight: "700",
  borderRadius: "0.5rem",
  textAlign: "center",
  textTransform: "uppercase",
  padding: "0.75rem 1.75rem",
  fontSize: "0.875rem",
  color: "rgb(255, 255, 255)",
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
