import { Component } from "@angular/core";

@Component({
  selector: "my-app",
  template: `
    <ActionBar title="Hello" class="action-bar"></ActionBar>
    <StackLayout>
    <TextField hint="type something" KeyboardType="email" height="50px" [(ngModel)]="email"></TextField>
    <Button text="helloword" height="50px" (tap)="log()"></Button>
    <Label text="{{  email }}"></Label>
    </StackLayout>
  `
  ,
  styles: [`
    StackLayout{
      padding:10px;
    }
  `]
})
export class AppComponent {
  // Your TypeScript logic goes here
  email:any
  log(){
    alert(this.email);
  }

}
