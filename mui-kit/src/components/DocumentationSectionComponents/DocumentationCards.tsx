import ArrowForwardRoundedIcon from "@mui/icons-material/ArrowForwardRounded";
import FlagRoundedIcon from "@mui/icons-material/FlagRounded";
import PrecisionManufacturingRoundedIcon from "@mui/icons-material/PrecisionManufacturingRounded";
import AppsRoundedIcon from "@mui/icons-material/AppsRounded";
import { Typography, Stack, Button, Paper, styled } from "@mui/material";

const style = {
  stackStyle: {
    margin: "24px",
  },
  paperStyle: {
    padding: "28px 24px 24px 24px",
  },
  iconStyle: {
    color: "#1A73E8",
  },
  heading: {
    display: "block",
    opacity: "1",
    letterSpacing: "-0.125px",
    fontWeight: "700",
    fontSize: "20px",
  },
};

const DocumentationCards = () => {
  return (
    <div>
      <Stack direction="row" spacing={5} style={style.stackStyle}>
        <Paper
          style={style.paperStyle}
          elevation={1}
          sx={{
            background:
              "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
            borderRadius: "10px",
          }}
        >
          <Stack direction="row" spacing={2}>
            <FlagRoundedIcon sx={{ color: "#FFFFFF" }} />
            <Stack>
              <Typography style={style.heading} sx={{ color: "#FFFFFF" }}>
                Getting Started
              </Typography>
              <Typography sx={{ color: "#FFFFFF" }}>
                Check the possible ways of working with our product and the
                necessary files for building your own project.
              </Typography>
              <Button
                variant="text"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{ paddingLeft: "0px", color: "FFFFFF" }}
              >
                Let's start
              </Button>
            </Stack>
          </Stack>
        </Paper>
        <Paper style={style.paperStyle} elevation={0}>
          <Stack direction="row" spacing={2}>
            <PrecisionManufacturingRoundedIcon sx={{ color: "#1A73E8" }} />

            <Stack>
              <Typography
                style={style.heading}
                sx={{ color: "rgb(52, 71, 103)" }}
              >
                {" "}
                Plugins
              </Typography>
              <Typography>
                Get inspiration and have an overview about the plugins that we
                used to create the Material Kit.
              </Typography>
              <Button
                variant="text"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{ paddingLeft: "0px", color: "#1A73E8" }}
              >
                Read more
              </Button>
            </Stack>
          </Stack>
        </Paper>

        <Paper style={style.paperStyle} elevation={0}>
          <Stack direction="row" spacing={2}>
            <AppsRoundedIcon sx={{ color: "#1A73E8" }} />
            <Stack>
              <Typography
                style={style.heading}
                sx={{ color: "rgb(52, 71, 103)" }}
              >
                Components
              </Typography>

              <Typography>
                Material Kit is giving you a lot of pre-made components, that
                will help you to build UI's faster.
              </Typography>
              <Button
                variant="text"
                endIcon={<ArrowForwardRoundedIcon />}
                sx={{ paddingLeft: "0px", color: "#1A73E8" }}
              >
                Read more
              </Button>
            </Stack>
          </Stack>
        </Paper>
      </Stack>
    </div>
  );
};

export default DocumentationCards;
