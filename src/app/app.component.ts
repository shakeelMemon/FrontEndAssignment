import { Component } from '@angular/core';
import { MytooltipService } from './mytooltipservice.service'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string;  
  tooltipValue: string;
  tooltipService: MytooltipService;
  constructor(svc: MytooltipService) {
    this.tooltipService = svc;
    this.title = 'Tooltip demo';
  }

  public getMessage(type:string) {
    this.tooltipValue = this.tooltipService.getMessage(type);
  }


}
