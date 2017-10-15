import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Hello" class="action-bar"></ActionBar>
    <StackLayout>
    <TextField hint="type something" KeyboardType="email" height="50px"></TextField>
    <Button text="helloword" height="50px" (tap)="log()"></Button>
    </StackLayout>
  `
  ,
  styles: [`
    StackLayout{
      padding:10px
    }
  `]
})
export class AppComponent {
  // Your TypeScript logic goes here
  log(){
    alert("It worked");
  }

}
