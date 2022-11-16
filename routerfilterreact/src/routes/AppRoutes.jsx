import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Navbar from '../pages-ui/Navbar';
import Home from '../pages-ui/Home';
import Shop from '../pages-ui/Shop';
import ProductView from '../pages-ui/ProductView';


const AppRoutes = () => {
  return (
    <>
        <Router>

          <Navbar/>
          
          <Routes>

            <Route path="/" element={<Home/>} />
            <Route path="/shop" element={<Shop/>}>
              <Route path=":id" element={<ProductView/>}></Route>
            </Route>
            
         {/*    <Route path="/shop/:id" element={<ProductView/>} /> */}

          </Routes>
        
        </Router>

    </>
  )
}

export default AppRoutes