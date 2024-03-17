package com.Exam.Backend.Service.questionPaper;



import com.Exam.Backend.Model.questionPaper.Questions;
import com.Exam.Backend.Model.questionPaper.QuestionPaper;

import java.util.List;

public interface questionsService {

    public Questions addQuestion(Questions questions);
    public Questions updateQuestion(Long id, Questions questions) throws Exception;
    public List<Questions> getAllQuestions();
    public Questions getQuestionById(Long qId);
    public void deleteQuestion(Long qId);
    public List<Questions> getQuestionsOfQuestionPaper(QuestionPaper questionPaper);

}
