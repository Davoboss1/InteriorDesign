//React imports
import { useState } from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
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
import clientlogos from "./assets/client-logos.png";
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

//local imports
import { Article, Attribute, Project, Review, Statistic } from "./types";
import { ArticlesView, AttributesView, JoinDisplay, ReviewView, StatisticsView } from './Global';
import { ServicesPage } from './Services';
import { ProjectsPage, ProjectsView } from './Projects';
import { PricingPage } from './Pricing';

const NavBar = () => {

  const pages = [{ url: '/', name: 'Home' }, { url: '/pricing', name: 'Pricing' }, { url: '/services', name: 'Services' }, { url: '/projects', name: 'Projects' }, { url: '/', name: 'Blog' }, { url: '/', name: 'Contact' }];

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
        <Toolbar disableGutters sx={{ ml: { xs: "5%", sm: "15%" }, mr: { xs: "5%", sm: "15%" } }}>
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
              <Link to={page.url}>
                <Button
                  key={page.name}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page.name}
                </Button>
              </Link>

            ))}
            <SearchIcon className={"my-auto ms-3"} />
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
                <Link to={page.url}>
                  <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center" >{page.name}</Typography>
                  </MenuItem>
                </Link>

              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}


const Homepage = () => {

  const attributes: Attribute[] = [
    {
      attribute: "Project Plan",
      description: "Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit."
    },
    {
      attribute: "Interior Work",
      description: "Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit."
    },
    {
      attribute: "Realization",
      description: "Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit."
    }
  ];

  const reviews: Review[] = [
    {
      image_src: person1,
      name: "Natasha SMith",
      location: "New York, USA",
      description: "Ex commodo pariatur duis consectetur commodo ipsum aute ea tempor est dolor eiusmod nulla sint."
    },
    {
      image_src: person2,
      name: "Raymond Galario",
      location: "Sydney, Australia",
      description: "Ex commodo pariatur duis consectetur commodo ipsum aute ea tempor est dolor eiusmod nulla sint."
    },
    {
      image_src: person3,
      name: "Benny Roll",
      location: "Perth, Australia",
      description: "Ex commodo pariatur duis consectetur commodo ipsum aute ea tempor est dolor eiusmod nulla sint."
    },
  ];

  const projects: Project[] = [
    {
      image_src: photo1,
      name: "Modern Kitchen",
      type: "Decor / Architecture"
    },
    {
      image_src: photo2,
      name: "Modern Kitchen",
      type: "Decor / Architecture"
    },
    {
      image_src: photo3,
      name: "Modern Kitchen",
      type: "Decor / Architecture"
    },
    {
      image_src: photo4,
      name: "Modern Kitchen",
      type: "Decor / Architecture"
    },
  ]

  const statistics: Statistic[] = [
    {
      number: 12,
      text: "Years of Experience"
    },
    {
      number: 85,
      text: "Successful Projects"
    },
    {
      number: 15,
      text: "Active Projects"
    },
    {
      number: 95,
      text: "Happy Customers"
    },
  ]

  const articles: Article[] = [
    {
      image_src: photo5,
      name: "Let's Get Solution For Building Construction Work.",
      type: "Kitchen Design",
      date: "25th, December, 2022"
    },
    {
      image_src: photo6,
      name: "Let's Get Solution For Building Construction Work.",
      type: "Kitchen Design",
      date: "27th, December, 2022"
    },
    {
      image_src: photo7,
      name: "Best For Any Office & Buisness Interior solution.",
      type: "Interior Design",
      date: "1st, December, 2022"
    },
  ];


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

      <AttributesView attributes={attributes} />

      {/* Next Section  */}
      <Grid container spacing={{ md: 5 }} >
        <Grid item xs={12} lg={5} className={"align-self-center"}>
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

          <Button variant="contained" className="d-flex bg-primary-2 px-4 py-3 mt-4 mx-auto my-3 mx-xl-0" sx={{ borderRadius: 3 }} endIcon={<ArrowForwardIcon className='primary-1' />} > Get Free Estimate</Button>

        </Grid>

        <Grid item xs={12} lg={7} >
          <img className='double-curve-img mx-auto' src={photo} alt={"Passage"} />
        </Grid>

      </Grid>

      <ReviewView reviews={reviews} />

      <Grid className="mt-3" container >
        <Grid item xs={12} className={"text-center "}>
          <img src={clientlogos} alt={"Clients logos"} className={"w-100"} />
        </Grid>
      </Grid>
      <ProjectsView projects={projects} />
      <StatisticsView statistics={statistics} />
      <ArticlesView articles={articles} />
      <JoinDisplay />
    </div>
  );
}

const Footer = () => {

  return (
    <footer>
      <Grid container spacing={{ md: 3 }}>
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
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
