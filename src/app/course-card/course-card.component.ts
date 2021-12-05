import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Course} from '../model/course';

@Component({
  selector: 'course-card',
  templateUrl: './course-card.component.html',
  styleUrls: ['./course-card.component.css'],
})
export class CourseCardComponent implements OnInit {
  
  @Input() cardIndex: number;
  
  @Input() course: Course;
  
  @Output() courseSelected = new EventEmitter<Course>();
  
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
  
}
