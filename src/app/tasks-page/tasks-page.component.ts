import { Component } from '@angular/core';

export class Task{
  constructor(
    public text: string
  ){}
}
@Component({
  selector: 'app-tasks-page',
  templateUrl: './tasks-page.component.html',
  styleUrls: ['./tasks-page.component.css']
})
export class TasksPageComponent{
  tasks = []
  constructor() { }

  addTask(text: string){
    this.tasks.push(new Task(text));

    console.log(this.tasks[2])
  }
  deleteTask(task){
    for (let i = 0; i < this.tasks.length; i++){
    if (task.text == this.tasks[i].text){
      this.tasks.splice(i, 1);
      console.log(this.tasks)
      break;
    }

    }

  }


}
