package com.Exam.Backend.Repository.questionPaper;

import com.Exam.Backend.Model.questionPaper.parentQuestion;
import com.Exam.Backend.Model.questionPaper.QuestionPaper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface parentQuestionRepository extends JpaRepository<parentQuestion,Long> {

    public List<parentQuestion> findByQuestionPaper(QuestionPaper questionPaper);

}