import { Component } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ang7valid';
  myForm : FormGroup;
  submitted = false;

  constructor(private fb:FormBuilder){}

  ngOnInit() {
    this.myForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password  : ['',[Validators.required,Validators.minLength(8)]],
      phone  : ['',[Validators.required,Validators.minLength(10),Validators.maxLength(10)]]
    });
  }
  get f(){return this.myForm.controls}
  onSubmit(){
    this.submitted=true;
    if(this.myForm.invalid){
      return;
    }
    alert ('success')
  }
}
