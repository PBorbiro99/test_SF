import Carousel from 'react-bootstrap/Carousel'
import React, { Component } from 'react'
import { Link } from 'react-router-dom';
export class BootstrapCarousel extends Component {  
    render() {  
        return ( 
            <div>  
                 <div class='container-fluid' >  
                 {/* <div className="row title" style={{ marginBottom: "20px" }} > */}
                 {/* <div class="col-sm-12 btn btn-warning"> 
                 How To Use Bootstrap Carousel In ReactJS 
                 </div>  */}
                 {/* </div>  */}
                 </div>
                 <div className='container-fluid'style={{'padding':"0px"}} >  
                 <Carousel> 
                 {/* <Carousel.Item style={{'height':"300px"}} >  
                 <img style={{'height':"300px"}}  
                 className="d-block w-100" 
                 src={'/assets/img/1.png'}  />  
                   <Carousel.Caption>
                   <h3>First Demo </h3>  
                   </Carousel.Caption>  
                   </Carousel.Item  > 
                   <Carousel.Item style={{'height':"300px"}}>  
                   <img style={{'height':"300px"}}  
                    className="d-block w-100"  
                    src={'/assets/img/2.png'}    />
                     <Carousel.Caption>  
                     <h3>Second Demo</h3>  
                     </Carousel.Caption>  
                     </Carousel.Item>
                     <Carousel.Item style={{'height':"300px"}}>  
                     <img style={{'height':"300px"}}  
                      className="d-block w-100" 
                      src={'/assets/img/3.png'}   />  
                      <Carousel.Caption>  
                      <h3>Third Demo</h3>  
                      </Carousel.Caption> 
                      </Carousel.Item> */}

                      <Carousel.Item style={{'max-height': "500px"}}>
                     <Link to="https://cdn.fbsbx.com/v/t59.2708-21/190954103_966535157447349_1470657988223435481_n.pdf/HAOSul-din-mintea-ta-Regulament.pdf?_nc_cat=104&ccb=1-3&_nc_sid=0cab14&_nc_ohc=r5ukeTlLeJUAX8KE0V6&_nc_ht=cdn.fbsbx.com&oh=a4608ed39c1b01627e00273fb4302bba&oe=60B899F3&dl=1">
                     <img style={{'width':"100%"}} 
                      className="d-block w-100" 
                      src={"/images/1.jpg"}   />  
                      </Link>
                      <Carousel.Caption>  
                      <h3></h3>  
                      </Carousel.Caption> 
                      </Carousel.Item>
                      </Carousel>  
                      </div>
                      </div>
        )
}
}

export default BootstrapCarousel
