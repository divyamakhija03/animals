import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbCarouselModule, NgbModal, NgbSlide } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-donate',
  templateUrl: './donate.component.html',
  styleUrls: ['./donate.component.css']
})
export class DonateComponent implements OnInit {
  VolunteerForm!:FormGroup
  images = ["../assets/images/donate2.jpg"];

  constructor(private modalService:NgbModal) { }

  ngOnInit(): void {
    this.createVolunteerForm()
  }
  createVolunteerForm(){
    this.VolunteerForm=new FormGroup({
      occupation:new FormControl(),
      location:new FormControl(),
      daysAvailable:new FormControl()
    }

    )
  }
  open(content: any): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then((result) => {
        console.log('closed');
      });
  }

}
