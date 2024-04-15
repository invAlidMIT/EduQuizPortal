import { Component, OnInit, computed, signal } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink,RouterLinkActive } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CategoryService } from '../../../services/category.service';
import { MatSnackBar } from '@angular/material/snack-bar';



@Component({
    selector: 'app-side-bar',
    standalone: true,
    templateUrl: './side-bar.component.html',
    styleUrl: './side-bar.component.css',
    imports: [MatCardModule, MatListModule, MatIconModule, MatButtonModule,
        CommonModule, RouterLink, MatSidenavModule, MatMenuModule, MatToolbarModule,
        MatBadgeModule, NavbarComponent,RouterOutlet,RouterLinkActive]
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

  isSidebarOpen = signal(false);
  dashboardActive = true;

  sidebarWidth=computed(()=>this.isSidebarOpen()?'65px':'');

  toggleSidebar() {
    this.isSidebarOpen.set(!this.isSidebarOpen());
  }

  toggleDashboardDeActive() {
      this.dashboardActive = false;
  }

  toggleDashboardActive(){
      this.dashboardActive=true;
  }


}
