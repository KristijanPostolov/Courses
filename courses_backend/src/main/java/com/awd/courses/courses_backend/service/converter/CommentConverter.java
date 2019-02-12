package com.awd.courses.courses_backend.service.converter;

import com.awd.courses.courses_backend.model.Comment;
import com.awd.courses.courses_backend.model.Course;
import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.dto.CommentDto;
import com.awd.courses.courses_backend.service.CourseService;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentConverter {

    private final CourseService courseService;

    public CommentConverter(CourseService courseService) {
        this.courseService = courseService;
    }

    public Comment toDomainModel(CommentDto commentDto, Student loggedStudent) {
        Course course = courseService.getCourse(commentDto.getCourseId()).orElseThrow(() ->
                new RuntimeException("Course with id = " + commentDto.getCourseId() + " does not exist"));
        return Comment.builder()
                .comment(commentDto.getComment())
                .timestamp(LocalDateTime.now())
                .student(loggedStudent)
                .course(course)
                .build();
    }

}
