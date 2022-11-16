import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { Role } from '../model/role';
import { AuthService } from '../services/auth.service';

@Directive({
  selector: '[appUserRole]',
})
export class UserRoleDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private auth: AuthService,
    private viewContainer: ViewContainerRef
  ) {}

  userRoles: Role[];

  @Input() set appUserRole(role: Role[]) {
    if (!role || !role.length) {
      throw new Error('Role is empty or missed');
    }

    this.userRoles = role;
  }

  ngOnInit() {
    let hasAccess = false;

    if (this.auth.isAuthorized() && this.userRoles) {
      hasAccess = this.userRoles.some((r) => this.auth.hasRole(r));
    }

    if (hasAccess) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
  }
}
