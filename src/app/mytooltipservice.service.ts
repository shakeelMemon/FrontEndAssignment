
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MytooltipService {
  constructor() { }
  getMessage(type: string) : string {
    return 'Message - ' + type;
  }
}