System.register(["angular2/core"], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var ShoppingListComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            ShoppingListComponent = (function () {
                function ShoppingListComponent() {
                    this.shoppingListItems = [
                        { name: "Milk" },
                        { name: 'Sugar' },
                        { name: 'Bread' },
                    ];
                    this.selectedItem = { name: "" };
                }
                ShoppingListComponent.prototype.onItemClicked = function (shoppingListItems) {
                    this.selectedItem = shoppingListItems;
                };
                ;
                ShoppingListComponent.prototype.onAddItem = function (shoppingListItem) {
                    if (!(shoppingListItem.value == "")) {
                        this.shoppingListItems.push({ name: shoppingListItem.value });
                        shoppingListItem.value = "";
                    }
                    ;
                };
                ;
                ShoppingListComponent.prototype.onDeleteItem = function () {
                    if (!(this.shoppingListItems.indexOf(this.selectedItem) == -1)) {
                        this.shoppingListItems.splice(this.shoppingListItems.indexOf(this.selectedItem), 1);
                        this.selectedItem.name = "";
                    }
                };
                ShoppingListComponent = __decorate([
                    core_1.Component({
                        selector: "shoppinglist",
                        template: "\n   <ul>\n      <li *ngFor=\"#shoppingListItem of shoppingListItems\"\n      (click)= \"onItemClicked(shoppingListItem)\"\n      > {{ shoppingListItem.name }} </li>\n   </ul>\n   <input type=\"text\" [(ngModel)] = \"selectedItem.name\">\n   <button (click) = \"onDeleteItem()\">Delete Item</button> <br>\n   <input type=\"text\" #shoppingListItem>\n   <button (click) = \"onAddItem(shoppingListItem)\"> Add Item </button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ShoppingListComponent);
                return ShoppingListComponent;
            }());
            exports_1("ShoppingListComponent", ShoppingListComponent);
        }
    }
});

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNob3BwaW5nLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBa0JBO2dCQUFBO29CQUNXLHNCQUFpQixHQUFHO3dCQUN2QixFQUFDLElBQUksRUFBRSxNQUFNLEVBQUU7d0JBQ2YsRUFBQyxJQUFJLEVBQUUsT0FBTyxFQUFDO3dCQUNmLEVBQUMsSUFBSSxFQUFFLE9BQU8sRUFBQztxQkFDbEIsQ0FBQTtvQkFFTSxpQkFBWSxHQUFHLEVBQUMsSUFBSSxFQUFDLEVBQUUsRUFBQyxDQUFDO2dCQXFCcEMsQ0FBQztnQkFuQkcsNkNBQWEsR0FBYixVQUFlLGlCQUFpQjtvQkFDN0IsSUFBSSxDQUFDLFlBQVksR0FBRyxpQkFBaUIsQ0FBQztnQkFDekMsQ0FBQzs7Z0JBRUQseUNBQVMsR0FBVCxVQUFVLGdCQUFnQjtvQkFDdEIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLEtBQUssSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUNwQyxDQUFDO3dCQUNFLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUUsRUFBQyxJQUFJLEVBQUUsZ0JBQWdCLENBQUMsS0FBSyxFQUFDLENBQUMsQ0FBQzt3QkFDN0QsZ0JBQWdCLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztvQkFDL0IsQ0FBQztvQkFBQSxDQUFDO2dCQUNOLENBQUM7O2dCQUVELDRDQUFZLEdBQVo7b0JBQ0ksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFFLENBQUMsQ0FDaEUsQ0FBQzt3QkFDRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxFQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNuRixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksR0FBRyxFQUFFLENBQUM7b0JBQy9CLENBQUM7Z0JBQ0wsQ0FBQztnQkExQ0w7b0JBQUMsZ0JBQVMsQ0FBRTt3QkFDUixRQUFRLEVBQUUsY0FBYzt3QkFDeEIsUUFBUSxFQUFFLDhhQVVUO3FCQUNKLENBQUM7O3lDQUFBO2dCQThCRiw0QkFBQztZQUFELENBNUJBLEFBNEJDLElBQUE7WUE1QkQseURBNEJDLENBQUEiLCJmaWxlIjoic2hvcHBpbmctbGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0NvbXBvbmVudCwgSW5wdXR9IGZyb20gXCJhbmd1bGFyMi9jb3JlXCI7XHJcblxyXG5cclxuQENvbXBvbmVudCAoe1xyXG4gICAgc2VsZWN0b3I6IFwic2hvcHBpbmdsaXN0XCIsXHJcbiAgICB0ZW1wbGF0ZTogYFxyXG4gICA8dWw+XHJcbiAgICAgIDxsaSAqbmdGb3I9XCIjc2hvcHBpbmdMaXN0SXRlbSBvZiBzaG9wcGluZ0xpc3RJdGVtc1wiXHJcbiAgICAgIChjbGljayk9IFwib25JdGVtQ2xpY2tlZChzaG9wcGluZ0xpc3RJdGVtKVwiXHJcbiAgICAgID4ge3sgc2hvcHBpbmdMaXN0SXRlbS5uYW1lIH19IDwvbGk+XHJcbiAgIDwvdWw+XHJcbiAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIFsobmdNb2RlbCldID0gXCJzZWxlY3RlZEl0ZW0ubmFtZVwiPlxyXG4gICA8YnV0dG9uIChjbGljaykgPSBcIm9uRGVsZXRlSXRlbSgpXCI+RGVsZXRlIEl0ZW08L2J1dHRvbj4gPGJyPlxyXG4gICA8aW5wdXQgdHlwZT1cInRleHRcIiAjc2hvcHBpbmdMaXN0SXRlbT5cclxuICAgPGJ1dHRvbiAoY2xpY2spID0gXCJvbkFkZEl0ZW0oc2hvcHBpbmdMaXN0SXRlbSlcIj4gQWRkIEl0ZW0gPC9idXR0b24+XHJcbiAgICBgXHJcbn0pXHJcblxyXG5leHBvcnQgY2xhc3MgU2hvcHBpbmdMaXN0Q29tcG9uZW50IHtcclxuICAgIHB1YmxpYyBzaG9wcGluZ0xpc3RJdGVtcyA9IFtcclxuICAgICAgICB7bmFtZTogXCJNaWxrXCIgfSxcclxuICAgICAgICB7bmFtZTogJ1N1Z2FyJ30sIFxyXG4gICAgICAgIHtuYW1lOiAnQnJlYWQnfSxcclxuICAgIF0gICAgXHJcblxyXG4gICAgcHVibGljIHNlbGVjdGVkSXRlbSA9IHtuYW1lOlwiXCJ9O1xyXG5cclxuICAgIG9uSXRlbUNsaWNrZWQgKHNob3BwaW5nTGlzdEl0ZW1zKSB7XHJcbiAgICAgICB0aGlzLnNlbGVjdGVkSXRlbSA9IHNob3BwaW5nTGlzdEl0ZW1zO1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkFkZEl0ZW0oc2hvcHBpbmdMaXN0SXRlbSkge1xyXG4gICAgICAgIGlmICghKHNob3BwaW5nTGlzdEl0ZW0udmFsdWUgPT0gXCJcIikpXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgIHRoaXMuc2hvcHBpbmdMaXN0SXRlbXMucHVzaCAoe25hbWU6IHNob3BwaW5nTGlzdEl0ZW0udmFsdWV9KTtcclxuICAgICAgICAgICBzaG9wcGluZ0xpc3RJdGVtLnZhbHVlID0gXCJcIjtcclxuICAgICAgICB9O1xyXG4gICAgfTtcclxuXHJcbiAgICBvbkRlbGV0ZUl0ZW0oKSB7XHJcbiAgICAgICAgaWYgKCEodGhpcy5zaG9wcGluZ0xpc3RJdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKSA9PSAtMSApKSBcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgdGhpcy5zaG9wcGluZ0xpc3RJdGVtcy5zcGxpY2UodGhpcy5zaG9wcGluZ0xpc3RJdGVtcy5pbmRleE9mKHRoaXMuc2VsZWN0ZWRJdGVtKSwxKTtcclxuICAgICAgICAgICB0aGlzLnNlbGVjdGVkSXRlbS5uYW1lID0gXCJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl19
