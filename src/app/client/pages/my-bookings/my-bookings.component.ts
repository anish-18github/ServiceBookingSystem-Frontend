import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrl: './my-bookings.component.scss'
})
export class MyBookingsComponent {

  bookedServices:any;

  constructor(private ClientService: ClientService){}

  ngOnInit(){
    this.getMyBookings();
  }

  getMyBookings(){
    this.ClientService.getMyBookings().subscribe( res => {
      this.bookedServices = res;
    })
  }
}
