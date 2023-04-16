import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LandingService {

  constructor(private http: HttpClient) { }

  sendEmail(email){
    return this.http.post(`${environment.API_URL}/email`, email)
  }


}
