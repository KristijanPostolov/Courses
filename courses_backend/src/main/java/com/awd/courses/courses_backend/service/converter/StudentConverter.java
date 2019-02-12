package com.awd.courses.courses_backend.service.converter;

import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.dto.RegisterStudentDto;
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

}
