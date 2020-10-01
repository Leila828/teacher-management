import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import {catchError, map, tap} from 'rxjs/operators';
import {Cours} from './cours';
import {Observable, of} from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CoursService {
  // tslint:disable-next-line:variable-name
  private _getUrl = './server/routes/api/cours';
  constructor(private  http: HttpClient) { }
 getCourses() {
    return this.http.get<Cours[]>('http://localhost:3000/api/cours')
      .pipe(map((response => response)
      ));
 }
  // tslint:disable-next-line:variable-name
 getCourse(id: string) {
    return this.http.get<Cours[]>( `http://localhost:3000/api/cours/${id}`)
      .pipe(map((response => response)
      ));
 }

  getcour(id: string): Observable<Cours> {
    const url = `http://localhost:3000/api/cours/${id}`;
    return this.http.get<Cours>(url)  .pipe(map((response => response)
    ));
  }
  getById(id) {
    return this.http.get(`http://localhost:3000/api/cours/${id}`);
  }
  getCours() {
    return [
      // tslint:disable-next-line:max-line-length
      {_id: '1', title: 'titre 1', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'},
      // tslint:disable-next-line:max-line-length
      {_id: '2', title: 'titre 2', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'},
      // tslint:disable-next-line:max-line-length
      {_id: '3', title: 'titre 3', url: 'url', caption: 'caption here', createdAt: new Date('12020-09-22T23:06:46.372Z'), _teacherId: 'jkghjhh'}
    ];

  }
  getList() {
    // return this.http.get();
  }
  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
  // #enddocregion handleError

  // #docregion log
  /** Log a HeroService message with the MessageService */
  private log(message: string) {
   console.log(message);
  }
  create(cours) {
return this.http.post('http://localhost:3000/api/teachers/5f73b274bb21661c24e3c269/courses', cours);
}
  update(cours, id) {
return this.http.patch(`http://localhost:3000/api/teacher/5f73b274bb21661c24e3c269/courses/${id}`, cours);
}
delete(id) {
    return this.http.delete(`http://localhost:3000/api/teacher/5f73b274bb21661c24e3c269/courses/${id}`);
}
}
