package com.Exam.Backend.Impl;

import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Model.Exam.quizResult;
import com.Exam.Backend.Repository.quizResultRepository;
import com.Exam.Backend.Service.quizResultService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class quizResultServiceImpl implements quizResultService {

    @Autowired
    private quizResultRepository quizResultRepository;


    @Override
    public List<quizResult> getAllQuizResults() {
        return quizResultRepository.findAll();
    }

    @Override
    public List<quizResult> getQuizResultsOfQuiz(Quiz quiz) {
        return quizResultRepository.findByQuiz(quiz);
    }

    @Override
    public quizResult saveQuizResult(quizResult quizResult) {
        return quizResultRepository.save(quizResult);
    }

    @Override
    public void deleteQuizResult(int id) {
        quizResult quizResult=new quizResult();
        quizResult.setId(id);
        this.quizResultRepository.delete(quizResult);
    }

    @Override
    public Optional<quizResult> getQuizResultByUsernameAndQuiz(String username, Quiz quiz) {
        return quizResultRepository.findByQuizAndUsername(quiz, username);
    }


}
