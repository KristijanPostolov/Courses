package com.awd.courses.courses_backend.service;

import com.awd.courses.courses_backend.model.Course;
import com.awd.courses.courses_backend.repository.CourseRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class CourseService {

    private final Logger log = LoggerFactory.getLogger(CourseService.class);

    private final CourseRepository repository;

    public CourseService(CourseRepository repository) {
        this.repository = repository;
    }

    public Optional<Course> getCourse(int id) {
        log.info("Getting course with id: [{}]", id);
        return repository.findById(id);
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
