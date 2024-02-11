package com.Exam.Backend.Impl;
import com.Exam.Backend.Model.Exam.Category;
import com.Exam.Backend.Service.categoryService;
import org.springframework.beans.factory.annotation.Autowired;
import com.Exam.Backend.Repository.categoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class categoryServiceImpl implements categoryService {

    @Autowired
    private categoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public List<Category> getAllCategories() {
        return this.categoryRepository.findAll();
    }

    @Override
    public Category getCategoryById(Long categoryId) {
        return this.categoryRepository.findById(categoryId).get();
    }

    @Override
    public void deleteCategory(Long categoryId) {
            Category category=new Category();
            category.setCid(categoryId);
            this.categoryRepository.delete(category);
    }
}
