package com.awd.courses.courses_backend.service.converter;

import com.awd.courses.courses_backend.model.Course;
import com.awd.courses.courses_backend.model.CourseFile;
import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.dto.CourseFileDto;
import com.awd.courses.courses_backend.repository.CourseRepository;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;

@Service
public class CourseFileConverter {

    private final CourseRepository courseRepository;

    public CourseFileConverter(CourseRepository courseRepository) {
        this.courseRepository = courseRepository;
    }

    public CourseFile toDomainModel(MultipartFile file, int courseId, Student loggedStudent) throws IOException {
        Course course = courseRepository.findById(courseId).orElseThrow(() ->
                new RuntimeException("Course with id = " + courseId + " does not exist"));

        String fileName = StringUtils.cleanPath(file.getOriginalFilename());
        return CourseFile.builder()
                .fileName(fileName)
                .fileType(file.getContentType())
                .data(file.getBytes())
                .course(course)
                .student(loggedStudent)
                .build();
    }

    public CourseFileDto toPresentationModel(CourseFile courseFile) {
        return CourseFileDto.builder()
                .fileId(courseFile.getId())
                .fileName(courseFile.getFileName())
                .fileType(courseFile.getFileType())
                .build();
    }

}
