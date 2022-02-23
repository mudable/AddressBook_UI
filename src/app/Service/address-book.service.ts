
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { AddressBookDTO } from '../Module/address-book-dto';

@Injectable({
  providedIn: 'root'
})
export class AddressBookService {
 
  constructor(private httpClient: HttpClient ) { }
  addPerson(persondata:any){
    return this.httpClient.post<any>("http://localhost:8083/person/create",persondata)
}
getAllData(){
  return this.httpClient.get<any>("http://localhost:8083/person/get")
}
deletePerson(id:number){
  return this.httpClient.delete<any>("http://localhost:8083/person/delete/"+id)
}
updatePerson(personId:number, persondto: AddressBookDTO){
  return this.httpClient.put<any>("http://localhost:8083/person/update/"+personId, persondto);
}
getPerson(Id:any) : Observable<any> {
  return this.httpClient.get("http://localhost:8083/person/get/"+Id);
}
}


