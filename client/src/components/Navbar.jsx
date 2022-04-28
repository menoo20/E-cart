import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavSearchInput from './NavSearchInput';
import SearchByCat from './SearchByCat';
import userPlaceHolder from "../images/3177440.png"
import "../style/navbar.scss"
import { connect } from 'react-redux';

const Navbar = ({user}) => {
  return (
    <nav className="navbar navbar-expand-lg newNav">
      <div className="container-fluid container-xxl align-items-center">
        <Link to={"/"} className="navbar-brand" href="#">
          <h2 className='mb-0'> <i className='bi bi-cart4'></i> e-cart</h2>
        </Link>
        
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className='bi bi-list'></i></span>
        </button>
        <div className="collapse navbar-collapse mb-2 mb-lg-0 justify-content-lg-center flex-grow-1" id="navbarSupportedContent">
        <ul className="navbar-nav align-items-lg-center me-auto mb-2 mb-lg-0 justify-content-between pe-auto">
        <li className='nav-item ms-lg-0 mt-lg-0 mt-2'>
              <NavSearchInput/>
          </li>
          <li className="nav-item">
            <Link to={"/"} className="nav-link active" aria-current="page" href="#">Home</Link>
          </li>
          <li className="nav-item">
            <Link to={"/products/gallery"} className="nav-link" href="#">Categories</Link>
          </li>
          <li className="nav-item ">
            <Link to={"/"} className="nav-link me-4" href="#">Contact us</Link>
          </li>
          {
              user?
              null:
              (
              <>
                <li className="nav-item d-lg-none">
                  <Link to={"/login"} className="nav-link me-3" href="#">Login</Link>
                </li>
                <li className="nav-item d-lg-none">
                  <Link to={"/register"} className="nav-link me-3" href="#">Register</Link>
                </li>
              </>
)
              }
        </ul>
      </div>


      <div className='me-2 d-none d-lg-flex'>
          <div className='d-flex align-self-center'>
              {
                    user?
                    null:
                    (
                  <ul className="navbar-nav align-items-center me-auto mb-2 mb-lg-0 justify-content-between pe-auto">
                    <li className="nav-item ">
                      <Link to={"/"} className="nav-link me-3" href="#">Login</Link>
                    </li>
                    <li className="nav-item ">
                      <Link to={"/"} className="nav-link me-3" href="#">Register</Link>
                    </li>
                  </ul>
                  )
              }
            <img className='cursor-pointer' src="https://img.icons8.com/color/40/000000/add-shopping-cart--v1.png"/>
            {
              user?
              <div className='rounded-circle px-3'>
                <img className='img-fluid' src={userPlaceHolder} alt="avatar" width={'40'} />
              </div>:
              null
            }
        
          </div>
        </div>

        <div className='me-2 d-lg-none'>
          <div className='d-flex align-self-center'>
            <img className='cursor-pointer' src="https://img.icons8.com/color/40/000000/add-shopping-cart--v1.png"/>
            {
              user?
              <div className='rounded-circle px-3'>
                <img className='img-fluid' src={userPlaceHolder} alt="avatar" width={'40'} />
              </div>:
              null
            }
          </div>
        </div>
        

      </div>
    </nav>
  )
}

const mapStateToProps = ({user})=>{
  console.log(user);
  return{
    user,
  }
}

export default connect (mapStateToProps)(Navbar)