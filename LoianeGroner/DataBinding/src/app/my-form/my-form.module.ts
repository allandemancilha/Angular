import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyFormComponent } from './my-form.component';



@NgModule({
  declarations: [MyFormComponent],
  imports: [
    CommonModule,
    // Passo 3: Importando o FormsModule Para Que Possa Ser Utilizado o Two-Way Data Binding
    FormsModule
  ],
  /* Passo 1: Utilizando o Metadado exports Para Exportar o Componente MyFormComponent
              Que Será Utilizado em data-binding.component.html */
  exports:[MyFormComponent]
})
export class MyFormModule { }
