package com.awd.courses.courses_backend.service;

import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.StudentUserDetails;
import com.awd.courses.courses_backend.model.dto.RegisterStudentDto;
import com.awd.courses.courses_backend.model.dto.StudentDto;
import com.awd.courses.courses_backend.repository.StudentRepository;
import com.awd.courses.courses_backend.service.converter.StudentConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class StudentService implements UserDetailsService {

    private final Logger log = LoggerFactory.getLogger(StudentService.class);

    private final StudentRepository repository;
    private final StudentConverter converter;
    private final PasswordEncoder passwordEncoder;

    public StudentService(StudentRepository repository, StudentConverter converter,
                          PasswordEncoder passwordEncoder) {
        this.repository = repository;
        this.converter = converter;
        this.passwordEncoder = passwordEncoder;
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

    public StudentDto registerStudent(RegisterStudentDto registerStudentDto) {
        Student student = converter.registrationDataToDomainModel(registerStudentDto);
        String hashedPassword = passwordEncoder.encode(registerStudentDto.getPassword());
        student.setPassword(hashedPassword);
        log.info("Saving student: [{}]", student.getUsername());
        Student savedStudent = repository.save(student);
        return converter.toPresentationModel(savedStudent);
    }

    public StudentDto getLoggedUser(Authentication authentication) {
        Student loggedStudent = (Student) authentication.getPrincipal();

        if (loggedStudent == null){
            return null;
        }

        return converter.toPresentationModel(loggedStudent);
    }
}
