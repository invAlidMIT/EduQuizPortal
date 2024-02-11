package com.Exam.Backend.Service;

import com.Exam.Backend.Model.Exam.Question;
import com.Exam.Backend.Model.Exam.Quiz;

import java.util.List;

public interface questionService {

    public Question addQuestion(Question question);
    public Question updateQuestion(Question question);
    public List<Question> getAllQuestions();
    public Question getQuestionById(Long qId);
    public void deleteQuestion(Long qId);
    public List<Question> getQuestionsOfQuiz(Quiz quiz);



}
