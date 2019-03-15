import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataReactiveFormComponent } from './data-reactive-form/data-reactive-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseDetailComponent } from './course-detail/course-detail.component';
import { CoursesService } from './courses/courses.service';
import { CourseNotFoundComponent } from './course-not-found/course-not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    DataReactiveFormComponent,
    HomeComponent,
    LoginComponent,
    CoursesComponent,
    CourseDetailComponent,
    CourseNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    CoursesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
