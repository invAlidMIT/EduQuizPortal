package com.Exam.Backend.Controller.questionPaper;

import com.Exam.Backend.Model.questionPaper.Questions;
import com.Exam.Backend.Model.questionPaper.QuestionPaper;
import com.Exam.Backend.Service.questionPaper.questionsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/questions")
@CrossOrigin(origins = "http://localhost:4200")
public class questionsController {

    @Autowired
    private questionsService questionsService;

    @PostMapping("/add")
    public Questions addQuestion(@RequestBody Questions questions) {
        return questionsService.addQuestion(questions);
    }

    @PutMapping("/update/{id}")
    public Questions updateQuestion(@PathVariable("id") Long id, @RequestBody Questions questions) throws Exception {
        return questionsService.updateQuestion(id, questions);
    }

    @GetMapping("/getAll")
    public List<Questions> getAllQuestions() {
        return questionsService.getAllQuestions();
    }

    @GetMapping("/{qId}")
    public Questions getQuestionById(@PathVariable("qId") Long qId) {
        return questionsService.getQuestionById(qId);
    }

    @DeleteMapping("/delete/{qId}")
    public void deleteQuestion(@PathVariable("qId") Long qId) {
        questionsService.deleteQuestion(qId);
    }

    @GetMapping("/getByQuestionPaper/{qid}")
    public List<Questions> getQuestionsOfQuestionPaper(@PathVariable Long qid) {
        QuestionPaper questionPaper = new QuestionPaper();
        questionPaper.setQid(qid);
        return questionsService.getQuestionsOfQuestionPaper(questionPaper);
    }
}
