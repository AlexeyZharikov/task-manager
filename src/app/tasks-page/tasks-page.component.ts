import { Component } from '@angular/core';


export class Task{
  constructor(
    public text: string,
    public id: number
  ){}
}
@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent{
  text: string;
  id = 0;
  tasks = [];
  constructor() { }


  getTasks(tasks){
    const loc = location.hash.substr(1);
    const users = JSON.parse(localStorage.getItem('users'));
    if (users){
      for (let i = 0; i < users.length; i++){
        if (loc === users[i].name){
          this.tasks = users[i].tasks;
        }
      }
    } else {
      alert('there are no registered users');
      document.location.href = 'login';
    }
  }

  modifyLocalStorage(){
    const loc = location.hash.substr(1);
    const users = JSON.parse(localStorage.getItem('users'));
    for (let i = 0; i < users.length; i++){
      if (loc === users[i].name){
     users[i].tasks = this.tasks;
    }
  }
    localStorage.setItem('users', JSON.stringify(users));
  }

  addTask(text){
    const taskTxt = (document.getElementById('task') as HTMLInputElement).value;
    if (taskTxt === ''){
      return alert('Please dont add empty task');
    } else {
      this.tasks.push(new Task(text, this.id++));
    }
    this.modifyLocalStorage();
  }

  deleteTask(task){
    for (let i = 0; i < this.tasks.length; i++){
    if (task.text == this.tasks[i].text){
      this.tasks.splice(i, 1);
      break;
      }
    }
    this.modifyLocalStorage();
  }

  editTask(task, text){
    for (let i = 0; i < this.tasks.length; i++){
      if (task.id == this.tasks[i].id){
      this.tasks[i].text = text;
      }
    }
    this.modifyLocalStorage();
  }

  shareTask(task) {
    for (let i = 0; i < this.tasks.length; i++){
      const usersArr = JSON.parse(localStorage.getItem('users'));
      if (task.id === this.tasks[i].id){
        const email = prompt('input another user\'s email');
        for (const key in usersArr){
          if (email === usersArr[key].email){
            usersArr[key].tasks.push(new Task(this.tasks[i].text, this.tasks[i].id++));
            localStorage.setItem('users', JSON.stringify(usersArr));
          }
        }
      }
    }
  }

}
