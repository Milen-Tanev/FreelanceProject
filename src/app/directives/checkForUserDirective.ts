import { Directive, ElementRef, TemplateRef, ComponentRef, ViewContainerRef, Input } from '@angular/core';
@Directive({ selector: '[appIsLogged]' })

export class CheckForUserDirective {
    private authToken = sessionStorage.getItem('authtoken');
    constructor(private element: TemplateRef<any>, private viewContainer: ViewContainerRef) {
    }
    @Input() set appIsLogged(mustBeLogged: boolean){
        if (mustBeLogged) {
            this.viewContainer.createEmbeddedView(this.element);
        } else {
            this.viewContainer.clear();
        }
    }
}
