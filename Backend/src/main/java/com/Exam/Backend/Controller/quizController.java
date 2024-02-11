package com.Exam.Backend.Controller;

import com.Exam.Backend.Model.Exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Exam.Backend.Service.quizService;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/quiz")
public class quizController {

    @Autowired
    private quizService quizService;

    @PostMapping("/")
    public ResponseEntity<?> addQuiz(@RequestBody Quiz quiz){
        return ResponseEntity.ok(this.quizService.addQuiz(quiz));
    }

    @GetMapping("/")
    public List<Quiz> getAllQuizes(){
        return this.quizService.getAllQuizes();
    }

    @GetMapping("/{qid}")
    public Quiz getQuizById(@PathVariable Long qid){
        return this.quizService.getQuizById(qid);
    }

    @PutMapping("/")
    public Quiz updateQuiz(@RequestBody Quiz quiz){
        return this.quizService.updateQuiz(quiz);
    }

    @DeleteMapping("/{id}")
    public void deleteQuiz(@PathVariable Long id){
        this.quizService.deleteQuiz(id);
    }
}
