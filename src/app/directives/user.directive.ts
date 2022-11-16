import { Directive, TemplateRef, ViewContainerRef } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appUser]'
})
export class UserDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private auth: AuthService,
    private viewContainer: ViewContainerRef
  ) { }

  ngOnInit() {
    const hasAccess = this.auth.isAuthorized();

    if (hasAccess) {
        this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
        this.viewContainer.clear();
    }
}

}
