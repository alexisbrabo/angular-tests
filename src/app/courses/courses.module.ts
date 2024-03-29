import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';
import { CoursesService } from './courses.service';
import { CoursesRoutingModule } from './courses.routing.module';

@NgModule({
    imports: [
        CommonModule,
        CoursesRoutingModule
    ],
    exports: [],
    declarations: [
        CoursesComponent,
        CourseDetailComponent,
        CourseNotFoundComponent
    ],
    providers: [
        CoursesService
    ],
})
export class CoursesModule { }
