package com.Exam.Backend.Model.Exam;

import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "quiz")
public class Quiz {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long qid;

    private String title;

    private String description;

    private String maxMarks;

    private String numberOfQuestions;

    private boolean active=false;

    private int scheduledHour;
    private int scheduledMinute;
    private Date scheduledDate;

    public Date getScheduledDate() {
        return scheduledDate;
    }

    public void setScheduledDate(Date scheduledDate) {
        this.scheduledDate = scheduledDate;
    }

    public int getScheduledHour() {
        return scheduledHour;
    }

    public void setScheduledHour(int scheduledHour) {
        this.scheduledHour = scheduledHour;
    }

    public int getScheduledMinute() {
        return scheduledMinute;
    }

    public void setScheduledMinute(int scheduledMinute) {
        this.scheduledMinute = scheduledMinute;
    }

    @ManyToOne(fetch = FetchType.EAGER)
    private Category category;

    @OneToMany(mappedBy = "quiz",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Question> questions=new ArrayList<>();

    @OneToMany(mappedBy = "quiz",fetch = FetchType.EAGER,cascade = CascadeType.ALL)
    @JsonIgnore
    private List<quizResult> quizResults=new ArrayList<>();

    public List<quizResult> getQuizResults() {
        return quizResults;
    }

    public void setQuizResults(List<quizResult> quizResults) {
        this.quizResults = quizResults;
    }

    public Quiz() {
    }

    public long getQid() {
        return qid;
    }

    public void setQid(long qid) {
        this.qid = qid;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getMaxMarks() {
        return maxMarks;
    }

    public void setMaxMarks(String maxMarks) {
        this.maxMarks = maxMarks;
    }

    public String getNumberOfQuestions() {
        return numberOfQuestions;
    }

    public void setNumberOfQuestions(String numberOfQuestions) {
        this.numberOfQuestions = numberOfQuestions;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }

    public Category getCategory() {
        return category;
    }

    public void setCategory(Category category) {
        this.category = category;
    }

    public List<Question> getQuestions() {
        return questions;
    }

    public void setQuestions(List<Question> questions) {
        this.questions = questions;
    }
}
