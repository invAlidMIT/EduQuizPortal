package com.Exam.Backend.Impl.questionPaper;

import com.Exam.Backend.Model.questionPaper.QuestionPaper;
import com.Exam.Backend.Repository.questionPaper.questionPaperRepository;
import com.Exam.Backend.Service.questionPaper.questionPaperService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class questionPaperServiceImpl implements questionPaperService {


    @Autowired
    private questionPaperRepository questionPaperRepository;

    @Override
    public QuestionPaper addQuestionPaper(QuestionPaper questionPaper) {
        return this.questionPaperRepository.save(questionPaper);
    }

    @Override
    public QuestionPaper updateQuestionPaper(Long id, QuestionPaper questionPaper) throws Exception {
        Optional<QuestionPaper> questionPaper1=this.questionPaperRepository.findById(id);
        if(questionPaper1.isPresent()){
            QuestionPaper questionPaper2=questionPaper1.get();
            questionPaper2.setDepartment(questionPaper.getDepartment());
            questionPaper2.setMaxMarks(questionPaper.getMaxMarks());
            questionPaper2.setFaculty(questionPaper.getFaculty());
            questionPaper2.setNote(questionPaper.getNote());
            questionPaper2.setTest(questionPaper.getTest());
            questionPaper2.setTime(questionPaper.getTime());
            questionPaper2.setCollegeName(questionPaper.getCollegeName());
            questionPaper2.setSubjectCode(questionPaper.getSubjectCode());
            questionPaper2.setSemester(questionPaper.getSemester());
            questionPaper2.setInstitutionName(questionPaper.getInstitutionName());
            questionPaper2.setExamType(questionPaper.getExamType());
            return this.questionPaperRepository.save(questionPaper2);
        }
        throw new Exception("Question Paper not found with id "+id);
    }

    @Override
    public List<QuestionPaper> getAllQuestionPapers() {
        return this.questionPaperRepository.findAll();
    }

    @Override
    public void deleteQuestionPaper(Long qid) throws Exception {

        QuestionPaper questionPaper=new QuestionPaper();
        questionPaper.setQid(qid);
        this.questionPaperRepository.delete(questionPaper);

    }

    @Override
    public QuestionPaper getQuestionPaperById(Long quizId) {
        return this.questionPaperRepository.findById(quizId).get();
    }
}
