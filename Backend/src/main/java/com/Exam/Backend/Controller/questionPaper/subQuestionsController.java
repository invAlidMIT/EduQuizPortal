package com.Exam.Backend.Controller.questionPaper;

import com.Exam.Backend.Model.questionPaper.parentQuestion;
import com.Exam.Backend.Model.questionPaper.subQuestion;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.bind.annotation.RestController;
import com.Exam.Backend.Service.questionPaper.subQuestionService;

import java.util.List;

@RestController
@RequestMapping("/subQuestions")
@CrossOrigin(origins = "http://localhost:4200")
public class subQuestionsController {

    @Autowired
    private  subQuestionService subQuestionService;


    @PostMapping("/add")
    public ResponseEntity<subQuestion> addSubQuestion(@RequestBody subQuestion subQuestion) {
        subQuestion newSubQuestion = subQuestionService.addSubQuestion(subQuestion);
        return new ResponseEntity<>(newSubQuestion, HttpStatus.CREATED);
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<subQuestion> updateSubQuestion(@PathVariable("id") Long id, @RequestBody subQuestion subQuestion) {
        try {
            subQuestion updatedSubQuestion = subQuestionService.updateSubQuestion(id, subQuestion);
            return new ResponseEntity<>(updatedSubQuestion, HttpStatus.OK);
        } catch (Exception e) {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @GetMapping("/all")
    public ResponseEntity<List<subQuestion>> getAllSubQuestions() {
        List<subQuestion> subQuestions = subQuestionService.getAllSubQuestions();
        return new ResponseEntity<>(subQuestions, HttpStatus.OK);
    }

    @GetMapping("/{id}")
    public ResponseEntity<subQuestion> getSubQuestionById(@PathVariable("id") Long subQId) {
        subQuestion subQ = subQuestionService.getSubQuestionById(subQId);
        return subQ != null ? new ResponseEntity<>(subQ, HttpStatus.OK) : new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteSubQuestion(@PathVariable("id") Long subQId) {
        subQuestionService.deleteSubQuestion(subQId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/parentQuestion/{id}")
    public ResponseEntity<List<subQuestion>> getSubQuestionsOfParentQuestion(@PathVariable("id") Long parentId) {
        parentQuestion parentQ = new parentQuestion();
        parentQ.setQid(parentId);
        List<subQuestion> subQuestions = subQuestionService.getSubQuestionsOfParentQuestion(parentQ);
        return new ResponseEntity<>(subQuestions, HttpStatus.OK);
    }
}
