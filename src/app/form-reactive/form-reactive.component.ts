import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';




@Component({
  selector: 'app-form-reactive',
  templateUrl: './form-reactive.component.html',
  styleUrls: ['./form-reactive.component.scss']
})
export class FormReactiveComponent implements OnInit {

  formUsers: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { 
    
  }

  ngOnInit() {
    this.formUsers = this.fb.group({
      username: ['', Validators.required],
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/),]],
      password2: ['', Validators.required],
    }, 
    {
      validator: MustMatch('password', 'password2')
    });
   

    function MustMatch(controlName: string, matchingControlName: string) {
      return (formGroup: FormGroup) => {
          const control = formGroup.controls[controlName];
          const matchingControl = formGroup.controls[matchingControlName];
    
          if (matchingControl.errors && !matchingControl.errors.mustMatch) {
             return;
          }
          if (control.value !== matchingControl.value) {
            matchingControl.setErrors({ mustMatch: true });
          } else {
              matchingControl.setErrors(null);
          }
      }
    };
    

  }


  
  sendForm() {
    console.log(this.formUsers.value);
  }

get form (){
  return this.formUsers.controls;
}



}
