import React, { useState } from 'react'
import SimpleImageSlider from "react-simple-image-slider";
import image1 from './js-slider-1.webp';
import image2 from './js-slider-2.webp';
import image3 from './js-slider-3-1.webp';
import './SlideImages.css'

const ImageSlider = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
    const nextImage = () => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    };
  
    const prevImage = () => {
      setCurrentImageIndex(
        (prevIndex) => (prevIndex - 1 + images.length) % images.length
      );
    };
  
    return (
      <div className="image-slider">
        
        <img className='slider-img' src={images[currentImageIndex]} alt={`Image ${currentImageIndex + 1}`} />
        <div>
        <button className='slider-btn' onClick={prevImage}>Previous</button>
        <button className='slider-btn' onClick={nextImage}>Next</button>
        </div>
        
      </div>
    );
  };

const SlideImages = () => {
    const imageArray = [
        image1, image2, image3
      ];
  return (
    <div className='slider-page'>
      <h1>Image Slider Example</h1>
      <ImageSlider className='main-images' images={imageArray} />
      {/* <img src={require(imageArray)}/> */}
    </div>
  )
}

export default SlideImages
