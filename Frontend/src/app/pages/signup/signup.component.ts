import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import {MatCardModule} from '@angular/material/card';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule,FormsModule,CommonModule,MatSnackBarModule,MatCardModule,NavbarComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  constructor(private usrService:UserService,private snack:MatSnackBar){}

  public user={
    username:'',
    firstName:'',
    lastName:'',
    password:'',
    email:'',
    phone:''
  };

  ngOnInit(): void {
     
  }
  formSubmit(){

    if(this.user.username==null || this.user.username==''){
        this.snack.open("Username is required","OK",{
          duration:2000
        });
    }
    this.usrService.addUser(this.user).subscribe(
      (data:any)=>{
      Swal.fire("SuccesFully added user "+data.username);

      },
      (error)=>{
       this.snack.open("Something is wrong! ","OK",{
        duration:2000
       })
      }
    );
  }
}