import React, {useState} from "react";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import styled from 'styled-components';
import Container from "../components/Container";
import Fieldset from "../components/Fieldset";
import {loginStudent} from "../services/StudentApi";
import {Link, navigate} from "@reach/router";



const Field = styled(TextField)`
  && {
  margin-top: 20px;
  }
`;

function LoginPage(props) {
    const [loginValues, setLoginValues] = useState({
        username:'',
        password:'',
    });

    const handleChange = name => event => {
        setLoginValues({...loginValues, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        loginStudent(loginValues.username, loginValues.password)
            .then(res=> {
                console.log(res);
                props.login(loginValues.username);
                navigate('/');
            });


    };
    return (
        <Container>
            <h3 style={{fontFamily: 'arial', textAlign: 'center'}}>LOGIN</h3>
            <form onSubmit={handleSubmit}>
                <Fieldset>
                    <legend>Credentials</legend>
                    <TextField fullWidth label="Username" value={loginValues.username} style={{marginTop:10}}  onChange={handleChange('username')}/>
                    <Field fullWidth label="Password" value={loginValues.password} type="password"  onChange={handleChange('password')}/>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 15}}>
                        <Button variant="contained" color="primary" type="submit"> Login </Button>
                    </div>
                </Fieldset>
            </form>

            <p style={{paddingTop:10}}>Dont have an account, Register <Link to='/register' style={{color:'blue', cursor:'pointer'}}> here </Link></p>
        </Container>
    )
}

export default LoginPage;