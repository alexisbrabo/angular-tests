import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

import { CoursesService } from '../courses/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit, OnDestroy {

  id: number;
  subscription: Subscription;
  course: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private coursesService: CoursesService
    ) { }

  ngOnInit() {
    this.subscription = this.route.params.subscribe(
      (params: any) => {
        this.id = Number(params.id);

        this.course = this.coursesService.getCourse(this.id);

        if (this.course == null){
          this.router.navigate(['/course/notFound']);
        }
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
