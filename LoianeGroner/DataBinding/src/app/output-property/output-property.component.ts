import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'count',
  templateUrl: './output-property.component.html',
  styleUrls: ['./output-property.component.css']
  /*
    É Possível Utilizar o Decorator @Output() Como Metadado do
    Decorator @Component()

    Sem Nome Externo: outputs: ['courseName']
    Com Nome Externo: outputs: ['courseName:name']

    Observação: A Variável Ainda Precisa Ser Declarada, Mas Sem o Decorator
    @Output()
  */
})
export class OutputPropertyComponent implements OnInit {

  @Input('value') count: number = 0;

  // Utilizando o Decorator @Output() Com EventEmitter Para Atualizar Todas as Referências Que Utilizando a Prop changeValue.
  @Output() changeValue = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  increment()
  {
    this.count++;
    this.changeValue.emit({newValue: this.count})
  }

  decrements()
  {
    this.count--;
    this.changeValue.emit({newValue: this.count})
  }
}
