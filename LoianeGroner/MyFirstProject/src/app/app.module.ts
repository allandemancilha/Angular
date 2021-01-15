// BrowserModule: Prepara a Aplicação Para ser Executada em um Browser
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyFirstComponent } from './my-first-component/my-first-component.component';
import { MySecondComponent } from './my-second-component/my-second-component.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule
  ],
  // Providers: Fornece os Serviços Que Ficarão Disponíveis a Todos os Componentes
  providers: [],
  /* 
     Bootstrap: É Encontrado Somente no Módulo Raíz. 
     Declara Qual Componente Deve Subir Primeiramente no Deploy na Aplicação
  */
  bootstrap: [AppComponent]
})
export class AppModule { }
