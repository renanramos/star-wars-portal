import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

declare var $: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  submitted: boolean = false;
  user: User;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  get u() { return this.loginForm.controls }

  onSubmit() {
    this.submitted = true;

    this.user = {
      username: this.u.username.value,
      password: this.u.password.value
    }

    let userPromise = this.authService.login(this.user).toPromise();

    userPromise.then(data => {
      let user = data;
      if (data.status === undefined) {
        localStorage.setItem('ACCESS_TOKEN', `${user[0].user_name}`)
        this.router.navigate(['home']);
      } else {
        $('#loginErrorModal').modal('show');
        this.router.navigate(['login']);
      }
    })

    userPromise.catch(err => {
      this.router.navigate(['login']);
    })
  }


}
