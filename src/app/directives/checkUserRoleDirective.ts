import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';
@Directive({ selector: '[isRoleFreelancer]' })

export class CheckUserRoleDirective {
    private authToken = sessionStorage.getItem('role');
    constructor(private element: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }
    @Input() set isRoleFreelancer(mustBeFreelancer: boolean){
        if (mustBeFreelancer) {
            this.viewContainer.createEmbeddedView(this.element);
        } else {
            this.viewContainer.clear();
        }
    }
}
