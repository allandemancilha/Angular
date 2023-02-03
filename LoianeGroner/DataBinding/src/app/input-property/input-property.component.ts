import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-course',
  templateUrl: './input-property.component.html',
  styleUrls: ['./input-property.component.css'],
  /*
    É Possível Utilizar o Decorator @Input() Como Metadado do
    Decorator @Component()

    Sem Nome Externo: inputs: ['courseName']
    Com Nome Externo: inputs: ['courseName:name']

    Observação: A Variável Ainda Precisa Ser Declarada, Mas Sem o Decorator
    @Input()
  */


})
export class InputPropertyComponent implements OnInit {

  /*
    Passando Como Parâmetro do Decorator @Input() a String 'name'
    Que Será Utilizada Como Nome Externo da Variável courseName.

    Exemplo: <app-course [name]="Angular Course"></app-course>
  */

  @Input('name') courseName: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
