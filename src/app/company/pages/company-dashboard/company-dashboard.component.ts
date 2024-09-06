import { Component } from '@angular/core';
import { CompanyService } from '../../services/company.service';
import { subscribe } from 'diagnostics_channel';

@Component({
  selector: 'app-company-dashboard',
  templateUrl: './company-dashboard.component.html',
  styleUrl: './company-dashboard.component.scss'
})
export class CompanyDashboardComponent {

  constructor(private companyService: CompanyService,){}

  ngOnInit(){
    this.getAllAdBookings();  
  }


  getAllAdBookings(){
    this.companyService.getAllAdBookings().subscribe(res => {
      console.log(res);
    })
  }
}
