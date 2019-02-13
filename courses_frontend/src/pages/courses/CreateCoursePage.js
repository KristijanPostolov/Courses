import React, {useState} from "react";
import Container from "../../components/Container";
import TextField from "@material-ui/core/TextField/TextField";
import Fieldset from "../../components/Fieldset";
import Button from "@material-ui/core/Button/Button";
import styled from "styled-components";
import {navigate} from "@reach/router";
import {createCourse} from "../../services/CoursesApi";


const StyledTextField = styled(TextField)`
&& {
margin-top: 20px;
}
`;

function CreateCourse() {

    const [courseValues, setCourseValues] = useState({
        name: '',
        description: '',
        year: ''
    })

    const handleChange = name => event => {
        setCourseValues({...courseValues, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        createCourse(courseValues)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        // navigate('/courses')
    };

    const handleBack = event => {
        event.preventDefault();
        navigate('/courses')
    };
    return (
        <Container>
            <div style={{display: 'flex'}}><Button variant="contained" onClick={handleBack}>Back</Button> <h3
                style={{fontFamily: 'arial'}}>CREATE COURSE</h3></div>
            <form onSubmit={handleSubmit}>
                <Fieldset>
                    <legend>Course Details</legend>
                    <StyledTextField fullWidth label="Name" value={courseValues.name} onChange={handleChange("name")}/>
                    <StyledTextField fullWidth label="Description" value={courseValues.description}
                                     onChange={handleChange("description")}/>
                    <StyledTextField fullWidth label="Year" type="number" value={courseValues.year}
                                     onChange={handleChange("year")}/>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 15}}>
                        <Button variant="contained" color="primary" type="submit"> Register</Button>
                    </div>
                </Fieldset>
            </form>
        </Container>
    )
}

export default CreateCourse;