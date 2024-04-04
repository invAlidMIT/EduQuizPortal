package com.Exam.Backend.Service;


import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Model.Exam.quizResult;

import java.util.List;
import java.util.Optional;

public interface quizResultService {
    List<quizResult> getAllQuizResults();
    List<quizResult> getQuizResultsOfQuiz(Quiz quiz);
    quizResult saveQuizResult(quizResult quizResult);
    void deleteQuizResult(int id);
    Optional<quizResult> getQuizResultByUsernameAndQuiz(String username, Quiz quiz);
}
