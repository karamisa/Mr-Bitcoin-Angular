import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGaurd } from './guards/auth.guard';
import { ContactDetailsPageComponent } from './pages/contact-details-page/contact-details-page.component';
import { ContactEditPageComponent } from './pages/contact-edit-page/contact-edit-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SignupComponent } from './pages/signup/signup.component';
import { StatisticsPageComponent } from './pages/statistics-page/statistics-page.component';
import { ContactResolver } from './services/contact-resolver.resolver';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    canActivate: [AuthGaurd]
  },
  {
    path: 'contact',
    component: ContactPageComponent,
    canActivate: [AuthGaurd],
    children: [
      {
        path: 'edit/:id',
        component: ContactEditPageComponent,
        resolve: { contact: ContactResolver }
      },
      {
        path: 'edit',
        component: ContactEditPageComponent
      },
      {
        path: ':id',
        component: ContactDetailsPageComponent,
        resolve: { contact: ContactResolver }
      }
    ]
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'stats',
    component: StatisticsPageComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
