import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  // styleUrls: ['./my-form.component.css']
  styles: [
    `
      .highlight {
        background-color: chartreuse;
        font-weight:  bold;
      }
    `
  ]
})
export class MyFormComponent implements OnInit {

  url: string;
  courseAngular: boolean;
  urlImage: string;
  inputValue = ''
  valueSaved = ''
  isMouseOver = false;
  name: string = 'Allan';
  person: any = {
    name: 'Allan',
    age: 25
  };

  constructor() {
    this.url = 'http://loiane.com'
    this.courseAngular = true;
    this.urlImage = 'https://i.picsum.photos/id/778/200/300.jpg?hmac=if-R94hzGN6KBh6JULJgfcPjBM5dqOSgwQqaBNTtFR4';
  }

  ngOnInit(): void {
  }


  getValue(){
    return 1;
  }

  getLikeCourse(){
    return true;
  }

  clickButton(): void{
    alert('Hello World');
  }

  // event.target é Uma Propriedade do Tipo HTML Input Element, Por isso é Preciso Realizar o Cast Para Pegar o Valor do Evento.
  onKeyUp(event: KeyboardEvent){
    this.inputValue = (<HTMLInputElement>event.target).value;
  }

  saveValue(value: any){
    this.valueSaved = value
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver
  }

}
