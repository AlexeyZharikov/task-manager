import { Component, OnInit } from '@angular/core';
// import { RegFormComponent } from '../reg-form/reg-form.component';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  constructor() { }

  login(){
    const userEmail = (document.getElementById('email')as HTMLInputElement).value;
    const userPass = (document.getElementById('password')as HTMLInputElement).value;
    const usersArr = JSON.parse(localStorage.getItem('users'));
    for (let key in usersArr){
      if(userEmail === usersArr[key]['email'] && userPass === usersArr[key]['password']){
        document.location.href = '/tasks';

        // console.log(usersArr[key]['email']);
        // console.log(usersArr[key]['password']);

      }
      else {
        return alert('wrong email or/and password');
      }
    }




    // console.log(userEmail);
    // console.log(userPass);
    // console.log(usersArr);



    // document.location.href = 'tasks';
  }
  ngOnInit() {
  }

}
