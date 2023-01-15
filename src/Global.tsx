import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { Article, Attribute, Review, Statistic } from './types';


//Reviews display component
//Arguments = Review[]
const ReviewView = ({ reviews }: { reviews: Review[] }) => (
    <Grid container >
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

//Statistics display component
//Arguments = Statistic[]
const StatisticsView = ({ statistics }: { statistics: Statistic[] }) => (
    <Grid className='bg-primary-3 stats-view' container >
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
    <Grid className="article-view" container spacing={{ md: 5 }}>
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
                            <ArrowForwardIosIcon />
                        </IconButton>
                    </div>
                </div>

            </Grid>
        ))}
    </Grid>
)

const JoinDisplay = () => (
    <Grid container>
        <Grid item xs={12} className={"text-center bg-primary-2 text-light br-25 py-5 px-2"}>
            <h2 className='mb-0'>Wanna join the Interno?</h2>
            <p>Consequat aute nostrud ipsum elit irure sit culpa aliqua exercitation.</p>
            <Button variant="contained" className="d-flex bg-primary-1 px-4 py-3  mx-auto" sx={{ borderRadius: 4 }} endIcon={<ArrowForwardIcon className='primary-2' />} > Contact Us</Button>
        </Grid>
    </Grid>
)

const TopDisplay = ({ name, other, image_src }: { name: string, other: string, image_src: string }) => (
    <div className={"top-display"}>
        <img src={image_src} />
        <div className='title-display'>
            <h2 className='mb-0 mt-4'>{name}</h2>
            <span>{other}</span>
        </div>
    </div>
);

//Attributes display component
//Arguments = Attributes[]
const AttributesView = ({ attributes }: { attributes: Attribute[] }) => (
    <Grid container spacing={{ md: 5 }}>
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

export { JoinDisplay, TopDisplay, AttributesView, ReviewView, StatisticsView, ArticlesView }