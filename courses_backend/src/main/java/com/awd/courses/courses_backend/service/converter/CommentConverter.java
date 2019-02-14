package com.awd.courses.courses_backend.service.converter;

import com.awd.courses.courses_backend.model.Comment;
import com.awd.courses.courses_backend.model.Course;
import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.dto.CommentDetailsDto;
import com.awd.courses.courses_backend.model.dto.CommentDto;
import com.awd.courses.courses_backend.repository.CourseRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;

@Service
public class CommentConverter {

    private final CourseRepository courseRepository;

    public CommentConverter(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public Comment toDomainModel(CommentDto commentDto, Student loggedStudent) {
        Course course = courseRepository.findById(commentDto.getCourseId()).orElseThrow(() ->
                new RuntimeException("Course with id = " + commentDto.getCourseId() + " does not exist"));
        return Comment.builder()
                .comment(commentDto.getComment())
                .timestamp(LocalDateTime.now())
                .student(loggedStudent)
                .course(course)
                .build();
    }

    public CommentDetailsDto toCommentDetails(Comment comment) {
        return CommentDetailsDto.builder()
                .comment(comment.getComment())
                .author(comment.getStudent().getUsername())
                .courseId(comment.getCourse().getId())
                .build();
    }

}
