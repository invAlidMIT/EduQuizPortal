package com.Exam.Backend.Repository.questionPaper;

import com.Exam.Backend.Model.questionPaper.QuestionPaper;
import com.Exam.Backend.Model.questionPaper.parentQuestion;
import com.Exam.Backend.Model.questionPaper.subQuestion;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface subQuestionRepository extends JpaRepository<subQuestion, Long> {

    public List<subQuestion> findByParentQuestion(parentQuestion parentQuestion);
}
