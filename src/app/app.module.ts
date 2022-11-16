import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HmeComponent } from './hme/hme.component';
import { ProfileComponent } from './profile/profile.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserDirective } from './directives/user.directive';
import { UserRoleDirective } from './directives/user-role.directive';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HmeComponent,
    ProfileComponent,
    NotFoundComponent,
    UserDirective,
    UserRoleDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
