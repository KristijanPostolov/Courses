package com.awd.courses.courses_backend.repository;

import com.awd.courses.courses_backend.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment, Integer> {

    List<Comment> findByCourseIdOrderByTimestampDesc(Integer courseId);

}
