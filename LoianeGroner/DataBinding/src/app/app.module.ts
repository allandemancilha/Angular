import { MyFormModule } from './my-form/my-form.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    DataBindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    /* Passo 2: Importando o Módulo MyFormModule Para Que o Componente DataBindingComponent
                Possa Enxergar o MyFormComponent Que Foi Exportado */
    MyFormModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
