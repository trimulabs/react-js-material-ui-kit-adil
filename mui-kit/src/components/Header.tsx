import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import theme from "../utils/Theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import CalendarViewDaySharpIcon from "@mui/icons-material/CalendarViewDaySharp";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import HeaderBG from "./HeaderBG";

const HeaderStyle = styled("div")({
  borderRadius: "100px",
  backgroundColor: theme.palette.primary.main,
  paddingTop: "8px",
  paddingBottom: "8px",
  margin: "16px",
  opacity: "1",
});

const HeaderTabsStyle = styled("div")({
  marginLeft: "auto",
  textTransform: "none",
  fontSize: "1 rem",
});

const HeaderDownloadButtonStyle = styled("div")({
  borderRadius: "25px",
  marginLeft: "20px",
  fontWeight: "400",
});

const Header = () => {
  const PagesTab = () => <div>Pages</div>;
  const SectionsTab = () => <div>Sections</div>;
  const DocsTab = () => <div>Docs</div>;
  return (
    <div>
      <HeaderStyle>
        <AppBar position="static">
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
              >
                Material Kit 2
              </Typography>
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}
              >
                Material Kit 2
              </Typography>
              <HeaderTabsStyle>
                <Tabs>
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
              </HeaderTabsStyle>
              <Button variant="contained" startIcon={<GitHubIcon />}>
                Github
              </Button>
              <HeaderDownloadButtonStyle>
                <Button variant="contained" color="secondary">
                  Free Download
                </Button>
              </HeaderDownloadButtonStyle>
            </Toolbar>
          </Container>
        </AppBar>
      </HeaderStyle>
      <HeaderBG />
    </div>
  );
};
export default Header;
