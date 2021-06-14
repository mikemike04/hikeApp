import { MainPageComponent } from './components/home/main-page/main-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ProfileComponent } from './components/home/profile/profile.component';
import { TripsComponent } from './components/home/trips/trips.component';
import { ValidUserGuard } from './guards/valid-user.guard';

const routes: Routes = [


  // {
  //   path: '', pathMatch: 'prefix', redirectTo: 'login'
  // },



  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ValidUserGuard],


    children: [
      {
        path: 'profile',
        component: ProfileComponent
      },

      {
        path: 'main-page',
        component: MainPageComponent
      },

      {
        path: 'trips',
        component: TripsComponent
      }
    ]
  },

  {
    path: 'login',
    component: LoginComponent
  },

  {
    path: 'register',
    component: RegisterComponent
  },

  {
    path: '**',
    component: LoginComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
