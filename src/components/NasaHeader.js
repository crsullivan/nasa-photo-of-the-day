import React from "react";
import styled from "styled-components";

const HeadDiv = styled.div `
text-align:center;

`
const Date = styled.h2 `
background:lightgreen;


`
const TopHead = styled.div `
color:#DCDCDC;


`

const HeadText = styled.p `

`

export const NasaHeader = props => {
    return (
        <HeadDiv>
            <TopHead>
            <h1>Nasa Photo of the Day</h1> 
            <HeadText>Every day, this page will update with information from Nasa's API. The result is a clear and concise example of their image of the day.</HeadText>
                
            </TopHead>
           <Date>{props.date}</Date>
        </HeadDiv>
    )
}