import React from "react"

export default function SeeDetails(props){
    return (
        <div className="SeeDetails-container">
            <img src={props.url} alt={props.title} />
            <h2>{props.title}</h2>
            <p>{props.details}</p>
        </div>
    )
}