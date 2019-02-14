package com.awd.courses.courses_backend.model.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CourseFileDto {

    private int fileId;
    private String fileName;
    private String fileType;

}
