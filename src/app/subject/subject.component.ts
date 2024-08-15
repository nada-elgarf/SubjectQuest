import { SubjectService } from './subject.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subject',
  templateUrl: './subject.component.html',
  styleUrls: ['./subject.component.css']
})
export class SubjectComponent implements OnInit {
  subjects: any[] = [];

  constructor(private route : Router , private service : SubjectService ) { }

  ngOnInit() {

    this.service.getSubjects().subscribe(data => {
      this.subjects = data.subjects;
    })
  }
  goTOForm () {
    this.route.navigate(["/form"]);
  }

}
