import { Component, OnInit } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {  Router, RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import Swal from 'sweetalert2';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-add-category',
  standalone: true,
  imports: [MatButtonModule,MatCardModule,MatIconModule,MatListModule,RouterLink,CommonModule,MatFormFieldModule,FormsModule,MatInputModule],
  templateUrl: './add-category.component.html',
  styleUrl: './add-category.component.css'
})
export class AddCategoryComponent implements OnInit{

  constructor(private _category:CategoryService,private snack:MatSnackBar,private router:Router){}

  ngOnInit(): void {
   
  }

  category={
    title:'',
    description:''
  }

  public formSubmit(){
    if(this.category.title.trim()=='' || this.category.title.trim()==null){
        this.snack.open("title required","",{
          duration:3000
        })
    }

    else{
    this._category.addCategory(this.category).subscribe((data:any)=>{
      this.category.title='',
      this.category.description=''
        Swal.fire("Success!!","category added successfully",'success');
        this.router.navigate(['/adminDashboard/categories']);
        
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error!!","category not added successfully",'error');
    }
    )
  }
  }
}
