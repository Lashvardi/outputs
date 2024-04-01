import { Component } from '@angular/core';
import { Input } from '@angular/core';
import { IMusic } from '../interfaces/music.model';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
@Component({
  selector: 'app-mini-dashboard-viewer',
  templateUrl: './mini-dashboard-viewer.component.html',
  styleUrl: './mini-dashboard-viewer.component.css'
})
export class MiniDashboardViewerComponent {
  // *ngFor რო მოგვეშორებინა
  // გადაწყდა რომ მთლიანი მონაცემების
  // გატანება სჯობს. და შემდგომი აქედან გადანაწილება
  // required @Input-ი რომელიც აუცილებლად
  // მიიღებს მონაცემებს
  @Input({ required: true }) musicData!: IMusic[];
  // შევქმნათ @Output რომ გავუგზავნოთ
  @Output() changeComponent = new EventEmitter();

  // ფუქნცია რომელიც გაისვრის event-ს ღილაკზე დაჭერისას
  changeComponentEvent() {
    this.changeComponent.emit();
  }






}
