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
        pathMatch:'full',
        canActivate:[userGuard]
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
            }
        ],
        canActivate:[adminGuard]
    },
   
];
