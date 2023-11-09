import React from 'react'
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { Routes , Route} from 'react-router-dom';
import Navbar from './Components/Navbar/navbar';
import Homee from './Components/Home/home';
import Register from './Components/Register/register';
import Login from './Components/Login/login';
import HomeProducts from './Components/Home/HomeProduct.js';
import Profile from './Components/Profile/profile.js';
import Basket from './Components/Basket/basket.js';
import Product from './Components/Product/product.js';
import Payment from './Components/Payment/payment.js';
import Userlist from './Components/UserList/userlist.js';
import Addproduct from './Components/AddProduct/addproduct.js';
import Editproduct from './Components/EditProduct/editproduct.js';
import Editprofile from './Components/EditProfile/editprofile.js';







function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Homee/>}/>
      <Route path='/home' element={<HomeProducts/>}/>
      <Route path='/payment'  element={<Payment/>}/>
      <Route path='/Register' element={<Register/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/product' element={<Product/>}/>
      <Route path='/addproduct' element={<Addproduct/>}/>
      <Route path='/editproduct' element={<Editproduct/>}/>
      <Route path='/profile' element={<Profile/>}/>
      <Route path='/editprofile' element={<Editprofile/>}/>
      <Route path='/basket' element={<Basket/>}/>
      <Route path='/userlist' element={<Userlist/>}/>
      <Route path='/admin'/>
      <Route path='/livreur'/>
  </Routes>
  </div>
  );
}

export default App;
