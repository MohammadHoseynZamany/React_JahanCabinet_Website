import React from "react"
import SeeDetails from "./SeeDetails"

export default function ShowCase(props){
    function handleClick(){
        return(
            <SeeDetails url={props.url} title={props.title} details={props.details} />
        )
    }
    return(
        <div className="showCase-container" onClick={handleClick}>
            <img src={ props.url } alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}