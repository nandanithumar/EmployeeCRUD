// import { Component, OnInit } from '@angular/core';
// import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

// @Component({
//   selector: 'app-login',
//   templateUrl: './login.component.html',
// })
// export class LoginComponent implements OnInit {
//     loginForm = new FormGroup(
//       {
//         username : new FormControl(),
//         password : new FormControl()
//       }
//     )

//   constructor(private fb: FormBuilder) {}

//   ngOnInit() {
//     this.loginForm = this.fb.group({
//       username: ['', Validators.required],
//       password: ['', Validators.required],
//     });
//   }

//   onSubmit() {
//     // Your login logic here
//     console.log(this.loginForm.value);
//   }
// }

import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  userName!: string;
  password!: string;
  formData!: FormGroup;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {
    this.formData = new FormGroup({
      userName: new FormControl('admin'),
      password: new FormControl('admin'),
    });
  }

  onClickSubmit(data: any) {
    this.userName = data.userName;
    this.password = data.password;

    console.log('Login page: ' + this.userName);
    console.log('Login page: ' + this.password);

    this.authService.login(this.userName, this.password).subscribe((data) => {
      console.log('Is Login Success: ' + data);
      

      if (data) this.router.navigate(['/view-employee']);
    });
  }
}
