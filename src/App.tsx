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

//local imports
import { Article, Attribute, Price, Project, Review, Statistic } from "./types";

const NavBar = () => {

  const pages = [{ url: '/', name: 'Home' }, { url: '/pricing', name: 'Pricing' }, { url: '/', name: 'Services' }, { url: '/', name: 'Project' }, { url: '/', name: 'Blog' }, { url: '/', name: 'Contact' }];

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

//Attributes display component
//Arguments = Attributes[]
const AttributesView = ({ attributes }: { attributes: Attribute[] }) => (
  <Grid container p={"5% 15%"} spacing={{ md: 5 }}>
    {attributes.map((attribute) =>
      <Grid item xs={12} md={4} className={"text-center"}>
        <h6>
          {attribute.attribute}
        </h6>
        <p>
          {attribute.description}
        </p>
        <Button variant="text" className="primary-2" endIcon={<ArrowForwardIcon className='primary-1' />} >Read More</Button>
      </Grid>
    )}
  </Grid>
)

//Reviews display component
//Arguments = Review[]
const ReviewView = ({ reviews }: { reviews: Review[] }) => (
  <Grid container p={{ xs: "5%", sm: "10% 15%" }} >
    <Grid container item xs={12} spacing={{ sm: 2 }} className={"text-center bg-primary-3 px-2 ps-md-4 pe-md-5 py-5"} sx={{ borderRadius: 10 }}>
      <h2 className="w-100 mt-0">What People Think About Us</h2>
      {reviews.map((review) => (
        <Grid className="my-2" item xs={12} md={4} >
          <div className="d-flex flex-wrap text-start bg-light br-15 p-3">
            <img src={review.image_src} alt={"Person 1"} height="50" className="rounded-circle" />
            <div className='ms-3 ' >
              <h6 className="my-0">
                {review.name}
              </h6>
              <span className="d-block" >{review.location}</span>
            </div>
            <p>
              {review.description}
            </p>

          </div>

        </Grid>
      ))}

    </Grid>
  </Grid>
);

//Reviews display component
//Arguments = Project[]
const ProjectsView = ({ projects }: { projects: Project[] }) => {

  return (
    <Grid className={"projects-view"} container p={"5% 15%"} spacing={{ md: 3 }} >
      <Grid className="p-0" item xs={12}>
        <h2 className={"text-center mb-0"}>Follow Our Projects</h2>
        <p className={"mx-auto text-center mt-2"} style={{ maxWidth: "550px" }}>
          It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout the points.
        </p>
      </Grid>

      {projects.map((project, index) => (
        <Grid className={"d-flex flex-column p-1"} item xs={12} sm={6} p={5}>
          <div className=' image-container mx-md-auto'>
            {/* Apply different classes based on the sequence  */}
            <img className={
              {
                '0': "curve-top-right",
                '1': "curve-top-left",
                '2': "curve-bottom-right",
                '3': "curve-bottom-left"
              }[index % 4]
            } src={project.image_src} alt={"Photo 1"} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">{project.name}</h6>
                <p className='my-0'>{project.type}</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIcon />
              </IconButton>
            </div>
          </div>
        </Grid>
      ))}


    </Grid>
  );
}

//Statistics display component
//Arguments = Statistic[]
const StatisticsView = ({ statistics }: { statistics: Statistic[] }) => (
  <Grid className='bg-primary-3 stats-view' container p={"7% 20%"} >
    {statistics.map(statistic => (
      <Grid item xs={12} md={3} className={"text-center"}>
        <h1 className='primary-1 my-0'>{statistic.number}</h1>
        <p className='mb-lg-0'>{statistic.text}</p>
      </Grid>
    ))}

  </Grid>
)
//Article Display Component
//Arguments = Statistic[]
const ArticlesView = ({ articles }: { articles: Article[] }) => (
  <Grid className="article-view" container p={"5% 15%"} spacing={{ md: 5 }}>
    <Grid item xs={12} className={"text-center"}>
      <h2 className="mb-0">Articles and News</h2>
      <p className='mx-auto' style={{ maxWidth: "600px" }}>
        Eiusmod velit cupidatat culpa adipisicing do id amet nisi Lorem cupidatat id pariatur. Esse laborum esse voluptate cillum in ullamco amet et ex nostrud voluptat.
      </p>
    </Grid>

    {articles.map((article, index) => (
      <Grid item xs={12} md={6} lg={4} className={`article-item my-2 ${(index % 3 == 1) && 'bg-primary-3 border-0'}`}>
        <div>
          <div className='image-view'>
            <img src={article.image_src} alt={"Photo 5"} />
            <span>{article.type}</span>
          </div>
          <h6 className='my-0'>{article.name}.</h6>
          <div className='d-flex align-items-center mt-3 mb-4'>
            <p className='my-0'>{article.date}</p>
            <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
              <ArrowForwardIcon />
            </IconButton>
          </div>
        </div>

      </Grid>
    ))}
  </Grid>
)

const JoinDisplay = () => (
  <Grid container p={"5% 15%"}>
    <Grid item xs={12} className={"text-center bg-primary-2 text-light br-25 py-5"}>
      <h2 className='mb-0'>Wanna join the Interno?</h2>
      <p>Consequat aute nostrud ipsum elit irure sit culpa aliqua exercitation.</p>
      <Button variant="contained" className="d-flex bg-primary-1 px-4 py-3  mx-auto" sx={{ borderRadius: 4 }} endIcon={<ArrowForwardIcon className='primary-2' />} > Contact Us</Button>
    </Grid>
  </Grid>
)

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

        <Grid item xs={12} lg={7} p={3} >
          <img className='double-curve-img mx-auto' src={photo} alt={"Passage"} />
        </Grid>

      </Grid>

      <ReviewView reviews={reviews} />
      <ProjectsView projects={projects} />
      <StatisticsView statistics={statistics} />
      <ArticlesView articles={articles} />
      <JoinDisplay />
    </div>
  );
}

const PricingPage = () => {
  const prices : Price[] = [
    {
      name: "Design Advices",
      price: 29,
      features: ["General Living Space Advises", "Renovation Advices", "Interior Design Advices","Furniture Reorganisation","Up to 5 hours meeting"]
    },
    {
      name: "Complete Interior",
      price: 39,
      features: ["Complete Home Redesign", "Interior and Exterior works", "Modular Interior Planning","Kitchen Design","Garages Organisation"]
    },
    {
      name: "Furniture Design",
      price: 59,
      features: ["Furniture for Living Room", "Furniture Refurbishment",  "Interior Design Advices","Sofas And Armchairs", "Tables and Chairs","Kitchens"]
    }
  ];
  return (
    <Grid container p={"5% 15%"} spacing={{ md: 5 }}>
      {prices.map((price) =>
        <Grid item xs={12} md={4} className={"text-center"}>

        </Grid>
      )}
    </Grid>
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
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/pricing" element={<PricingPage />} />
      </Routes>
      <Footer />
    </Router>
  )
}

export default App;
