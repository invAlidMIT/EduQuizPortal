package com.Exam.Backend.Repository;

import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Model.Exam.quizResult;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface quizResultRepository extends JpaRepository<quizResult,Integer> {
    List<quizResult> findByQuiz(Quiz quiz);
    Optional<quizResult> findByQuizAndUsername(Quiz quiz, String username);
}
