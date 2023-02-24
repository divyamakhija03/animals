import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApplicationConstants } from '../shared/constants/ApplicationConstant';
import { Adopt } from '../shared/interfaces/adopt.interface';
import { Faqs } from '../shared/interfaces/faq.interface';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AdoptService {

  constructor(private httpClient:HttpClient) { }
  // adoptListData : Adopt[] = [{"Name":"Jennilee","Breed":"Labrador","Behaviour":"loving"},
  // {"Name":"Lyle","Breed":"Pug","Behaviour":"cute"},
  // {"Name":"Helaina","Breed":"Labrador","Behaviour":"annoying"},
  // {"Name":"Rollins","Breed":"Labrador","Behaviour":"loving"},
  // {"Name":"Borden","Breed":"german Shepheard","Behaviour":"cute"},
  // {"Name":"Hi","Breed":"Labrador","Behaviour":"loving"},
  // {"Name":"Abbott","Breed":"Pug","Behaviour":"loving"},
  // {"Name":"Angela","Breed":"Pug","Behaviour":"annoying"},
  // {"Name":"Donny","Breed":"german Shepheard","Behaviour":"cute"},
  // {"Name":"Ardene","Breed":"german Shepheard","Behaviour":"cute"}]

  // fetchList():Adopt[]{
  //   return this.adoptListData
  // }
  FAQsData : Faqs[] = [{
    "id":1,
    "question": "Why to Adopt?",
    "answer": "Adopting from a shelter would be a great choice for anyone especially If you are a first-time pet parent or have little experience with animals This is because shelters will guide you through the process and will also provide you with all the information you need making it easier for you to take care of your adopted pet"
  }, {
    "id":2,
    "question": "What is my Responsibility as I Adopt?",
    "answer": "When you have a dog you must be prepared to be held accountable for their behavior  This means if your dog poops you are expected to pick it up.  If your dog misbehaves or disrupts someone else quality of life you must be prepared to take responsibility and resolve the situation This could mean investing in a dog trainer to curb your pets barking habit or  fortifying your backyard fence so your dog doesnt escape In extreme instances it could mean paying for another pet owners medical expenses because your dog bit theirs"
  }, {
    "id":3,
  "question": "Why to Adopt?",
    "answer": "Adopting from a shelter would be a great choice for anyone especially If you are a first-time pet parent or have little experience with animals This is because shelters will guide you through the process and will also provide you with all the information you need making it easier for you to take care of your adopted pet"
  }, {
    "id":4,
    "question": "What is my Responsibility as I Adopt?",
    "answer": "When you have a dog you must be prepared to be held accountable for their behavior  This means if your dog poops you are expected to pick it up.  If your dog misbehaves or disrupts someone else quality of life you must be prepared to take responsibility and resolve the situation This could mean investing in a dog trainer to curb your pets barking habit or  fortifying your backyard fence so your dog doesnt escape In extreme instances it could mean paying for another pet owners medical expenses because your dog bit theirs"
  }, {
    "id":5,
    "question": "Why to Adopt?",
    "answer": "Adopting from a shelter would be a great choice for anyone especially If you are a first-time pet parent or have little experience with animals This is because shelters will guide you through the process and will also provide you with all the information you need making it easier for you to take care of your adopted pet"
  }, {
    "id":6,
    "question": "What is my Responsibility as I Adopt?",
    "answer": "When you have a dog you must be prepared to be held accountable for their behavior  This means if your dog poops you are expected to pick it up.  If your dog misbehaves or disrupts someone else quality of life you must be prepared to take responsibility and resolve the situation This could mean investing in a dog trainer to curb your pets barking habit or  fortifying your backyard fence so your dog doesnt escape In extreme instances it could mean paying for another pet owners medical expenses because your dog bit theirs"
  }, {
    "id":7,
    "question": "Why to Adopt?",
    "answer": "Adopting from a shelter would be a great choice for anyone especially If you are a first-time pet parent or have little experience with animals This is because shelters will guide you through the process and will also provide you with all the information you need making it easier for you to take care of your adopted pet"
  }, {
    "id":8,
    "question": "What is my Responsibility as I Adopt?",
    "answer": "When you have a dog you must be prepared to be held accountable for their behavior  This means if your dog poops you are expected to pick it up.  If your dog misbehaves or disrupts someone else quality of life you must be prepared to take responsibility and resolve the situation This could mean investing in a dog trainer to curb your pets barking habit or  fortifying your backyard fence so your dog doesnt escape In extreme instances it could mean paying for another pet owners medical expenses because your dog bit theirs"
  }, {
    "id":9,
    "question": "Why to Adopt?",
    "answer": "Adopting from a shelter would be a great choice for anyone especially If you are a first-time pet parent or have little experience with animals This is because shelters will guide you through the process and will also provide you with all the information you need making it easier for you to take care of your adopted pet"
  }, {
    "id":10,
    "question": "What is my Responsibility as I Adopt?",
    "answer": "When you have a dog you must be prepared to be held accountable for their behavior  This means if your dog poops you are expected to pick it up.  If your dog misbehaves or disrupts someone else quality of life you must be prepared to take responsibility and resolve the situation This could mean investing in a dog trainer to curb your pets barking habit or  fortifying your backyard fence so your dog doesnt escape In extreme instances it could mean paying for another pet owners medical expenses because your dog bit theirs"
  }]

  fetchQuestions():Faqs[]{
    return this.FAQsData
  }

  FosterData : Faqs[] = [{
    "id": 1,
    "question": "​ What is Fostering?",
    "answer": "Fostering is the act of hosting an adoptable animal in your home  temporarily  Through medical care  basic training  pictures  video  promotion and the stories you relay  as well as your fosters attendance at meet & greet or other events  your foster animal will get the exposure he or she needs to be considered by prospective adoptive families"
  }, {
    "id": 2,
    "question": "Who should Foster?",
    "answer": "To be a successful foster parent you will need a compassionate nature the cooperation of your family or roommates flexibility and some knowledge of animal behavior The length of time a foster pet may stay in your home varies with the animals situation You will most likely be asked to fill out a foster application and you may be asked to attend a training session Shelter or rescue group staffers may conduct a home visit prior to your receiving your first foster pet"
  }, {
    "id": 3,
    "question": "​ What is Fostering?",
    "answer": "Fostering is the act of hosting an adoptable animal in your home  temporarily  Through medical care  basic training  pictures  video  promotion and the stories you relay  as well as your fosters attendance at meet & greet or other events  your foster animal will get the exposure he or she needs to be considered by prospective adoptive families"
  }, {
    "id": 4,
    "question": "Who should Foster?",
    "answer": "To be a successful foster parent you will need a compassionate nature the cooperation of your family or roommates flexibility and some knowledge of animal behavior The length of time a foster pet may stay in your home varies with the animals situation You will most likely be asked to fill out a foster application and you may be asked to attend a training session Shelter or rescue group staffers may conduct a home visit prior to your receiving your first foster pet"
  }, {
    "id": 5,
    "question": "​ What is Fostering?",
    "answer": "Fostering is the act of hosting an adoptable animal in your home  temporarily  Through medical care  basic training  pictures  video  promotion and the stories you relay  as well as your fosters attendance at meet & greet or other events  your foster animal will get the exposure he or she needs to be considered by prospective adoptive families"
  }, {
    "id": 6,
    "question": "Who should Foster?",
    "answer": "To be a successful foster parent you will need a compassionate nature the cooperation of your family or roommates flexibility and some knowledge of animal behavior The length of time a foster pet may stay in your home varies with the animals situation You will most likely be asked to fill out a foster application and you may be asked to attend a training session Shelter or rescue group staffers may conduct a home visit prior to your receiving your first foster pet"
  }, {
    "id": 7,
    "question": "​ What is Fostering?",
    "answer": "Fostering is the act of hosting an adoptable animal in your home  temporarily  Through medical care  basic training  pictures  video  promotion and the stories you relay  as well as your fosters attendance at meet & greet or other events  your foster animal will get the exposure he or she needs to be considered by prospective adoptive families"
  }, {
    "id": 8,
    "question": "Who should Foster?",
    "answer": "To be a successful foster parent you will need a compassionate nature the cooperation of your family or roommates flexibility and some knowledge of animal behavior The length of time a foster pet may stay in your home varies with the animals situation You will most likely be asked to fill out a foster application and you may be asked to attend a training session Shelter or rescue group staffers may conduct a home visit prior to your receiving your first foster pet"
  }, {
    "id": 9,
    "question": "​ What is Fostering?",
    "answer": "Fostering is the act of hosting an adoptable animal in your home  temporarily  Through medical care  basic training  pictures  video  promotion and the stories you relay  as well as your fosters attendance at meet & greet or other events  your foster animal will get the exposure he or she needs to be considered by prospective adoptive families"
  }, {
    "id": 10,
    "question": "Who should Foster?",
    "answer": "To be a successful foster parent you will need a compassionate nature the cooperation of your family or roommates flexibility and some knowledge of animal behavior The length of time a foster pet may stay in your home varies with the animals situation You will most likely be asked to fill out a foster application and you may be asked to attend a training session Shelter or rescue group staffers may conduct a home visit prior to your receiving your first foster pet"
  }]

  fetchFosterData():Faqs[]{
    return this.FosterData
  }

  fetchCategories():Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/getCategory`)
  }
  fetchAnimals(categoryID:number):Observable<any>{
    return this.httpClient.get(`${ApplicationConstants.APIURL}/fetchAnimal/${categoryID}`)
  }
  addAdoptForm(adoptData:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/addAdoptForm`,adoptData)
  }
  addFosterForm(fosterData:any):Observable<any>{
    return this.httpClient.post(`${ApplicationConstants.APIURL}/addFosterForm`,fosterData)
  }

  
}
