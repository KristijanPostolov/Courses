import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import styled from "styled-components";
import {navigate} from "@reach/router";
import {getAllCourses} from "../../services/CoursesApi";
import ControlPoint from "@material-ui/icons/ControlPoint";
import Container from "../../components/Container";
import ArrowForward from "@material-ui/icons/ArrowForward";


const ContainerDiv = styled.div`
  && {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  }
`;

const StyledCardContent = styled(CardContent)`
  &&{
    display:flex;
    justify-content: stretch;
    flex: 1 0 auto;
    align-items: center;
    flex-direction: column;
    
  }
`;
const AddCourseCard = styled(Card)`
  && {
   flex:1 0 26%;
  margin-right: 20px;
  margin-top: 20px;
  border: 0.5px solid orange;
  background-color: lightgoldenrodyellow;
  display: flex;
  align-items: center;
  justify-content: center;
  }
`;

const StyledCard = styled(Card)`
&& {
  flex:1 0 26%;
  margin-right: 20px;
  margin-top: 20px;
  border: 0.5px solid orange;
  background-color: lightgoldenrodyellow;
  height: 160px;
  position: relative;

}
`;

function Courses(props) {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        getAllCourses("").then(res => setCourses(res))

    }, []);

    console.log(courses);

    const handleClick = event => {
        event.preventDefault();
        navigate('/courses/create');
    };

    return (
        <div style={{width: 960}}>
            <Container>
                <h2 style={{fontFamily: 'arial'}}> COURSES </h2>
                <ContainerDiv>

                    {props.value && <AddCourseCard onClick={handleClick}>
                        <StyledCardContent>
                            <Typography variant={"title"} gutterBottom>
                                Add Course
                            </Typography>
                            <ControlPoint width={40} height={40}/>
                        </StyledCardContent>
                    </AddCourseCard>}

                    {courses && courses.map((course, key) =>
                        <StyledCard key={key}>
                            <CardContent>
                                <Typography variant={"title"} gutterBottom>
                                    {course.name}
                                </Typography>
                                <Typography style={{paddingTop:5}} component="p" noWrap>
                                    {course.description}
                                </Typography>
                            </CardContent>
                            <CardActions style={{position:'absolute',bottom:'0'}}>
                                <Button style={{color:'orange', fontWeight:'bold'}} size="small" onClick={() => navigate(`courses/${course.id}`)}>Details <ArrowForward/> </Button>
                            </CardActions>
                        </StyledCard>
                    )}
                </ContainerDiv>
            </Container>
        </div>
    )
}

export default Courses