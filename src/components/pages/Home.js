import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import 'bootstrap/dist/css/bootstrap.min.css';   
import Footer from '../Footer';
import BootstrapCarousel from "../../BootstrapCarousel"
import Navbar from '../Navbar';
import ExmapleBasic from '../Carousel1';
import Galerie from '../../Galerie';
import "react-responsive-carousel/lib/styles/carousel.min.css";


// import Carousel1 from '../Carousel1';
// import Carousel2 from '../Carousel2';
// import Carousel3 from '../Carousel3';
// import Carousel4 from '../Carousel4';
// import Carousel5 from '../Carousel5';


const imageIDs = Array(30) // the maximum is currently 149
  .fill(1)
  .map((_, i) => i + 1);
const images = imageIDs.map((imageID) => {
  return {
    src: `https://placedog.net/400/240?id=${imageID}`,
    srcset: `https://placedog.net/400/240?id=${imageID} 400w, https://placedog.net/700/420?id=${imageID} 700w, https://placedog.net/1000/600?id=${imageID} 1000w`,
    sizes: '(max-width: 1000px) 400px, (max-width: 2000px) 700px, 1000px',
    alt: `Dog No. ${imageID}. Dogs are domesticated mammals, not natural wild animals.`,
    thumbnail: `https://placedog.net/100/60?id=${imageID}`
  };
});


function Home() {

  
  return (
    <>
      <Navbar />
      
      <div className="App banner">
        <BootstrapCarousel></BootstrapCarousel>
        </div>
      <Cards />
      <Galerie/>
      
      {/* <div className="galerie">
      <Carousel1/>
      </div> */}
      {/* <div className='carousel-page'>
      
      <Carousel1 />
      <Carousel2 images={images} />
      <Carousel3 images={images} />
      <Carousel4 images={images} />
      <Carousel5 images={images} />
      
    </div> */}
    
      <Footer />
    </>
  );
}

export default Home;
