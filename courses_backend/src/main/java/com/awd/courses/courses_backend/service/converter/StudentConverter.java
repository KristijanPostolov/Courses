package com.awd.courses.courses_backend.service.converter;

import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.dto.RegisterStudentDto;
import com.awd.courses.courses_backend.model.dto.StudentDto;
import org.springframework.stereotype.Service;

@Service
public class StudentConverter {

    public Student registrationDataToDomainModel(RegisterStudentDto registerStudentDto) {
        return Student.builder()
                .username(registerStudentDto.getUsername())
                .password(registerStudentDto.getPassword())
                .firstName(registerStudentDto.getFirstName())
                .lastName(registerStudentDto.getLastName())
                .build();
    }

    public StudentDto toPresentationModel(Student student) {
        return StudentDto.builder()
                .firstName(student.getFirstName())
                .lastName(student.getLastName())
                .username(student.getUsername())
                .build();
    }

}
