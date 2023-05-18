import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('ngFormRef') signupForm: NgForm | undefined;
  defaultQuestion = 'pet';
  answer: string = '';
  genders = ['male', 'female'];

  user = {username: '', email: '', secret: '', answer: '', gender: ''};

  submitted = false;

  suggestUserName() {
    const suggestedName = 'Superuser';

    // this.signupForm?.setValue({
    //   userData: {
    //     username: suggestedName,
    //     email: ''
    //   },
    //   secret: 'pet',
    //   questionAnswer: '',
    //   gender: 'male'
    // });

    this.signupForm?.form?.patchValue({
      userData: {
        username: suggestedName,
      }
    });
  }

  onSubmit(ngForm: NgForm){
    console.log('Submited!');
    console.log(ngForm);

    this.submitted = true;
    this.user.username = ngForm.value.userData.username;
    this.user.email = ngForm.value.userData.email;
    this.user.secret = ngForm.value.secret;
    this.user.answer = ngForm.value.questionAnswer; 
    this.user.gender = ngForm.value.gender;
  }
}
