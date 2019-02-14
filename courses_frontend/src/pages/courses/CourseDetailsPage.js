import React, {useEffect, useState} from "react";
import styled from 'styled-components';
import {getCourseById} from "../../services/CoursesApi";
import TextField from "@material-ui/core/TextField/TextField";
import Button from "@material-ui/core/Button/Button";
import {createComment} from "../../services/CommentsApi";
import AddComment from "@material-ui/icons/AddComment"
import CommentIcon from "@material-ui/icons/Comment"
import List from "@material-ui/core/List/List";
import ListItem from "@material-ui/core/ListItem/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar/Avatar";
import ListItemText from "@material-ui/core/ListItemText/ListItemText";
import {navigate} from "@reach/router";
import AttachFile from "@material-ui/icons/AttachFile";
import Attachment from "@material-ui/icons/Attachment";
import {attachFile} from "../../services/CourseFilesApi";

const ContainerDiv = styled.div`
  display: flex;
  min-width: 960px;
  min-height: 75vh;
  font-family: Arial;
  flex-direction: column;
`;
const Left = styled.div`
  padding-top: 20px;
  padding-left: 20px;
  width: 70%;
  background-color: red;
  
`;

const Right = styled.div`
background-color: yellow;
padding-top: 20px;
  padding-left: 20px;
  width: 30%;
`;


function CourseDetails(props) {

    const [course, setCourse] = useState({});
    const [comment, setComment] = useState({
            comment: '',
            courseId: props.courseId,
        }
    );
    const [file, setFile] = useState(null);

    useEffect(() => {
        getCourseById(props.courseId)
            .then(res => setCourse(res))
    }, []);


    const handleChange = name => event => {
        setComment({...comment, [name]: event.target.value});
    };

    const postComment = event => {
        event.preventDefault();

        createComment(comment).then(res => {
            // setCourse({ ...course, [course.comments]: res})
            navigate(`/pom/${props.courseId}`);
        })
    };

    const postFile = event => {
        event.preventDefault();

        const data = new FormData();
        data.append('file', file, file.name);
        data.append('courseId', props.courseId);
        attachFile(data, props.courseId).then(res => {
            navigate(`/pom/${props.courseId}`);
        })
    };

    const handleFileChange = event =>  {
        event.preventDefault();
        setFile(event.target.files[0])
    };

    console.log("File",file);

    return (
        <ContainerDiv>
            <div>
                <h2 style={{textAlign:'center', marginBottom:10}}>DETAILS PAGE</h2>

            </div>
            {course && <div style={{display: 'flex'}}>
                <Left>
                    <h3 style={{textAlign: 'center'}}>{course.name}</h3>
                    <hr/>
                    <p>{course.description}</p>

                    <div>
                        <h4>Comment Section</h4>
                        <List>
                            {course.comments && course.comments.map((e, key) =>
                                <ListItem key={key}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <CommentIcon/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={e.comment}
                                        secondary={e.author}
                                    />
                                </ListItem>
                            )}
                        </List>

                    </div>
                    {props.value && <form style={{width: 610}}>
                        <p> Write something for this course </p>
                        <TextField fullWidth label={"Comment"} variant={"outlined"} multiline rows={4}
                                   onChange={handleChange('comment')}/>
                        <Button type="submit" onClick={postComment}> <AddComment/> Send Comment </Button>
                    </form>}
                </Left>


                <Right>
                    <div>
                        <h4>Files</h4>
                        <List>
                            {course.courseFiles && course.courseFiles.map((e, key) =>
                                <ListItem key={key}>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Attachment/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <ListItemText
                                        primary={e.fileName}
                                    />
                                </ListItem>
                            )}
                        </List>
                    </div>
                    {props.value && <form>
                        <p> Write something for this course </p>
                        <input type="file" onChange={handleFileChange}/>
                        <Button type="submit" onClick={postFile}> <AttachFile/> Send Attachment </Button>
                    </form>}
                </Right>
            </div>}
        </ContainerDiv>
    )
}

export default CourseDetails;