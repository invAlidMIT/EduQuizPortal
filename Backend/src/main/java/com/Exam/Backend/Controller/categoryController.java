package com.Exam.Backend.Controller;

import com.Exam.Backend.Model.Exam.Category;
import com.Exam.Backend.Service.categoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/category")
@CrossOrigin(origins = "http://localhost:4200")
public class categoryController {

    @Autowired
    private categoryService categoryService;

    @PostMapping("/")
    public ResponseEntity<?> addCategory(@RequestBody Category category){
        Category c=this.categoryService.addCategory(category);
        return ResponseEntity.ok(c);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllCategories(){
        return ResponseEntity.ok(this.categoryService.getAllCategories());
    }

    @GetMapping("/{id}")
    public Category getCategoryById(@PathVariable Long id){
        return this.categoryService.getCategoryById(id);
    }

    @PutMapping("/")
    public Category updateCategory(@RequestBody Category category){
        return this.categoryService.updateCategory(category);
    }

    @DeleteMapping("/{id}")
    public void deleteCategory(@PathVariable Long id){
        this.categoryService.deleteCategory(id);
    }
}
