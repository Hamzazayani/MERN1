import React from 'react'
import "./card.css"
import img from '../Card/vitamine-omega-3-omega-6-complement-alimentaire-oil-filled-fish-oil-vitamine-vitamine-e-huile-lin_514781-1506.jpg'
import img1 from '../Card/medicine-pictures-2000-x-1333-ghyrlley8efpngk3.jpg'
import img2 from '../Card/depositphotos_73011163-stock-photo-various-medical-equipment-isolated-on.jpg'




function card() {
  return (
    <div  className='cardList' >

<div className="custom-card">
    <div className="custom-card-image">
      {/* Placeholder for Image */}
      <img  className='imgcrds'  src={img1} />
    </div>
    <div className="custom-card-content">
      <h2 className="custom-card-title">Card 2</h2>
      <p className="custom-card-description">Another beautiful card with a description.</p>
    </div>
    <div className="custom-card-button">
      {/* Button Placeholder */}
      <button className="custom-button">Learn More</button>
    </div>
  </div>
  <div className="custom-card">
    <div className="custom-card-image">
      {/* Placeholder for Image */}
      <img  className='imgcrds'  src={img} />
    </div>
    <div className="custom-card-content">
      <h2 className="custom-card-title">Card 2</h2>
      <p className="custom-card-description">Another beautiful card with a description.</p>
    </div>
    <div className="custom-card-button">
      {/* Button Placeholder */}
      <button className="custom-button">Learn More</button>
    </div>
  </div>
  <div className="custom-card">
    <div className="custom-card-image">
      {/* Placeholder for Image */}
      <img  className='imgcrds'  src={img2} />
    </div>
    <div className="custom-card-content">
      <h2 className="custom-card-title">Card 3</h2>
      <p className="custom-card-description">The third modern card in the collection.</p>
    </div>
    <div className="custom-card-button">
      {/* Button Placeholder */}
      <button className="custom-button">Learn More</button>
    </div>
  </div>
</div>


    
  )
}

export default card