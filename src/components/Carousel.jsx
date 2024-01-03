import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {

    const [count, setCount] = useState(0)
   

    const handler = (input) => {
        if(input == 'left'){
            if(count == 0){
                setCount(images.length -1) 
            }else{
                setCount(count -1)
            }
        }else{
            if(count == images.length -1){
                setCount(0)

            }else{
                setCount(count +1)
            }
        }
    }
    


    return(
        <div className="flex">
            <div onClick={() => handler("left")}>
                <ArrowBackIosIcon />
            </div>

            <div className="images">
                <h1>{images[count].title}</h1>
                <h2>{images[count].subtitle}</h2>
            </div>
            <div>
            <img className="imagesdd" src={images[count].img} alt="" />

            </div>
            <div onClick={() => handler("right")} >
                <ArrowForwardIosIcon />
            </div>
        </div>
    )
}

export default Carousel;