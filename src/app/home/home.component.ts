import { Component } from '@angular/core';
import { ViewButtonComponent } from "../view-button/view-button.component";

@Component({
  selector: 'app-home',
  imports: [ViewButtonComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
