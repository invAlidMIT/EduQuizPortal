import { Component, computed, signal } from '@angular/core';
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

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [NavbarComponent, MatListModule, MatCardModule,RouterOutlet
    ,MatSidenavModule,MatIconModule,MatButtonModule,RouterLink,MatMenuModule,MatToolbarModule,MatBadgeModule,
CommonModule,RouterLinkActive]
})
export class AdminDashboardComponent {
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
