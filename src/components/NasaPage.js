import React, {useState, useEffect} from "react";
import axios from "axios";
import {NasaCard} from "./NasaCard";



export default function NasaPage() {
    const [bodies, setBodies] = useState ([])
    
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            const bodies = response.data;
            setBodies([bodies]);
            console.log(bodies);
        })
        .catch(error => {
            console.log('Oof', error)
        });
    },[]);
    return ( 

        <div className="containers">
            {bodies.map(el => {
                return (
                    <NasaCard
                    key={el.copyright}
                    hdUrl={el.hdurl}
                    title={el.title}
                    explanation={el.explanation}
                    date={el.date}
                    />
                )
            })}
        </div>
  
  
  
  ) 
}



