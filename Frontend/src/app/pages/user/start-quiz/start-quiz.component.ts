import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../../../components/navbar/navbar.component";
import { LocationStrategy } from '@angular/common';

@Component({
    selector: 'app-start-quiz',
    standalone: true,
    templateUrl: './start-quiz.component.html',
    styleUrl: './start-quiz.component.css',
    imports: [NavbarComponent]
})
export class StartQuizComponent implements OnInit {

    constructor(private locationStatergy:LocationStrategy){}

    ngOnInit(): void {
        this.preventBackButton();
    }

    preventBackButton(){
        history.pushState(null,'null',location.href);
        this.locationStatergy.onPopState(()=>{
            history.pushState(null,'null',location.href);
        })
    }



}
