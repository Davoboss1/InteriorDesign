
import Grid from '@mui/material/Grid';


import photo9 from "./assets/Photo8.jpg";
import service_logo1 from "./assets/Service-Icon-1.png";
import service_logo2 from "./assets/Service-Icon-2.png";
import service_logo3 from "./assets/Service-Icon-3.png";
import service_logo4 from "./assets/Service-Icon-4.png";
import service_photo1 from "./assets/Service-Photo-1.jpg";
import service_photo2 from "./assets/Service-Photo-2.jpg";
import service_photo3 from "./assets/Service-Photo-3.jpg";
import service_photo4 from "./assets/Service-Photo-4.jpg";

import { AttributesView, JoinDisplay, TopDisplay } from './Global';
import { Attribute } from './types';

const ServicesPage = () => {

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
      },
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
      },
    ];
  
  
    const services: {
      image_src: string,
      icon_src: string,
      name: string,
      description: string
    }[] = [{
      image_src: service_photo1,
      icon_src: service_logo1,
      name: "Concepts And Details",
      description: "Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit."
    },
    {
      image_src: service_photo2,
      icon_src: service_logo2,
      name: "Ideas for Work",
      description: "Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit."
    },
    {
      image_src: service_photo3,
      icon_src: service_logo3,
      name: "Design",
      description: "Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit."
    },
    {
      image_src: service_photo4,
      icon_src: service_logo4,
      name: "Perfection",
      description: "Qui do cupidatat tempor irure velit aute nulla officia nostrud elit incididunt qui culpa velit."
    }
      ];
  
    return (
      <>
        <TopDisplay name='Services' other="Home / Services" image_src={photo9} />
  
        <AttributesView attributes={attributes} />
        <Grid container >
          <Grid className="services-view px-0 pe-3" container spacing={{ xs: 2, md: 5 }}>
            <Grid item xs={12} className={"text-center"}>
              <h2 className="mb-0">How we work</h2>
              <p className='mx-auto' style={{ maxWidth: "600px" }}>
                Reprehenderit et aliqua consectetur sit mollit pariatur consectetur qui veniam ut quis velit incididunt.
              </p>
            </Grid>
  
            {services.map((service, index) => (
              <>
                {/* Render the other way if index is even */}
                {index % 2 === 0 ?
                  (<>
                    <Grid item xs={12} md={6}>
                      <img className={"services-curve-img"} src={service.image_src} alt="Image" />
                    </Grid>
  
                    <Grid item xs={12} md={6} className={"align-self-center"}>
                      <div className='mx-auto' style={{ maxWidth: "350px" }} >
                        <div className={"d-flex align-items-center"}>
                          <img src={service.icon_src} height="80" alt="An icon" />
                          <h1 className={"ms-auto text-light my-0"} style={{ fontSize: "80px" }}>0{index + 1}</h1>
                        </div>
                        <h4 className="mb-0">{service.name}</h4>
                        <p>{service.description}</p>
                      </div>
  
                    </Grid>
                  </>)
                  :
                  (<>
                    <Grid item xs={12} md={6} className={"align-self-center"}>
                      <div className='mx-auto' style={{ maxWidth: "350px" }} >
                        <div className={"d-flex align-items-center"}>
                          <img src={service.icon_src} height="80" alt="An icon" />
                          <h1 className={"ms-auto text-light my-0"} style={{ fontSize: "80px" }}>0{index + 1}</h1>
                        </div>
                        <h4 className="mb-0">{service.name}</h4>
                        <p>{service.description}</p>
                      </div>
  
                    </Grid>
                    <Grid item xs={12} md={6}>
                      <img className={"services-curve-img"} src={service.image_src} alt="Image" />
                    </Grid>
                  </>)
  
                }
  
              </>
            ))}
          </Grid>
  
  
        </Grid>
        <JoinDisplay />
      </>
    );
  }
  
export {ServicesPage};