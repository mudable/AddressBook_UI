import { Component, OnInit } from '@angular/core';
import { map, Observable } from 'rxjs';
import { FormBuilder, FormGroup } from '@angular/forms';

import { AddressBookDTO } from 'src/app/Module/address-book-dto';
import { AddressBookService } from 'src/app/Service/address-book.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-address-form',
  templateUrl: './add-address-form.component.html',
  styleUrls: ['./add-address-form.component.scss']
})
export class AddAddressFormComponent implements OnInit {
  personobject : AddressBookDTO=new AddressBookDTO
  personForm!:FormGroup
 id:any;
 showUpdate:boolean=false;
  constructor(private formBuilder:FormBuilder,private addressservice:AddressBookService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
   
    this.personForm =this.formBuilder.group({
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
  addPersonData(){
    this.addressservice.addPerson(this.personForm.value).subscribe(res=>{
      console.log(res);

    })
  }
  getPerson(id : any){
    this.addressservice.getPerson(id).subscribe((person:any) => this.updatePerson(person)
    );
  }
  updatePerson(person:any){
   this.showUpdate=true;
    this.personForm.patchValue({
      fname : person.data.fname,
      lname : person.data.lname,
      gender : person.data.gender,
      address: person.data.address,
      city : person.data.city,
      state : person.data.state,
      country:person.data.country,
      phoneNumber:person.data.phoneNumber,
    });

  }
  updateData(){
    this.addressservice.updatePerson(this.id,this.personobject).subscribe(res=>{
      console.log(res);
      alert("data updated successfully")
      
    })
  }
 }
  
  
  

