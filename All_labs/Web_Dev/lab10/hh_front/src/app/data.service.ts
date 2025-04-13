import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from './models/Interfaces';
import { Vacancy } from './models/Interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  BASE_URL='http://127.0.0.1:8000/api/';


  constructor(private client:HttpClient) { }

  getCompanies():Observable<Company[]>{
    return this.client.get<Company[]>(`${this.BASE_URL}getCompanies/`);
  }
  getVacanciesByID(companyId: number): Observable<Vacancy[]> {
    return this.client.get<Vacancy[]>(`${this.BASE_URL}Companies/${companyId}/Vacancies/`);
  }
}
