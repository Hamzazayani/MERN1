import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
import img from '../Carousel/49229-Thomas-Fuller-Quote-Health-is-not-valued-till-sickness-comes (1).jpg'
import img1 from '../Carousel/desktop-wallpaper-health-background-29839-health-and-wellness.jpg'
import img2 from '../Carousel/Digital-health-pharmacy.png'
import './carousel.css'


function Carousell() {
  return (
    <div>
       <Carousel>
      <Carousel.Item interval={1000}>
       <img  className='imgcarousel'  src={img} />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
      <img  className='imgcarousel'  src={img1} />
        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img  className='imgcarousel'  src={img2} />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Carousell