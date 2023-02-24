import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgbModal, NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { map, Observable, OperatorFunction, Subject } from 'rxjs';
import { InvolvedService } from '../involved.service';

@Component({
  selector: 'app-volunteer',
  templateUrl: './volunteer.component.html',
  styleUrls: ['./volunteer.component.css']
})
export class VolunteerComponent implements OnInit {


  VolunteerForm!:FormGroup
  locations = ['Thane','Navi Mumbai','Byculla','Ghatkopar','Goregaon','Lower Parel','Kurla','Matunga','Virar','Vikhroli','Dombivali','Ambernath','Asangaon','Titwala','Kasara','Karjat']
  selectedLocation?:string
  constructor(private modalService:NgbModal,private involvedService:InvolvedService) { }

  ngOnInit(): void {
    this.createVolunteerForm()
  }

  createVolunteerForm(){
    this.VolunteerForm=new FormGroup({
      occupation:new FormControl(),
      loc:new FormControl(),
      days_available:new FormControl(),
      slug:new FormControl()
    }

    )
  }
 
  search:OperatorFunction<String,String[]>=($text:Observable<any>)=>{
    return $text.pipe(map((value)=>value === ''?[]:this.locations.filter((term)=>term.toLowerCase().indexOf(value.toLowerCase())> -1)))
  }
  selected($event:any):void{
    this.selectedLocation=$event.item
    console.log(this.selectedLocation)
  }
  submitVolunteer(modal:any){
    modal.close()
    const volunteerData= this.generateBody()
    this.involvedService.addVolunteer(volunteerData).subscribe(()=>{console.log("volunteer gya")})
    this.VolunteerForm.reset()

  }
 
  open(content: any): void {
    this.modalService
      .open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then((result) => {
        console.log('closed');
      });
  }

  generateBody():any{
    console.warn(this.VolunteerForm.value)
    const data={
      ...this.VolunteerForm.value,
      userID:1
    }
    return data
  }

}

