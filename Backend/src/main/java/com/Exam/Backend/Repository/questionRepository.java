package com.Exam.Backend.Repository;

import com.Exam.Backend.Model.Exam.Question;
import com.Exam.Backend.Model.Exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface questionRepository extends JpaRepository<Question,Long> {
    List<Question> findByQuiz(Quiz quiz);
}
