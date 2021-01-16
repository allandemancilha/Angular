import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string;
  courseAngular: boolean;
  urlImage: string;

  getValue(){
    return 1;
  }

  getLikeCourse(){
    return true;
  }

  constructor() { 
    this.url = 'http://loiane.com'
    this.courseAngular = true;
    this.urlImage = 'https://i.picsum.photos/id/778/200/300.jpg?hmac=if-R94hzGN6KBh6JULJgfcPjBM5dqOSgwQqaBNTtFR4';
  }

  ngOnInit(): void {
  }

}
