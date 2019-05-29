import React from "react";
import "./celeb.css"

export default function Celeb(props) {
    return (
        <div className="celebrity">
            <img src={props.picture} alt="celeb-picture"/>
            <div className="text-container">
                <h3>{props.name}</h3>
            </div>
            <div className="text-container">
                <h3>{props.popularity}</h3> 
            </div>
            <div className="delete-button-container"><button onClick={()=> { props.delete(props.index)  }}>Delete</button></div>  
            
        </div>
    )


}



