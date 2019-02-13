package com.awd.courses.courses_backend.controller;

import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.dto.RegisterStudentDto;
import com.awd.courses.courses_backend.model.dto.StudentDto;
import com.awd.courses.courses_backend.service.StudentService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;

@RestController
@RequestMapping("/api/students")
public class StudentController {

    private final StudentService studentService;

    public StudentController(StudentService studentService) {
        this.studentService = studentService;
    }

    @PostMapping
    public StudentDto registerStudent(@RequestBody @Valid RegisterStudentDto registerStudentDto) {
        return studentService.registerStudent(registerStudentDto);
    }

    @GetMapping("/loggedUser")
    public StudentDto getLoggedUser(Authentication authentication) {
        return studentService.getLoggedUser(authentication);
    }
}
