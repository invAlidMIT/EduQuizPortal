package com.Exam.Backend.Service;

import com.Exam.Backend.Model.Exam.Category;
import com.Exam.Backend.Model.Exam.Quiz;
import org.springframework.http.ResponseEntity;

import java.util.List;

public interface quizService {

    public Quiz addQuiz(Quiz quiz);
    public Quiz updateQuiz(Long id,Quiz quiz) throws Exception;
    public List<Quiz> getAllQuizzes();
    public void deleteQuiz(Long qid) throws Exception;
    public Quiz getQuizById(Long quizId);
    public List<Quiz> getQuizzesOfCategory(Category category);
}
