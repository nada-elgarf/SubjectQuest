import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

  constructor(private route : Router) { }

  ngOnInit() {
  }

  goToSubject() {
    this.route.navigate(['/subject'])
  }
  goToForm() {
    this.route.navigate(["/form"])
  }
}
