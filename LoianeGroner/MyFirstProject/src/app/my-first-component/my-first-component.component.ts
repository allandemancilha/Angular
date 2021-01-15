import { Component } from '@angular/core';

@Component({
    selector: 'my-first-component',
    /* 
	    A `(Crase) Indica um Template Literal, ou Seja, um Template Inline. 
		Não é Uma Boa Prática! 
		Utilizar Somente se o HTML Tiver no Máximo de 3 Linhas de Código.
	*/
    template: `
        <p> My First Component Works!</p>
    `
})
/* 
    É Necessário Exportar a Classe Para Utilizar o Componente, só Assim Poderá Ser Utilizado Globalmente
    Observação: Sem o export o Componente é Visto Apenas Pela Própria Classe
*/
export class MyFirstComponent {}
