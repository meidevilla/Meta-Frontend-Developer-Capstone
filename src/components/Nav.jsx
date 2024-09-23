import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import logo from '../assets/logo-little-lemon.jpg';

const Nav = () => {
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-light'>
      <div className='container-fluid'>
        <a className="navbar-brand" href="#">
          <img src={logo} alt="Little Lemon Logo" style={{ height: '40px', marginRight: '1rem' }} />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
          <li className='nav-item'>
            <NavLink to="/" exact="true" className={({ isActive }) => (isActive ? 'active' : '')} >
              Home
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/about" className={({ isActive }) => (isActive ? 'active' : '')} >
              About
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/blog" className={({ isActive }) => (isActive ? 'active' : '')} >
              Menu
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/reservations" className={({ isActive }) => (isActive ? 'active' : '')} >
              Reservations
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/order-online" className={({ isActive }) => (isActive ? 'active' : '')} >
              Order Online
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink to="/login" className={({ isActive }) => (isActive ? 'active' : '')} >
              Login
            </NavLink>
          </li>
        </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
