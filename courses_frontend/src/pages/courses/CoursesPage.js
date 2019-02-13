import React, {useEffect, useState} from "react";
import Card from "@material-ui/core/Card/Card";
import CardContent from "@material-ui/core/CardContent/CardContent";
import Typography from "@material-ui/core/Typography/Typography";
import CardActions from "@material-ui/core/CardActions/CardActions";
import Button from "@material-ui/core/Button/Button";
import styled from "styled-components";
import {navigate} from "@reach/router";

const ContainerDiv = styled.div`
  && {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  }

`

const StyledCard = styled(Card)`
&& {
  flex:1 0 26%;
  margin-right: 20px;
  margin-top: 20px;
}
`

function Courses() {

    const [courses, setCourses] = useState(null);

    useEffect(() => {
        console.log(courses);
    });

    const handleClick = event => {
        event.preventDefault();
        navigate('/courses/create');
    }

    return (
        <>
            <h2 style={{fontFamily:'arial'}}> Courses </h2>
            <ContainerDiv>
                {courses ? courses.map((course, key) =>
                    <StyledCard key={key}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                {course.name}
                            </Typography>
                            <Typography component="p">
                                {course.text}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </StyledCard>
                ) : <>
                    <StyledCard>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography color="textSecondary">
                                adjective
                            </Typography>
                            <Typography component="p">
                                well meaning and kindly.
                                <br/>
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </StyledCard>
                    <StyledCard>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography color="textSecondary">
                                adjective
                            </Typography>
                            <Typography component="p">
                                well meaning and kindly.
                                <br/>
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </StyledCard>
                    <StyledCard>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography color="textSecondary">
                                adjective
                            </Typography>
                            <Typography component="p">
                                well meaning and kindly.
                                <br/>
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </StyledCard>
                    <StyledCard>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography color="textSecondary">
                                adjective
                            </Typography>
                            <Typography component="p">
                                well meaning and kindly.
                                <br/>
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </StyledCard>
                    <StyledCard>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography color="textSecondary">
                                adjective
                            </Typography>
                            <Typography component="p">
                                well meaning and kindly.
                                <br/>
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </StyledCard>
                    <StyledCard>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>
                                Word of the Day
                            </Typography>
                            <Typography color="textSecondary">
                                adjective
                            </Typography>
                            <Typography component="p">
                                well meaning and kindly.
                                <br/>
                                {'"a benevolent smile"'}
                            </Typography>
                        </CardContent>
                        <CardActions>
                            <Button size="small">Learn More</Button>
                        </CardActions>
                    </StyledCard>

                </>}
            </ContainerDiv>

            <div>
                <Button variant="contained" color="primary" onClick={handleClick} > Create course </Button>
            </div>

        </>
    )
}

export default Courses