package com.Exam.Backend.Controller;

import com.Exam.Backend.Model.Exam.Quiz;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.Exam.Backend.Service.quizService;


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
}
