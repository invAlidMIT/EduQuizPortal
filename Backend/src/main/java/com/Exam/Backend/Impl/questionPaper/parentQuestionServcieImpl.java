package com.Exam.Backend.Impl.questionPaper;

import com.Exam.Backend.Model.questionPaper.parentQuestion;
import com.Exam.Backend.Model.questionPaper.QuestionPaper;
import com.Exam.Backend.Repository.questionPaper.parentQuestionRepository;
import com.Exam.Backend.Service.questionPaper.parentQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class parentQuestionServcieImpl implements parentQuestionService {

    @Autowired
    private parentQuestionRepository parentQuestionRepository;

    @Override
    public parentQuestion addQuestion(parentQuestion parentQuestion) {
        return this.parentQuestionRepository.save(parentQuestion);
    }

    @Override
    public parentQuestion updateQuestion(Long id, parentQuestion parentQuestion) throws Exception {
        Optional<parentQuestion> question1=this.parentQuestionRepository.findById(id);
        if(question1.isPresent()){
            parentQuestion parentQuestion2 =question1.get();
            parentQuestion2.setMarks(parentQuestion.getMarks());
            parentQuestion2.setBtl(parentQuestion.getBtl());
            parentQuestion2.setCo(parentQuestion.getCo());
            parentQuestion2.setQuestionContent(parentQuestion.getQuestionContent());
            parentQuestion2.setQuestionPaper(parentQuestion.getQuestionPaper());
            return this.parentQuestionRepository.save(parentQuestion2);
        }
        throw new Exception("Question not found with id "+id);
    }

    @Override
    public List<parentQuestion> getAllQuestions() {
        return this.parentQuestionRepository.findAll();
    }

    @Override
    public parentQuestion getQuestionById(Long qId) {
        return this.parentQuestionRepository.findById(qId).get();
    }

    @Override
    public void deleteQuestion(Long qId) {

        parentQuestion parentQuestion =new parentQuestion();
        parentQuestion.setQid(qId);
        this.parentQuestionRepository.delete(parentQuestion);

    }

    @Override
    public List<parentQuestion> getQuestionsOfQuestionPaper(QuestionPaper questionPaper) {
        return this.parentQuestionRepository.findByQuestionPaper(questionPaper);
    }


}
