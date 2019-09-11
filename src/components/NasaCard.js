import React from "react";

export const NasaCard = props => {
    return (
        <div className="container" key={props.id}>
            <img className="hdUrl" alt="Nasa of the day" src={props.hdUrl}/>
            
            <div className="content">
            
                <h2>{props.title}</h2>
                <h3>{props.date}</h3>
                <p>{props.explanation}</p>  
            </div>
        </div>
  
    )
}