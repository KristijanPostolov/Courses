package com.awd.courses.courses_backend.repository;

import com.awd.courses.courses_backend.model.Course;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseRepository extends JpaRepository<Course, Integer> {

    List<Course> findByNameContaining(String name);

}
