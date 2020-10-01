import { Component, OnInit } from '@angular/core';
import {Cours} from '../cours';
import {CoursService} from '../cours.service';
import {Router} from '@angular/router';
import {ActivatedRoute} from '@angular/router';
declare const myFunction: any;
@Component({
  selector: 'app-cours-detail',
  templateUrl: './cours-detail.component.html',
  styleUrls: ['./cours-detail.component.css'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['cours'],
})
export class CoursDetailComponent implements OnInit {

  myimg = 'assets/images/intro_user.jpg';
  public coursId;
  public t;
  public c;
  public u;
  // tslint:disable-next-line:variable-name
  constructor(private  _coursService: CoursService, private  route: ActivatedRoute, private  router: Router) { }
  currentCours = null;
  course: Cours;
  ngOnInit() {

    // tslint:disable-next-line:prefer-const
    let id = this.route.snapshot.paramMap.get('_id');
    this.coursId = id;
    this.getCoursId(id);

    // this._coursService.getById(id)
      // tslint:disable-next-line:align
     // .subscribe(res => {this.t = res.title; this.c = res.caption; this.u = res.url; console.log(this.t); }  );
    // console.log();

  }
  getCoursId(id) {
    // tslint:disable-next-line:max-line-length
    this._coursService.getById(id).subscribe(data => { this.currentCours = data; console.log( this.currentCours[0].url + '&output=embed'); }, error => {console.log(error); });
  }
  updateCoursO(status) {
    const data = {
      title: this.currentCours[0].title,
      caption: this.currentCours[0].caption,
      url: this.currentCours[0].url,
    };
    this._coursService.update(data, this.currentCours[0]._id).subscribe(
      response => {
        this.currentCours[0] = status;
        console.log(response);
      }
    );
}
updateCours() {
    this._coursService.update(this.currentCours[0], this.currentCours[0]._id )
      .subscribe(
        response => {
          console.log(response);
        }
      );
}
deleteCours() {
    this._coursService.delete(this.currentCours[0]._id)
      .subscribe(response => {
        console.log(response);
        this.router.navigate(['/home']);
      });
}
  onClick() {
    myFunction();

  }
}
