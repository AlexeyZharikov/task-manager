import { Component, OnInit } from '@angular/core';

export class User {

  constructor(
    public name: string,
    public email: string,
    public password: string,
    public tasks: []
  ) {}
}

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {

  users;
  name;
  email;
  password;
  tasks = [];
  constructor() { }

  getUsers(){
    if (this.users = JSON.parse(localStorage.getItem('users'))){
      return this.users;
    } else {
      this.users = [];
    }
  }

  register(name, email, password, tasks) {
    this.getUsers();
    const regName = (document.getElementById('name')as HTMLInputElement).value;
    const regMail = (document.getElementById('email')as HTMLInputElement).value;
    const regPass = (document.getElementById('password')as HTMLInputElement).value;
    let usersArr = JSON.parse(localStorage.getItem('users'));
    for (const key in usersArr) {
      if (regName === usersArr[key].name || regMail === usersArr[key].email) {
        return alert('User is already exist');
      }
    }
    if (regName === '' || regMail === '' || regPass === '') {
      return alert('Invalid data');
    } else {

      this.users.push(new User(name, email, password, tasks));
      document.location.href = 'login';
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }
}


