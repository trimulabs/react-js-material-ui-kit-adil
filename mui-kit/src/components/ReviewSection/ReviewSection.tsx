import { Stack, Paper, Typography, Button } from "@mui/material";
import AccessTimeRoundedIcon from "@mui/icons-material/AccessTimeRounded";
import Stars from "./StarComponent";

const style = {
  nameStyle: {
    lineHeight: "1.625",
    fontWeight: "700",
    opacity: "1",
    display: "block",
  },
  mainStack: {
    paddingTop: "24px",
    paddingLeft: "24px",
    marginBottom: "64px",
  },
  reviewPaper: {
    padding: "24px",
  },
  starStyle: {
    color: "#7B809A",
  },
  starStyleCenter: {
    color: "FFFFFF",
  },
  reviewBody: {
    margin: "32px 0px 32px 0px",
    fontWeight: "300",
    lineHeight: "1.6",
    opacity: "1",
    verticalAlign: "unset",
    textDecoration: "none",
    letterSpacing: "-0.125px",
  },
};
function Review() {
  return (
    <Stack direction="row" style={style.mainStack}>
      <Stack>
        <Paper elevation={0} style={style.reviewPaper}>
          <Typography
            variant="body1"
            style={style.nameStyle}
            sx={{ color: "rgb(52, 71, 103)" }}
          >
            Nick Willever
          </Typography>
          <Button
            variant="outlined"
            startIcon={<AccessTimeRoundedIcon />}
            disabled
          >
            1 day ago
          </Button>
          <Typography style={style.reviewBody} sx={{ color: "#7B809A" }}>
            "This is an excellent product, the documentation is excellent and
            helped me get things done more efficiently."
          </Typography>
          <Stars style={style.starStyle} />
        </Paper>
      </Stack>
      <Stack>
        <Paper
          style={style.reviewPaper}
          elevation={1}
          sx={{
            background:
              "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            borderRadius: "10px",
          }}
        >
          <Typography
            variant="body1"
            style={style.nameStyle}
            sx={{ color: "#FFFFFF" }}
          >
            Shailesh Kushwaha
          </Typography>
          <Button variant="outlined" startIcon={<AccessTimeRoundedIcon />}>
            1 week ago
          </Button>
          <Typography style={style.reviewBody} sx={{ color: "#FFFFFF" }}>
            "I found solution to all my design needs from Creative Tim. I use
            them as a freelancer in my hobby projects for fun! And its really
            affordable, very humble guys !!!"
          </Typography>
          <Stars style={style.starStyleCenter} />
        </Paper>
      </Stack>
      <Stack>
        <Paper elevation={0} style={style.reviewPaper}>
          <Typography
            variant="body1"
            style={style.nameStyle}
            sx={{ color: "rgb(52, 71, 103)" }}
          >
            Samuel Kamuli
          </Typography>
          <Button
            variant="outlined"
            startIcon={<AccessTimeRoundedIcon />}
            disabled
          >
            3 weeks ago
          </Button>
          <Typography style={style.reviewBody} sx={{ color: "#7B809A" }}>
            "Great product.Helped me cut the time to set up a site. Iused the
            components within instead of starting from scratch. I highly
            recommend for developers who want to spend more time on the
            backend!."
          </Typography>
          <Stars style={style.starStyle} />
        </Paper>
      </Stack>
    </Stack>
  );
}

export default Review;
