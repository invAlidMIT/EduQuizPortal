import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { RouterOutlet } from '@angular/router';
import { SideBarComponent } from "../side-bar/side-bar.component";

@Component({
    selector: 'app-user-dashboard',
    standalone: true,
    templateUrl: './user-dashboard.component.html',
    styleUrl: './user-dashboard.component.css',
    imports: [NavbarComponent, RouterOutlet, SideBarComponent]
})
export class UserDashboardComponent {

}
