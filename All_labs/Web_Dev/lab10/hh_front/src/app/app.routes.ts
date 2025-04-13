import { Routes } from '@angular/router';
import { VacancyListComponent } from './vacancy-list/vacancy-list.component';
import { CompanyListComponent } from './company-list/company-list.component';


export const routes: Routes = [
    {path:'company', component: CompanyListComponent},
    {path:'vacancy/:id', component: VacancyListComponent},
    {path:'',redirectTo:'/company',pathMatch:'full'}
];
