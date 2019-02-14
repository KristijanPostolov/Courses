package com.awd.courses.courses_backend.controller;

import com.awd.courses.courses_backend.model.Course;
import com.awd.courses.courses_backend.model.dto.CourseDetails;
import com.awd.courses.courses_backend.service.CourseService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/courses")
public class CourseController {

    private final CourseService courseService;

    public CourseController(CourseService courseService) {
        this.courseService = courseService;
    }

    @GetMapping
    public List<Course> getCoursesByName(@RequestParam(name = "query") String query) {
        return courseService.getCoursesByName(query);
    }

    @GetMapping("/{id}")
    public ResponseEntity<Course> getCourse(@PathVariable int id) {
        return courseService.getCourse(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @GetMapping("/{id}/details")
    public ResponseEntity<CourseDetails> getCourseDetails(@PathVariable int id) {
        return courseService.getCourseDetails(id)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    @PostMapping
    public Course addCourse(@RequestBody Course course) {
        return courseService.addCourse(course);
    }

}
