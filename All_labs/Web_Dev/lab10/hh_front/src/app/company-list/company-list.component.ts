import { Component } from '@angular/core';
import { Company } from '../models/Interfaces';
import { DataService } from '../data.service';
import { Http2SecureServer } from 'http2';
import { CommonModule } from '@angular/common';
import { VacancyListComponent } from '../vacancy-list/vacancy-list.component';
import { RouterModule,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-company-list',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.css'
})
export class CompanyListComponent {
  arr:Company[]=[];
  constructor(private client:DataService, private route: ActivatedRoute){}
  getArrCom(){
    this.client.getCompanies().subscribe(a=>{
      this.arr=a;
    })
  }
}
