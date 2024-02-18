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
            },{
                path:'view-questions/:id/:title',
                component:ViewQuizQuestionsComponent
            },
            {
                path:'add-question/:id/:title',
                component:AddQuestionsComponent
            }
        ],
        canActivate:[adminGuard]
    },
   
];
