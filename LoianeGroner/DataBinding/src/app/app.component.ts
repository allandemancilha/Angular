import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Data-Binding';
  value: number = 5;
  destroyCycle: boolean = false

  changeValue(){
    this.value++;
  }

  destroyLifecyle(){
    this.destroyCycle = true;
  }
}
