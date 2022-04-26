import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavSearchInput from './NavSearchInput';
import SearchByCat from './SearchByCat';
import userPlaceHolder from "../images/3177440.png"
import "../style/navbar.scss"


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg newNav">
      <div className="container-fluid container-xxl align-items-center">
        <Link to={"/"} className="navbar-brand" href="#">
          <h2 className='mb-0'> <i className='bi bi-cart4'></i> e-cart</h2>
        </Link>
 
        <button className="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"><i className='bi bi-list'></i></span>
        </button>
        <div className="collapse navbar-collapse mb-2 mb-lg-0 justify-content-center flex-grow-0" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0 justify-content-between pe-auto">
          <li className="nav-item">
            <a className="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Categories</a>
          </li>
          <li className="nav-item ">
            <a className="nav-link" href="#">Contact us</a>
          </li>
          <li className='nav-item'>
              <NavSearchInput/>
          </li>
        </ul>
      </div>


      <div className='me-2 d-none d-lg-flex'>
          <div className='d-flex align-self-center'>
            <img className='cursor-pointer' src="https://img.icons8.com/color/40/000000/add-shopping-cart--v1.png"/>
            <div className='rounded-circle px-3'>
              <img className='img-fluid' src={userPlaceHolder} alt="avatar" width={'40'} />
            </div>
          </div>
        </div>

        <div className='me-2 d-lg-none'>
          <div className='d-flex align-self-center'>
            <img className='cursor-pointer' src="https://img.icons8.com/color/40/000000/add-shopping-cart--v1.png"/>
            <div className='rounded-circle px-3'>
              <img className='img-fluid' src={userPlaceHolder} alt="avatar" width={'40'} />
            </div>
          </div>
        </div>
        

      </div>
    </nav>
  )
}

export default Navbar