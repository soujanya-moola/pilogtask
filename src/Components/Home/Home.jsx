import { Article } from '@mui/icons-material'
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Button, Card, CardActions, CardContent, CardMedia, Container, Grid, Rating, Typography } from '@mui/material'
import { Carousel } from 'react-bootstrap';
import ImageSlides from './ImageSlides';
import SlideImages from './SlideImages';
import Footer from './Footer';



const TextSlider = ({ texts, interval = 2000 }) => {
    const [currentTextIndex, setCurrentTextIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, interval);

        return () => clearInterval(intervalId); // Cleanup the interval on component unmount

    }, [texts, interval]);

    return <div>{texts[currentTextIndex]}</div>;
};

const Home = () => {
    const textArray = [

        "Thousands of our users are the heroes, every step in their transformation",
        "Explore our Customer's Experience with our Tools",
        "We believe that everyone has a story to tell and we want to help you share it",

    ];

    return (
        <div className='main-home'>

            <div className='slider-page'>
                <SlideImages/>
            </div>
            <div className='companies'>
               
                <img className='company-img' src={require('./sipchem.jpg')}/>
                <img className='company-img' src={require('./orpic.png')}/>
                <img className='company-img' src={require('./technip.jpg')}/>
                <img className='company-img' src={require('./yansab.png')}/>
                <img  className='company-img' src={require('./orpic.png')}/>
            </div>
            <div className='works-div'>
               
                    <div className='works'>
                Airpot and navogation <span>|</span>
                cement<span>|</span>
                Chemicals and Refineries<span>|</span>

                Defence

               
                
                </div>
                        
                
                

            </div>

            <div className="parent">
                <div className="news">News Update</div>
                <div className="second">
                    Gartner Peer Insights Customers' Choice Press ReleaseRead More Our

                </div>
            </div>
            <article
                className='article'>
                <div className='header'>
                    <h1>Explore our Customer's
                        <br />
                        Experience with our Tools</h1>
                    <p>
                        Thousands of our users are the heroes, every step in their transformation is <br />precious of celebration.  More than 100 + customers across various industries <br />trust PiLog to promote their business outcome..
                    </p>
                    <Button className='ex-btn'>
                        Watch Video
                    </Button>
                    <Button className='ex-btn'>
                        Customers
                    </Button>
                </div>
            </article>


            <div className='inn-div'>
                <div className='inn-main'>
                    <img className='inn-img' src={require('./1579568.png')} />
                    <h3>Innovate</h3>

                </div>
                <hr></hr>
                <div className='inn-cont'>
                    <p>Innovative Products and technologies</p>
                </div>


            </div>
            <br />
            <div>
                <ImageSlides />
            </div>
            <div className='achivements'>
                <h2> Our Achievements</h2>
                <div className='empty'> </div>
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xl={3} lg={3} md={5} xs={12}>
                            <Card sx={{ maxWidth: 250 }} className='achiv-card'>
                                <img className='ach-img1' src={require('./customer-first-gartner-blue-1.webp')} />
                                <CardContent>
                                    <h4>Gartner Peer Insights
                                        “Customer First Vendor”
                                        for Master Data Management Solutions</h4>
                                </CardContent>
                            </Card>
                        </Grid>
                        <Grid item lg={3} md={5} xs={12}>
                            <Card sx={{ maxWidth: 250 }} className='achiv-card'>
                                <img className='ach-img' src={require('./award-two.webp')} />
                                <CardContent>
                                    <h4>Gartner Peer Insights
                                        “Customer First Vendor”
                                        for Master Data Management Solutions</h4>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item lg={3} md={5} xs={12}>
                            <Card sx={{ maxWidth: 250 }} className='achiv-card'>
                                <img className='ach-img' src={require('./award-three.webp')} />
                                <CardContent>
                                    <h4>Gartner Peer Insights
                                        “Customer First Vendor”
                                        for Master Data Management Solutions</h4>
                                </CardContent>
                            </Card>

                        </Grid>
                        <Grid item lg={3} md={5} xs={12}>
                            <Card sx={{ maxWidth: 250 }} className='achiv-card'>
                                <img className='ach-img' src={require('./gartner-peer-insights-2022.webp')} />
                                <CardContent>
                                    <h4>Gartner Peer Insights
                                        “Customer First Vendor”
                                        for Master Data Management Solutions</h4>
                                </CardContent>
                            </Card>

                        </Grid>
                    </Grid>
                </Container>
            </div>
            <div className='Review'>

                <Container>
                    <div className='reviw-content'>
                        <h2>Text Slider Example</h2>
                        <TextSlider className='text-slider' texts={textArray} interval={5000} />
                        <br/>
                        <Button className='ex-btn'> Know More</Button>
                    </div>
                </Container>
            </div>
            <br/>
            <div>
                <Footer/>
            </div>

        </div>
    )
}

export default Home
