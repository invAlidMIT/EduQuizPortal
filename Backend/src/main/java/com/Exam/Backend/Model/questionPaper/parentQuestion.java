package com.Exam.Backend.Model.questionPaper;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.ArrayList;
import java.util.List;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class parentQuestion {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long qid;
    private int marks;
    private String co;
    private String btl;
    private String questionContent;

    @ManyToOne(fetch = FetchType.EAGER)
    private QuestionPaper questionPaper;


    @OneToMany(mappedBy = "parentQuestion",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<subQuestion> subQuestions=new ArrayList<>();

}