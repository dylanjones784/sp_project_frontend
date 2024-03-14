import { HttpClient } from '@angular/common/http';
import { Component, Injectable } from '@angular/core';
import { TestObj } from './models/TestObject';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'sp_project_guide';
  readonly test_url;

  res = "No res";


  constructor(private http: HttpClient){

    this.test_url = "https://localhost:7171";

    
  }


  simulateRequest(){
  this.getReq().subscribe(r =>{
      console.log(r);
      
    })
  }

  getReq(){
    return this.http.get<TestObj>(`${this.test_url}/GetTemp`).pipe(map(r=>{
      return {
        id: r.id,
        name: r.name,
        description: r.description
      }
    }));

  }
}
