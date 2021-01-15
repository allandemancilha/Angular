import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesService } from './courses.service';


// Decorator Que Representa o Módulo
@NgModule({
  // Declarations: São Declarados Todos os Componentes, Diretivas e Pipes Que Serão Usados Nesse Módulo
  declarations: [
    CoursesComponent,
    /* 
      CourseDetailComponent: Como Foi Criado Dentro de Courses o Component Utiliza CoursesModule Como Seu Módulo Padrão.
      O Componente CourseDetailComponent só Poderá Ser Utilizado Por Outros Módulos Quando For Declarado no Metadado exports: []
    */
    CourseDetailComponent
  ],
  // Imports: Outros Módulos Que Serão Utilizados Dentro Deste Módulo ou Dentro de um Component Que Pertence a Esse Módulo
  imports: [
    // CommonModule: Contém as Diretivas e os Pipes Mais Comuns a Serem Utilizados
    CommonModule
  ],
  /* 
    Exports: Utilizando o Metadado exports: [] Para Expor Quais 
    Declarations (Componentes Diretivas e Pipes) Podem Ser Utilizadas Por Outros Módulos
  */
  exports: [
    CoursesComponent
  ], 
  providers: [ CoursesService ]
})
export class CoursesModule { }
