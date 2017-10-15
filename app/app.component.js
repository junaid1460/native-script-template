"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var AppComponent = (function () {
    function AppComponent() {
    }
    // Your TypeScript logic goes here
    AppComponent.prototype.log = function () {
        alert("It worked");
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: "my-app",
            template: "\n    <ActionBar title=\"Hello\" class=\"action-bar\"></ActionBar>\n    <StackLayout>\n    <TextField hint=\"type something\" KeyboardType=\"email\" height=\"50px\"></TextField>\n    <Button text=\"helloword\" height=\"50px\" (tap)=\"log()\"></Button>\n    </StackLayout>\n  ",
            styles: ["\n    StackLayout{\n      padding:10px\n    }\n  "]
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFrQjFDO0lBQUE7SUFNQSxDQUFDO0lBTEMsa0NBQWtDO0lBQ2xDLDBCQUFHLEdBQUg7UUFDRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUM7SUFDckIsQ0FBQztJQUpVLFlBQVk7UUFoQnhCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsUUFBUTtZQUNsQixRQUFRLEVBQUUscVJBTVQ7WUFFRCxNQUFNLEVBQUUsQ0FBQyxtREFJUixDQUFDO1NBQ0gsQ0FBQztPQUNXLFlBQVksQ0FNeEI7SUFBRCxtQkFBQztDQUFBLEFBTkQsSUFNQztBQU5ZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm15LWFwcFwiLFxuICB0ZW1wbGF0ZTogYFxuICAgIDxBY3Rpb25CYXIgdGl0bGU9XCJIZWxsb1wiIGNsYXNzPVwiYWN0aW9uLWJhclwiPjwvQWN0aW9uQmFyPlxuICAgIDxTdGFja0xheW91dD5cbiAgICA8VGV4dEZpZWxkIGhpbnQ9XCJ0eXBlIHNvbWV0aGluZ1wiIEtleWJvYXJkVHlwZT1cImVtYWlsXCIgaGVpZ2h0PVwiNTBweFwiPjwvVGV4dEZpZWxkPlxuICAgIDxCdXR0b24gdGV4dD1cImhlbGxvd29yZFwiIGhlaWdodD1cIjUwcHhcIiAodGFwKT1cImxvZygpXCI+PC9CdXR0b24+XG4gICAgPC9TdGFja0xheW91dD5cbiAgYFxuICAsXG4gIHN0eWxlczogW2BcbiAgICBTdGFja0xheW91dHtcbiAgICAgIHBhZGRpbmc6MTBweFxuICAgIH1cbiAgYF1cbn0pXG5leHBvcnQgY2xhc3MgQXBwQ29tcG9uZW50IHtcbiAgLy8gWW91ciBUeXBlU2NyaXB0IGxvZ2ljIGdvZXMgaGVyZVxuICBsb2coKXtcbiAgICBhbGVydChcIkl0IHdvcmtlZFwiKTtcbiAgfVxuXG59XG4iXX0=