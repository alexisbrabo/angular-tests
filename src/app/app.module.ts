import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DataReactiveFormComponent } from './data-reactive-form/data-reactive-form.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { CoursesModule } from './courses/courses.module';
import { StudentsComponent } from './students/students.component';
import { StudentsModule } from './students/students.module';

@NgModule({
  declarations: [
    AppComponent,
    DataReactiveFormComponent,
    HomeComponent,
    LoginComponent,
    StudentsComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    StudentsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
