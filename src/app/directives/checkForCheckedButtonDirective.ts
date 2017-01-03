import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
@Directive({ selector: '[isButtonClicked]' })

export class CheckForClickedButtonDirective {
    constructor(private element: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }
    @Input() set isButtonClicked(mustBeChecked: boolean){
        if (mustBeChecked) {
            this.viewContainer.createEmbeddedView(this.element);
        } else {
            this.viewContainer.clear();
        }
    }
}
