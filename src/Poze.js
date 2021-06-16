import React,{useState} from 'react';
import './Galerie.css'
import CloseIcon from '@material-ui/icons/Close';
import Img1 from './Povestea SF foto site/10.jpg'
import Img2 from './Povestea SF foto site/11.jpg'
import Img3 from './Povestea SF foto site/118188958_3506456106054639_6530225995219771555_n.jpg'
import Img4 from './Povestea SF foto site/12.jpg'
import Img5 from './Povestea SF foto site/13.jpg'
import Img6 from './Povestea SF foto site/18.jpg'
import Img7 from './Povestea SF foto site/19.jpg'
import Img8 from './Povestea SF foto site/2.jpg'
import Img9 from './Povestea SF foto site/20.jpg'
import Img10 from './Povestea SF foto site/21.jpg'

const Poze = () =>{

    let data =[
        {
            id:1,
            imgSrc:Img1,
        },
        {
            id:2,
            imgSrc:Img2,
        },
        {
            id:3,
            imgSrc:Img3,
        },
        {
            id:4,
            imgSrc:Img4,
        },
        {
            id:5,
            imgSrc:Img5,
        },
         {
             id:6,
             imgSrc:Img6,
         },
         {
             id:7,
             imgSrc:Img7,
         },
         {
             id:8,
             imgSrc:Img8,
        },
         {
             id:9,
           imgSrc:Img9,
         },
       {
            id:10,
            imgSrc:Img10,
         },
    ]
    const[model, setModel] = useState(false);
    const [tempingSrc, setTempingSrc]= useState('');
    const getImg = (imgSrc) =>{
    setTempingSrc(imgSrc);
    setModel(true);
}
    return(
        <>
        <div className={model? "model open": "model"}>
            <img src={tempingSrc} />
            <CloseIcon onClick={() => setModel(false)}/>
        </div>
        <div className="galerie">
            {data.map((item,index)=>{
                return(
                    <div className="poze" key={index} onClick={()=> getImg(item.imgSrc)}>
                        <img src={item.imgSrc} style={{width : '100%'}}/>

                    </div>
                )
            })}

        </div>
        </>
    )
}
export default Poze;