import React from 'react';
import Link from 'next/link';
import '../css/bootstrap.css'

const Layout = ({ children }) => {
  return (
    <div className="d-flex" id="wrapper">
      
      <div className="bg-light border-right" id="sidebar-wrapper">
        <div className="sidebar-heading">Online Parking</div>
        <div className="list-group list-group-flush">
          <Link href='/index'>
            <a className="list-group-item list-group-item-action bg-light">Home</a>
          </Link>
          <Link href='/about'>
            <a className="list-group-item list-group-item-action bg-light">Sobre</a>
          </Link>
        </div>
      </div>

      

      <div id="page-content-wrapper">
      <div className="navbar navbar-expand navbar-light bg-light border-bottom">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto mt-3">
            <li className="nav-item active"> Home</li>
          </ul>
        </div>
      </div>
      <div className="container">
        {children}
      </div>

        
      </div>
    </div>
  );
};

export default Layout;