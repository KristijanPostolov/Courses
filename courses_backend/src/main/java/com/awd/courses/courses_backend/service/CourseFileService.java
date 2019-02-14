package com.awd.courses.courses_backend.service;

import com.awd.courses.courses_backend.model.CourseFile;
import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.StudentUserDetails;
import com.awd.courses.courses_backend.model.dto.CourseFileDto;
import com.awd.courses.courses_backend.repository.CourseFileRepository;
import com.awd.courses.courses_backend.service.converter.CourseFileConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
public class CourseFileService {

    private final Logger log = LoggerFactory.getLogger(CourseFileService.class);

    private final CourseFileRepository courseFileRepository;
    private final CourseFileConverter courseFileConverter;

    public CourseFileService(CourseFileRepository courseFileRepository, CourseFileConverter courseFileConverter) {
        this.courseFileRepository = courseFileRepository;
        this.courseFileConverter = courseFileConverter;
    }

    public Optional<CourseFileDto> storeFile(MultipartFile multipartFile, int courseId, Authentication authentication) {
        Student loggedStudent = ((StudentUserDetails) authentication.getPrincipal()).getStudent();
        try {
            log.info("Saving file for course: [{}]", courseId);
            CourseFile courseFile = courseFileConverter.toDomainModel(multipartFile, courseId, loggedStudent);
            courseFile = courseFileRepository.save(courseFile);
            return Optional.of(courseFileConverter.toPresentationModel(courseFile));
        } catch (IOException e) {
            log.error("Saving file for course [{}], by student: [{}] failed",courseId, loggedStudent.getUsername());
            return Optional.empty();
        }
    }

    public Optional<CourseFile> getFile(int fileId) {
        return courseFileRepository.findById(fileId);
    }

    public List<CourseFileDto> getFiles(int courseId) {
        return courseFileRepository.findByCourseId(courseId).stream()
                .map(courseFileConverter::toPresentationModel)
                .collect(Collectors.toList());
    }
}
