import { createTheme } from "@mui/material/styles";
import Colors from "./Colors";
import Typography from "./Typography";

const theme = createTheme({
  palette: {
    ...Colors,
  },
  typography: {
    ...Typography,
  },
});

export default theme;
