import React from 'react'
import "./register.css"

function Register() {
  return (
    <div  className='register'  >
  <section className="h-100 gradient-form" >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-xl-10">
        <div className="card rounded-3 text-black">
          <div className="row g-0">
            <div className="col-lg-6">
              <div className="card-body p-md-5 mx-md-4">
                <div className="text-center   logo ">
                <div className="logo-text">HealthCare</div>
          <div className="logo-subtext">Online Pharmacy</div>
                </div>
                <form>
                  <p>Please put your email address</p>
                  <div className="form-outline mb-4">
                    <input type="email" id="form2Example11" className="form-control" placeholder="email address" />
                    
                  </div>
                  <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example22">Password</label>
                    <input type="password" id="form2Example22" className="form-control" placeholder="password" />
                   </div>
                   <div className="form-outline mb-4">
    <label className="form-label" htmlFor="form2Example33">Upload Image</label>
    <input type="file" id="form2Example33" className="form-control" />
  </div>
                  <div className="text-center pt-1 mb-5 pb-1">
                    <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button">Register</button>
                </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 className="mb-44">We are more than just a Pharmacy</h4>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default Register