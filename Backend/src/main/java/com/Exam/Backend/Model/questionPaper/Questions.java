package com.Exam.Backend.Model.questionPaper;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class Questions {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long qid;
    private int marks;
    private String co;
    private String btl;
    private String questionContent;

    @ManyToOne(fetch = FetchType.EAGER)
    private QuestionPaper questionPaper;

}
