package com.Exam.Backend.Impl;

import com.Exam.Backend.Model.Exam.Question;
import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Service.questionService;
import org.springframework.beans.factory.annotation.Autowired;
import com.Exam.Backend.Repository.questionRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.OptionalInt;

@Service
public class questionServiceImpl implements questionService {

    @Autowired
    private questionRepository questionRepository;

    @Override
    public Question addQuestion(Question question) {
        return this.questionRepository.save(question);
    }

    @Override
    public Question updateQuestion(Long id,Question question) throws Exception {
        Optional<Question> question1=this.questionRepository.findById(id);
        if(question1.isPresent()){
            Question question2=question1.get();
            question2.setImage(question.getImage());
            question2.setContent(question.getContent());
            question2.setAnswer(question.getAnswer());
            question2.setOption1(question.getOption1());
            question2.setOption2(question.getOption2());
            question2.setOption3(question.getOption3());
            question2.setOption4(question.getOption4());
            return this.questionRepository.save(question2);
        }
        throw new Exception("Question Not Found!!");
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
