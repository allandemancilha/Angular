// BrowserModule: Prepara a Aplicação Para Ser Executada em um Browser
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MyFirstComponent } from './my-first-component/my-first-component.component';
import { MySecondComponent } from './my-second-component/my-second-component.component';
import { CoursesModule } from './courses/courses.module';

@NgModule({
  // Declarations: Declarações de Componentes, Pipes e Diretivas Que Serão Usadas no Módulo.
  declarations: [
    AppComponent,
    MyFirstComponent,
    MySecondComponent
  ],
  // Imports: Declarações de Outros Módulos Que Serão Utilizados no Módulo Atual ou Pelos Componentes Declarados no Módulo Atual.
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoursesModule
  ],
  // Providers: Fornece os Serviços Que Ficarão Disponíveis Para Serem Utilizados Por Todos os Componentes Declarados no Módulo.
  providers: [],
  /*
     Bootstrap: É Encontrado Somente no Módulo Raíz.
     Declara Qual Componente Deve Subir Primeiramente no Deploy na Aplicação
  */
  bootstrap: [AppComponent]
})
export class AppModule { }
