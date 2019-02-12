package com.awd.courses.courses_backend.controller;

import com.awd.courses.courses_backend.model.Comment;
import com.awd.courses.courses_backend.model.dto.CommentDto;
import com.awd.courses.courses_backend.service.CommentService;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/comments")
public class CommentController {

    private final CommentService commentService;

    public CommentController(CommentService commentService) {
        this.commentService = commentService;
    }

    @GetMapping
    public List<Comment> getCommentsForCourse(@RequestParam("courseId") int courseId) {
        return commentService.getCommentsByCourse(courseId);
    }

    @PostMapping
    public Comment postComment(@RequestBody @Valid CommentDto commentDto, Authentication authentication) {
        return commentService.postComment(commentDto, authentication);
    }
}
