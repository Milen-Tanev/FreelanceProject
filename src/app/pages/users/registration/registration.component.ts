import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../../../models/user.model';
import { FormsModule } from '@angular/forms';
import { UsersService } from '../../../services/index';

@Component({
  moduleId: 'module.id',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  model: User;

  roles = ['Freelancer', 'Employer'];
  //@Output('registered') emitter: EventEmitter<User> = new EventEmitter<User>();

  constructor(private userService: UsersService) { }


  ngOnInit() {
    this.model = new User('', '', '', '', '', '', '', '');
  }

  register() {
    let user = this.userService.createUser(this.model);
    user.subscribe((result) => {
      let res = result;
      console.log(res);
      alert('Status: ' + res.status);
    });
  }
  login() {
    let login = this.userService.loginUser( { username: this.model.username, password: this.model.password } );
    login.subscribe((result) => {
    });
  }
}
