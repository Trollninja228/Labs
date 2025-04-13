import { Component,Input,OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Vacancy } from '../models/Interfaces';
import { RouterModule,ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-vacancy-list',
  standalone: true,
  imports: [RouterModule,CommonModule],
  templateUrl: './vacancy-list.component.html',
  styleUrl: './vacancy-list.component.css'
})
export class VacancyListComponent implements OnInit{
  arr:Vacancy[]=[];
  public constructor(private client:DataService, private route: ActivatedRoute){}
  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.getArrVac(id);
  }


  getArrVac(id:number){
    this.client.getVacanciesByID(id).subscribe(a=>{
      this.arr=a;
    });
  }

}
