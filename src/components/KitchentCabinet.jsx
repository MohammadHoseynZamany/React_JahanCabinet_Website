import React from "react"
import SeeDetails from "./SeeDetails"
import image from `../images/cvb.jpg`

export default function KitchenCabinet(props){
    const [toReturn, setToReturn] = React.useState()
    function handleClick(){
        return(
            <SeeDetails url={image} title={props.title} details={props.details} />
        )
    }
    
    return(
        <div className="KitchenCabinet-container" onClick={handleClick}>
            <img src={image} alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}