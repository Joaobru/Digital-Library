import React from 'react';
import './style.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import {Link} from 'react-router-dom';
import Icon from '../../assets/book.svg'

function Logout() {

  return( 
    <div className="Body-logout">
      <form>
        <img src={Icon} width={80}/>
        <div className = "Form">
          <label>
            E-mail:
          </label>
          <input label=""/>
          <label type="text">
            Password:
          </label>
          <input type="password" label=""/>
        </div>
        <Link to ="home">
          <Button variant="contained" size="medium" color="white" className="Button">
            Login
          </Button>
        </Link>
      </form>
    </div>
  );
}

export default Logout;