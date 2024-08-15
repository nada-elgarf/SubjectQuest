import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

constructor( private http : HttpClient) { }

getSubjects() :Observable <any>{

return this.http.get('assets/subject.JSON')
}

}
