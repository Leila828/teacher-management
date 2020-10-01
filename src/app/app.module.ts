import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CoursComponent } from './cours/cours.component';
import { ProfileComponent } from './profile/profile.component';
import { CoursDetailComponent } from './cours-detail/cours-detail.component';
import { CoursListComponent } from './cours-list/cours-list.component';
import {CoursService} from './cours.service';
import {HttpClientModule} from '@angular/common/http';
import { SafePipe } from './safe.pipe';
import {SafeResourceUrl} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CoursComponent,
    ProfileComponent,
    CoursDetailComponent,
    CoursListComponent,
    SafePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [CoursService],
  bootstrap: [AppComponent]
})
export class AppModule { }
