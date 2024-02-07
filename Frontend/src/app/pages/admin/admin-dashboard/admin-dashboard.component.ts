import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";

@Component({
    selector: 'app-admin-dashboard',
    standalone: true,
    templateUrl: './admin-dashboard.component.html',
    styleUrl: './admin-dashboard.component.css',
    imports: [NavbarComponent]
})
export class AdminDashboardComponent {

}
