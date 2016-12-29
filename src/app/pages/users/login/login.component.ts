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

  constructor(private userService: UsersService) { }

  ngOnInit() {
    this.model = { 'username': '', 'password': ''};
  }

  login() {
    console.log(this.model);
    let login = this.userService.loginUser( this.model );
    login.subscribe((result) => {
      let res = result.json();
      sessionStorage.setItem('authtoken', res._kmd.authtoken);
      console.log(res._kmd.authtoken);
      alert('Status: ' + res.status);
    });
  }

  logout() {
    console.log('logout works');
    //let authToken = sessionStorage.getItem('authtoken');
    // let logout = this.userService.logout(authToken);
    // logout.subscribe((result) => {
    //   let res = result.json();
    //   console.log(res);

    //   if (result.status === 204) {
    //     sessionStorage.clear();
    //     alert('Status: ' + result.status);
    //   } else {
    //     alert('Status: ' + result.status);
    //   }
    // });
  }
}
