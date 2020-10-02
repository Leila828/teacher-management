import { Component, OnInit , EventEmitter} from '@angular/core';
import {Cours} from '../cours';
import {CoursService} from '../cours.service';
import {Router} from '@angular/router';

function date(s: string) {
  return undefined;
}

@Component({
  selector: 'app-cours',
  templateUrl: './cours.component.html',
  styleUrls: ['./cours.component.css'],
  // tslint:disable-next-line:no-inputs-metadata-property
  inputs: ['course'],
  // tslint:disable-next-line:no-outputs-metadata-property
  outputs: ['SelectCours']
})
export class CoursComponent implements OnInit {
  public  SelectCours = new EventEmitter();
  loginUserData = {
    Email: '',
    password: ''
  };
  selectedCours: Cours;
// @ts-ignore
  // @ts-ignore
  course: Cours[] = [
    // tslint:disable-next-line:max-line-length
  {_id: '1', title: 'titre 1', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'},
    // tslint:disable-next-line:max-line-length
  {_id: '2', title: 'titre 2', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'},
    // tslint:disable-next-line:max-line-length
  {_id: '3', title: 'titre 3', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'}
];



  // tslint:disable-next-line:variable-name
  constructor(private  _coursService: CoursService, private  router: Router) { }

  ngOnInit(): void {
  }
  onSelect(cours: Cours)  {
    this.SelectCours.emit(cours);
  }
  onSelectCours(cours: any) {
    this.selectedCours = cours;
    console.log(this.selectedCours);
  }
  logIn() {
    console.log(this.loginUserData);
    this._coursService.login(this.loginUserData)
      .subscribe(res => console.log(res),
        error => console.log(error));
  }
}
