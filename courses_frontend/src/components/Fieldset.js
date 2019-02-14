import React from "react";
import styled from 'styled-components'

const FieldSet = styled.fieldset`
 && {
    padding: 0 10px 10px 10px;
    border: 1px solid #212529 !important;
    && > legend {
    width: auto !important;
    border: none;
    font-size: 14px;
    padding-left: 10px;
    padding-right: 10px;
    }
}`;

function Fieldset(props) {
    return (
        <FieldSet>
            {props.children}
        </FieldSet>
    )
}
export default Fieldset