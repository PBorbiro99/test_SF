import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import 'bootstrap/dist/css/bootstrap.min.css';   
import Footer from '../Footer';
import BootstrapCarousel from "../../BootstrapCarousel"
import Navbar from '../Navbar';
import PaginaEchipa from '../PaginaEchipa'

  function Echipa() {

  return (
    <>
   
  
   <Navbar/>
   <PaginaEchipa/>
   <Footer/>
    </>
  );
}

export default Echipa;