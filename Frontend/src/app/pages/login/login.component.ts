import { Component } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from '../../components/navbar/navbar.component';
import { CommonModule } from '@angular/common';
import { MatSnackBar } from '@angular/material/snack-bar';
import { LoginService } from '../../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MatButtonModule,MatFormFieldModule,MatIconModule,FormsModule,MatInputModule,MatCardModule,NavbarComponent,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  public loginDetails={
    username:'',
    password:''
  }
  http: any;
  errorMessage: string | undefined;


  constructor(private snackBar:MatSnackBar,private loginService:LoginService,private router:Router){

  }

  public submit(){
    if(this.loginDetails.username.trim()=='' || this.loginDetails.username==null){
        this.snackBar.open("Username is required !!",
        "",{duration:4000});
    }
    if(this.loginDetails.password.trim()=='' || this.loginDetails.password==null){
      this.snackBar.open("Password is required !!",
      "",{duration:4000});
      return;
  }
    
  this.loginService.tokenGeneration(this.loginDetails).subscribe(
    (data:any)=>{
  this.loginService.tokenInLocalStorage(data.token);

    this.loginService.getCurrentUser().subscribe((user:any)=>{
      this.loginService.setUser(user);
      if(this.loginService.getUserRole()=="NORMAL"){
        this.router.navigate(['/userDashboard/0']);
      }
      else if(this.loginService.getUserRole()=="ADMIN"){
        this.router.navigate(['/adminDashboard']);
      }
      else{
       this.loginService.logout();
      }
    })
  },
  
  (error)=>{
    console.log("error occured !!");
    console.log(error);
    this.snackBar.open("Invalid Credentials!!",'',{
      duration:3000
    })
  }
  );
  }
}
