import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { TopDisplay } from './Global';
import { Price } from './types';
import photo8 from "./assets/photo7.jpg";
import Bounce from "react-reveal/Bounce";


const PricingPage = () => {

  const prices: Price[] = [
    {
      name: "Design Advices",
      price: 29,
      features: ["General Living Space Advises", "Renovation Advices", "Interior Design Advices", "Furniture Reorganisation", "Up to 5 hours meeting"]
    },
    {
      name: "Complete Interior",
      price: 39,
      features: ["Complete Home Redesign", "Interior and Exterior works", "Modular Interior Planning", "Kitchen Design", "Garages Organisation"]
    },
    {
      name: "Furniture Design",
      price: 59,
      features: ["Furniture for Living Room", "Furniture Refurbishment", "Sofas And Armchairs", "Tables and Chairs", "Kitchens"]
    }
  ];

  return (
    <>
      <TopDisplay name='Pricing & Plan' other="Home / Pricing" image_src={photo8} />
      <Bounce duration={1000} >
        <Grid container spacing={{ md: 5 }}>

          {prices.map((price, index) =>
            <Grid item xs={12} sm={6} lg={4} className={"text-center "}>
              <div className='bg-primary-3 br-15 py-4 mx-1 mt-2 shadow'>
                <h4 className='my-0'>{price.name}</h4>
                <h6 className="my-0">$<span className={(index % 3 == 1) ? 'primary-1' : ''} style={{ fontSize: "60px" }}>{price.price}</span></h6>
                <h6 className='my-0'>/Month</h6>
                {/* Pick different styles based on sequence */}
                <div className={`${(index % 3 == 1) ? 'border-top-primary-2' : 'border-top-primary-1'} position-relative mt-4 pt-3`} >
                  {(index % 3 == 1) && <div className='pricing-badge'>Most Popular Plans</div>}
                  {price.features.map((feature) => (
                    <p>
                      {feature}
                    </p>
                  ))}
                </div>
                {
                  (index % 3 == 1) ?
                    <Button variant="contained" className="bg-primary-2 py-3 px-4 mx-auto shadow" sx={{ borderRadius: 3 }} endIcon={<ArrowForwardIcon className='primary-1' />} > Get Started </Button>
                    :
                    <Button variant="contained" className="bg-primary-1 py-3 px-4 mx-auto" sx={{ borderRadius: 3 }} endIcon={<ArrowForwardIcon className='primary-2' />} > Get Started </Button>
                }
              </div>
            </Grid>
          )}

        </Grid>
      </Bounce>

    </>
  );
}

export { PricingPage }