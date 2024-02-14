package com.Exam.Backend.Service;

import com.Exam.Backend.Model.Exam.Category;

import java.util.List;

public interface categoryService {

    public Category addCategory(Category category);
    public Category updateCategory(Long id,Category category) throws Exception;
    public List<Category> getAllCategories();
    public Category getCategoryById(Long categoryId);
    public void deleteCategory(Long categoryId);
}
