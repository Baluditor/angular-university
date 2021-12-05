import {AfterViewInit, Component, ElementRef, QueryList, ViewChild, ViewChildren} from '@angular/core';
import {COURSES} from '../db-data';
import {CourseCardComponent} from './course-card/course-card.component';
import {Course} from './model/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  
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
  
  @ViewChildren(CourseCardComponent)
  cards: QueryList<CourseCardComponent>;
  
  // View child is a shallow query. Only local child can be inspected.
  // Only the component template itself can be queried this way.
  
  public ngAfterViewInit(): void {
    console.log(this.cards.first);
    console.log(this.cards.changes.subscribe(
      cards => {
        console.log(cards);
      },
    ));
    
    this.cards.forEach(card => {
      console.log(card);
      console.log(card.cardIndex);
    });
  }
  
  onCourseSelected(course: Course): void {
    console.log('App component - click event bubbled', course);
    console.log(this.card);
    console.log(this.card2);
    console.log(this.containerDiv);
    console.log(this.cards);
  }
  
  handleAddCourses(): void {
    this.courses.push(
      {
        id: 4,
        description: 'Angular for Beginners',
        iconUrl: 'https://angular-academy.s3.amazonaws.com/thumbnails/angular2-for-beginners-small-v2.png',
        longDescription: 'Establish a solid layer of fundamentals, learn what\'s under the hood of Angular',
        category: 'BEGINNER',
        lessonsCount: 10,
      },
    );
  }
  
}
