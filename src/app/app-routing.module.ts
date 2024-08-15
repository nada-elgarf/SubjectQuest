import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubjectComponent } from './subject/subject.component';
import { FormsComponent } from './forms/forms.component';


const routes: Routes = [
  {path:"" , component:SubjectComponent},
  {path:"subject" , component:SubjectComponent},
  {path: "form" , component:FormsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
