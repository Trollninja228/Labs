import { Data } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { tap } from 'rxjs/operators';
import { OnInit } from '@angular/core';


export interface DataBase{
  flight_number:number,
  mission_name:string,
  launch_success: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ServService {

  private DB:any[]=[];
  private DB1:DataBase[]=[];

  private url="https://api.spacexdata.com/v3/launches"; 
  
  // private nextDBID=1;

  // constructor(private http:HttpClient) { 
  //   this.fetchDataBase

  // }
  // fetchDataBase():Observable<DataBase[]>{
  //   return this.http.get<DataBase[]>(this.url).pipe(
  //     tap((data:DataBase[])=>{
  //       this.DB=data;
  //       if(data.length>0){
  //         this.nextDBID = + 1;
  //       }else{
  //         this.nextDBID=1;
  //       }

  //     })
  //   );
  // }

  // getDataBase(){

  // }

  constructor(private httpc:HttpClient){
    
  }

  ngOnInit():void{
    this.httpc.get(this.url).subscribe((data:any)=>{
      this.DB = data;
      this.DB1 = data;
      
    })
  }
  getAll():Observable<any[]>{
    alert(this.DB);
    return this.httpc.get<any[]>(this.url);
  }
}
