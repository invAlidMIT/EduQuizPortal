package com.Exam.Backend.Repository.questionPaper;

import com.Exam.Backend.Model.questionPaper.Questions;
import com.Exam.Backend.Model.questionPaper.QuestionPaper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface questionsRepository extends JpaRepository<Questions,Long> {

    public List<Questions> findByQuestionPaper(QuestionPaper questionPaper);

}
