import { Injectable } from '@angular/core';

// @Injectable: Esse Decorator Informa Que a Classe Pode Ser Injetada em Outras Classes Para Ser Utilizada
@Injectable()

export class CoursesService {

  constructor() { }

  getCourses(){
    return ['Java', 'Ext JS', 'Angular'];
  }
}
