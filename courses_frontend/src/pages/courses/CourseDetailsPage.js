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
import {Link, navigate} from "@reach/router";
import AttachFile from "@material-ui/icons/AttachFile";
import Attachment from "@material-ui/icons/Attachment";
import {attachFile, downloadFile} from "../../services/CourseFilesApi";
import {Paper} from "@material-ui/core";
import ArrowBack from "@material-ui/icons/ArrowBack";

const ContainerDiv = styled.div`
  display: flex;
  width: 1000px;
  min-height: 75vh;
  font-family: Arial;
  flex-direction: column;
`;
const Left = styled(Paper)`
&& {
  padding-top: 20px;
  padding-left: 20px;
  width: 70%;
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

const Right = styled(Paper)`
&& {
background-color: lightgoldenrodyellow;
padding-top: 20px;
  padding-left: 20px;
  width: 30%;
  }
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
            navigate(`/pom/${props.courseId}`);
        })
    };

    const postFile = event => {
        event.preventDefault();

        const data = new FormData();
        data.append('file', file);
        data.append('courseId', props.courseId);
        attachFile(data, props.courseId).then(res => {
            navigate(`/pom/${props.courseId}`);
        })
    };

    const handleFileChange = event => {
        event.preventDefault();
        setFile(event.target.files[0])
    };

    const downloadAttachment = fileId => event => {
        event.preventDefault();
        downloadFile(fileId).then(res => console.log("spusteno"))
    };

    const handleBack = event => {
        event.preventDefault();
        navigate('/courses')
    };


    return (
        <ContainerDiv>
            <div style={{display: 'flex'}}><BackButton variant="contained" onClick={handleBack}>
                <ArrowBack/></BackButton> <h3
                style={{fontFamily: 'arial', paddingLeft:10}}>CREATE COURSE</h3></div>
            {course && <div style={{display: 'flex'}}>
                <Left>
                    <h3 style={{textAlign: 'center'}}>{course.name}</h3>
                    <hr width="35%"/>
                    <div style={{ fontFamily:'arial', wordWrap: 'break-word', paddingTop:20}}><p>{course.description}</p> <hr/></div>

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
                                        secondary={`Author: ${e.author}`}
                                    />
                                </ListItem>
                            )}
                        </List>

                    </div>
                    {props.value ? <form style={{width: 610}}>
                        <p> Write something for this course </p>
                        <TextField fullWidth label={"Comment"} variant={"outlined"} multiline rows={4}
                                   onChange={handleChange('comment')}/>
                        <Button type="submit" onClick={postComment}> <AddComment/> Send Comment </Button>
                    </form> : <h4><Link to='/login'>Login</Link> to insert a comment</h4>}
                </Left>


                <Right>
                    <div>
                        <h4>Files</h4>
                        {course.courseFiles && course.courseFiles.length === 0 ? <p style={{paddingTop:10}}>No Files for this Course</p> : "" }
                        <List style={{wordWrap: 'break-word'}}>
                            {course.courseFiles && course.courseFiles.map((e, key) =>
                                <ListItem>
                                    <ListItemAvatar>
                                        <Avatar>
                                            <Attachment/>
                                        </Avatar>
                                    </ListItemAvatar>
                                    <a style={{paddingLeft: 5, wordWrap: 'break-word', width: 215}}
                                       href={`api/courses/${e.fileId}`} download={e.fileName}> {e.fileName}</a>
                                </ListItem>
                            )}
                        </List>
                    </div>
                    {props.value && <form>
                        <p> Add Attachment for this Course</p>
                        <input type="file" onChange={handleFileChange} style={{width:215}}/>
                        <Button type="submit" onClick={postFile}> <AttachFile/> Send Attachment </Button>
                    </form>}
                </Right>
            </div>}
        </ContainerDiv>
    )
}

export default CourseDetails;