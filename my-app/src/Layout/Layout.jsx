import React from 'react';
import Router from '../Routes/Router';
import Header from '../Components/Header/Header';
import Footer from '../Components/Footer/Footer';

const Layout = () => {
  return (
  <>
    <Header />
    
    <div>
        <Router />
    </div>

    <Footer />
  </>
  )
}

export default Layout