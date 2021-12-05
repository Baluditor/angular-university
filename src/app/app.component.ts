import {Component, ElementRef, ViewChild} from '@angular/core';
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
  
  // To get a reference to an HTML element, not the course card component
  @ViewChild('cardRef', {read: ElementRef})
  card: CourseCardComponent;
  
  // Get a reference for the course card component instance
  @ViewChild('cardRef2')
  card2: CourseCardComponent;
  
  // Get a reference to a native HTML element.
  @ViewChild('container')
  containerDiv: ElementRef;
  
  onCourseSelected(course: Course): void {
    console.log('App component - click event bubbled', course);
    console.log(this.card);
    console.log(this.card2);
    console.log(this.containerDiv);
  }
  
}
