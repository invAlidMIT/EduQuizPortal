package com.Exam.Backend.Service.questionPaper;



import com.Exam.Backend.Model.questionPaper.QuestionPaper;

import java.util.List;

public interface questionPaperService {
    public QuestionPaper addQuestionPaper(QuestionPaper questionPaper);
    public QuestionPaper updateQuestionPaper(Long id,QuestionPaper questionPaper) throws Exception;
    public List<QuestionPaper> getAllQuestionPapers();
    public void deleteQuestionPaper(Long qid) throws Exception;
    public QuestionPaper getQuestionPaperById(Long quizId);

}
