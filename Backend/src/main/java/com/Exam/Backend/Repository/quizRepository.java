package com.Exam.Backend.Repository;

import com.Exam.Backend.Model.Exam.Category;
import com.Exam.Backend.Model.Exam.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;


public interface quizRepository extends JpaRepository<Quiz,Long> {

    public List<Quiz> findBycategory(Category category);
}
