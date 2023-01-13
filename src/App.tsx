//React imports
import { useState } from 'react';

// Material ui imports
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';

import SearchIcon from '@mui/icons-material/SearchOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';


//Css imports
import "./css/bootstrap-utilities.min.css"
import "./css/App.css"

//Images import
import logo from "./assets/Logo.svg";

const NavBar = () => {

  const pages = ['Home', 'Pages', 'Services', 'Project', 'Blog', 'Contact'];

  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };


  return (
    <AppBar position="static" className={"main-navbar"} >
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ ml: "15%", mr: "15%" }}>
          <img src={logo} alt={"Inferno Logo"} height="24" width="24" />
          <Typography
            variant="h6"
            component="a"
            href="/"
            sx={{
              mr: 2,
              ml: 2,
              textDecoration: 'none',
              fontFamily: "'DM Serif Display', serif"
            }}
          >
            Interno
          </Typography>

          <Box className='d-none ms-auto d-md-flex'>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
            <SearchIcon className={"my-auto"} />
          </Box>

          {/* Small screen display */}
          <Box className={"d-flex justify-content-end d-md-none w-100"}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center" >{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

const HomePage = () => {
  return (
    <div>

      <div className='top-view'>
        <div className='my-auto'>
          <h1>
            Let Your Home Be Unique
          </h1>
          <p>
            Duis eiusmod officia eu officia minim in aliquip ea deserunt non velit veniam ipsum mollit.
          </p>
        </div>
      </div>

      <div className='plan-display'>

      <Grid container p={"5% 15%"} spacing={3}>
        <Grid item xs={12} md={4} className={"text-center"}>
          <h6>
            Project Plan
          </h6>

          <p>
            Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit.
          </p>

          <Button variant="text">Read More</Button>
        </Grid>

        <Grid item xs={6} md={4}>
          
        </Grid>

        <Grid item xs={6} md={4}>
          
        </Grid>

      </Grid>
      </div>

    </div>
  );
}

const Footer = () => {

  return (
    <footer>
      <Grid container p={"5% 15%"} spacing={3}>
        <Grid item xs={12} md={5}>
          <div className='d-flex align-items-center'>
            <img src={logo} alt={"Inferno Logo"} height="24" width="24" />
            <Typography
              className='primary-2'
              variant="h4"
              component="a"
              href="/"
              sx={{
                mr: 2,
                ml: 2,
                textDecoration: 'none',
                fontFamily: "'DM Serif Display', serif"
              }}
            >
              Interno
            </Typography>
          </div>
          <p>Non velit cillum ut duis magna reprehenderit amet reprehenderit magna sunt duis cupidatat eu et.</p>
          <div className="d-flex justify-content-around w-50">
            <FacebookIcon />
            <TwitterIcon />
            <LinkedInIcon />
            <InstagramIcon />

          </div>

        </Grid>

        <Grid item xs={6} md={2}>
          <div>
            <h6>
              Pages
            </h6>

            <a href="/">
              About Us
            </a>

            <a className={"mt-4"} href="/">
              Our Projects
            </a>

            <a className={"mt-4"} href="/">
              Our Team
            </a>

            <a className={"mt-4"} href="/">
              Contact Us
            </a>

            <a className={"mt-4"} href="/">
              Services
            </a>
          </div>
        </Grid>

        <Grid item xs={6} md={2}>
          <div>
            <h6>
              Services
            </h6>

            <a href="/">
              Kitchen
            </a>

            <a className={"mt-4"} href="/">
              Living Area
            </a>

            <a className={"mt-4"} href="/">
              Bathroom
            </a>

            <a className={"mt-4"} href="/">
              Dining Hall
            </a>

            <a className={"mt-4"} href="/">
              Bedroom
            </a>
          </div>
        </Grid>

        <Grid item xs={12} md={3}>
          <div>
            <h6>
              Contact
            </h6>

            <p>
              55 East Birchwood Ave. <br />
              Brookyln, New York 11201
            </p>

            <p>
              Contact@Interno.com
            </p>

            <p>
              (123) 456 - 7890
            </p>

          </div>
        </Grid>

      </Grid>
    </footer>
  );
}

function App() {

  return (
    <>
      <NavBar />
      <HomePage />
      <Footer />
    </>
  )
}

export default App;
