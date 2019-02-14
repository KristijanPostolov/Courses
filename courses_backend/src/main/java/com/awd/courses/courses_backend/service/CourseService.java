package com.awd.courses.courses_backend.service;

import com.awd.courses.courses_backend.model.Comment;
import com.awd.courses.courses_backend.model.Course;
import com.awd.courses.courses_backend.model.dto.CourseDetails;
import com.awd.courses.courses_backend.repository.CourseRepository;
import com.awd.courses.courses_backend.service.converter.CourseConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private final Logger log = LoggerFactory.getLogger(CourseService.class);

    private final CourseRepository repository;
    private final CourseConverter courseConverter;
    private final CommentService commentService;

    public CourseService(CourseRepository repository, CourseConverter courseConverter, CommentService commentService) {
        this.repository = repository;
        this.courseConverter = courseConverter;
        this.commentService = commentService;
    }

    public Optional<Course> getCourse(int id) {
        log.info("Getting course with id: [{}]", id);
        return repository.findById(id);
    }

    public Optional<CourseDetails> getCourseDetails(int id) {
        List<Comment> comments = commentService.getCommentsByCourse(id);
        return getCourse(id).map(course -> courseConverter.toCourseDetails(course, comments));
    }

    public List<Course> getCoursesByName(String name) {
        log.info("Finding courses by name query: [{}]", name);
        return repository.findByNameContaining(name);
    }

    public Course addCourse(Course course) {
        log.info("Saving course: [{}]", course.getName());
        return repository.save(course);
    }
}
