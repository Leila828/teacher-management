import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CoursComponent} from './cours/cours.component';
import {ProfileComponent} from './profile/profile.component';
import {CoursDetailComponent} from './cours-detail/cours-detail.component';
import {CoursListComponent} from './cours-list/cours-list.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'register', component: HomeComponent},
  {path: 'login', component: CoursComponent},
  {path: 'profil', component: ProfileComponent},
  {path: 'list', component: CoursListComponent},
  {path: 'cours/:_id', component: CoursDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule { }
export const routingComponents = [
  HomeComponent,
  CoursComponent,
  ProfileComponent,
  CoursDetailComponent
];
