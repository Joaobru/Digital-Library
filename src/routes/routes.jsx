import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/*Pages*/ 
import Home from '../pages/home/Home';
import Books from '../pages/books/Books';
import Sobre from '../pages/sobre/index';

const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component = {Home} exact/>
            <Route path="/books" component = {Books}/>
            <Route path="/sobre" component = {Sobre}/>
        </BrowserRouter>    
        );
}

export default Routes;