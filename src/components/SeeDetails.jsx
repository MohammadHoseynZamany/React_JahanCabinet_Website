import React from "react"

export default function SeeDetails(props){
    return (
        <div  className="seeDetails-container">
            <img src={props.url} alt={props.title} />
            <h2>{props.title}</h2>
            <h3>{props.details}</h3>
        </div>
    )
}