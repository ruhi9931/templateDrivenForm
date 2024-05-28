import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm : NgForm;
  submitted = false;
  suggestedUsername = 'jagdeesh';
  suggestUserName() {
    // this.signupForm.setValue({
    //   userData:{
    //     username: this.suggestedUsername,
    //     email: '' 
    //   },
    //   secret: 'pet',
    //   instantReply: '',
    //   gender: 'male'
    // });

    this.signupForm.form.patchValue({
      userData:{username:this.suggestedUsername}
    });
  }
  defaultProperty = 'pet';
  defaultUsername = 'rajesh';
  answer='';
  genders: string[] = ['Female', 'Male'];
  defaultGender = 'Male';

  user = {
    username: '',
    email: '',
    secretQuestions: '',
    answer: '',
    gender: ''
  }
  onSubmit(){
    this.submitted = true;
    this.user.username = this.signupForm.value.userData.username;
    this.user.email = this.signupForm.value.userData.email;
    this.user.secretQuestions = this.signupForm.value.secret;
    this.user.answer = this.signupForm.value.questionAnswer;
    this.user.gender = this.signupForm.value.gender;

    this.signupForm.reset();
  }
  // onSubmit(formm: NgForm){
  //   console.log(formm); 
  // }
}