import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Adopt } from 'src/app/shared/interfaces/adopt.interface';
import { Category } from 'src/app/shared/interfaces/category.interface';
import { Faqs } from 'src/app/shared/interfaces/faq.interface';
import { ToastService } from 'src/app/shared/toast.service';
import { AdoptService } from '../adopt.service';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.css']
})
export class AdoptComponent implements OnInit {

  AdoptList!:Adopt[]
  AdoptForm!:FormGroup
  FaqsList!:Faqs[]
  active=1
  setVisible:boolean=false
  categories!:Category[]
  animals!:Adopt[]
  selectedCategory?:string
  selectedID?:any
  otherPetsYN?:number
  modal:any

  constructor(private adoptService:AdoptService,
    private modalService:NgbModal,private toastService:ToastService) { }

  ngOnInit(): void {
    this.createAdoptForm()
    // this.fetchList()
    this.fetchFaqs()
    this.fetchCategory()
  }
  openUpdated():void{
    this.setVisible=!this.setVisible
  }
  // fetchList():void{
  //   this.AdoptList=this.adoptService.fetchList()

  // }
  fetchFaqs():void{
    this.FaqsList=this.adoptService.fetchQuestions()
  }
  fetchCategory():void{
    this.adoptService.fetchCategories().subscribe((data:Category[])=>{
      this.categories=data
    })
  }
  selectCategory(category:Category):void{
    this.AdoptForm.patchValue({
      category:category.categoryID
    })
    this.selectedCategory=category.CategoryName
    this.fetchAnimal(category)
  }
  fetchAnimal(category:any){
    this.selectedID=category.CategoryID
    this.adoptService.fetchAnimals(this.selectedID).subscribe((value:Adopt[])=>{
        this.animals=value
    })
  }
  
  createAdoptForm():void{
    this.AdoptForm=new FormGroup({
      caretaker:new FormControl('',Validators.required),
      occupation: new FormControl(),
      otherPetsYN: new FormControl('',Validators.required),
      reason:new FormControl(),
      slug:new FormControl(),
      id:new FormControl(),
    })
  }

  selectAnimal(animal:any,modal:any)
  {
      this.AdoptForm.patchValue({
        id:animal.AnimalID
      })
      this.open(modal)
  }
  submitAdopt(modal:any):void{
    modal.close()
    if(this.AdoptForm.get('otherPetsYN')?.value.toLowerCase() == 'yes'){
      this.otherPetsYN = 1
    }
    else{
      this.otherPetsYN=0
    }
    const body = this.generateBody()
    this.adoptService.addAdoptForm(body).subscribe(()=>console.log("adopt ka data gya"))
    this.AdoptForm.reset()

  }
  // validateSlug():void{
  //   const slug=this.addBlogForm.get('slug')?.value;
  //   this.mediumService.validSlug(slug).subscribe((value:any)=>{
  //     this.validSlug=value.validSlugEND
  //     if(this.validSlug){
  //       //insert the info
  //       const body = this.generateBody()
  //       this.adoptService.addAdoptForm(body).subscribe(()=>console.warn("done with adopt"))
  //     }
  //     else{
  //       //error
  //       this.toastService.show({textOrTpl:'invalid slug',classname:'bg-danger',delay:5000})
  //     }
  //   })

  // }
  open(content: any): void {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title', size: 'lg' })
      .result.then((result) => {
        console.log('closed');
      });
  }
  
  generateBody():any{
    const body={
      caretaker: this.AdoptForm.get('caretaker')?.value,
      occupation: this.AdoptForm.get('occupation')?.value,
      otherPetsYN: this.otherPetsYN,
      reason: this.AdoptForm.get('reason')?.value,
      animalID: this.AdoptForm.get('id')?.value,
      userID: 1,
      slug: this.AdoptForm.get('slug')?.value
    
    }
    return body;
  }


}
