package com.awd.courses.courses_backend.controller;

import com.awd.courses.courses_backend.model.CourseFile;
import com.awd.courses.courses_backend.model.dto.CourseFileDto;
import com.awd.courses.courses_backend.service.CourseFileService;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/courseFiles")
public class CourseFileController {

    private final CourseFileService courseFileService;

    public CourseFileController(CourseFileService courseFileService) {
        this.courseFileService = courseFileService;
    }

    // TODO: return response
    @PostMapping
    public ResponseEntity<CourseFileDto> storeFile(@RequestParam("file") MultipartFile multipartFile,
                                                   @RequestParam("courseId") int courseId,
                                                   Authentication authentication) {
        return courseFileService.storeFile(multipartFile, courseId, authentication)
                .map(ResponseEntity::ok)
                .orElse(ResponseEntity.badRequest().build());
    }

    @GetMapping("/{fileId}")
    public ResponseEntity<Resource> downloadFile(@PathVariable int fileId) {
        Optional<CourseFile> courseFile = courseFileService.getFile(fileId);
        if(courseFile.isPresent()) {
            CourseFile file = courseFile.get();
            return ResponseEntity.ok()
                    .contentType(MediaType.parseMediaType(file.getFileType()))
                    .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getFileName() + "\"")
                    .body(new ByteArrayResource(file.getData()));
        }
        return ResponseEntity.notFound().build();
    }

    @GetMapping
    public List<CourseFileDto> getFiles(@RequestParam("courseId") int courseId) {
        return courseFileService.getFiles(courseId);
    }
}
