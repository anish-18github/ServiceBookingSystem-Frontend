import { Component } from '@angular/core';
import { UserStorageService } from './basic/services/storage/user-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Odd-Jobs-app';
  isClientLoggedIn: boolean = false;
  isCompanyLoggedIn: boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    if (typeof window !== 'undefined') {
      this.isClientLoggedIn = UserStorageService.isClientLoggedIn();
      this.isCompanyLoggedIn = UserStorageService.isCompanyLoggedIn();

      this.router.events.subscribe(event => {
        this.isClientLoggedIn = UserStorageService.isClientLoggedIn();
        this.isCompanyLoggedIn = UserStorageService.isCompanyLoggedIn();
      });
    }
  }

  logout() {
    UserStorageService.signOut();
    this.router.navigateByUrl('login');
  }
}
