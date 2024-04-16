package com.Exam.Backend.Service.questionPaper;

import com.Exam.Backend.Model.questionPaper.parentQuestion;
import com.Exam.Backend.Model.questionPaper.subQuestion;

import java.util.List;

public interface subQuestionService {

   public subQuestion addSubQuestion(subQuestion subQuestion);
   public subQuestion updateSubQuestion(Long id, subQuestion subQuestion) throws Exception;
   public List<subQuestion> getAllSubQuestions();
   public subQuestion getSubQuestionById(Long subQId);
   public void deleteSubQuestion(Long subQId);
   public List<subQuestion> getSubQuestionsOfParentQuestion(parentQuestion parentQuestion);

}
