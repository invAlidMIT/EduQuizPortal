import { Component } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";

@Component({
    selector: 'app-start-quiz',
    standalone: true,
    templateUrl: './start-quiz.component.html',
    styleUrl: './start-quiz.component.css',
    imports: [NavbarComponent]
})
export class StartQuizComponent {

}
