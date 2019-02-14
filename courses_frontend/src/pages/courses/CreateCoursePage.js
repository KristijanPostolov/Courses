import React, {useState} from "react";
import Container from "../../components/Container";
import TextField from "@material-ui/core/TextField/TextField";
import Fieldset from "../../components/Fieldset";
import Button from "@material-ui/core/Button/Button";
import styled from "styled-components";
import {navigate} from "@reach/router";
import {createCourse} from "../../services/CoursesApi";
import ArrowBack from "@material-ui/icons/ArrowBack";



const StyledTextField = styled(TextField)`
&& {
margin-top: 20px;
}
`;

const BackButton = styled(Button)`
  && {
  border-radius: 25px;
  background-color: orange;
  min-width:30px !important;
  height: 30px; 
  padding:5px;
  color: white;
  }
  &:hover {
    color: orange;
    background-color: white;
  }
`;

function CreateCourse() {

    const [courseValues, setCourseValues] = useState({
        name: '',
        description: '',
        year: ''
    });

    const handleChange = name => event => {
        setCourseValues({...courseValues, [name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        createCourse(courseValues)
            .then(res => console.log(res))
            .catch(err => console.log(err))
        navigate('/courses')
    };

    const handleBack = event => {
        event.preventDefault();
        navigate('/courses')
    };
    return (
        <Container>
            <div style={{display: 'flex'}}><BackButton variant="contained" onClick={handleBack}>
                <ArrowBack/></BackButton> <h3
                style={{fontFamily: 'arial', paddingLeft:10}}>CREATE COURSE</h3></div>
            <form onSubmit={handleSubmit}>
                <Fieldset>
                    <legend>Details</legend>
                    <StyledTextField fullWidth label="Name" variant="outlined" value={courseValues.name} onChange={handleChange("name")}/> <br/>
                    <StyledTextField  fullWidth label="Year" variant="outlined" value={courseValues.year}
                                     onChange={handleChange("year")}/>
                    <StyledTextField  fullWidth multiline variant="outlined"  rows="4" label="Description" value={courseValues.description}
                                     onChange={handleChange("description")}/>
                    <div style={{display: 'flex', justifyContent: 'center', marginTop: 15, marginBottom:15}}>
                        <Button variant="contained" color="primary" type="submit"> Create Course</Button>
                    </div>
                </Fieldset>
            </form>
        </Container>
    )
}

export default CreateCourse;