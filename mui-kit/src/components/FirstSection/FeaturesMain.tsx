import Features from "./Features";
import KitFeatures from "./KitFeatures";
import CardFlip from "./TransitionTile";
import { Grid } from "@mui/material";
import { styled } from "@mui/system";

function FeaturesMain() {
  const GridStyle = styled(Grid)(({ theme }) => ({
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },
    [theme.breakpoints.up("md")]: {
      display: "flex",
      flexDirection: "row",
    },
  }));

  return (
    <div>
      <Features />
      <GridStyle>
        <Grid item>
          <CardFlip />
          <KitFeatures />
        </Grid>
      </GridStyle>
    </div>
  );
}

export default FeaturesMain;
