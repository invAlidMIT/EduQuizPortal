import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { RouterLink } from '@angular/router';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatMenuModule} from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatBadgeModule} from '@angular/material/badge';
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [NavbarComponent, MatListModule, MatCardModule,RouterOutlet
    ,MatSidenavModule,MatIconModule,MatButtonModule,RouterLink,MatMenuModule,MatToolbarModule,MatBadgeModule]
})
export class AdminDashboardComponent {
    isSidebarOpen = true;

    toggleSidebar() {
      this.isSidebarOpen = !this.isSidebarOpen;
    }

}
