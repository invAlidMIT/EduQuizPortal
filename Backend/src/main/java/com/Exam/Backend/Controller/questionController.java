package com.Exam.Backend.Controller;

import com.Exam.Backend.Model.Exam.Question;
import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Service.questionService;
import com.Exam.Backend.Service.quizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@RequestMapping("/question")
@CrossOrigin(origins = "http://localhost:4200")
public class questionController {

    @Autowired
    private questionService questionService;

    @Autowired
    private quizService quizService;

    @PostMapping("/")
    public Question addQuestion(@RequestBody Question question){
        return this.questionService.addQuestion(question);
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllQuestions(){
        return ResponseEntity.ok(this.questionService.getAllQuestions());
    }

    @GetMapping("/{id}")
    public Question getQuestionById(@PathVariable Long id){
        return this.questionService.getQuestionById(id);
    }

    @PutMapping("/{id}")
    public Question updateQuestion(@PathVariable Long id,@RequestBody Question question) throws Exception {
        return this.questionService.updateQuestion(id,question);
    }

    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id){
        this.questionService.deleteQuestion(id);
    }

    @GetMapping("/quiz/{qId}")
    public ResponseEntity<List<Question>> getAllQuestionsOfQuiz(@PathVariable Long qId) {
        try {
            Quiz quiz = this.quizService.getQuizById(qId);
            List<Question> questions = quiz.getQuestions();

            if (questions.size() > Integer.parseInt(quiz.getNumberOfQuestions())) {
                questions = questions.subList(0, Integer.parseInt(quiz.getNumberOfQuestions()) + 1);
            }

            Collections.shuffle(questions);
            return ResponseEntity.ok(questions);
        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).build();
        }
    }

    @GetMapping("/quiz/all/{qId}")
    public ResponseEntity<List<Question>> getAllQuestionsOfQuizAdmin(@PathVariable Long qId) {
       Quiz quiz=new Quiz();
       quiz.setQid(qId);
       List<Question> questions=this.questionService.getQuestionsOfQuiz(quiz);
       return  ResponseEntity.ok(questions);
    }





}
