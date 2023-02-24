import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbCarouselModule, NgbModal, NgbSlide } from '@ng-bootstrap/ng-bootstrap';
import { InvolvedService } from '../involved.service';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  donateForm!:FormGroup
  images = ["../assets/images/donate2.jpg"];

  constructor(private modalService:NgbModal,private involvedService:InvolvedService) { }

  ngOnInit(): void {
    this.createDonateForm()
  }
  createDonateForm():void{
    this.donateForm=new FormGroup({
      Amount:new FormControl(),
      slug:new FormControl()
    })
  }

  submitDonate(modal:any){
    modal.close()
    const body= this.generateBody()
    this.involvedService.addDonate(body).subscribe(()=> console.log("donate gya"))
    this.donateForm.reset()
  }
 
  open(content: any): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then((result) => {
        console.log('closed');
      });
  }
  generateBody():any{
    const body={
      ...this.donateForm.value,
      UserID:1
    }
    return body
  }

}
