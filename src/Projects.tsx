import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Fade from "react-reveal/Fade";

//Images import
import photo1 from "./assets/projects-1.png";
import photo2 from "./assets/projects-2.png";
import photo3 from "./assets/projects-3.png";
import photo4 from "./assets/projects-4.png";
import photo5 from "./assets/projects-5.png";
import photo6 from "./assets/projects-6.png";
import photo7 from "./assets/projects-7.png";
import photo8 from "./assets/projects-8.png";
import top_img from "./assets/photo7.jpg";
import { Project } from './types';
import { TopDisplay } from './Global';

const ProjectsPage = () => {

  return (
    <>
      <TopDisplay name='Our Projects' other="Home / Projects" image_src={top_img} />

      <Grid container columnSpacing={2} className="mb-5" >
        <div className="d-flex justify-content-center flex-wrap border-primary-1 br-15 mx-auto my-5">
          <Button variant="text" className="primary-2 p-3 px-5" > Bathroom</Button>
          <Button variant="contained" className="bg-primary-1 br-15 text-light p-3 px-5" > Bed Room</Button>
          <Button variant="text" className="primary-2 p-3 px-5" > Kitchen</Button>
          <Button variant="text" className="primary-2 p-3 px-5" > Living Area</Button>

        </div>
        <Grid item xs={12} md={6} className={"text-center project-display-large"}>
          <div className={'ms-auto'}>
            <img src={photo1} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Minimal Bedroom</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} md={6} className={"text-center project-display-small project-display-push-small-first"}>
          <div className={'me-auto'} >
            <img src={photo2} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Minimal Bedroom</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} md={6} className={"text-center project-display-small project-display-push-large"}>
          <div className={'ms-auto'}>
            <img src={photo3} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Minimal Bedroom</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} md={6} className={"text-center project-display-large project-display-push-small"}>
          <div className={'me-auto'} >
            <img src={photo4} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Minimal Bedroom</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} md={6} className={"text-center project-display-large project-display-push-small"}>
          <div className={'ms-auto'}>
            <img src={photo5} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Minimal Bedroom</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} md={6} className={"text-center project-display-small  project-display-push-small"}>
          <div className={'me-auto'} >
            <img src={photo6} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Minimal Bedroom</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} md={6} className={"text-center project-display-small project-display-push-large"}>
          <div className={'ms-auto'}>
            <img src={photo7} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Minimal Bedroom</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Grid>


        <Grid item xs={12} md={6} className={"text-center project-display-small project-display-push-small"}>
          <div className={'me-auto'} >
            <img src={photo8} />
            <div className='d-flex align-items-center mt-3 mb-4'>
              <div>
                <h6 className="my-0">Minimal Bedroom</h6>
                <p className='my-0'>Decor / Architecture</p>
              </div>
              <IconButton className={"bg-primary-3 primary-2 ms-auto"} >
                <ArrowForwardIosIcon />
              </IconButton>
            </div>
          </div>
        </Grid>

        <div className='d-flex mx-auto' style={{ marginTop: "100px" }}>
          <Button variant="text" size="small" className={"bg-primary-3 border-0 pagination-btn"} sx={{ p: "21px" }}>
            01
          </Button>

          <Button variant="text" size="small" className={"bg-light pagination-btn"} sx={{ p: "21px" }}>
            02
          </Button>

          <Button variant="text" size="small" className={"bg-light  pagination-btn"} sx={{ p: "21px" }}>
            03
          </Button>

          <IconButton className={"bg-light primary-2 border-primary-1 rounded-circle  mx-2"} >
            <ArrowForwardIosIcon />
          </IconButton>

        </div>
      </Grid>


    </>
  );
}

//Reviews display component
//Arguments = Project[]
const ProjectsView = ({ projects }: { projects: Project[] }) => {

  return (
    <Fade duration={1500} cascade>
      <Grid className={"projects-view"} container spacing={{ md: 3 }} >
        <Grid className="p-0" item xs={12}>
          <h2 className={"text-center mb-0"}>Follow Our Projects</h2>
          <p className={"mx-auto text-center mt-2"} style={{ maxWidth: "550px" }}>
            It is a long established fact that a reader will be distracted by the of readable content of a page when looking at its layout the points.
          </p>
        </Grid>

        {projects.map((project, index) => (
          <Grid className={"d-flex flex-column p-1"} item xs={12} sm={6}>
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
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </div>
          </Grid>
        ))}


      </Grid>
    </Fade>

  );
}

export { ProjectsPage, ProjectsView }