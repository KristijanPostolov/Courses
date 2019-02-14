package com.awd.courses.courses_backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class CourseDetails {

    private int id;
    private String name;
    private int year;
    private String description;

    private List<CommentDetailsDto> comments;
    private List<CourseFileDto> courseFiles;

}
