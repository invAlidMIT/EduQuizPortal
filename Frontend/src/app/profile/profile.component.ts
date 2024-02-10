import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { LoginService } from '../services/login.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,MatTableModule,CommonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnInit {
   user:any;
  constructor(private login:LoginService){}

  ngOnInit(): void {
    this.user=this.login.getUser();
  }
}
