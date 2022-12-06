import React from "react";
import { Toast } from "react-bootstrap";

export function Confirmation({toggle}){
 return(
    <Toast onClose={()=> toggle(false)}>
        <Toast.Header>
            <strong className="mr-auto">Oven</strong>
            <small className="mr-auto">Now</small>
        </Toast.Header>
        <Toast.Body>
            Yo pizza...
        </Toast.Body>
    </Toast>
 )
}