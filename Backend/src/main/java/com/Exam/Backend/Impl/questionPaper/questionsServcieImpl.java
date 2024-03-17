package com.Exam.Backend.Impl.questionPaper;

import com.Exam.Backend.Model.questionPaper.Questions;
import com.Exam.Backend.Model.questionPaper.QuestionPaper;
import com.Exam.Backend.Repository.questionPaper.questionsRepository;
import com.Exam.Backend.Service.questionPaper.questionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class questionsServcieImpl implements questionsService {

    @Autowired
    private questionsRepository questionsRepository;

    @Override
    public Questions addQuestion(Questions questions) {
        return this.questionsRepository.save(questions);
    }

    @Override
    public Questions updateQuestion(Long id, Questions questions) throws Exception {
        Optional<Questions> question1=this.questionsRepository.findById(id);
        if(question1.isPresent()){
            Questions questions2 =question1.get();
            questions2.setMarks(questions.getMarks());
            questions2.setBtl(questions.getBtl());
            questions2.setCo(questions.getCo());
            questions2.setQuestionContent(questions.getQuestionContent());
            questions2.setQuestionPaper(questions.getQuestionPaper());
            return this.questionsRepository.save(questions2);
        }
        throw new Exception("Question not found with id "+id);
    }

    @Override
    public List<Questions> getAllQuestions() {
        return this.questionsRepository.findAll();
    }

    @Override
    public Questions getQuestionById(Long qId) {
        return this.questionsRepository.findById(qId).get();
    }

    @Override
    public void deleteQuestion(Long qId) {

        Questions questions =new Questions();
        questions.setQid(qId);
        this.questionsRepository.delete(questions);

    }

    @Override
    public List<Questions> getQuestionsOfQuestionPaper(QuestionPaper questionPaper) {
        return this.questionsRepository.findByQuestionPaper(questionPaper);
    }


}
