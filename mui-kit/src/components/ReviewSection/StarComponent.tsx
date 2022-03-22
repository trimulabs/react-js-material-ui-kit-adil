import { Grid } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";
import Colors from "../../utils/Colors";

function Stars(props: any) {
  return (
    <Grid sx={{ display: "flex" }}>
      <StarRoundedIcon sx={{ color: Colors.primary.main }} />
      <StarRoundedIcon sx={{ color: Colors.primary.main }} />
      <StarRoundedIcon sx={{ color: Colors.primary.main }} />
      <StarRoundedIcon sx={{ color: Colors.primary.main }} />
      <StarRoundedIcon sx={{ color: Colors.primary.main }} />
    </Grid>
  );
}

export default Stars;
