import {Component} from '@angular/core';
import {TodoComponent} from './todos/todos';
import {TodoStore} from './store/store';

@Component({
  selector: 'my-app',
  template: `
    <h1>Sample {{name}} {{1+1}}</h1>
    <router-outlet></router-outlet>
    `,
})

export class AppComponent {
  public name: string = 'Angular';
}
