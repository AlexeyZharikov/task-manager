import { Component, OnInit } from '@angular/core';

export class User{

  constructor(
    public name: string,
    public email: string,
    public password: string,
  ){}
}

@Component({
  selector: 'app-reg-form',
  templateUrl: './reg-form.component.html',
  styleUrls: ['./reg-form.component.css']
})
export class RegFormComponent {
  users = []
  constructor() { }

  register(name: string, email: string, password: string, tasks: []){
    let regName = (document.getElementById('name')as HTMLInputElement).value;
    let regMail = (document.getElementById('email')as HTMLInputElement).value;
    let regPass = (document.getElementById('password')as HTMLInputElement).value;
    const usersArr = JSON.parse(localStorage.getItem('users'));
    for (let key in usersArr){
      if (regName === usersArr[key]['name'] || regMail === usersArr[key]['email']){
        return alert('user is already exist');
      }
    }
    if (regName === '' || regMail === '' || regPass === ''){
      return alert('Invalid data');
    } else{
      JSON.parse(localStorage.getItem('users'));
      this.users.push(new User(name, email, password));
      localStorage.setItem('users', JSON.stringify(this.users));

      document.location.href = '/';

    }

    // console.log(this.users[0]['tasks']);


  }
}


