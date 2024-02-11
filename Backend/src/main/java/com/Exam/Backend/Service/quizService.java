package com.Exam.Backend.Service;

import com.Exam.Backend.Model.Exam.Quiz;

import java.util.List;

public interface quizService {

    public Quiz addQuiz(Quiz quiz);
    public Quiz updateQuiz(Quiz quiz);
    public List<Quiz> getAllQuizes();
    public void deleteQuiz(Long quizId);
    public Quiz getQuizById(Long quizId);
}
