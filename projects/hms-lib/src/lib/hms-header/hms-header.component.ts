import { Component, Input } from '@angular/core';
import { HeaderModel } from "./models/header-model";
@Component({
  selector: 'hms-header',
  templateUrl: './hms-header.component.html',
  styleUrls: ['./hms-header.component.css']
})
export class HmsHeaderComponent {
  @Input() headerModel: HeaderModel;
}
