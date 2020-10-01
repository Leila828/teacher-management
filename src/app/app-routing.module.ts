import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {CoursComponent} from './cours/cours.component';
import {ProfileComponent} from './profile/profile.component';
import {CoursDetailComponent} from './cours-detail/cours-detail.component';



const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'cours', component: CoursComponent},
  {path: 'profil', component: ProfileComponent},
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
