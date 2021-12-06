import {AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, OnInit, Output, QueryList} from '@angular/core';
import {CourseImageComponent} from '../course-image/course-image.component';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit, AfterViewInit, AfterContentInit {
  
  @Input() cardIndex: number;
  
  @Input() course: Course;
  
  @Output() courseSelected = new EventEmitter<Course>();
  
  // Get the component itself
  @ContentChild(CourseImageComponent)
  courseImageComponent: CourseImageComponent;
  
  // Only use with content projection and want to grab the reference to some
  // content in our component class
  @ContentChild(CourseImageComponent, {static: true, read: ElementRef})
  courseComponentElement;
  
  @ContentChildren(CourseImageComponent, {read: ElementRef})
  images: QueryList<ElementRef>;
  
  constructor() {
  }
  
  ngOnInit(): void {
  }
  
  onCourseViewed(): void {
    this.courseSelected.emit(this.course);
  }
  
  applyClass(): any {
    console.log('applying class');
    return {
      'beginner': this.course.category === 'BEGINNER',
    };
  }
  
  public ngAfterViewInit(): void {
    console.log('da image');
    console.log(this.courseImageComponent);
    console.log(this.courseImageComponent.imageUrl);
    console.log(this.courseComponentElement);
  }
  
  public ngAfterContentInit(): void {
    console.log(this.images);
  }
  
}
