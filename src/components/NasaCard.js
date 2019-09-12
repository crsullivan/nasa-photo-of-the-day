import React from "react";
import styled from "styled-components";

const Container = styled.div `
display:flex;
justify-content:space-around;
color:white;
background:#0C1B33;
margin-top:-1.2%
`

const HdUrl = styled.img `
max-width:40%;
margin:5%;

`
const Content = styled.div `
text-align:center;
width:40%;
margin-right:5%;
margin-top:6%;
`

const Text = styled.p `
font-size:20px;
`
const H2 = styled.h2 `
font-size:26px;
`
export const NasaCard = props => {
    return (
        <Container key={props.id}>
            <HdUrl alt="Nasa of the day" src={props.hdUrl}/>
            
            <Content>
            
                <H2>{props.title}</H2>
                
                <Text>{props.explanation}</Text>  
            </Content>
        </Container>
  
    )
}