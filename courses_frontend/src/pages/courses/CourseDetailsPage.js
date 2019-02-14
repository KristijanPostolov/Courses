import React from "react";
import styled from 'styled-components';

const ContainerDiv = styled.div`
  display: flex;
  width: 1000px;
  height: 75vh;

`
const Left = styled.div`

  width: 70%;
  background-color: red;
`;

const Right = styled.div`
background-color: yellow;
  width: 30%;
`;


function CourseDetails(props) {

    console.log(props);
    return (
        <ContainerDiv>
            <Left>
                test
            </Left>
            <Right>
                right
            </Right>
        </ContainerDiv>
    )
}

export default CourseDetails;