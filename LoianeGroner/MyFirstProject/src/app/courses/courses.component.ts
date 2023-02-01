import { Component, OnInit } from '@angular/core';
import { CoursesService } from './courses.service';


@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  webSiteName: string;
  coursesGroup: string[];

  constructor(private coursesService: CoursesService) {
    this.webSiteName = 'http//:loiane.training';
    this.coursesGroup = this.coursesService.getCourses();
  }

  ngOnInit(): void {
  }

}
