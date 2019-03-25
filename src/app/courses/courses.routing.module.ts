import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CoursesComponent } from './courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';

const courseRoutes: Routes = [
    { path: 'courses', component: CoursesComponent },
    { path: 'course/:id', component: CourseDetailComponent },
    { path: 'notFound', component: CourseNotFoundComponent }
];

@NgModule({
    imports: [RouterModule.forChild(courseRoutes)],
    exports: [RouterModule]
})
export class CoursesRoutingModule { }
