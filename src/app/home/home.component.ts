import { Component, OnInit, EventEmitter } from '@angular/core';
import {Cours} from '../cours';
import {Router} from '@angular/router';
import {CoursService} from '../cours.service';
declare const myFunction: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [`course`],
  // tslint:disable-next-line:no-outputs-metadata-property
  outputs: ['SelectCours', 'cours'],


})
export class HomeComponent implements OnInit {
  public  SelectCours = new  EventEmitter();
  cours = {
    title: '',
    caption: '',
    url: ''
  };
  submit = false;
  public coursCaption;
  selectedCours: Cours;
  myimg = 'assets/images/course_1.jpg';
// @ts-ignore
  // @ts-ignore
  course: Array<Cours>;
  // tslint:disable-next-line:variable-name
  constructor(private  _coursService: CoursService, private  router: Router) { }
  ngOnInit() {
    this._coursService.getCourses().subscribe(resCoursData => this.course = resCoursData);

  }
  onSelect(cours) {
    this.router.navigate(['/cours', cours._id]);
  }
  saveCours() {
    const data = {
      title: this.cours.title,
      caption: this.cours.caption,
      url: this.cours.url
    };
    this._coursService.create(data).subscribe(response => {console.log(response); this.submit = true; });
  }
  newCours() {
    this.submit = false;
    this.cours = {
      title: '',
      caption: '',
      url: ''
    };
  }
  onClick() {
    myFunction();
    this.newCours();
  }
}
