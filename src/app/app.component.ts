import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  data = {
    title: 'Angular Core Deep dive'
  }
  
  onKeyUp(value: string): void {
    this.data.title = value;
  }
}
