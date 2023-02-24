import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { InvolvedService } from '../involved.service';

@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css']
})
export class FundraiserComponent implements OnInit {
  FundraiserForm!:FormGroup
  constructor(private involvedService:InvolvedService) { }

  ngOnInit(): void {
    this.createFundraiserForm()
  }
  createFundraiserForm():void{
    this.FundraiserForm=new FormGroup({
      Story:new FormControl(),
      fund:new FormControl(),
      slug:new FormControl()
    })
  }
  submitFundraiser(){
    const body=this.generateBody()
    this.involvedService.addFundraiser(body).subscribe(()=>console.warn("gya fundraiser"))
  }
  generateBody():any{
    const body={
      ...this.FundraiserForm.value,
      VolunteerID:1

    }
    return body
  }

}
