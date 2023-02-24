import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators} from '@angular/forms';
import { ToastService } from 'src/app/shared/toast.service';
import { AuthenticateService } from '../authenticate.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUser!:FormGroup
  validUser:boolean=false
  constructor(private toastService:ToastService,private authenticateService:AuthenticateService) { }

  ngOnInit(): void {
    this.createRegisterForm()
  }
  createRegisterForm():void{
    this.registerUser=new FormGroup({
      userName:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      contact:new FormControl('',Validators.required),
      password:new FormControl('',Validators.required),
      confirmPassword:new FormControl('',Validators.required)
    })
  }
  validUsername():void{
    const username=this.registerUser.get('userName')?.value;
    this.authenticateService.validateUser(username).subscribe((value:any)=>{
    this.validUser=value.validUsername
    if(this.registerUser.get("password")?.value != this.registerUser.get("confirmPassword")?.value){
       this.toastService.show({textOrTpl:'passwords do not match',classname:'bg-danger',delay:5000})
    }
      
      if(this.validUser){
        //insert the info
        const body = this.generateBody()
        this.authenticateService.registerUser(body).subscribe(()=>console.log("gya register ka data"))
      }
      else{
        //error
        this.toastService.show({textOrTpl:'username already exists',classname:'bg-danger',delay:5000})
      }
    })
    console.log(this.registerUser)
   

  }
  generateBody():any{
    const body={
      ...this.registerUser.value
    }
    return body
  }
  }


