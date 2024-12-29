//React fragementation
//valid React component can return only 1 

import React from 'react';
import Header from './Header';
import Home from './Home';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

function App(){
    return (
        <>
        <Header />
        <Outlet />
        <Footer />
        </>
    )
}
export default App;
 //  <Home />