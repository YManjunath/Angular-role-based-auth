import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HmeComponent } from './hme/hme.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProfileComponent } from './profile/profile.component';
import { Role } from './model/role';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: HmeComponent,
      },
      {
        path: 'login',
        component: LoginComponent,
      },
      {
        path: 'profile',
        component: ProfileComponent,
      },
    ],
  },
  {
    path: 'admin',
    canLoad:[AuthGuard],
    canActivate:[AuthGuard],
    data:{
      roles:[
        Role.Admin
      ]
    },
    loadChildren: () =>
      import('./admin/admin.module').then((m) => m.AdminModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[
    AuthGuard,
    AuthService 
  ]
})
export class AppRoutingModule {}
