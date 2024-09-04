import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss'] // Fixed styleUrl to styleUrls
})
export class AdDetailComponent {
  adId: any; // Declare adId here

  constructor(
    private clientService: ClientService,
    private activatedroutes: ActivatedRoute // Inject ActivatedRoute in the constructor
  ){}

  ngOnInit() {
    // Initialize adId inside ngOnInit where activatedroutes is properly initialized
    this.adId = this.activatedroutes.snapshot.params['adId']; 
    this.getAdDetailsByAdId();
  }

  getAdDetailsByAdId() {
    this.clientService.getAdDetailsByAdId(this.adId).subscribe(res => {
      console.log(res);
    });
  }
}
