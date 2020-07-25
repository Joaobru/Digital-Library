import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';

function BreadCrumb() {

  return (
      <nav className="NavList">
          <span className="StyledList">
            <Link to="/home">
              Home
            </Link>
          </span>
          <span className="StyledList">
            <Link to="/books">
              Livros
            </Link>
          </span>
          <span className="StyledList">
            <Link to="/sobre">
              Sobre
            </Link>
          </span>
      </nav>
  );
}

export default BreadCrumb;