import { Component, OnInit, ViewChild, AfterViewInit, AfterViewChecked } from '@angular/core';
import { EditUserComponent } from '../edit-user/edit-user.component';

@Component({
  selector: 'app-user-after-view-detail',
  templateUrl: './user-after-view-detail.component.html',
  styleUrls: ['./user-after-view-detail.component.css']
})
export class UserAfterViewDetailComponent implements OnInit, AfterViewInit, AfterViewChecked {

  constructor() { }

  user = {
    name: 'John',
    age: 25
  };

  @ViewChild(EditUserComponent) editUserView: EditUserComponent;

  ngOnInit() {
    // console.log(this.editUserView.user.name);
  }

  ngAfterViewInit() {
    console.log("ngAfterViewInit Called...!");
    console.log(this.editUserView.user.name);
    console.log(this.editUserView.user.age);
  }

  ngAfterViewChecked() {
    console.log("ngAfterViewChecked Called...!");
    console.log(this.editUserView.user.name);
    console.log(this.editUserView.user.age);
  }



}
