package com.Exam.Backend.Impl;

import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Repository.quizRepository;
import com.Exam.Backend.Service.quizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class quizServiceImpl implements quizService {

    @Autowired
    private quizRepository  quizRepository;
    @Override
    public Quiz addQuiz(Quiz quiz) {
        return this.quizRepository.save(quiz);
    }

    @Override
    public Quiz updateQuiz(Long id,Quiz quiz) throws Exception {
        Optional<Quiz> quiz1=this.quizRepository.findById(id);
        if(quiz1.isPresent()){
            Quiz quiz2=quiz1.get();
            quiz2.setTitle(quiz.getTitle());
            quiz2.setMaxMarks(quiz.getMaxMarks());
            quiz2.setCategory(quiz.getCategory());
            quiz2.setDescription(quiz.getDescription());
            quiz2.setNumberOfQuestions(quiz.getNumberOfQuestions());
            return this.quizRepository.save(quiz2);
        }
        throw new Exception("Quiz Not Found!!");
    }

    @Override
    public List<Quiz> getAllQuizzes() {
        return this.quizRepository.findAll();
    }

    @Override
    public void deleteQuiz(Long quizId) {
        Quiz quiz=new Quiz();
        quiz.setQid(quizId);
        this.quizRepository.deleteById(quizId);

    }

    @Override
    public Quiz getQuizById(Long quizId) {
        return this.quizRepository.findById(quizId).get();
    }
}