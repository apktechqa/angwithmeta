import { Component } from '@angular/core';
import { ViewButtonComponent } from "../view-button/view-button.component";
import { CntformComponent } from "../cntform/cntform.component";

@Component({
  selector: 'app-home',
  imports: [ViewButtonComponent, CntformComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
