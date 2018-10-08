import {Component, Input} from "angular2/core";


@Component ({
    selector: "shoppinglist",
    template: `
   <ul>
      <li *ngFor="#shoppingListItem of shoppingListItems"
      (click)= "onItemClicked(shoppingListItem)"
      > {{ shoppingListItem.name }} </li>
   </ul>
   <input type="text" [(ngModel)] = "selectedItem.name">
   <button (click) = "onDeleteItem()">Delete Item</button> <br>
   <input type="text" #shoppingListItem>
   <button (click) = "onAddItem(shoppingListItem)"> Add Item </button>
    `
})

export class ShoppingListComponent {
    public shoppingListItems = [
        {name: "Milk" },
        {name: 'Sugar'}, 
        {name: 'Bread'},
    ]    

    public selectedItem = {name:""};

    onItemClicked (shoppingListItems) {
       this.selectedItem = shoppingListItems;
    };

    onAddItem(shoppingListItem) {
        if (!(shoppingListItem.value == ""))
        {
           this.shoppingListItems.push ({name: shoppingListItem.value});
           shoppingListItem.value = "";
        };
    };

    onDeleteItem() {
        if (!(this.shoppingListItems.indexOf(this.selectedItem) == -1 )) 
        {
           this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem),1);
           this.selectedItem.name = "";
        }
    }
}
