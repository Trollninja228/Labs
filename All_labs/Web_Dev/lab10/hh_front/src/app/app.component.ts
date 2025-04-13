import { Component } from '@angular/core';
import { RouterOutlet,RouterModule } from '@angular/router';
import { CompanyListComponent } from './company-list/company-list.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CompanyListComponent,RouterModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hh_front';
}
