package com.Exam.Backend.Impl;
import com.Exam.Backend.Model.Exam.Category;
import com.Exam.Backend.Service.categoryService;
import org.springframework.beans.factory.annotation.Autowired;
import com.Exam.Backend.Repository.categoryRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class categoryServiceImpl implements categoryService {

    @Autowired
    private categoryRepository categoryRepository;

    @Override
    public Category addCategory(Category category) {
        return this.categoryRepository.save(category);
    }

    @Override
    public Category updateCategory(Long id,Category category) throws Exception {
        Optional<Category> category1=this.categoryRepository.findById(id);
        if(category1.isPresent()){
            Category category2=category1.get();
            category2.setDescription(category.getDescription());
            category2.setTitle(category.getTitle());
            return this.categoryRepository.save(category2);
        }
        throw new Exception("Category not found!!");
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
