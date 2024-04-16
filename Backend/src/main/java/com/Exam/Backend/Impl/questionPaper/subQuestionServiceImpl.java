package com.Exam.Backend.Impl.questionPaper;

import com.Exam.Backend.Model.questionPaper.parentQuestion;
import com.Exam.Backend.Model.questionPaper.subQuestion;
import com.Exam.Backend.Repository.questionPaper.subQuestionRepository;
import com.Exam.Backend.Service.questionPaper.subQuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class subQuestionServiceImpl implements subQuestionService {

    @Autowired
    private  subQuestionRepository subQuestionRepository;


    @Override
    public subQuestion addSubQuestion(subQuestion subQuestion) {
        return subQuestionRepository.save(subQuestion);
    }

    @Override
    public subQuestion updateSubQuestion(Long id, subQuestion subQuestion) throws Exception {
        subQuestion existingSubQuestion = subQuestionRepository.findById(id)
                .orElseThrow(() -> new Exception("Sub question not found for id: " + id));

        existingSubQuestion.setMarks(subQuestion.getMarks());
        existingSubQuestion.setCo(subQuestion.getCo());
        existingSubQuestion.setBtl(subQuestion.getBtl());
        existingSubQuestion.setQuestionContent(subQuestion.getQuestionContent());
        return subQuestionRepository.save(existingSubQuestion);
    }

    @Override
    public List<subQuestion> getAllSubQuestions() {
        return subQuestionRepository.findAll();
    }

    @Override
    public subQuestion getSubQuestionById(Long subQId) {
        return subQuestionRepository.findById(subQId).orElse(null);
    }

    @Override
    public void deleteSubQuestion(Long subQId) {
        subQuestion subQuestion=new subQuestion();
        subQuestion.setQid(subQId);
        subQuestionRepository.delete(subQuestion);
    }

    @Override
    public List<subQuestion> getSubQuestionsOfParentQuestion(parentQuestion parentQuestion) {
        return subQuestionRepository.findByParentQuestion(parentQuestion);
    }
}
