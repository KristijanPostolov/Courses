package com.awd.courses.courses_backend.annotations;

import com.awd.courses.courses_backend.service.validator.PasswordConfirmedValidator;

import javax.validation.Constraint;
import javax.validation.Payload;
import java.lang.annotation.*;

@Target({ElementType.TYPE, ElementType.ANNOTATION_TYPE})
@Retention(RetentionPolicy.RUNTIME)
@Constraint(validatedBy = PasswordConfirmedValidator.class)
@Documented
public @interface PasswordConfirmed {
    String message() default "Password confirmation does not match.";
    Class<?>[] groups() default {};
    Class<? extends Payload>[] payload() default {};
}
