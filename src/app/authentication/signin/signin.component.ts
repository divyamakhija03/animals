import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor() { }
  loginForm!:FormGroup

  ngOnInit(): void {
    this.authenticateUser()
  }
  authenticateUser(){
    this.loginForm=new FormGroup({
      userName:new FormControl(),
      password:new FormControl()
    })
  }
  authenticate():void{
    
  }

}
