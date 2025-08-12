import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersLoginService } from './users-login.service';

interface Result {
  success: boolean,
  message: string,
  userId?: number
}

@Component({
    selector: 'users-login',
    templateUrl: './users-login.component.html',
    styleUrls: ['./users-login.component.css'],
    standalone: false
})
export class UsersLoginComponent implements OnInit {

  status: string
  loading: boolean

  loginForm = {
    username: null,
    password: null
  }

  constructor(private loginService: UsersLoginService, private router: Router) { }

  ngOnInit(): void {

  }

  onSubmit() {
    this.loading = true
    this.loginService.login(this.loginForm).subscribe((result: Result) => {
      this.loading = false
      if (result.success) {
        localStorage.setItem("userId", result.userId.toString())
        this.router.navigate(["/users"])
      }
      else {
        this.status = result.message
      }
    })
  }

}
