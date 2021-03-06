package com.awd.courses.courses_backend.repository;

import com.awd.courses.courses_backend.model.CourseFile;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CourseFileRepository extends JpaRepository<CourseFile, Integer> {

    List<CourseFile> findByCourseId(int courseId);

}
