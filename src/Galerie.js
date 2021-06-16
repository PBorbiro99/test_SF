import React from 'react'

import Poze from './Poze'
function Galerie(){
    return(
        <>
        <h1 style={{textAlign : 'center' , color:'black',backgroundImage:'url(/images/BKG.jpg)',marginBottom:'0px'}}>Galerie</h1>
        
        <Poze/>
        </>
    );
}

export default Galerie;