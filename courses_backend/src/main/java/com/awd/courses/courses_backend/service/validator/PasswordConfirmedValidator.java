package com.awd.courses.courses_backend.service.validator;

import com.awd.courses.courses_backend.annotations.PasswordConfirmed;
import com.awd.courses.courses_backend.model.dto.RegisterStudentDto;

import javax.validation.ConstraintValidator;
import javax.validation.ConstraintValidatorContext;
import java.util.Objects;

public class PasswordConfirmedValidator implements ConstraintValidator<PasswordConfirmed, RegisterStudentDto> {

    @Override
    public void initialize(PasswordConfirmed constraintAnnotation) {
    }

    @Override
    public boolean isValid(RegisterStudentDto registerStudentDto, ConstraintValidatorContext constraintValidatorContext) {
        return registerStudentDto != null &&
                Objects.equals(registerStudentDto.getPassword(), registerStudentDto.getConfirmPassword());
    }

}
