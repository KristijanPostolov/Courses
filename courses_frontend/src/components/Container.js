import styled from 'styled-components'
import React from "react";

const ContainerDiv = styled.div`
&& {
display: flex;
justify-content: center;
align-self: center;
flex-direction: column;
height: 80vh ;
}
`

function Container(props) {
    return (
        <ContainerDiv>
            {props.children}
        </ContainerDiv>
    )
}
export default Container