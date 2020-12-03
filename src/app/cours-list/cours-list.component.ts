import {Component, EventEmitter, OnInit} from '@angular/core';
import {Cours} from '../cours';
import {CoursService} from '../cours.service';
import {Router} from '@angular/router';
import {HttpErrorResponse} from '@angular/common/http';
import {Teacher} from '../teacher';
declare const myFunction: any;
@Component({
  selector: 'app-cours-list',
  templateUrl: './cours-list.component.html',
  styleUrls: ['./cours-list.component.css'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: [`course`],
  // tslint:disable-next-line:no-outputs-metadata-property
  outputs: ['SelectCours', 'cours'],

})
export class CoursListComponent implements OnInit {

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
  teacher: Array<Teacher>;
  // tslint:disable-next-line:variable-name
  constructor(private  _coursService: CoursService, private  router: Router) { }
  ngOnInit() {
    this._coursService.getCoursesToken()
      .subscribe(resCoursData => this.course = resCoursData,
        error => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === 401) {
            this.router.navigate(['/login']);
          }
        }
        }
        );

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
