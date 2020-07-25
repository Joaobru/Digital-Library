import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/*Pages*/ 
import Home from '../pages/home';
import Books from '../pages/books';
import Sobre from '../pages/sobre';
import Logout from '../pages/logout'


const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component = {Logout} exact/>
            <Route path="/Home" component = {Home} exact/>
            <Route path="/books" component = {Books}/>
            <Route path="/sobre" component = {Sobre}/>
        </BrowserRouter>    
        );
}

export default Routes;