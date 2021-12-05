import {Component, ViewChild} from '@angular/core';
import {COURSES} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  courses = COURSES;
  
  startDate = new Date();
  
  @ViewChild(CourseCardComponent)
  card: CourseCardComponent;
  
  onCourseSelected(course: Course): void {
    console.log('App component - click event bubbled', course);
    console.log(this.card);
  }
  
}
