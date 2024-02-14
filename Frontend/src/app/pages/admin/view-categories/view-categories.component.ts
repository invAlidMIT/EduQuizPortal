import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category.service';

@Component({
  selector: 'app-view-categories',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule,MatListModule,RouterLink,CommonModule],
  templateUrl: './view-categories.component.html',
  styleUrl: './view-categories.component.css'
})
export class ViewCategoriesComponent implements OnInit{

  categories=[
    {
      title:"",
      description:""
    }


  ]
  
  constructor(private category:CategoryService){}
  ngOnInit(): void {
    this.category.categories().subscribe((data:any)=>{
      this.categories=data;
      console.log(this.categories);
      

    },
    (error)=>{
      console.log(error);
      
    }
    
    
    );
  }

  



}
