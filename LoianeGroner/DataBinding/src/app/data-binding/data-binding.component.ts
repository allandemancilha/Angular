import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string;
  courseAngular: boolean;

  getValue(){
    return 1;
  }

  getLikeCourse(){
    return true;
  }

  constructor() { 
    this.url = 'http://loiane.com'
    this.courseAngular = true;
  }

  ngOnInit(): void {
  }

}
