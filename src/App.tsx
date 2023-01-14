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
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import LocalPhoneOutlinedIcon from '@mui/icons-material/LocalPhoneOutlined';

//Css imports
import "./css/bootstrap-utilities.min.css"
import "./css/App.css"

//Images import
import logo from "./assets/Logo.svg";
import photo from "./assets/photo.jpg";
import photo1 from "./assets/Photo.png";
import photo2 from "./assets/Photo1.png";
import photo3 from "./assets/Photo2.png";
import photo4 from "./assets/Photo3.png";
import photo5 from "./assets/Photo4.png";
import photo6 from "./assets/Photo5.png";
import photo7 from "./assets/Photo6.png";
import person1 from "./assets/person1.jpg";
import person2 from "./assets/person2.jpg";
import person3 from "./assets/person3.jpg";

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

      {/* Next Section  */}
      <Grid container p={"5% 15%"} spacing={{ md: 5 }}>
        <Grid item xs={12} md={4} className={"text-center"}>
          <h6>
            Project Plan
          </h6>
          <p>
            Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit.
          </p>
          <Button variant="text" className="primary-2" endIcon={<ArrowForwardIcon className='primary-1' />} >Read More</Button>
        </Grid>

        <Grid item xs={12} md={4} className={"text-center"}>
          <h6>
            Interior Work
          </h6>
          <p>
            Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit.
          </p>
          <Button variant="text" className="primary-2" endIcon={<ArrowForwardIcon className='primary-1' />} >Read More</Button>
        </Grid>

        <Grid item xs={12} md={4} className={"text-center"}>
          <h6>
            Realization
          </h6>
          <p>
            Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit.
          </p>
          <Button variant="text" className="primary-2" endIcon={<ArrowForwardIcon className='primary-1' />} >Read More</Button>
        </Grid>

      </Grid>

      {/* Next Section  */}
      <Grid container p={{ xs: "5%", sm: "10% 15%" }} >
        <Grid container item xs={12} spacing={{ sm: 2 }} className={"text-center bg-primary-3 px-2 ps-md-4 pe-md-5 py-5"} sx={{ borderRadius: 10 }}>
          <h2 className="w-100 mt-0">What People Think About Us</h2>
          <Grid item xs={12} md={4} >
            <div className="d-flex flex-wrap text-start bg-light br-15 p-3">
              <img src={person1} alt={"Person 1"} height="50" className="rounded-circle" />
              <div className='ms-3 ' >
                <h6 className="my-0">
                  Natasha Mith
                </h6>
                <span className="d-block" >Sydney, USA</span>
              </div>
              <p>Ex commodo pariatur duis consectetur commodo ipsum aute ea tempor est dolor eiusmod nulla sint.</p>

            </div>

          </Grid>
          <Grid item xs={12} md={4} >
            <div className="d-flex flex-wrap text-start bg-light br-15 p-3">
              <img src={person2} alt={"Person 2"} height="50" className="rounded-circle" />
              <div className='ms-3 ' >
                <h6 className="my-0">
                  Raymond Galario
                </h6>
                <span className="d-block" >Sydney, Australia</span>
              </div>

              <p>Ex commodo pariatur duis consectetur commodo ipsum aute ea tempor est dolor eiusmod nulla sint.</p>

            </div>

          </Grid>
          <Grid item xs={12} md={4} >
            <div className="d-flex flex-wrap text-start bg-light br-15 p-3">
              <img src={person2} alt={"Person 2"} height="50" className="rounded-circle" />
              <div className='ms-3 ' >
                <h6 className="my-0">
                  Benny Roll
                </h6>
                <span className="d-block" >Sydney, New York</span>
              </div>

              <p>Ex commodo pariatur duis consectetur commodo ipsum aute ea tempor est dolor eiusmod nulla sint.</p>

            </div>

          </Grid>
        </Grid>
      </Grid>

      {/* Next Section  */}
      <Grid container p={"5% 15%"} spacing={{ md: 5 }} >
        <Grid item xs={12} lg={5}>
          <h2 className={"text-center text-left-lg"} style={{ fontSize: "40px" }}>
            We Create The Art Of Stylish Living Stylishly
          </h2>
          <p className={"text-center text-left-lg"}>
            It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout the points of using that it  has a more or less normal.
          </p>
          <Box className="mt-4 d-flex align-items-center justify-content-center justify-content-start-lg">
            <LocalPhoneOutlinedIcon className="bg-primary-3 primary-1 p-3 rounded-circle" sx={{ fontSize: 40 }} />
            <div className='d-flex flex-column ms-3'>
              <b>0123456789</b>
              <span>Call us Anytime</span>
            </div>
          </Box>

          <Button variant="contained" className="d-flex bg-primary-2 px-4 py-3 mt-4 mx-auto mx-xl-0" sx={{ borderRadius: 3 }} endIcon={<ArrowForwardIcon className='primary-1' />} > Get Free Estimate</Button>

        </Grid>

        {/* Next Section  */}
        <Grid item xs={12} lg={7} p={3} >
          <img className='double-curve-img mx-auto' src={photo} alt={"Passage"} />
        </Grid>

      </Grid>

      {/* Next Section  */}
      <Grid className={"projects-view"} container p={"5% 15%"} spacing={{ md: 3 }} >
        <Grid className="p-0" item xs={12}>
          <h2 className={"text-center mb-0"}>Follow Our Projects</h2>
          <p className={"mx-auto text-center mt-2"} style={{ maxWidth: "550px" }}>
            It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout the points.
          </p>
        </Grid>

        <Grid className={"d-flex flex-column p-1"} item xs={12} sm={6} p={5}>
          <div className=' image-container mx-md-auto'>
            <img className='curve-top-right' src={photo1} alt={"Photo 1"} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Modern Kitchen</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
        </Grid>

        <Grid className={"d-flex flex-column p-1"} item xs={12} sm={6} p={5}>
          <div className=' image-container mx-md-auto'>
            <img className='curve-top-left' src={photo2} alt={"Photo 2"} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Modern Kitchen</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
        </Grid>

        <Grid className={"d-flex flex-column p-1"} item xs={12} sm={6} p={5}>
          <div className=' image-container mx-md-auto'>
            <img className='curve-bottom-right' src={photo3} alt={"Photo 3"} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Modern Kitchen</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
        </Grid>

        <Grid className={"d-flex flex-column p-1"} item xs={12} sm={6} p={5}>
          <div className=' image-container mx-md-auto'>
            <img className='curve-bottom-left' src={photo4} alt={"Photo 4"} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Modern Kitchen</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
        </Grid>
      </Grid>

      {/* Next Section  */}
      <Grid className='bg-primary-3 stats-view' container p={"7% 20%"} >
        <Grid item xs={12} md={3} className={"text-center"}>
          <h1 className='primary-1 my-0'>12</h1>
          <p className='mb-lg-0'>Years of Experience</p>
        </Grid>
        <Grid item xs={12} md={3} className={"text-center"}>
          <h1 className='primary-1 my-0'>85</h1>
          <p className='mb-lg-0'>Successful Projects</p>
        </Grid>
        <Grid item xs={12} md={3} className={"text-center"}>
          <h1 className='primary-1 my-0'>15</h1>
          <p className='mb-lg-0'>Active Projects</p>
        </Grid>
        <Grid item xs={12} md={3} className={"text-center"}>
          <h1 className='primary-1 my-0'>95</h1>
          <p className='mb-lg-0'>Happy Customers</p>
        </Grid>
      </Grid>

      {/* Next Section  */}
      <Grid className="article-view" container p={"5% 15%"} spacing={{ md: 5 }}>
        <Grid item xs={12} className={"text-center"}>
          <h2 className="mb-0">Articles and News</h2>
          <p className='mx-auto' style={{ maxWidth: "600px" }}>
            Eiusmod velit cupidatat culpa adipisicing do id amet nisi Lorem cupidatat id pariatur. Esse laborum esse voluptate cillum in ullamco amet et ex nostrud voluptat.
          </p>
        </Grid>

        <Grid item xs={12} md={6} lg={4} className={"article-item"}>
          <div>
            <div className='image-view'>
              <img src={photo5} alt={"Photo 5"} />
              <span>Kitchen Design</span>
            </div>
            <h6 className='my-0'>Let's Get Solution For Building Construction Work.</h6>
            <div className='d-flex align-items-center mt-3 mb-4'>
              <p className='my-0'>Decomber 2022</p>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>

        </Grid>
        <Grid item xs={12} md={6} lg={4} className={"article-item bg-primary-3 border-0"}>
          <div>
            <div className='image-view'>
              <img src={photo5} alt={"Photo 5"} />
              <span>Kitchen Design</span>
            </div>
            <h6 className='my-0'>Let's Get Solution For Building Construction Work.</h6>
            <div className='d-flex align-items-center mt-3 mb-4'>
              <p className='my-0'>Decomber 2022</p>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>

        </Grid>
        <Grid item xs={12} md={6} lg={4} className={"article-item"}>
          <div>
            <div className='image-view'>
              <img src={photo5} alt={"Photo 5"} />
              <span>Kitchen Design</span>
            </div>
            <h6 className='my-0'>Let's Get Solution For Building Construction Work.</h6>
            <div className='d-flex align-items-center mt-3 mb-4'>
              <p className='my-0'>Decomber 2022</p>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>

        </Grid>
      </Grid>

      {/* Next Section  */}
      <Grid container p={"5% 15%"}>
        <Grid item xs={12} className={"text-center bg-primary-2 text-light br-25 py-5"}>
          <h2 className='mb-0'>Wanna join the Interno?</h2>
          <p>Consequat aute nostrud ipsum elit irure sit culpa aliqua exercitation.</p>
          <Button variant="contained" className="d-flex bg-primary-1 px-4 py-3  mx-auto" sx={{ borderRadius: 4 }} endIcon={<ArrowForwardIcon className='primary-2' />} > Contact Us</Button>

        </Grid>

      </Grid>

    </div>
  );
}

const Footer = () => {

  return (
    <footer>
      <Grid container p={"5% 15%"} spacing={{ md: 3 }}>
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
