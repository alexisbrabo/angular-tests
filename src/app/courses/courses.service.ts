import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  getCourses() {
    return [
      { id: 1 as number, name: 'angular7' },
      { id: 2 as number, name: 'java' }
    ];
  }

  getCourse(id) {
    const courses = this.getCourses();

    for (const course of courses) {
      if (course.id === id) {
        return course;
      }
    }

    return null;
  }

  constructor() { }
}
