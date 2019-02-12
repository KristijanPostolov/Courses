package com.awd.courses.courses_backend.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    private String comment;

    @Column(name = "timestamp")
    private LocalDateTime timestamp;

    @ManyToOne
    private Student student;

    @ManyToOne
    private Course course;


    public Comment(String comment, LocalDateTime timestamp, Student student, Course course) {
        this.comment = comment;
        this.timestamp = timestamp;
        this.student = student;
        this.course = course;
    }

}
