import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Drug } from '../model/drug';
import { Drug2 } from '../model/drug2';

@Injectable({
  providedIn: 'root'
})
export class DrugService {
  private BASE_URL = 'http://localhost:8080/drugs'

  private message!: string 

  constructor(private http: HttpClient) { }

  setMessage(message: string) {
    this.message = message
  }

  getMessage() {
    return this.message
  }

  getDrug(id: number) {
    return this.http.get<Drug>(this.BASE_URL+'/'+id)
  }

  getDrugs() {
    return this.http.get<Drug[]>(this.BASE_URL)
  }
  searchDrugs(title: string) {
    return this.http.get<Drug[]>(this.BASE_URL +'/search/'+ title)
  }

  addDrug(drug: Drug2) {
    return this.http.post<Drug>(this.BASE_URL, drug)
  }

  updateDrug(id:number, drug: Drug2) {
    return this.http.put<any>(this.BASE_URL+'/'+id, drug)
  }

  deleteDrug(id:number) {
    return this.http.delete<any>(this.BASE_URL+'/'+id)
  }
}
