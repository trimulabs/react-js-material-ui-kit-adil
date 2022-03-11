import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import theme from "../../utils/Theme";
import GitHubIcon from "@mui/icons-material/GitHub";
import CalendarViewDaySharpIcon from "@mui/icons-material/CalendarViewDaySharp";
import ArticleSharpIcon from "@mui/icons-material/ArticleSharp";
import DashboardSharpIcon from "@mui/icons-material/DashboardSharp";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import HeaderBG from "./HeaderBG";

const AppBarStyle = styled(AppBar)({
  paddingTop: "8px",
  paddingBottom: "8px",
  position: "absolute",
  opacity: "1",
  background: "theme.palette.primary.main",
  borderRadius: "20px",
  width: "70%",
});

const HeaderStyle = styled(Container)({
  marginTop: "16px",
  marginRight: "24px",
  marginBottom: "16px",
  marginLeft: "24px",
  opacity: "1",
});

const HeaderTabsStyle = styled(Tabs)({
  marginLeft: "auto",
  textTransform: "none",
});

const HeaderDownloadButtonStyle = styled(Button)({
  borderRadius: "25px",
  marginLeft: "20px",
  fontWeight: "400",
});

const Header = () => {
  const PagesTab = () => {
    return <Typography variant="h6">Pages</Typography>;
  };
  const SectionsTab = () => {
    return <Typography variant="h6">Sections</Typography>;
  };
  const DocsTab = () => {
    return <Typography variant="h6">Docs</Typography>;
  };
  return (
    <div>
      <HeaderStyle>
        <AppBarStyle>
          <AppBar position="static">
            <Container maxWidth="xl">
              <Toolbar disableGutters>
                <Typography
                  variant="h5"
                  noWrap
                  component="div"
                  color={theme.palette.common.black}
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
        </AppBarStyle>
      </HeaderStyle>
      <HeaderBG />
    </div>
  );
};
export default Header;
