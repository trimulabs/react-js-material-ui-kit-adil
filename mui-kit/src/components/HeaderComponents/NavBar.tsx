import { AppBar, Button, styled, Typography } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Tabs } from "@mui/material";
import { Tab } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import CalendarViewDaySharpIcon from "@mui/icons-material/CalendarViewDaySharp";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import { useTheme } from "@mui/material";
import { useMediaQuery } from "@mui/material";
import React from "react";

const style = {
  tabs: {
    marginLeft: "auto",
    alignItems: "baseline",
    opacity: "0.6",
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
    padding: "0 8px 0 8px",
    display: "flex",
  },
  navbar: {
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
    display: "flex",
    height: "20px",
  },
  appbar: {
    dispaly: "flex",
    margin: "16px 24px 16px 24px",
    left: "0",
    width: "calc(100% - 50px)",
    zIndex: "3",
    opacity: "1",
    background: "rgba(255, 255, 255, 0.8)",
    color: "rgb(52, 71, 103)",
    borderRadius: "0.75rem",
    backdropFilter: "saturate(200%) blur(30px)",
  },
  heading: {
    fontSize: "0.875rem",
    lineHeight: "1.5",
    opacity: "1",
    verticalAlign: "unset",
    textDecoration: "none",
    color: "rgb(52, 71, 103)",
    letterSpacing: "-0.125px",
    fontWeight: "700",
    display: "flex",
  },
  downloadButton: {
    textDecoration: "none",
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    letterSpacing: "0.02857em",
    minWidth: "64px",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "700",
    borderRadius: "0.5rem",
    lineHeight: "1.4",
    transition: "all 150ms ease-in 0s",
    minHeight: "2rem",
    padding: "0.375rem 1rem",
    fontSize: "0.75rem",
    backgroundImage:
      "linear-gradient(195deg, rgb(73, 163, 241), rgb(26, 115, 232))",
    color: "rgb(255, 255, 255)",
    boxShadow:
      "rgba(26, 115, 232, 0.15) 0rem 0.1875rem 0.1875rem 0rem, rgba(26, 115, 232, 0.2) 0rem 0.1875rem 0.0625rem -0.125rem, rgba(26, 115, 232, 0.15) 0rem 0.0625rem 0.3125rem 0rem",
  },
  githubButton: {
    marginLeft: "0 8px 0 8px",
    padding: "8px",
    display: "flex",
    alignItems: "baseline",
    opacity: "0.6",
    background: "transparent",
    color: "rgb(52, 71, 103)",
    boxShadow: "none",
  },
};

const AppBarStyle = styled(AppBar)(({ theme }) => ({
  [theme.breakpoints.down("sm")]: {},
}));

function NavBar() {
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down("md"));
  const PagesTab = () => {
    return <Typography variant="h6">Pages</Typography>;
  };
  const SectionsTab = () => {
    return <Typography variant="h6">Sections</Typography>;
  };
  const DocsTab = () => {
    return <Typography variant="h6">Docs</Typography>;
  };
  const tabs = (
    <React.Fragment>
      <Tabs style={style.tabs}>
        <Tab
          icon={<DashboardSharpIcon />}
          iconPosition="start"
          label={<PagesTab />}
        />
        <Tab
          icon={<CalendarViewDaySharpIcon />}
          iconPosition="start"
          label={<SectionsTab />}
        />
        <Tab
          icon={<ArticleSharpIcon />}
          iconPosition="start"
          label={<DocsTab />}
        />
      </Tabs>
      <Button
        variant="contained"
        startIcon={<GitHubIcon />}
        style={style.githubButton}
      >
        Github
      </Button>
    </React.Fragment>
  );

  return (
    <AppBar style={style.appbar}>
      <Toolbar style={style.navbar}>
        <Typography
          variant="h5"
          component="div"
          sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
        >
          Material Kit 2
        </Typography>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
        >
          Material Kit 2
        </Typography>
        {matches ? null : tabs}
        <Button variant="contained" style={style.downloadButton} href="#">
          Free Download
        </Button>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;
