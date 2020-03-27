import { Component } from '@angular/core';
// import { OutletContext } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  template: `<div class="section">
    <div class="container">
      <router-outlet></router-outlet>
    </div>
  </div>`
})
export class AppComponent {
  title = 'task-manager';
}
