package com.awd.courses.courses_backend.model.dto;

import lombok.*;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentDto {

    @NotNull
    @NotEmpty
    private String comment;

    @NotNull
    private Integer courseId;

}
