package com.awd.courses.courses_backend.service;

import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.StudentUserDetails;
import com.awd.courses.courses_backend.model.dto.RegisterStudentDto;
import com.awd.courses.courses_backend.repository.StudentRepository;
import com.awd.courses.courses_backend.service.converter.StudentConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService implements UserDetailsService {

    private final Logger log = LoggerFactory.getLogger(StudentService.class);

    private final StudentRepository repository;
    private final StudentConverter converter;

    public StudentService(StudentRepository repository, StudentConverter converter) {
        this.repository = repository;
        this.converter = converter;
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Student student = repository.findByUsername(username);
        if (student == null) {
            log.info("Student with username [{}] does not exist", username);
            throw new UsernameNotFoundException("No students with the username " + username);
        }
        return new StudentUserDetails(student);
    }

    public Optional<Student> getStudent(int id) {
        log.info("Getting student with id: [{}]", id);
        return repository.findById(id);
    }

    public Student registerStudent(RegisterStudentDto registerStudentDto) {
        Student student = converter.registrationDataToDomainModel(registerStudentDto);
        log.info("Saving student: [{}]", student.getUsername());
        return repository.save(student);
    }

}
