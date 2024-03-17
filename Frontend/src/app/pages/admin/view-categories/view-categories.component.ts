import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';

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
      cid:0,
      title:"",
      description:""
    }


  ]
  
  constructor(private category:CategoryService){}
  ngOnInit(): void {
    this.category.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error)=>{
      console.log(error);
      
    }
    );
  }

  deleteCategory(cid:number){
    this.category.deleteCategory(cid).subscribe((data)=>{
      Swal.fire("success","Category Deleted","success");
      this.categories=this.categories.filter((category)=>category.cid!=cid);
    },
    (error)=>{
      Swal.fire("error","Error Occured!!","error");
    }
    )
  }

  



}
