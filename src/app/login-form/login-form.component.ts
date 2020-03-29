import { Component, OnInit } from '@angular/core';
import { User } from '../reg-form/reg-form.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
  email;
  password;
  constructor() { }

  login(email, password){
    const userEmail = (document.getElementById('email')as HTMLInputElement).value;
    const userPass = (document.getElementById('password')as HTMLInputElement).value;
    let  usersArr = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < usersArr.length; i++) {
        if (userEmail === usersArr[i].email) {
             if(userPass === usersArr[i].password){
              document.location.href = 'tasks' + '#' + usersArr[i].name;
            } else if(userPass === ''){
              return alert('empty password');
            } else {
            return alert('wrong email or/and password');
            }
      } else if(userEmail === ''){
        return alert('empty email');
      }
    }
  }
  ngOnInit() {
  }

}
