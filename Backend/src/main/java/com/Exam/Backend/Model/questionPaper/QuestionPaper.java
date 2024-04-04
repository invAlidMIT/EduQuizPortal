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
@Table(name = "questionPaper")
@NoArgsConstructor
@AllArgsConstructor
@Setter
@Getter
public class QuestionPaper {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long qid;
    private String collegeName;
    private String institutionName;
    private String department;
    private String examType;
    private String semester;
    private String test;
    private String subjectCode;
    private String faculty;
    private String time;
    private String note;
    private int maxMarks;
    private String co1,co2,co3,co4;

    @OneToMany(mappedBy = "questionPaper",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Questions> questions=new ArrayList<>();

}
