import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import {styled} from '@mui/material';
import Button from '@mui/material/Button';
import theme from '../utils/Theme';


const HeaderTabsStyle = styled('div')({
    marginLeft: 'auto',
    textTransform: 'none',
    fontSize: '1 rem'

})

const HeaderDownloadButtonStyle = styled('div')({
    borderRadius: '20px',
    marginLeft: '20px',
    fontWeight: '900'
    
})

const Header = () => {
  
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
          >
            Material Kit 2
          </Typography>
          
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
          >
            Material Kit 2
          </Typography>
          <HeaderTabsStyle>
          <Tabs>
              <Tab label='Pages'/>
              <Tab label='Sections'/>
              <Tab label='Docs'/>       
          </Tabs>
          </HeaderTabsStyle>
          <Button variant = 'contained' >
            Github
          </Button>
          <HeaderDownloadButtonStyle>
          <Button variant = 'contained' color = 'secondary'>
            Free Download
          </Button>
          </HeaderDownloadButtonStyle>
          
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Header;
