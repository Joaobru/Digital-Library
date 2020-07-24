import React from 'react';
import './style.css';
import {Link} from 'react-router-dom';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { emphasize } from '@material-ui/core/styles/colorManipulator';
import Paper from '@material-ui/core/Paper';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';


function BreadCrumb() {

  return (
      <nav className="NavList">
          <span className="StyledList">
            <Link to="/">
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