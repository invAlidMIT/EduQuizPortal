package com.Exam.Backend.Repository;

import com.Exam.Backend.Model.Exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface quizRepository extends JpaRepository<Quiz,Long> {
}
