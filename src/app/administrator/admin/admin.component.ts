import { Component, OnInit } from '@angular/core';
import { adopt, foster, volunteer } from 'src/app/shared/interfaces/admin.interface';
import { AdminServiceService } from '../admin-service.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  volunteerData!:volunteer[];
  FosterData!:foster[];
  adoptData!:adopt[];
  active=1
  setVisible:boolean=false
  constructor(private adminSerice:AdminServiceService) { }

  ngOnInit(): void {
    this.FetchVolunteers(),
    this.FetchFosters(),
    this.FetchAdopt()
  }
  FetchFosters() {
    this.adminSerice.fetchVolunteers().subscribe((value:volunteer[])=>{
      this.volunteerData=value
    })
  }
  openUpdated():void{
    this.setVisible=!this.setVisible
  }
   
  FetchVolunteers():void{
    this.adminSerice.fetchFoster().subscribe((value:foster[])=>{
      this.FosterData=value
    })
  }
  FetchAdopt():void{
    this.adminSerice.fetchAdopt().subscribe((value:adopt[])=>{
     this.adoptData=value
    })
  }

}
