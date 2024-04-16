package com.Exam.Backend.Service.questionPaper;



import com.Exam.Backend.Model.questionPaper.parentQuestion;
import com.Exam.Backend.Model.questionPaper.QuestionPaper;

import java.util.List;

public interface parentQuestionService {

    public parentQuestion addQuestion(parentQuestion parentQuestion);
    public parentQuestion updateQuestion(Long id, parentQuestion parentQuestion) throws Exception;
    public List<parentQuestion> getAllQuestions();
    public parentQuestion getQuestionById(Long qId);
    public void deleteQuestion(Long qId);
    public List<parentQuestion> getQuestionsOfQuestionPaper(QuestionPaper questionPaper);

}