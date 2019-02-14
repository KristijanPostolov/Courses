package com.awd.courses.courses_backend.service;

import com.awd.courses.courses_backend.model.Comment;
import com.awd.courses.courses_backend.model.Student;
import com.awd.courses.courses_backend.model.StudentUserDetails;
import com.awd.courses.courses_backend.model.dto.CommentDetailsDto;
import com.awd.courses.courses_backend.model.dto.CommentDto;
import com.awd.courses.courses_backend.repository.CommentRepository;
import com.awd.courses.courses_backend.service.converter.CommentConverter;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentService {

    private final Logger log = LoggerFactory.getLogger(CommentService.class);

    private final CommentRepository commentRepository;
    private final CommentConverter commentConverter;

    public CommentService(CommentRepository commentRepository, CommentConverter commentConverter) {
        this.commentRepository = commentRepository;
        this.commentConverter = commentConverter;
    }

    public List<Comment> getCommentsByCourse(int courseId) {
        log.info("Getting comments for course id: [{}]", courseId);
        return commentRepository.findByCourseIdOrderByTimestampDesc(courseId);
    }

    public CommentDetailsDto postComment(CommentDto commentDto, Authentication authentication) {
        Student loggedStudent = ((StudentUserDetails) authentication.getPrincipal()).getStudent();
        Comment comment = commentConverter.toDomainModel(commentDto, loggedStudent);
        log.info("Saving comment on course [{}], by user [{}]", comment.getCourse().getName(),
                loggedStudent.getUsername());
        return commentConverter.toCommentDetails(commentRepository.save(comment));
    }
}
