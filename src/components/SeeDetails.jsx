import React from "react"
import {
    MDBCard,
    MDBCardBody,
    MDBCardTitle,
    MDBCardText,
    MDBCardImage,
    MDBRipple
} from 'mdb-react-ui-kit';

export default function SeeDetails(props){
    return (
        <MDBCard>
            <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                <MDBCardImage src={props.url} position="top" alt={props.details} />
                <a>
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </a>
            </MDBRipple>
            <MDBCardBody>
                <MDBCardTitle>{props.title}</MDBCardTitle>
                <MDBCardText>{props.details}</MDBCardText>
            </MDBCardBody>
        </MDBCard>
    )
}