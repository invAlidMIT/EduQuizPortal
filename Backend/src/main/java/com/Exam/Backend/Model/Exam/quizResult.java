package com.Exam.Backend.Model.Exam;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Entity
public class quizResult {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;

    private String username;
    private int marksGot;
    private int attempted;
    private int correctAnswers;

    @ManyToOne(fetch = FetchType.EAGER)
    private Quiz quiz;

}
