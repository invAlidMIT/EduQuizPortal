package com.Exam.Backend.Controller;

import com.Exam.Backend.Model.Exam.Category;
import com.Exam.Backend.Model.Exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Exam.Backend.Service.quizService;

import java.util.List;


@RestController
@RequestMapping("/quiz")
@CrossOrigin(origins = "http://localhost:4200")
public class quizController {

    @Autowired
    private quizService quizService;

    @PostMapping("/")
    public Quiz addQuiz(@RequestBody Quiz quiz) {
        return this.quizService.addQuiz(quiz);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllQuizzes() {
        return ResponseEntity.ok(this.quizService.getAllQuizzes());
    }

    @GetMapping("/{qid}")
    public Quiz getQuizById(@PathVariable Long qid) {
        return this.quizService.getQuizById(qid);
    }

    @PutMapping("/{id}")
    public Quiz updateQuiz(@PathVariable Long id, @RequestBody Quiz quiz) throws Exception {
        return this.quizService.updateQuiz(id, quiz);
    }

    @DeleteMapping("/{qid}")
    public void deleteQuiz(@PathVariable Long qid) throws Exception {
        this.quizService.deleteQuiz(qid);
    }

    @GetMapping("/category/{cid}")
    public ResponseEntity<?> getQuizzesOfCategory(@PathVariable Long cid ){

        Category category=new Category();
        category.setCid(cid);
        return ResponseEntity.ok(this.quizService.getQuizzesOfCategory(category));
    }

    @GetMapping("/active")
    public ResponseEntity<?> getActiveQuizzes(){
        return ResponseEntity.ok(this.quizService.getActiveQuizzes());
    }

    @GetMapping("/category/active/{cid}")
    public ResponseEntity<?> getActiveQuizzes(@PathVariable Long cid) {

        Category category = new Category();
        category.setCid(cid);

        return ResponseEntity.ok(this.quizService.getActvieQuizzesOfCategory(category));


    }
}
