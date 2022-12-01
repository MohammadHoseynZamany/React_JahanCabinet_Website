import React from "react"
import SeeDetails from "./SeeDetails"
import image from `../images/cvb.jpg`

export default function KitchenCabinet(props){
    function handleClick(){
        return(
            <SeeDetails url={props.url} title={props.title} details={props.details} />
        )
    }
    const Image = `../images/cvb.jpg`
    
    return(
        <div className="KitchenCabinet-container" onClick={handleClick}>
            {/* <img src={`${props.url}`} alt={props.title} /> */}
            <img src={image} alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}