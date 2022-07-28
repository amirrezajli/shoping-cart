import React from "react";
import Navbar from '../navbar/Navbar'
import Footer from './footer/Footer'

export default function Layout({ cart, handlePage,children }) {
  return (
    <div>
        <Navbar />
            {children}
        <Footer cart={cart} handlePage={handlePage}/>
    </div>
  );
}
