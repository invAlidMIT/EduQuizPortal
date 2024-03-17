package com.Exam.Backend.Repository.questionPaper;

import com.Exam.Backend.Model.questionPaper.QuestionPaper;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface questionPaperRepository extends JpaRepository<QuestionPaper,Long> {
}
