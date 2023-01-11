import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fundraiser',
  templateUrl: './fundraiser.component.html',
  styleUrls: ['./fundraiser.component.css']
})
export class FundraiserComponent implements OnInit {
  FundraiserForm!:FormGroup
  constructor() { }

  ngOnInit(): void {
  }

}
