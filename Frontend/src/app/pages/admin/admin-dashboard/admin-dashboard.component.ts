import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import { SidebarComponent } from "../sidebar/sidebar.component";
import { RouterOutlet } from '@angular/router';

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [NavbarComponent, MatListModule, MatCardModule, SidebarComponent,RouterOutlet]
})
export class AdminDashboardComponent {

}
