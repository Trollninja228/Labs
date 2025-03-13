import { Component } from '@angular/core';
import { ServService } from '../serv.service';
import { CommonModule } from '@angular/common';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-comp',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css'
})
export class NewCompComponent {
  public DB:any[]=[];
  private url="https://api.spacexdata.com/v3/launches"; 
  constructor(private http:HttpClient){

  }
  ngOnInit():void{
    this.http.get(this.url).subscribe((data:any)=>{
      this.DB=data;
    })
  }
}
