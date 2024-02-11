package com.Exam.Backend.Controller;

import com.Exam.Backend.Model.Exam.Question;
import com.Exam.Backend.Model.Exam.Quiz;
import com.Exam.Backend.Service.questionService;
import com.Exam.Backend.Service.quizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/question")
public class questionController {

    @Autowired
    private questionService questionService;

    @Autowired
    private quizService quizService;

    @PostMapping("/")
    public ResponseEntity<?> addQuestion(@RequestBody Question question){
        return ResponseEntity.ok(this.questionService.addQuestion(question));
    }

    @GetMapping("/")
    public ResponseEntity<?> getAllQuestions(){
        return ResponseEntity.ok(this.questionService.getAllQuestions());
    }

    @GetMapping("/{id}")
    public Question getQuestionById(@PathVariable Long id){
        return this.questionService.getQuestionById(id);
    }

    @PutMapping("/")
    public Question updateQuestion(@RequestBody Question question){
        return this.questionService.updateQuestion(question);
    }

    @DeleteMapping("/{id}")
    public void deleteQuestion(@PathVariable Long id){
        this.questionService.deleteQuestion(id);
    }

    @GetMapping("/quiz/qId")
    public ResponseEntity<?> getAllQuestionsOfQuiz(@PathVariable Long id){

        Quiz quiz=this.quizService.getQuizById(id);
        List<Question> questions=quiz.getQuestions();
        List list=new ArrayList(questions);
        if(list.size()> Integer.parseInt(quiz.getNumberOfQuestions())){
            list=list.subList(0,Integer.parseInt(quiz.getNumberOfQuestions()+1));
        }
        Collections.shuffle(list);
        return ResponseEntity.ok(list);
    }



}
