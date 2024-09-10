import { Component } from '@angular/core';
import { ClientService } from '../../services/client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzNotificationComponent, NzNotificationService } from 'ng-zorro-antd/notification';
import { userInfo } from 'os';
import { UserStorageService } from '../../../basic/services/storage/user-storage.service';

@Component({
  selector: 'app-ad-detail',
  templateUrl: './ad-detail.component.html',
  styleUrls: ['./ad-detail.component.scss'] // Fixed styleUrl to styleUrls
})
export class AdDetailComponent {

  adId: any; // Declare adId here
  avatarUrl: any;
  ad: any;

  reviews:any;

  validateForm!: FormGroup;

  constructor(
    private clientService: ClientService,
    private activatedroutes: ActivatedRoute,
    private notification: NzNotificationService,
    private router: Router,
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    // Initialize adId inside ngOnInit where activatedroutes is properly initialized
    this.validateForm = this.fb.group({
      bookDate: [null, [Validators.required]]
    })
    this.adId = this.activatedroutes.snapshot.params['adId'];
    this.getAdDetailsByAdId();
  }

  getAdDetailsByAdId() {
    this.clientService.getAdDetailsByAdId(this.adId).subscribe(res => {
      console.log(res);
      this.avatarUrl = 'data:image/jpeg;base64,' + res.adDTO.returnedImg;
      this.ad = res.adDTO;
      this.reviews = res.reviewDTOList;
    });
  }

  bookService() {
    const bookServiceDTO = {
      bookDate: this.validateForm.get(['bookDate']).value,
      adId: this.adId,
      userId: UserStorageService.getUserId()
    }

    this.clientService.bookService(bookServiceDTO).subscribe( res => {
      this.notification
      .success(
        'SUCCESS',
        'Request Posted Successully',
        { nzDuration: 5000 }
      );
      this.router.navigateByUrl('/client/bookings');
    })
  }
}
