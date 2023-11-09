import React from 'react'
import "./editprofile.css"

function Editprofile() {
  return (
    <div>
     <div>
  <link rel="stylesheet" type="text/css" href="edit-user-style.css" />
  <div className="custom-edit-user-form">
    <h2 className="custom-edit-user-heading">Edit User</h2>
    <form id="edit-user-form" encType="multipart/form-data">
      <div className="custom-edit-form-item">
        <div className="custom-edit-label">User Name:</div>
        <input type="text" className="custom-edit-input" id="user-name" name="user-name" required />
      </div>
      <div className="custom-edit-form-item">
        <div className="custom-edit-label">User Email:</div>
        <input type="email" className="custom-edit-input" id="user-email" name="user-email" required />
      </div>
      <div className="custom-edit-form-item">
        <div className="custom-edit-label">New Password:</div>
        <input type="password" className="custom-edit-input" id="new-password" name="new-password" required />
      </div>
      <div className="custom-edit-form-item">
        <div className="custom-edit-label">User Image:</div>
        <input type="file" className="custom-edit-input" id="user-image" name="user-image" accept="image/*" required />
      </div>
      <button className="custom-edit-button" type="submit">Save Changes</button>
    </form>
  </div>
</div>


    </div>
  )
}

export default Editprofile