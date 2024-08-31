import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';

@Component({
  selector: 'app-client-dashboard',
  templateUrl: './client-dashboard.component.html',
  styleUrl: './client-dashboard.component.scss'
})
export class ClientDashboardComponent {

  ads: any = [];

  constructor(private clientService: ClientService,){}

  getAllAds(){
    this.clientService.getAllAds().subscribe(res => {
      this.ads = res;
    })
  }

  ngOnInit(){
    this.getAllAds();
  }

  updateImg(img) {
    return 'data:image/jpeg;base64,' + img;
  }
}
