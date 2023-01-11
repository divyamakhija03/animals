import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {


  VolunteerForm!:FormGroup
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
