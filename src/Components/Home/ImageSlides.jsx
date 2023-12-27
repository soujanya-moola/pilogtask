import React from 'react'
import './ImageSlides.css'
import { Button } from 'react-bootstrap'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const ImageSlides = () => {
  return (
    <div>
       <div className="section">
        <div className="content">
          <h2 className='sec-cont'>Optimized Supply Chain of Petrochemical Conglomerate</h2>
          <p>
            Implementing best-in-class ideas towards operational excellence with
            more than 15% reduction in pricing year on year
          </p>
          <p>
            Would you like to know more about Inventory Management Solutions
          </p>
          <Button className='img-btn'>
            Read More <ArrowForwardIcon/>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default ImageSlides
