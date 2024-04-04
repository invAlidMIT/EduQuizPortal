package com.Exam.Backend.Controller;

import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Model.Exam.quizResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.Exam.Backend.Service.quizResultService;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/quizResult")
@CrossOrigin(origins = "http://localhost:4200")
public class quizResultController {

    @Autowired
    private quizResultService quizResultService;

    @GetMapping("/all")
    public List<quizResult> getAllQuizResults() {
        return quizResultService.getAllQuizResults();
    }

    @GetMapping("/quiz/{qid}")
    public List<quizResult> getQuizResultsOfQuiz(@PathVariable long qid) {
        Quiz quiz = new Quiz();
        quiz.setQid(qid);
        return quizResultService.getQuizResultsOfQuiz(quiz);
    }

    @PostMapping("/")
    public quizResult addQuizResult(@RequestBody quizResult quizResult) {
        return quizResultService.saveQuizResult(quizResult);
    }

    @DeleteMapping("/{id}")
    public void deleteQuizResult(@PathVariable int id) {
        quizResultService.deleteQuizResult(id);
    }

    @GetMapping("/quiz/{username}/{qid}")
    public Optional<quizResult> getQuizResultByUsernameAndQuiz(@PathVariable String username, @PathVariable long qid) {
        Quiz quiz = new Quiz();
        quiz.setQid(qid);
        return quizResultService.getQuizResultByUsernameAndQuiz(username, quiz);
    }
}
