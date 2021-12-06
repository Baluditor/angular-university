import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';
import {HighlightedDirective} from './directives/highlighted.directive';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  
  courses: Array<Course> = COURSES;
  
  @ViewChildren(CourseCardComponent, {read: ElementRef})
  cards: QueryList<ElementRef>;
  
  // With this if a component has more than one directive applied
  // to it, we can get the specific one like so:
  @ViewChild(CourseCardComponent, {read: HighlightedDirective})
  highlighted: HighlightedDirective;
  
  // To view the directive
  // @ViewChild(HighlightedDirective)
  // highlighted: HighlightedDirective;
  
  constructor() {
  
  }
  
  ngAfterViewInit() {
    console.log(this.highlighted);
  }
  
  onCourseSelected(course: Course) {
  
  }
  
  onToggle(isHighlighted: boolean) {
    console.log(isHighlighted);
  }
  
}
