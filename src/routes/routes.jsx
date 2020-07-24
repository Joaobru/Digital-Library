import React from 'react';
import {BrowserRouter, Route} from 'react-router-dom';

/*Pages*/ 
import Home from '../pages/home';
import Books from '../pages/books';


const Routes = () => {
    return (
        <BrowserRouter>
            <Route path="/" component = {Home} exact/>
            <Route path="/books" component = {Books}/>
        </BrowserRouter>    
        );
}

export default Routes;