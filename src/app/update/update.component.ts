import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AddressBookDTO } from '../Module/address-book-dto';
import { AddressBookService } from '../Service/address-book.service';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.scss']
})
export class UpdateComponent implements OnInit {
  personobject : AddressBookDTO=new AddressBookDTO
  personsForm!:FormGroup
 id:any;

  constructor(private formBuilder:FormBuilder,private addressservice:AddressBookService, private router:Router,private route:ActivatedRoute) { }
  

  ngOnInit(): void {
    this.personsForm =this.formBuilder.group({
      fname: [''],
      lname: [''],
     gender:[''],
    phoneNumber:[''],
    emailAddress: [''],
    city: [''],
    state:[''],
    country:[''],
    address:[''],
    profilePic:[''],
    })

    this.route.paramMap.subscribe(params=>{
      this.id = params.get('id');
      if(this.id){
        this.getPerson(this.id);
      }
    
    })
    
  }
  getPerson(id : any){
    this.addressservice.getPerson(id).subscribe((person:any) => this.updatePerson(person)
    );
  }
  updatePerson(person:any){
  
    this.personsForm.patchValue({
      fname : person.data.fname,
      lname : person.data.lname,
      gender : person.data.gender,
      address: person.data.address,
      city : person.data.city,
      state : person.data.state,
      country:person.data.country,
      phoneNumber:person.data.phoneNumber,
      emailAddress:person.data.emailAddress,

    });

  }
  updateData(){
this.addressservice.updatePerson(this.id,this.personobject).subscribe(res=>{
  
     console.log(res)
     alert("data updated successfull");
   })
  }
 }
  
  



