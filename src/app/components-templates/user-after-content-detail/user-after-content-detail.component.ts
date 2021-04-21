import { Component, OnInit, ContentChild, AfterContentInit, AfterContentChecked } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-after-content-detail',
  templateUrl: './user-after-content-detail.component.html',
  styleUrls: ['./user-after-content-detail.component.css']
})
export class UserAfterContentDetailComponent implements OnInit, AfterContentInit, AfterContentChecked {

  constructor() { }

    user = {
    name: 'John',
    age: 25
  };

  @ContentChild(EditUserComponent) editUserContent: EditUserComponent;

  ngOnInit() {
    // console.log(this.editUserContent.user.name);
  }

  ngAfterContentInit() {
    console.log("ngAfterContentInit");
    console.log(this.editUserContent.user.name);
    console.log(this.editUserContent.user.age);
  }

  ngAfterContentChecked() {
    console.log("ngAfterContentChecked");
    console.log(this.editUserContent.user.name);
    console.log(this.editUserContent.user.age);
  }

}
