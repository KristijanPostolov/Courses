package com.awd.courses.courses_backend.repository;

import com.awd.courses.courses_backend.model.Student;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StudentRepository extends JpaRepository<Student, Integer> {

    Student findByUsername(String username);

}
