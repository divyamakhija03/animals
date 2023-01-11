import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adopt } from 'src/app/shared/interfaces/adopt.interface';
import { Faqs } from 'src/app/shared/interfaces/faq.interface';
import { AdoptService } from '../adopt.service';

@Component({
  selector: 'app-foster',
  templateUrl: './foster.component.html',
  styleUrls: ['./foster.component.css']
})
export class FosterComponent implements OnInit {

  FosterList!:Adopt[]
  FosterForm!:FormGroup
  FaqsList!:Faqs[]
  active=1
  setVisible:boolean=false
  
  constructor(private adoptService:AdoptService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.createFosterForm()
    this.fetchList()
    this.fetchFaqs()

  }
  openUpdated():void{
    this.setVisible=!this.setVisible
  }
  fetchList():void{
    this.FosterList=this.adoptService.fetchList()

  }
  fetchFaqs():void{
    this.FaqsList=this.adoptService.fetchFosterData()
  }
  createFosterForm():void{
    this.FosterForm=new FormGroup({
      caretaker:new FormControl('',Validators.required),
      occupation: new FormControl(),
      otherPets: new FormControl('',Validators.required),
      reason:new FormControl(),
      fosterPeriod:new FormControl(),
      documents:new FormControl()
    })

  }

  open(content: any): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then((result) => {
        console.log('closed');
      });
  }

}
