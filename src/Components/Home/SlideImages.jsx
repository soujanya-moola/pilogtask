import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './SlideImages.css';


const SlideImages = () => {
   
  return (
    <Carousel data-bs-theme="dark">
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('./js-slider-1.webp')}
        alt="First slide"
      />
      
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('./js-slider-2.webp')}
        alt="Second slide"
      />
     
    </Carousel.Item>
    <Carousel.Item>
      <img
        className="d-block w-100"
        src={require('./js-slider-3-1.webp')}
        alt="Third slide"
      />
      
    </Carousel.Item>
  </Carousel>
  )
}

export default SlideImages
