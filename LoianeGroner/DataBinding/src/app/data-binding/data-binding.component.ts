import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string;

  getValue(){
    return 1;
  }

  constructor() { 
    this.url = 'http://loiane.com'
  }

  ngOnInit(): void {
  }

}
