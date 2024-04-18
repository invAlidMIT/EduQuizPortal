package com.Exam.Backend.Model.Exam;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "quiz")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long qid;

    private String title;

    private String description;

    private String maxMarks;

    private String numberOfQuestions;

    private boolean active=false;

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @OneToMany(mappedBy = "quiz",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Question> questions=new ArrayList<>();

    @OneToMany(mappedBy = "quiz",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<quizResult> quizResults=new ArrayList<>();

}
