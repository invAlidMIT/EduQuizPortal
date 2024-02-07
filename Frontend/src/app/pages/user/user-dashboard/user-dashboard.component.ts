import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";

@Component({
    selector: 'app-user-dashboard',
    standalone: true,
    templateUrl: './user-dashboard.component.html',
    styleUrl: './user-dashboard.component.css',
    imports: [NavbarComponent]
})
export class UserDashboardComponent {

}
