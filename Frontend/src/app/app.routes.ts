import { Routes } from '@angular/router';
import { SignupComponent } from './pages/signup/signup.component';
import { LoginComponent } from './pages/login/login.component';
import { HomeComponent } from './pages/home/home.component';
import { UserDashboardComponent } from './pages/user/user-dashboard/user-dashboard.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { adminGuard } from './services/admin.guard';
import { userGuard } from './services/user.guard';
import { ProfileComponent } from './profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizComponent } from './pages/admin/view-quiz/view-quiz.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionsComponent } from './pages/admin/add-questions/add-questions.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { QuizInstructionsComponent } from './pages/user/quiz-instructions/quiz-instructions.component';
import { StartQuizComponent } from './pages/user/start-quiz/start-quiz.component';
import { QuestionPapersComponent } from './pages/admin/question-papers/question-papers.component';
import { ViewQuestionPaperQuestionsComponent } from './pages/admin/view-question-paper-questions/view-question-paper-questions.component';
import { AddQestionsToQuestinPaperComponent } from './pages/admin/add-qestions-to-questin-paper/add-qestions-to-questin-paper.component';
import { UpdateQuestionsOfQuestionPaperComponent } from './pages/admin/update-questions-of-question-paper/update-questions-of-question-paper.component';
import { AddQuestionPaperComponent } from './pages/admin/add-question-paper/add-question-paper.component';
import { UpdateQuestionPaperComponent } from './pages/admin/update-question-paper/update-question-paper.component';
import { ViewQuestionPaperComponent } from './pages/admin/view-question-paper/view-question-paper.component';
import { ViewQuizResultsComponent } from './pages/admin/view-quiz-results/view-quiz-results.component';
import { ViewAttemptedQuizResultComponent } from './pages/user/view-attempted-quiz-result/view-attempted-quiz-result.component';
import { UpdateSubQuestionComponent } from './pages/admin/update-sub-question/update-sub-question.component';


export const routes: Routes = [
    {
        path:'',
        component:HomeComponent,
        pathMatch:'full'
    },
    {
        path:'signup',
        component:SignupComponent,
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent,
        pathMatch:'full'
    },
    {
        path:'userDashboard',
        component:UserDashboardComponent,
        canActivate:[userGuard],
        children:[
            {
                path:':cId',
                component:LoadQuizComponent
            },
            {
                path:'quiz-instructions/:qid',
                component:QuizInstructionsComponent
            },
            {
                path:'view-attempted-quiz/:qid',
                component:ViewAttemptedQuizResultComponent
            }
        ]
    },
    {
        path:'adminDashboard',
        component:AdminDashboardComponent,
       
        children:[
            {
                path:'',
                component:WelcomeComponent
            },
            {
                path:'profile',
                component:ProfileComponent
            },
            {
                path:'categories',
                component:ViewCategoriesComponent
            },
            {
                path:'add-category',
                component:AddCategoryComponent
            },
            {
                path:'quiz',
                component:ViewQuizComponent
            },
            {
                path:'add-quiz',
                component:AddQuizComponent
            },
            {
                path:'update-quiz/:qid',
                component:UpdateQuizComponent
            },
            {
                path:'quiz-result/:qid',
                component:ViewQuizResultsComponent
            }
            
            
            ,{
                path:'view-questions/:id/:title',
                component:ViewQuizQuestionsComponent
            },
            {
                path:'add-question/:id/:title',
                component:AddQuestionsComponent
            },
            {
                path:'questionPapers',
                component:QuestionPapersComponent
            },
            {
                path:'questionPapers/view-questionPaper-questions/:qid',
                component:ViewQuestionPaperQuestionsComponent
            },
            {
                path:"addQuestionsToQuestionPaper/:qid",
                component:AddQestionsToQuestinPaperComponent
            },
            {
                path:"updateQuestionsOfQuestionPaper/:qid/:id",
                component:UpdateQuestionsOfQuestionPaperComponent,
            
            },
            {
                path:'add-question-paper',
                component:AddQuestionPaperComponent
            },{
                path:'questionPapers/updateQuestionPaper/:qid',
                component:UpdateQuestionPaperComponent
            },
            {
                path:'questionPapers/viewQuestionPaper/:qid',
                component:ViewQuestionPaperComponent
            },
            {
                path:'updateSubQuestion/:qid',
                component:UpdateSubQuestionComponent
            }
            

        ],
        canActivate:[adminGuard]
    },
    {
        path:'quiz-start/:qid',
        component:StartQuizComponent,
        canActivate:[userGuard]
    }
   
];
