
import React, { useEffect, useState } from 'react'
import './Home.css'
import { Button, Card, Container, Grid } from '@mui/material'

import ImageSlides from './ImageSlides';
import SlideImages from './SlideImages';
import Footer from './Footer';
import Marquee from 'react-fast-marquee';




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
 const [dataArray] = useState(['Gartner Peer Insights CustomersChoice Press ReleaseRead More Our', 'CustomersChoice Press ReleaseRead More Our', 'Insights CustomersChoice Press ReleaseRead More Our']);
  const [currentItemIndex, setCurrentItemIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      // Update the current item index
      setCurrentItemIndex((prevIndex) => (prevIndex + 1) % dataArray.length);
    }, 3000);

    // Clear the interval when the component is unmounted
    return () => clearInterval(intervalId);
  }, [dataArray]);
    const textArray = [

        "Thousands of our users are the heroes, every step in their transformation",
        "Explore our Customer's Experience with our Tools",
        "We believe that everyone has a story to tell and we want to help you share it",

    ];

    return (
        <div className='main-home'>
            <br/>
            <br/>
            <br/>
           

            <div className='slider-page'>
                <SlideImages />
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
                    <h5 className='typing-text'>
                        {dataArray[currentItemIndex]}
                         {/* Gartner Peer Insights Customers' Choice Press ReleaseRead More Our */}
                         </h5>
                    

                </div>
            </div>
             <div className='companies'>
                <Marquee>
                <img className='company-img' src={require('./sipchem.jpg')} alt='' />
                <img className='company-img' src={require('./orpic.png')} alt='' />
                <img className='company-img' src={require('./technip.jpg')} alt='' />
                <img className='company-img' src={require('./yansab.png')} alt='' />
                <img className='company-img' src={require('./hzl.jpg')} alt='' />
                <img className='company-img' src={require('./aramco.png')} alt='' />
                <img className='company-img' src={require('./arya.png')} alt='' /> 
                </Marquee>   
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
                    <img className='inn-img' src={require('./1579568.png')} alt='' />
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
                <div >
                <Container>
                    <Grid  container spacing={3}>
                        <Grid item xl={3} lg={3} md={6} xs={12}>
                        <Card  className='achiv-card'>
                                <img className='ach-img1' src={require('./customer-first-gartner-blue-1.webp')} alt='' />
                                <div className='card-content'>
                                <h4>Gartner Peer Insights
                                        “Customer First Vendor”
                                        for Master Data Management Solutions</h4>

                                </div>
                            </Card>
                        </Grid>
                        <Grid item lg={3} md={6} xs={12}>
                            <Card  className='achiv-card'>
                                <img className='ach-img' src={require('./award-two.webp')} alt='' />
                                <div className='card-content'>
                                <h4>Gartner Peer Insights
                                        “Customer First Vendor”
                                        for Master Data Management Solutions</h4>

                                </div>
                            </Card>

                        </Grid>
                        <Grid item lg={3} md={6} xs={12}>
                            <Card  className='achiv-card'>
                                <img className='ach-img' src={require('./award-three.webp')} alt='' />
                                <div className='card-content'>
                                <h4>Gartner Peer Insights
                                        “Customer First Vendor”
                                        for Master Data Management Solutions</h4>

                                </div>
                            </Card>

                        </Grid>
                        <Grid item lg={3} md={6} xs={12}>
                            <Card  className='achiv-card'>
                                <img className='ach-img2' src={require('./gartner-peer-insights-2022.webp')} alt='' />
                                <div className='card-content'>
                                <h4>Gartner Peer Insights
                                        “Customer First Vendor”
                                        for Master Data Management Solutions</h4>

                                </div>
                            </Card>

                        </Grid>
                    </Grid>
                </Container>
                </div>
            </div>
            <div className='Review'>

                <Container>
                    <div className='reviw-content'>
                        <h2>Text Slider Example</h2>
                        <TextSlider className='text-slider' texts={textArray} interval={5000} />
                        <br />
                        <Button className='ex-btn'> Know More</Button>
                    </div>
                </Container>
            </div>
            <br />
            <div>
                <Footer />
            </div>

        </div>
    )
}

export default Home
