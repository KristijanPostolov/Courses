import React, {useState} from "react";
import Container from "../components/Container";
import Fieldset from "../components/Fieldset";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import styled from "styled-components";
import {registerStudent} from "../services/StudentApi";
import {navigate} from "@reach/router";

const StyledTextField = styled(TextField)`
&& {
margin-top: 20px;
}
`;

function RegisterPage() {

    const [registerValues, setRegisterValues] = useState({
        username: '',
        password: '',
        confirmPassword:'',
        firstName: '',
        lastName: '',
    });

    const [error, setError] = useState(false);

    const handleChange = name => event => {
        setRegisterValues({...registerValues, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();

        if (registerValues.password === registerValues.confirmPassword){
            registerStudent(registerValues)
                .then(res => console.log(res))
                .catch(err => console.log(err))
            navigate('/login')

        }
        else setError(true)
    };

    console.log(registerValues);

    return (
        <div style={{width:360}}>
            <h3 style={{fontFamily: 'arial', textAlign: 'center'}}>REGISTER USER</h3>
            {error && <div> <p>Password does not match</p></div>}
            <form onSubmit={handleSubmit}>
                <Fieldset>
                    <legend>Credentials</legend>
                    <StyledTextField fullWidth label="Username" value={registerValues.username}
                                     onChange={handleChange("username")}/>
                    <StyledTextField fullWidth label="Password" type="password" value={registerValues.password}
                                     onChange={handleChange("password")}/>
                    <StyledTextField fullWidth label="Confirm Password" type="password" value={registerValues.confirmPassword}
                                     onChange={handleChange("confirmPassword")}/>
                    <StyledTextField fullWidth label="First Name" value={registerValues.firstName}
                                     onChange={handleChange("firstName")}/>
                    <StyledTextField fullWidth label="Last Name" value={registerValues.lastName}
                                     onChange={handleChange("lastName")}/>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 15}}>
                        <Button variant="contained" color="primary" type="submit"> Register</Button>
                    </div>
                </Fieldset>
            </form>
        </div>
    )
}

export default RegisterPage