import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { FormsService } from './forms.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  myForm: FormGroup = new FormGroup({
    inputText: new FormControl('')
  });

  myFormSingleChoise: FormGroup = new FormGroup({
    addNewChoiceSingle :  new FormArray([]),
    questionText: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),
      choice1: new FormControl('', Validators.required),
      isCorrect1: new FormControl(false)
  });

  myFormMultipleChoise: FormGroup = new FormGroup({
    addNewChoiceMultiple :  new FormArray([]),
    questionText: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),
    choice1: new FormControl('', Validators.required),
    isCorrect1: new FormControl(false)
  });

  myFormText: FormGroup = new FormGroup({
    questionText: new FormControl('', Validators.required),
    difficulty: new FormControl('', Validators.required),
  });

  isSingleChoise: boolean = false;
  isMultipleChoise: boolean = false;
  isText: boolean = false;

  constructor(private service: FormsService) { }

  ngOnInit() {
  }

 get addNewChoiceSingle() {
   return this.myFormSingleChoise.get('addNewChoiceSingle') as FormArray;
 }

  get addNewChoiceMultiple() {
   return this.myFormMultipleChoise.get('addNewChoiceMultiple') as FormArray;

  }



 addNewInputSingle() {
    const formArray = this.myFormSingleChoise.get('addNewChoiceSingle');
    if (formArray instanceof FormArray) {
      const newChoices = new FormGroup({
        choice : new FormControl(),
        isCorrect : new FormControl()
      });
      formArray.push(newChoices);
    }
  }
 addNewInputMultiple() {
    const formArray = this.myFormMultipleChoise.get('addNewChoiceMultiple');
    if (formArray instanceof FormArray) {
      const newChoices = new FormGroup({
        choice : new FormControl(),
        isCorrect : new FormControl()
      });
      formArray.push(newChoices);
    }
  }




  dragStart(event: DragEvent): void {
    event.dataTransfer!.setData('text', (event.target as HTMLElement).innerText);
    this.myForm.patchValue({ inputText: '' });
    const data = event.dataTransfer!.getData('text');
    switch (data) {
      case 'اختيار فردي':
        this.isSingleChoise = true;
        this.isMultipleChoise = false;
        this.isText = false;
        break;
      case 'اختيار من متعدد':
        this.isSingleChoise = false;
        this.isMultipleChoise = true;
        this.isText = false;
        break;
      case 'نص':
        this.isSingleChoise = false;
        this.isMultipleChoise = false;
        this.isText = true;
        break;
      default:
        this.isSingleChoise = false;
        this.isMultipleChoise = false;
        this.isText = false;
        break;
    }
  }

  allowDrop(event: DragEvent): void {
    event.preventDefault();
  }

  // saveQuestionToJSON(form: FormGroup) {
  //   const formData = form.getRawValue();
  //   this.service.saveQuestion(formData).subscribe(
  //     res => {
  //       console.log('Question saved successfully:', res);
  //       form.reset();
  //     },
  //     error => {
  //       console.error('Error saving question:', error);
  //       // Handle error
  //     }
  //   );
  // }

  onSubmitSingleChoice() {
    console.log(this.myFormSingleChoise.value);
    // this.saveQuestionToJSON(this.myFormSingleChoise);
    this.myFormSingleChoise.value
  }

  onSubmitMultipleChoice() {
    console.log(this.myFormMultipleChoise.value);
    // this.saveQuestionToJSON(this.myFormMultipleChoise);
  }

  onSubmitText() {
    console.log(this.myFormText.value);
    // this.saveQuestionToJSON(this.myFormText);
  }
}
