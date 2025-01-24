import { Component } from '@angular/core';

@Component({
  selector: 'app-view-button',
  imports: [],
  // templateUrl: './view-button.component.html',
  styleUrl: './view-button.component.css',
  template:'<a href="#!" (click)="onClick()" class="btn">Get Appointment</a>'
})
export class ViewButtonComponent {
  onClick() {
    alert('Hi');
  }
} 