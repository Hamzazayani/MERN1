import React from 'react'
import "./profile.css"

function profile() {
  return (
    <div  className='profil' >
<div className="custom-bodyyy">
 
  <div className="profile">
    <div className="profile-header">
      <img className="profile-image" src="profile-image.jpg" alt="Profile Image" />
      <h1 className="profile-name">John Doe</h1>
      <p className="profile-email">Email: john.doe@example.com</p>
      <p className="profile-home">Home Address: 123 Main St, Anytown</p>
    </div>
    <div className="profile-bio">
      <p>Passionate web developer with a strong focus on creating user-friendly and visually appealing websites. Experienced in HTML, CSS, JavaScript, and more.</p>
    </div>
    <div className="profile-edit">
      <button className="edit-button">Edit Profile</button>
    </div>
  </div>
</div>



    </div>
  )
}

export default profile