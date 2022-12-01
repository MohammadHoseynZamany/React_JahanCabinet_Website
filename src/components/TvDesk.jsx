import React from "react"
import SeeDetails from "./SeeDetails"

export default function TvDesk(props){
    function handleClick(){
        return(
            <SeeDetails url={props.url} title={props.title} details={props.details} />
        )
    }
    return(
        <div className="tvDesk-container" onClick={handleClick}>
            <img src={ props.url } alt={props.title} />
            <p>{props.title}</p>
        </div>
    )
}