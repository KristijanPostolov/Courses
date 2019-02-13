import React, {useState} from "react";
import Container from "../components/Container";
import Fieldset from "../components/Fieldset";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import styled from "styled-components";

const StyledTextField = styled(TextField)`
&& {
margin-top: 20px;
}
`;

function RegisterPage() {

    const [registerValues, setRegisterValues] = useState('')

    const handleChange = name => event => {
        setRegisterValues({...registerValues, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
    };

    return (
     <Container>
         <h3 style={{fontFamily: 'arial', textAlign: 'center'}}>REGISTER USER</h3>
         <form onSubmit={handleSubmit}>
             <Fieldset>
                 <legend>Credentials</legend>
                 <StyledTextField fullWidth label="Username" onChange={handleChange("username")}/>
                 <StyledTextField fullWidth label="Password" onChange={handleChange("password")}/>
                 <StyledTextField fullWidth label="Year" onChange={handleChange("year")}/>
                 <div style={{display:'flex', justifyContent:'center', marginTop:15}}>
                     <Button variant="contained" color="primary" type="submit"> Register</Button>
                 </div>
             </Fieldset>
         </form>
     </Container>
    )
}

export default RegisterPage