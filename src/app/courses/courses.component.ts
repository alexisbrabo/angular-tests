import { Component, OnInit, OnDestroy } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';
import { CoursesService } from './courses.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-course',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnDestroy {

  courses: any[];
  page: number;
  subscribe: Subscription;

  constructor(
    private coursesService: CoursesService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.courses = this.coursesService.getCourses();

    this.subscribe = this.route.queryParams.subscribe(
      (queryParams: any) => {
        this.page = queryParams.page;
      }
    );
  }

  ngOnDestroy() {
    this.subscribe.unsubscribe();
  }

  nextPage() {
    this.router.navigate(['/courses'],
      { queryParams: { page: ++this.page } });
  }

}
