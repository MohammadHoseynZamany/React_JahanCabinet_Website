import React from "react"
import SeeDetails from "./SeeDetails"

export default function TvDesk(props){
    const [seeDetails, setSeeDetails] = React.useState(false)
    function handleClick(){
        setSeeDetails(prevState => !prevState)
    }
    
    if (!seeDetails){
        return(
            <div className="tvDesk-container" onClick={handleClick}>
                <img src={props.url} alt={props.title} />
                <p>{props.title}</p>
            </div>
        )
    } else {
        return(
            <SeeDetails url={props.url} title={props.title} details={props.details} />
        )
    }


}