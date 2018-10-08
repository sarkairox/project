import {Component} from 'angular2/core';
import {ShoppingListComponent} from './shopping-list.component';

@Component({
    selector: 'my-app',
    template: `
        <shoppinglist></shoppinglist>
    `,
    directives: [ShoppingListComponent]
})
export class AppComponent {
   
}