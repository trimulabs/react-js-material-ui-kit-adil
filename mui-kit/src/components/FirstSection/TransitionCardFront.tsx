import TouchAppIcon from "@mui/icons-material/TouchApp";
import { Paper, Stack, Typography } from "@mui/material";
import background from "../../assets/rotating-card-bg-front.jpeg";

const style = {
  icon: {
    color: "#FFFFFF",
  },
  heading: {
    margin: "0px 0px 0.35em",
    fontFamily: '"Roboto Slab", sans-serif',
    fontSize: "1.875rem",
    lineHeight: "1.375",
    fontWeight: "700",
    opacity: "1",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(255, 255, 255)",
    letterSpacing: "-0.125px",
  },
  body: {
    margin: "0px",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    fontSize: "1rem",
    fontWeight: "300",
    lineHeight: "1.6",
    opacity: "0.8",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(255, 255, 255)",
    letterSpacing: "-0.125px",
  },
  paper: {
    backgroundImage: `url(${background})`,
    height: "250px",
    width: "100px",
    padding: "96px 24px 96px 24px",
    backgroundColor: "#1A73E8",
  },
};

function CardFront() {
  return (
    <div>
      <Paper style={style.paper}>
        <Stack>
          <TouchAppIcon style={style.icon} />
          <Typography style={style.heading}>Feel the Material Kit</Typography>
          <Typography style={style.body}>
            All the MUI components that you need in a development have been
            re-design with the new look.
          </Typography>
        </Stack>
      </Paper>
    </div>
  );
}

export default CardFront;
