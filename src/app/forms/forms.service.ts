import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError , throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class FormsService {

constructor(private http : HttpClient) { }

filePath = 'assets\forms.JSON';

saveQuestion(data: any): Observable<any> {
  return this.http.post(this.filePath, data)
    .pipe(
      catchError(this.handleError)
    );
}

getQuestions(): Observable<any> {
  return this.http.get(this.filePath)
    .pipe(
      catchError(this.handleError)
    );
}


private handleError(error: any): Observable<any> {
  console.error('An error occurred:', error);
  return throwError(error.message || error);
}

}
