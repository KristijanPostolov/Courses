package com.awd.courses.courses_backend.model;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "course_file")
public class CourseFile {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "file_name")
    private String fileName;

    @Column(name = "file_type")
    private String fileType;

    @Lob
    private byte[] data;

    @ManyToOne
    private Student student;

    @ManyToOne
    private Course course;

    public CourseFile(String fileName, byte[] data, Student student, Course course) {
        this.fileName = fileName;
        this.data = data;
        this.student = student;
        this.course = course;
    }
}
