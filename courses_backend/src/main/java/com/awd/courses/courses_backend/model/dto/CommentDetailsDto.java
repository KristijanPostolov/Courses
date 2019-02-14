package com.awd.courses.courses_backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CommentDetailsDto {

    private String comment;
    private String author;
    private int courseId;

}
