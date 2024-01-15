import { Component, OnInit } from '@angular/core';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatIconModule,MatButtonModule,FormsModule,CommonModule],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent implements OnInit{
  constructor(){}

  public user={
    username:'',
    firstname:'',
    lastname:'',
    password:'',
    email:'',
    phno:''
  }

  ngOnInit(): void {
     
  }
  formSubmit(){
    alert("submitted");
  }


}
