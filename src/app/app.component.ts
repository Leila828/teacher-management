import { Component } from '@angular/core';
import {Cours} from './cours';
// tslint:disable-next-line:import-spacing
import  {CoursService} from './cours.service';

declare const myFunction: any;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mean';
  myimg = 'assets/images/course_1.jpg';
  // tslint:disable-next-line:variable-name
  constructor(public _courseService: CoursService) {
  }
  course: Cours[] = [
    // tslint:disable-next-line:max-line-length
    {_id: '1', title: 'titre 1', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'},
    // tslint:disable-next-line:max-line-length
    {_id: '2', title: 'titre 2', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'},
    // tslint:disable-next-line:max-line-length
    {_id: '3', title: 'titre 3', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'}
  ];
  selectedCours: Cours;
  onSelectCours(cours: any) {
    this.selectedCours = cours;
    console.log(this.selectedCours);
  }
}
