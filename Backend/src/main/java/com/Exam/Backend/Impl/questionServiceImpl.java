package com.Exam.Backend.Impl;

import com.Exam.Backend.Model.Exam.Question;
import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Service.questionService;
import org.springframework.beans.factory.annotation.Autowired;
import com.Exam.Backend.Repository.questionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class questionServiceImpl implements questionService {

    @Autowired
    private questionRepository questionRepository;

    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public List<Question> getAllQuestions() {
        return this.questionRepository.findAll();
    }

    @Override
    public Question getQuestionById(Long qId) {
        return this.questionRepository.findById(qId).get();
    }

    @Override
    public void deleteQuestion(Long qId) {
        Question question=new Question();
        question.setQid(qId);
        this.questionRepository.delete(question);

    }

    @Override
    public List<Question> getQuestionsOfQuiz(Quiz quiz) {
       return this.questionRepository.findByQuiz(quiz);
    }
}
