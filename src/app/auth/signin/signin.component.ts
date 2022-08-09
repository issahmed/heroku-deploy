import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";
import { AuthService } from "src/app/service/auth.service";

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {


  authForm: FormGroup;
  submitted = false;
  error = '';
  hide = true;
  constructor(
     private formBuilder: FormBuilder,
     private route: ActivatedRoute,
     private router: Router,
    // private authService: AuthService
  ) {}
  ngOnInit() {
     this.authForm = this.formBuilder.group({
       email: ['admin@school.org', Validators.required],
       password: ['admin@123', Validators.required],
     });
  }
   get f() {
     return this.authForm.controls;
   }
  userSet() {
     this.authForm.get('email')?.setValue('admin@school.org');
     this.authForm.get('password')?.setValue('admin@123');
  }
  
  onSubmit() {
     this.submitted = true;
     this.error = '';
     if (this.authForm.invalid) {
       this.error = 'email and Password not valid !';
       return;
     } 
     else {
      this.router.navigate(['/dashboard']);
      
     // console.log(this.authForm.value) ;
     }
     
    }
}
