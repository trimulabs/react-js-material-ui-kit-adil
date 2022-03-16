import Features from "./Features";
import KitFeatures from "./KitFeatures";
import CardFlip from "./TransitionTile";
import { Stack } from "@mui/material";
function FeaturesMain() {
  return (
    <div>
      <Features />
      <Stack
        direction="row"
        spacing={5}
        sx={{ marginLeft: "100px", padding: "48px 0 48px 0" }}
      >
        <CardFlip />
        <KitFeatures />
      </Stack>
    </div>
  );
}

export default FeaturesMain;
