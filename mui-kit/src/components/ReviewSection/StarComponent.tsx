import { Stack } from "@mui/material";
import StarRoundedIcon from "@mui/icons-material/StarRounded";

function Stars() {
  return (
    <Stack direction="row" spacing={0}>
      <StarRoundedIcon />
      <StarRoundedIcon />
      <StarRoundedIcon />
      <StarRoundedIcon />
      <StarRoundedIcon />
    </Stack>
  );
}

export default Stars;
