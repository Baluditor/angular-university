import {Directive, Input, TemplateRef, ViewContainerRef} from '@angular/core';

@Directive({
  // Save syntax as attribute directives
  selector: '[ngxUnless]',
})
export class NgxUnlessDirective {
  
  visible = false;
  
  // Template ref used for:
  // This directive needs to grab a reference to the
  // template it being applied to. In order to do that
  // we need to inject the template in our constructor
  // This is a programmatic reference to our template
  // with this variable we will be able to instantiate
  // the template somewhere on the directive
  
  // ViewContainer: we need a mechanism to instantiate
  // the template, that where viewContainer comes in.
  // ViewContainer is used to instantiate the template
  // on demand.
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
  ) {
  }
  
  // We are passing the condition via an input property.
  // Here we are receiving the input via a setter method. The name should be
  // the exact same otherwise this won't work. We are receiving the condition
  // via this setter.
  @Input()
  set ngxUnless(condition: boolean) {
    // If the condition is false and the template is not visible we will
    // show the template and set the visible variable to true.
    if (!condition && !this.visible) {
      // Here we are creating the view (the course-image component)
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.visible = true;
      // Otherwise, if the condition is true and the component visible, we
      // are hiding it
    } else if (condition && this.visible) {
      this.viewContainer.clear();
      this.visible = false;
    }
  }
  
}
