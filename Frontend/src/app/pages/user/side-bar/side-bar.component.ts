import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [MatCardModule,MatListModule,MatIconModule,MatButtonModule,
  CommonModule,RouterLink],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.css'
})
export class SideBarComponent implements OnInit {

  categories=[
    {
      cid:'',
      title:'',
      description:''
    }
  ];

  constructor(private categoryService:CategoryService,private snack:MatSnackBar){}
  ngOnInit(): void {
    this.categoryService.categories().subscribe((data:any)=>{
      this.categories=data;
    },
    (error)=>{
      this.snack.open("Error Occured!!",'',{
        duration:3000
      })
    }
    )
  }


}
