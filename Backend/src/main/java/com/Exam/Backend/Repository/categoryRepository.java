package com.Exam.Backend.Repository;

import com.Exam.Backend.Model.Exam.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface categoryRepository extends JpaRepository<Category,Long> {

}
