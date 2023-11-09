import React from 'react'
import "./addproduct.css"

function Addproduct() {
  return (
    <div className='adwya'>
  <div className='all'>
  <link rel="stylesheet" type="text/css" href="style.css" />
  <div className="custom-product-form-unique">
    <h2 className="custom-product-heading-unique">Add Product</h2>
    <form id="product-form" encType="multipart/form-data">
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Title:</div>
        <input type="text" className="custom-input" id="title" name="title" required />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Description:</div>
        <textarea id="description" name="description" required defaultValue={""} />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Price:</div>
        <input type="number" className="custom-input" id="price" name="price" required />
      </div>
      <div className="custom-form-item-unique">
        <div className="custom-label">Product Image:</div>
        <input type="file" className="custom-input" id="image" name="image" accept="image/*" required />
      </div>
      <button className="custom-buttonnn" type="submit">Add Product</button>
    </form>
  </div>
</div>


    </div>
  )
}

export default Addproduct