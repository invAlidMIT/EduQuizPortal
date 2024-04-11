import { Component, OnInit, inject,Output, EventEmitter } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Router, RouterLink } from '@angular/router';
import { LoginService } from '../../services/login.service';
import { CommonModule } from '@angular/common';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [MatToolbarModule,MatIconModule,MatButtonModule,RouterLink,CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  
  constructor(public login:LoginService,private route:Router){
  }

  @Output() toggleSidebarEvent = new EventEmitter<void>();
  isLoggedIn=false;
  user=null;
  themeService:ThemeService=inject(ThemeService);
  isDarkTheme:Boolean=true;

  ngOnInit():void{
      this.isLoggedIn=this.login.isUserLoggedIn();
      this.user=this.login.getUser();
     
  }


  public logout(){
    this.login.logout();
    this.isLoggedIn=false;
    this.user=null;
    this.route.navigate(['login']);
  }

  toggleTheme(){
    this.themeService.updateTheme();
    this.isDarkTheme=this.themeService.themeSignal()==='dark';

  }
  toggleSidebar() {
    this.toggleSidebarEvent.emit();
  }
}