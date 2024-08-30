import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { UserStorageService } from '../../basic/services/storage/user-storage.service';

const BASIC_URL = 'http://localhost:8080/';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {

  constructor(private http: HttpClient) { }

  postAd(adDTO: any): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.post(BASIC_URL + `api/company/ad/${userId}`, adDTO, {
      headers: this.createAuthorizationHeader()
    })
  }

  getAllAdsByUserId(): Observable<any> {
    const userId = UserStorageService.getUserId();
    return this.http.get(BASIC_URL + `api/company/ads/${userId}`, {
      headers: this.createAuthorizationHeader()
    })
  }

  // getAdById(adId:any): Observable<any> {
  //   return this.http.get(BASIC_URL + `api/company/ad/${adId}`, {
  //     headers: this.createAuthorizationHeader()
  //   })
  // }


  getAdById(adId: any): Observable<any> {
    return this.http.get(BASIC_URL + `api/company/ad/${adId}`, {
      headers: this.createAuthorizationHeader()
    }).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          console.error('Access denied: You do not have permission to access this resource.');
        }
        return throwError(() => new Error('Failed to fetch ad details.'));
      })
    );
  }

  updateAd(adId: any, adDTO: any): Observable<any> {
    return this.http.put(BASIC_URL + `api/company/ad/${adId}`, adDTO, {
      headers: this.createAuthorizationHeader()
    })

  }
  deleteAd(adId: any): Observable<any> {
    return this.http.delete(BASIC_URL + `api/company/ad/${adId}`, {
      headers: this.createAuthorizationHeader()
    })

  }

  createAuthorizationHeader(): HttpHeaders {
    let authHeaders: HttpHeaders = new HttpHeaders();
    return authHeaders.set(
      'Authorization',
      'Bearer ' + UserStorageService.getToken()
    )
  }
}
