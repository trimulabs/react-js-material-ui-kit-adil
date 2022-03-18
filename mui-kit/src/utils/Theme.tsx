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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});

export default theme;
