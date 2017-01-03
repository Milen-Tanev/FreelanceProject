import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/index';

@Component({
  moduleId: 'module.id',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  model: any;

  constructor(private userService: UsersService, private router: Router) { }

  ngOnInit() {
    this.model = { 'username': '', 'password': ''};
  }

  login() {
    console.log(this.model);
    let login = this.userService.loginUser( this.model );
    login.subscribe((result) => {
      let res = result.json();
      sessionStorage.setItem('username', res.username);
      sessionStorage.setItem('authtoken', res._kmd.authtoken);
      sessionStorage.setItem('id', res._id);
      sessionStorage.setItem('role', res.role);
      console.log(res);
      alert('Status: ' + res.status);
      this.router.navigate(['/home']);
    });
  }
}