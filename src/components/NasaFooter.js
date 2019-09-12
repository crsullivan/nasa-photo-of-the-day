import React from "react";
import styled from "styled-components";
const Footer = styled.footer `
text-align:center;
margin-top:3%;
`

const Copy = styled.h4 `
color:#DCDCDC;
`

export const NasaFooter = props => {
    return(
        <Footer>
            <Copy>Image Copyright: {props.copyright}</Copy>
        </Footer>
    )
}