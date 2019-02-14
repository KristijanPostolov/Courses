import React from "react";
import styled from "styled-components";
import Button from "@material-ui/core/Button/Button";
import {navigate} from "@reach/router";

const Back = styled(Button)`
  && {
  border-radius: 25px;
  background-color: brown;
  min-width:30px !important;
  height: 30px; 
  padding:5px;
  color: white;
  }
  &:hover {
    color: brown;
    background-color: white;
  }
`;

function BackButton(props) {

    const handleBack = event => {
        event.preventDefault();
        navigate(props.previous.path)
    };


    return (
        <div>
            <Back onClick={handleBack}> </Back>
        </div>
    )

}
export default BackButton;