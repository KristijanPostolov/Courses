package com.awd.courses.courses_backend.service.converter;

import com.awd.courses.courses_backend.model.Comment;
import com.awd.courses.courses_backend.model.Course;
import com.awd.courses.courses_backend.model.dto.CommentDetailsDto;
import com.awd.courses.courses_backend.model.dto.CourseDetails;
import com.awd.courses.courses_backend.model.dto.CourseFileDto;
import com.awd.courses.courses_backend.service.CourseFileService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class CourseConverter {

    private final CommentConverter commentConverter;
    private final CourseFileService courseFileService;

    public CourseConverter(CommentConverter commentConverter, CourseFileService courseFileService) {
        this.commentConverter = commentConverter;
        this.courseFileService = courseFileService;
    }

    public CourseDetails toCourseDetails(Course course, List<Comment> comments) {
        List<CommentDetailsDto> commentDetailsDtos = comments.stream()
                .map(commentConverter::toCommentDetails)
                .collect(Collectors.toList());
        List<CourseFileDto> courseFiles = courseFileService.getFiles(course.getId());

        return CourseDetails.builder()
                .id(course.getId())
                .name(course.getName())
                .description(course.getDescription())
                .year(course.getYear())
                .comments(commentDetailsDtos)
                .courseFiles(courseFiles)
                .build();
    }

}
