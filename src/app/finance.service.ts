
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Injectable()
export class FinanceService {

  constructor(private http: HttpClient) { }

  adicionar(param: any) {    
    this.http.post(`http://localhost:9093/cliente`, param).subscribe(res => console.log('Ok'));
  }

}