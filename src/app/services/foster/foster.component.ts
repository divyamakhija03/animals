import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adopt } from 'src/app/shared/interfaces/adopt.interface';
import { Category } from 'src/app/shared/interfaces/category.interface';
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
  categories!:Category[]
  selectedCategory?:string
  selectedID:any
  animals!:Adopt[]
  otherPetsYN?:number
  
  constructor(private adoptService:AdoptService,private modalService:NgbModal) { }

  ngOnInit(): void {
    this.createFosterForm()
    // this.fetchList()
    this.fetchFaqs()
    this.fetchCategory()


  }
  createFosterForm():void{
    this.FosterForm=new FormGroup({
      caretaker:new FormControl('',Validators.required),
      occupation: new FormControl(),
      fosterPeriod:new FormControl(),
      documents:new FormControl(),
      id: new FormControl(),
      slug:new FormControl('',Validators.required)
    })

  }
  openUpdated():void{
    this.setVisible=!this.setVisible
  }
 
  selectAnimal(animal:any,modal:any)
  {
      this.FosterForm.patchValue({
        id:animal.AnimalID
      })
      this.open(modal)
  }
  fetchFaqs():void{
    this.FaqsList=this.adoptService.fetchFosterData()
  }
  fetchCategory():void{
    this.adoptService.fetchCategories().subscribe((data:Category[])=>{
      this.categories=data
    })
  }
  selectCategory(category:Category):void{
    this.FosterForm.patchValue({
      category:category.categoryID
    })
    this.selectedCategory=category.CategoryName
    this.fetchAnimal(category)
  }
  fetchAnimal(category:any){
    this.selectedID=category.CategoryID
    this.adoptService.fetchAnimals(this.selectedID).subscribe((value:Adopt[])=>{
        this.FosterList=value
    })
  }
  submitFoster(modal:any){
    modal.close()
    const body = this.generateBody()
    this.adoptService.addFosterForm(body).subscribe(()=>console.log("foster ka data gya"))
    this.FosterForm.reset()
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
      caretaker: this.FosterForm.get('caretaker')?.value,
      occupation: this.FosterForm.get('occupation')?.value,
      number_of_days:this.FosterForm.get('fosterPeriod')?.value,
      documents:this.FosterForm.get('documents')?.value,
      animalID: this.FosterForm.get('id')?.value,
      userID: 1,
      slug: this.FosterForm.get('slug')?.value
    
    }
    return body;
  }

}

