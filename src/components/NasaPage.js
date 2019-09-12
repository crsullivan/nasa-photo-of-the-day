import React, {useState, useEffect} from "react";
import axios from "axios";
import {NasaCard} from "./NasaCard";
import {NasaHeader} from "./NasaHeader";
import styled from "styled-components";


// .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)


export default function NasaPage() {
    const [bodies, setBodies] = useState ([])
    
    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=NNKOjkoul8n1CH18TWA9gwngW1s1SmjESPjNoUFo
        `)
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
                    <React.Fragment>
                    <NasaHeader
                    date={el.date}
                    />
                    <NasaCard
                    key={el.copyright}
                    hdUrl={el.hdurl}
                    title={el.title}
                    explanation={el.explanation}
                  

                    />
                    </React.Fragment>
                )
            })}
        </div>
  
  
  
  ) 
}



