import { Component } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-mini-dashboard',
  templateUrl: './mini-dashboard.component.html',
  styleUrl: './mini-dashboard.component.css'
})
export class MiniDashboardComponent {
  @Input() title!: string;
  @Input() album!: string; 
}
