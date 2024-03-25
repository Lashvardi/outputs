import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IMusic } from '../interfaces/music.model';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  @Input() musicItem!: IMusic;
}
