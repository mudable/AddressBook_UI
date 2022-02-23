import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AddressBookDTO } from 'src/app/Module/address-book-dto';
import { AddressBookService } from 'src/app/Service/address-book.service';


@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrls: ['./dash-board.component.scss']
})
export class DashBoardComponent implements OnInit {

  PersonData:any;
  constructor(private addressservice:AddressBookService,private router:Router) { }

  ngOnInit(): void {
    this.getAllData();
  }

 //get all data.
 getAllData() {
 this.addressservice.getAllData().subscribe(res=>{
  this.PersonData=res;
 })
}
deletePerson(id:number){
  this.addressservice.deletePerson(id).subscribe(res=>{
    alert("person data deleted successfully")
    this.getAllData();
  })
}
updatePerson(id:number)
{
  this.router.navigate(['/update',id])
}
}
